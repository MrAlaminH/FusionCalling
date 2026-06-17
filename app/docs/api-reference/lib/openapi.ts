// Generates an OpenAPI 3.0.3 document from the single source of truth (endpoints.ts).
// Consumed by the /api/docs/openapi.json route and the scripts/generate-openapi.ts dump.

import {
  ENDPOINTS,
  BASE_URL,
  type Endpoint,
  type Param,
  type ApiSection,
} from "../data/endpoints";

type Obj = Record<string, unknown>;

function paramKind(p: Param): NonNullable<Param["kind"]> {
  return p.kind ?? "string";
}

function schemaFor(p: Param): Obj {
  const schema: Obj = { type: "string", description: p.description };
  switch (paramKind(p)) {
    case "boolean":
      schema.type = "boolean";
      break;
    case "number":
      schema.type = "number";
      break;
    case "array":
      schema.type = "array";
      schema.items = { type: "string" };
      break;
    case "object":
      schema.type = "object";
      break;
    default:
      schema.type = "string";
  }
  if (p.enum) schema.enum = p.enum;
  if (p.example) schema.example = p.example;
  return schema;
}

function pathParam(p: Param): Obj {
  return {
    name: p.name,
    in: "path",
    required: true,
    description: p.description,
    schema: { type: "string", ...(p.example ? { example: p.example } : {}) },
  };
}

function queryParam(p: Param): Obj {
  return {
    name: p.name,
    in: "query",
    required: p.required,
    description: p.description,
    schema: schemaFor(p),
  };
}

function bodySchema(params?: Param[]): Obj | undefined {
  if (!params || params.length === 0) return undefined;
  const properties: Obj = {};
  const required: string[] = [];
  for (const p of params) {
    properties[p.name] = schemaFor(p);
    if (p.required) required.push(p.name);
  }
  const schema: Obj = { type: "object", properties };
  if (required.length > 0) schema.required = required;
  return schema;
}

function bodySchemaOf(op: Obj): Obj | undefined {
  const req = op.requestBody as Obj | undefined;
  const content = req?.content as Obj | undefined;
  const json = content?.["application/json"] as Obj | undefined;
  return json?.schema as Obj | undefined;
}

function tryParseJson(input: string): unknown {
  try {
    return JSON.parse(input);
  } catch {
    return undefined;
  }
}

function tagName(section: ApiSection): string {
  return section === "calendar" ? "Calendar" : "Leads";
}

function buildOperation(ep: Endpoint): Obj {
  const op: Obj = {
    tags: [tagName(ep.section)],
    summary: ep.summary,
    operationId: ep.id,
  };
  if (ep.description) op.description = ep.description;

  const parameters: Obj[] = [];
  (ep.pathParams ?? []).forEach((p: Param) => parameters.push(pathParam(p)));
  (ep.queryParams ?? []).forEach((p: Param) => parameters.push(queryParam(p)));
  if (parameters.length > 0) op.parameters = parameters;

  const body = bodySchema(ep.bodyParams);
  if (body) {
    op.requestBody = {
      required: (ep.bodyParams ?? []).some((p) => p.required),
      content: { "application/json": { schema: body } },
    };
  }

  const responses: Obj = {};
  const primaryExample = tryParseJson(ep.responseExample);
  for (const sc of ep.statusCodes) {
    const response: Obj = { description: sc.description };
    if (sc.code === ep.responseStatus && primaryExample !== undefined) {
      response.content = {
        "application/json": { example: primaryExample },
      };
    }
    responses[String(sc.code)] = response;
  }
  op.responses = responses;

  return op;
}

function dedupeParams(params: Obj[]): Obj[] {
  const seen = new Set<string>();
  const out: Obj[] = [];
  for (const original of params) {
    const key = `${original.in}:${original.name}`;
    if (seen.has(key)) continue;
    seen.add(key);
    // A param required by one operation but optional by another becomes optional when merged.
    out.push(original.required === true ? { ...original, required: false } : original);
  }
  return out;
}

function mergeOperations(a: Obj, b: Obj): Obj {
  const merged: Obj = { ...a, ...b };

  const pa = (a.parameters as Obj[] | undefined) ?? [];
  const pb = (b.parameters as Obj[] | undefined) ?? [];
  const params = dedupeParams([...pa, ...pb]);
  if (params.length > 0) merged.parameters = params;

  // Union responses; prefer the entry that carries a content example.
  const ra = (a.responses as Obj) ?? {};
  const rb = (b.responses as Obj) ?? {};
  const responses: Obj = {};
  const codes = Array.from(new Set([...Object.keys(ra), ...Object.keys(rb)]));
  const hasContent = (x: Obj | undefined) => !!x && !!x.content;
  for (const code of codes) {
    const ea = ra[code] as Obj | undefined;
    const eb = rb[code] as Obj | undefined;
    responses[code] = hasContent(ea) ? ea : hasContent(eb) ? eb : ea ?? eb;
  }
  merged.responses = responses;

  // Request body: combine differing schemas via oneOf.
  const bodyA = bodySchemaOf(a);
  const bodyB = bodySchemaOf(b);
  if (bodyA && bodyB) {
    merged.requestBody = {
      required: true,
      content: { "application/json": { schema: { oneOf: [bodyA, bodyB] } } },
    };
  } else {
    merged.requestBody = (a.requestBody as Obj | undefined) ?? (b.requestBody as Obj | undefined);
  }

  merged.summary = `${a.summary} / ${b.summary}`;
  merged.operationId = `${a.operationId}__merged`;
  return merged;
}

function buildPaths(): Obj {
  const paths: Obj = {};
  for (const ep of ENDPOINTS) {
    const pathItem = (paths[ep.path] ?? (paths[ep.path] = {})) as Obj;
    const methodKey = ep.method.toLowerCase();
    const built = buildOperation(ep);
    const existing = pathItem[methodKey] as Obj | undefined;
    pathItem[methodKey] = existing ? mergeOperations(existing, built) : built;
  }
  return paths;
}

export function generateOpenAPI(): Obj {
  return {
    openapi: "3.0.3",
    info: {
      title: "Fusion Calling API",
      version: "1.2.0",
      description:
        "Programmatic access to Fusion Calling — manage calendar events and leads with API-key authentication.",
      contact: { email: "hello@fusioncalling.com" },
      license: { name: "Proprietary" },
    },
    externalDocs: {
      description: "Full documentation",
      url: "https://app.fusioncalling.com/docs/api-reference",
    },
    servers: [{ url: BASE_URL, description: "Production" }],
    tags: [
      { name: "Calendar", description: "Manage calendar events (CRUD, Google Meet sync)." },
      { name: "Leads", description: "Create, read, and update leads." },
    ],
    paths: buildPaths(),
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "API key" },
      },
    },
    security: [{ bearerAuth: [] }],
  };
}

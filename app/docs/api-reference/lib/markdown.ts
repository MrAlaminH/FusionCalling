// Generates a clean Markdown export of the API Reference from endpoints.ts.
// Used by the "Copy as Markdown" / "Ask ChatGPT" share menu.

import {
  ENDPOINTS,
  BASE_URL,
  type Endpoint,
  type Param,
  type ApiSection,
} from "../data/endpoints";
import { buildRequest, toCurl } from "./codegen";

const VERSION: Record<ApiSection, string> = { calendar: "v1.0", leads: "v1.2" };
const RATE_LIMIT: Record<ApiSection, string> = {
  calendar: "12 requests/minute",
  leads: "100 requests/minute",
};

function seed(params?: Param[]): Record<string, string> {
  const o: Record<string, string> = {};
  params?.forEach((p) => {
    if (p.default !== undefined) o[p.name] = p.default;
  });
  return o;
}

function paramTable(params: Param[] | undefined, title: string): string {
  if (!params || params.length === 0) return "";
  const rows = params
    .map(
      (p) =>
        `| \`${p.name}\` | ${p.type} | ${p.required ? "Yes" : "No"} | ${p.description.replace(/\|/g, "\\|")} |`,
    )
    .join("\n");
  return `\n**${title}**\n\n| Name | Type | Required | Description |\n| --- | --- | --- | --- |\n${rows}\n`;
}

function endpointSection(ep: Endpoint): string {
  let md = `\n### ${ep.method} \`${ep.path}\`\n\n${ep.summary}\n`;
  if (ep.description) md += `\n${ep.description}\n`;
  md += paramTable(ep.pathParams, "Path Parameters");
  md += paramTable(ep.queryParams, "Query Parameters");
  md += paramTable(ep.bodyParams, "Request Body");

  const req = buildRequest({
    method: ep.method,
    baseUrl: BASE_URL,
    path: ep.path,
    apiKey: "YOUR_API_KEY",
    pathParams: ep.pathParams,
    queryParams: ep.queryParams,
    bodyParams: ep.bodyParams,
    pathValues: seed(ep.pathParams),
    queryValues: seed(ep.queryParams),
    bodyValues: seed(ep.bodyParams),
  });
  md += `\n**Example Request**\n\n\`\`\`bash\n${toCurl(req)}\n\`\`\`\n`;
  md += `\n**Example Response** (${ep.responseStatus})\n\n\`\`\`json\n${ep.responseExample}\n\`\`\`\n`;

  if (ep.statusCodes.length > 0) {
    md += `\n**Status Codes**\n\n${ep.statusCodes
      .map((s) => `- \`${s.code}\` ${s.description}`)
      .join("\n")}\n`;
  }
  return md;
}

function apiSection(section: ApiSection, title: string): string {
  const eps = ENDPOINTS.filter((e) => e.section === section);
  let md = `\n## ${title}\n\nVersion: ${VERSION[section]} · Rate limit: ${RATE_LIMIT[section]} · Auth: Bearer API key\n`;
  eps.forEach((ep) => {
    md += endpointSection(ep);
  });
  return md;
}

export function generateMarkdown(): string {
  let md = `# Fusion Calling API Reference\n\nProgrammatic access to Fusion Calling — manage calendar events and leads with API-key authentication.\n\n- **Base URL:** ${BASE_URL}\n- **Authentication:** \`Authorization: Bearer YOUR_API_KEY\` (send as a Bearer token on every request)\n`;
  md += apiSection("calendar", "Calendar API");
  md += apiSection("leads", "Leads API");
  md += `\n## Errors & Rate Limits\n\n| Code | Meaning | What to do |\n| --- | --- | --- |\n| \`400\` | Bad Request | Check the request format and required fields |\n| \`401\` | Unauthorized | Verify your API key |\n| \`404\` | Not Found | Verify the resource exists |\n| \`409\` | Conflict | Resource exists — use PATCH to update |\n| \`429\` | Too Many Requests | Retry with exponential backoff |\n| \`500\` | Server Error | Retry; contact support if it persists |\n\nCalendar API: 12 requests/minute · Leads API: 100 requests/minute.\n`;
  md += `\n---\n\nOpenAPI spec: ${BASE_URL}/api/docs/openapi.json\n`;
  return md;
}

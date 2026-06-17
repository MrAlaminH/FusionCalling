"use client";

import { useState } from "react";
import CodeBlock from "@/components/docs/code-block";

interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example?: string;
}

interface StatusCode {
  code: number;
  description: string;
}

interface ErrorExample {
  code: number;
  condition: string;
  example: string;
  solution: string;
}

interface ExampleLevel {
  quick: string;
  basic: string;
  complete: string;
  integration?: string;
}

interface EnhancedEndpointCardProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  description: string;
  authentication?: string;
  priority?: "essential" | "frequent" | "advanced";
  useCases?: string[];
  relatedEndpoints?: string[];
  pathParameters?: Parameter[];
  queryParameters?: Parameter[];
  requestBody?: Parameter[];
  examples?: ExampleLevel;
  statusCodes?: StatusCode[];
  commonErrors?: ErrorExample[];
  responseSchema?: string;
}

const methodColors = {
  GET: "bg-blue-600",
  POST: "bg-green-600",
  PATCH: "bg-yellow-600",
  DELETE: "bg-red-600",
};

const priorityConfig = {
  essential: { color: "bg-red-500", label: "Essential", description: "Core operation used frequently" },
  frequent: { color: "bg-yellow-500", label: "Frequent", description: "Commonly used in integrations" },
  advanced: { color: "bg-green-500", label: "Advanced", description: "Specialized or complex operations" },
};

export default function EnhancedEndpointCard({
  method,
  path,
  description,
  authentication,
  priority,
  useCases,
  relatedEndpoints,
  pathParameters,
  queryParameters,
  requestBody,
  examples,
  statusCodes,
  commonErrors,
  responseSchema,
}: EnhancedEndpointCardProps) {
  const [exampleLevel, setExampleLevel] = useState<"quick" | "basic" | "complete" | "integration">("basic");
  const [showComplete, setShowComplete] = useState(false);

  const currentExample = examples?.[exampleLevel] || examples?.basic || "";

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 my-8 hover:border-gray-700 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <span
          className={`${methodColors[method]} text-white px-3 py-1 rounded text-sm font-semibold`}
        >
          {method}
        </span>
        <div className="flex-1">
          <code className="text-orange-400 font-mono text-lg">{path}</code>
          {priority && (
            <div className="mt-2">
              <span
                className={`${priorityConfig[priority].color} text-white px-2 py-0.5 rounded text-xs font-semibold`}
              >
                {priorityConfig[priority].label}
              </span>
              <span className="text-gray-400 text-xs ml-2">
                {priorityConfig[priority].description}
              </span>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-300 mb-4">{description}</p>

      {useCases && useCases.length > 0 && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Common Use Cases</h4>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            {useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>
        </div>
      )}

      {authentication && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Authentication</h4>
          <p className="text-gray-400 text-sm">{authentication}</p>
        </div>
      )}

      {(pathParameters?.length || queryParameters?.length || requestBody?.length) && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-semibold">Parameters</h4>
            <button
              onClick={() => setShowComplete(!showComplete)}
              className="text-orange-400 text-sm hover:text-orange-300"
            >
              {showComplete ? "Show Required Only" : "Show All Parameters"}
            </button>
          </div>

          {pathParameters && pathParameters.length > 0 && (
            <ParameterTable
              title="Path Parameters"
              parameters={pathParameters}
              showComplete={showComplete}
            />
          )}

          {queryParameters && queryParameters.length > 0 && (
            <ParameterTable
              title="Query Parameters"
              parameters={queryParameters}
              showComplete={showComplete}
            />
          )}

          {requestBody && requestBody.length > 0 && (
            <ParameterTable
              title="Request Body"
              parameters={requestBody}
              showComplete={showComplete}
            />
          )}
        </div>
      )}

      {examples && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-semibold">Request Examples</h4>
            <div className="flex gap-2">
              <button
                onClick={() => setExampleLevel("quick")}
                className={`px-3 py-1 rounded text-xs ${
                  exampleLevel === "quick"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Quick
              </button>
              <button
                onClick={() => setExampleLevel("basic")}
                className={`px-3 py-1 rounded text-xs ${
                  exampleLevel === "basic"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Basic
              </button>
              <button
                onClick={() => setExampleLevel("complete")}
                className={`px-3 py-1 rounded text-xs ${
                  exampleLevel === "complete"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                Complete
              </button>
              {examples.integration && (
                <button
                  onClick={() => setExampleLevel("integration")}
                  className={`px-3 py-1 rounded text-xs ${
                    exampleLevel === "integration"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  Integration
                </button>
              )}
            </div>
          </div>
          <CodeBlock code={currentExample} language="bash" />
        </div>
      )}

      {responseSchema && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Response Schema</h4>
          <CodeBlock code={responseSchema} language="json" />
        </div>
      )}

      {statusCodes && statusCodes.length > 0 && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Response Codes</h4>
          <StatusCodeTable statusCodes={statusCodes} />
        </div>
      )}

      {commonErrors && commonErrors.length > 0 && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Common Errors</h4>
          <ErrorExamples errors={commonErrors} />
        </div>
      )}

      {relatedEndpoints && relatedEndpoints.length > 0 && (
        <div className="pt-4 border-t border-gray-800">
          <h4 className="text-white font-semibold mb-2">Related Endpoints</h4>
          <div className="flex flex-wrap gap-2">
            {relatedEndpoints.map((endpoint, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm"
              >
                {endpoint}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ParameterTable({
  title,
  parameters,
  showComplete,
}: {
  title: string;
  parameters: Parameter[];
  showComplete: boolean;
}) {
  const filteredParams = showComplete
    ? parameters
    : parameters.filter((p) => p.required);

  return (
    <div className="mb-4">
      <h5 className="text-gray-300 font-semibold text-sm mb-2">{title}</h5>
      {filteredParams.length === 0 ? (
        <p className="text-gray-500 text-sm italic">No required parameters</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-2 px-3 text-gray-400 font-semibold text-xs">
                  Parameter
                </th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold text-xs">
                  Type
                </th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold text-xs">
                  Required
                </th>
                <th className="text-left py-2 px-3 text-gray-400 font-semibold text-xs">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredParams.map((param) => (
                <tr key={param.name} className="border-b border-gray-800/50">
                  <td className="py-2 px-3">
                    <code className="text-orange-400 text-sm">{param.name}</code>
                  </td>
                  <td className="py-2 px-3 text-gray-300 text-xs">{param.type}</td>
                  <td className="py-2 px-3 text-xs">
                    {param.required ? (
                      <span className="text-red-400">Yes</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
                  </td>
                  <td className="py-2 px-3 text-gray-300 text-xs">
                    {param.description}
                    {param.example && (
                      <div className="text-gray-400 mt-1">
                        Example: <code className="text-orange-400">{param.example}</code>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function StatusCodeTable({ statusCodes }: { statusCodes: StatusCode[] }) {
  return (
    <div className="space-y-2">
      {statusCodes.map((status) => (
        <div key={status.code} className="flex items-center gap-3 text-sm">
          <span
            className={`px-2 py-1 rounded font-mono ${
              status.code >= 200 && status.code < 300
                ? "bg-green-900/50 text-green-300"
                : status.code >= 400 && status.code < 500
                ? "bg-yellow-900/50 text-yellow-300"
                : status.code >= 500
                ? "bg-red-900/50 text-red-300"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {status.code}
          </span>
          <span className="text-gray-300">{status.description}</span>
        </div>
      ))}
    </div>
  );
}

function ErrorExamples({ errors }: { errors: ErrorExample[] }) {
  return (
    <div className="space-y-3">
      {errors.map((error, index) => (
        <div
          key={index}
          className="bg-red-900/10 border border-red-800/30 rounded-lg p-3"
        >
          <div className="flex items-start gap-3 mb-2">
            <span className="bg-red-900/50 text-red-300 px-2 py-1 rounded text-xs font-mono">
              {error.code}
            </span>
            <div>
              <p className="text-red-400 font-medium text-sm">{error.condition}</p>
              <p className="text-gray-400 text-xs mt-1">{error.example}</p>
              <p className="text-green-400 text-xs mt-1">
                Solution: {error.solution}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

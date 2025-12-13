import CodeBlock from "./code-block";

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

interface EndpointCardProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  description: string;
  authentication?: string;
  pathParameters?: Parameter[];
  queryParameters?: Parameter[];
  requestBody?: Parameter[];
  requestExample?: string;
  responseExample?: string;
  statusCodes?: StatusCode[];
  validationErrors?: string;
}

const methodColors = {
  GET: "bg-blue-600",
  POST: "bg-green-600",
  PATCH: "bg-yellow-600",
  DELETE: "bg-red-600",
};

export default function EndpointCard({
  method,
  path,
  description,
  authentication,
  pathParameters,
  queryParameters,
  requestBody,
  requestExample,
  responseExample,
  statusCodes,
  validationErrors,
}: EndpointCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 my-8">
      <div className="flex items-start gap-4 mb-4">
        <span
          className={`${methodColors[method]} text-white px-3 py-1 rounded text-sm font-semibold`}
        >
          {method}
        </span>
        <code className="text-orange-400 font-mono text-lg flex-1">{path}</code>
      </div>

      <p className="text-gray-300 mb-6">{description}</p>

      {authentication && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2">Authentication</h4>
          <p className="text-gray-400 text-sm">{authentication}</p>
        </div>
      )}

      {pathParameters && pathParameters.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Path Parameters</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Parameter
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Type
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Required
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {pathParameters.map((param) => (
                  <tr key={param.name} className="border-b border-gray-800/50">
                    <td className="py-2 px-4">
                      <code className="text-orange-400 text-sm">
                        {param.name}
                      </code>
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {param.type}
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {param.required ? (
                        <span className="text-red-400">Yes</span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {queryParameters && queryParameters.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Query Parameters</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Parameter
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Type
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Required
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {queryParameters.map((param) => (
                  <tr key={param.name} className="border-b border-gray-800/50">
                    <td className="py-2 px-4">
                      <code className="text-orange-400 text-sm">
                        {param.name}
                      </code>
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {param.type}
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {param.required ? (
                        <span className="text-red-400">Yes</span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {requestBody && requestBody.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Request Body</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Field
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Type
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Required
                  </th>
                  <th className="text-left py-2 px-4 text-gray-400 font-semibold text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {requestBody.map((field) => (
                  <tr key={field.name} className="border-b border-gray-800/50">
                    <td className="py-2 px-4">
                      <code className="text-orange-400 text-sm">
                        {field.name}
                      </code>
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {field.type}
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {field.required ? (
                        <span className="text-red-400">Yes</span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </td>
                    <td className="py-2 px-4 text-gray-300 text-sm">
                      {field.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {requestExample && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Request Example</h4>
          <CodeBlock code={requestExample} language="bash" />
        </div>
      )}

      {responseExample && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Response Example</h4>
          <CodeBlock code={responseExample} language="json" />
        </div>
      )}

      {statusCodes && statusCodes.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3">Response Codes</h4>
          <div className="space-y-2">
            {statusCodes.map((status) => (
              <div
                key={status.code}
                className="flex items-center gap-3 text-sm"
              >
                <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded font-mono">
                  {status.code}
                </span>
                <span className="text-gray-300">{status.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {validationErrors && (
        <div className="mt-6">
          <h4 className="text-white font-semibold mb-3">Validation Errors</h4>
          <CodeBlock code={validationErrors} language="json" />
        </div>
      )}
    </div>
  );
}

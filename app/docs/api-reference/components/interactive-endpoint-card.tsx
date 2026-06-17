"use client";

import { useState, useMemo } from "react";
import CodeBlock from "@/components/docs/code-block";

interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
  example?: string;
  defaultValue?: string;
}

interface InteractiveEndpointCardProps {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  description: string;
  authentication?: string;
  pathParameters?: Parameter[];
  queryParameters?: Parameter[];
  requestBody?: Parameter[];
  baseUrl?: string;
}

const methodColors = {
  GET: "bg-blue-600",
  POST: "bg-green-600",
  PATCH: "bg-yellow-600",
  DELETE: "bg-red-600",
};

export default function InteractiveEndpointCard({
  method,
  path,
  description,
  authentication,
  pathParameters,
  queryParameters,
  requestBody,
  baseUrl = "https://app.fusioncalling.com",
}: InteractiveEndpointCardProps) {
  const [apiKey, setApiKey] = useState("YOUR_API_KEY");

  const [pathValues, setPathValues] = useState<Record<string, string>>(() => {
    const values: Record<string, string> = {};
    pathParameters?.forEach((param) => {
      if (param.defaultValue) {
        values[param.name] = param.defaultValue;
      } else if (param.example) {
        values[param.name] = param.example;
      }
    });
    return values;
  });

  const [queryValues, setQueryValues] = useState<Record<string, string>>(() => {
    const values: Record<string, string> = {};
    queryParameters?.forEach((param) => {
      if (param.defaultValue) {
        values[param.name] = param.defaultValue;
      } else if (param.example) {
        values[param.name] = param.example;
      }
    });
    return values;
  });

  const [bodyValues, setBodyValues] = useState<Record<string, string>>(() => {
    const values: Record<string, string> = {};
    requestBody?.forEach((param) => {
      if (param.defaultValue) {
        values[param.name] = param.defaultValue;
      } else if (param.example) {
        values[param.name] = param.example;
      }
    });
    return values;
  });

  const [copied, setCopied] = useState(false);

  const generatedCurl = useMemo(() => {
    let curlPath = path;
    pathParameters?.forEach((param) => {
      const value = pathValues[param.name] || param.example || "";
      curlPath = curlPath.replace(`{${param.name}}`, value);
    });

    let url = baseUrl + curlPath;
    const queryParams = new URLSearchParams();
    queryParameters?.forEach((param) => {
      const value = queryValues[param.name];
      if (value && value.trim() !== "") {
        queryParams.append(param.name, value);
      }
    });

    if (queryParams.toString()) {
      url += `?${queryParams.toString()}`;
    }

    let curl = `curl -X ${method} "${url}"`;

    if (authentication) {
      curl += ` \\\n  -H "Authorization: Bearer ${apiKey}"`;
    }

    if (method === "POST" || method === "PATCH") {
      curl += ` \\\n  -H "Content-Type: application/json"`;

      const bodyData: Record<string, string | number | boolean | string[]> = {};
      requestBody?.forEach((param) => {
        const value = bodyValues[param.name];
        if (value && value.trim() !== "") {
          if (param.type === "boolean") {
            bodyData[param.name] = value === "true";
          } else if (param.type === "array") {
            bodyData[param.name] = value.split(",").map((s) => s.trim());
          } else if (param.type === "number") {
            bodyData[param.name] = parseFloat(value);
          } else {
            bodyData[param.name] = value;
          }
        } else if (param.required) {
          bodyData[param.name] = param.example || "";
        }
      });

      if (Object.keys(bodyData).length > 0) {
        curl += ` \\\n  -d '${JSON.stringify(bodyData, null, 2)}'`;
      }
    }

    return curl;
  }, [
    apiKey,
    path,
    pathParameters,
    pathValues,
    queryParameters,
    queryValues,
    requestBody,
    bodyValues,
    method,
    authentication,
    baseUrl,
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCurl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const updateValue = (
    setter: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    key: string,
    value: string
  ) => {
    setter((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6 my-6 hover:border-gray-700 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-6">
        <span className={`${methodColors[method]} text-white px-3 py-1 rounded text-sm font-semibold w-fit`}>
          {method}
        </span>
        <div className="flex-1 min-w-0">
          <code className="text-orange-400 font-mono text-base sm:text-lg break-all">{path}</code>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">{description}</p>
        </div>
      </div>

      {authentication && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Authentication</h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-3">
            Enter your API key to customize the command below (optional)
          </p>
          <div>
            <label className="text-gray-400 text-xs sm:text-sm mb-2 block">
              Your API Key
            </label>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="YOUR_API_KEY"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm font-mono"
            />
            <p className="text-gray-500 text-xs mt-2">
              💡 Replace with your actual API key to test commands
            </p>
          </div>
        </div>
      )}

      {pathParameters && pathParameters.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Path Parameters</h4>
          <div className="space-y-3">
            {pathParameters.map((param) => (
              <div key={param.name} className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="text-orange-400 text-xs sm:text-sm">{param.name}</code>
                  <span className="text-gray-400 text-xs">
                    {param.required ? (
                      <span className="text-red-400">Required</span>
                    ) : (
                      <span className="text-gray-500">Optional</span>
                    )}
                  </span>
                  <span className="text-gray-400 text-xs">({param.type})</span>
                </div>
                <input
                  type="text"
                  value={pathValues[param.name] || ""}
                  onChange={(e) => updateValue(setPathValues, param.name, e.target.value)}
                  placeholder={param.example}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm"
                />
                <p className="text-gray-400 text-xs">{param.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {queryParameters && queryParameters.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Query Parameters</h4>
          <div className="space-y-3">
            {queryParameters.map((param) => (
              <div key={param.name} className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="text-orange-400 text-xs sm:text-sm">{param.name}</code>
                  <span className="text-gray-400 text-xs">
                    {param.required ? (
                      <span className="text-red-400">Required</span>
                    ) : (
                      <span className="text-gray-500">Optional</span>
                    )}
                  </span>
                  <span className="text-gray-400 text-xs">({param.type})</span>
                </div>
                <input
                  type="text"
                  value={queryValues[param.name] || ""}
                  onChange={(e) => updateValue(setQueryValues, param.name, e.target.value)}
                  placeholder={param.example}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm"
                />
                <p className="text-gray-400 text-xs">{param.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {requestBody && requestBody.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Request Body</h4>
          <div className="space-y-3">
            {requestBody.map((param) => (
              <div key={param.name} className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="text-orange-400 text-xs sm:text-sm">{param.name}</code>
                  <span className="text-gray-400 text-xs">
                    {param.required ? (
                      <span className="text-red-400">Required</span>
                    ) : (
                      <span className="text-gray-500">Optional</span>
                    )}
                  </span>
                  <span className="text-gray-400 text-xs">({param.type})</span>
                </div>
                {param.type === "boolean" ? (
                  <select
                    value={bodyValues[param.name] || "false"}
                    onChange={(e) => updateValue(setBodyValues, param.name, e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 text-xs sm:text-sm"
                  >
                    <option value="true">true</option>
                    <option value="false">false</option>
                  </select>
                ) : (
                  <input
                    type={param.type === "number" ? "number" : "text"}
                    value={bodyValues[param.name] || ""}
                    onChange={(e) => updateValue(setBodyValues, param.name, e.target.value)}
                    placeholder={param.example}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-xs sm:text-sm"
                  />
                )}
                <p className="text-gray-400 text-xs">{param.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <h4 className="text-white font-semibold text-sm sm:text-base">Generated cURL Command</h4>
          <button
            onClick={copyToClipboard}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors w-full sm:w-auto ${
              copied
                ? "bg-green-500 text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white"
            }`}
          >
            {copied ? "✓ Copied!" : "Copy cURL"}
          </button>
        </div>
        <CodeBlock code={generatedCurl} language="bash" />
        <p className="text-gray-400 text-xs mt-3">
          💡 Fill in the fields above to customize this command for your needs
        </p>
      </div>
    </div>
  );
}

import { Param } from "@/app/docs/api-reference/data/endpoints";
import { Asterisk } from "lucide-react";

interface ParamTableProps {
  params: Param[];
  emptyLabel?: string;
}

function RequiredBadge({ required }: { required: boolean }) {
  return required ? (
    <span className="inline-flex items-center gap-1 text-red-400">
      <Asterisk className="h-3 w-3" aria-hidden />
      Required
    </span>
  ) : (
    <span className="text-gray-500">Optional</span>
  );
}

function ExampleCell({ example }: { example?: string }) {
  if (!example) return null;
  return (
    <div className="mt-1 text-gray-500">
      e.g. <code className="text-orange-300/90 break-all">{example}</code>
    </div>
  );
}

export default function ParamTable({ params, emptyLabel }: ParamTableProps) {
  if (params.length === 0) {
    return <p className="text-sm italic text-gray-500">{emptyLabel ?? "No parameters."}</p>;
  }

  return (
    <>
      {/* Desktop: table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10 text-left">
              <th className="py-2 pr-4 font-medium text-gray-400">Name</th>
              <th className="py-2 pr-4 font-medium text-gray-400">Type</th>
              <th className="py-2 pr-4 font-medium text-gray-400">Required</th>
              <th className="py-2 font-medium text-gray-400">Description</th>
            </tr>
          </thead>
          <tbody>
            {params.map((p) => (
              <tr key={p.name} className="border-b border-white/5 align-top">
                <td className="py-2.5 pr-4">
                  <code className="text-orange-400">{p.name}</code>
                </td>
                <td className="py-2.5 pr-4 text-gray-300 whitespace-nowrap">{p.type}</td>
                <td className="py-2.5 pr-4 text-xs">
                  <RequiredBadge required={p.required} />
                </td>
                <td className="py-2.5 text-gray-300">
                  {p.description}
                  {p.enum && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {p.enum.map((v) => (
                        <code
                          key={v}
                          className="text-[11px] bg-white/5 ring-1 ring-white/10 rounded px-1.5 py-0.5 text-gray-300"
                        >
                          {v}
                        </code>
                      ))}
                    </div>
                  )}
                  <ExampleCell example={p.example} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked definition cards */}
      <div className="md:hidden space-y-3">
        {params.map((p) => (
          <div key={p.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between gap-2">
              <code className="text-orange-400 text-sm">{p.name}</code>
              <span className="text-xs whitespace-nowrap">
                <RequiredBadge required={p.required} />
              </span>
            </div>
            <div className="mt-1 text-xs text-gray-400">{p.type}</div>
            <p className="mt-2 text-sm text-gray-300">{p.description}</p>
            {p.enum && (
              <div className="mt-2 flex flex-wrap gap-1">
                {p.enum.map((v) => (
                  <code
                    key={v}
                    className="text-[11px] bg-white/5 ring-1 ring-white/10 rounded px-1.5 py-0.5 text-gray-300"
                  >
                    {v}
                  </code>
                ))}
              </div>
            )}
            <ExampleCell example={p.example} />
          </div>
        ))}
      </div>
    </>
  );
}

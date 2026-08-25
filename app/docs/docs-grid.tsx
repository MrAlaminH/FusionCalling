"use client";

import Link from "next/link";
import { useDocSearchQuery } from "./doc-search-store";
import { colorClasses, docSections } from "./doc-sections";

export default function DocsGrid() {
  const searchQuery = useDocSearchQuery();

  const filteredDocs = docSections.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredDocs.map((doc) => (
        <Link key={doc.id} href={doc.href} className="group">
          <div
            className={`bg-zinc-900 border ${colorClasses[doc.color].border} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-1 h-full ${colorClasses[doc.color].hover}`}
          >
            <div className="text-4xl mb-4">{doc.icon}</div>
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-strong transition-colors">
              {doc.title}
            </h2>
            <p className="text-gray-400 text-sm mb-6">{doc.description}</p>
            <div className="flex flex-wrap gap-2">
              {doc.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className={`text-xs px-3 py-1 rounded-full ${colorClasses[doc.color].bg} ${colorClasses[doc.color].text}`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

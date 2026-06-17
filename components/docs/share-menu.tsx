"use client";

import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Copy, Check, ChevronDown, FileText, MessageSquare, Braces } from "lucide-react";
import { generateMarkdown } from "@/app/docs/api-reference/lib/markdown";

const itemClass =
  "flex items-center gap-2.5 px-3 py-2 text-sm text-gray-200 rounded-md outline-none cursor-pointer data-[highlighted]:bg-white/10 data-[highlighted]:text-white";

export default function ShareMenu() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const flash = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2600);
  };

  const getMarkdown = () => {
    try {
      return generateMarkdown();
    } catch {
      return null;
    }
  };

  const copyMarkdown = async () => {
    const md = getMarkdown();
    if (md === null) return flash("Couldn't generate — try again");
    try {
      await navigator.clipboard.writeText(md);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      flash("Page copied as Markdown");
    } catch {
      flash("Couldn't copy — try again");
    }
  };

  const askChatGPT = async () => {
    const md = getMarkdown();
    if (md === null) return flash("Couldn't generate — try again");
    try {
      await navigator.clipboard.writeText(md);
      window.open("https://chatgpt.com/", "_blank", "noopener,noreferrer");
      flash("Copied — paste into ChatGPT and ask away");
    } catch {
      flash("Couldn't open ChatGPT — try again");
    }
  };

  const openSpec = () => {
    window.open("/api/docs/openapi.json", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="inline-flex rounded-lg overflow-hidden ring-1 ring-white/15">
        <button
          type="button"
          onClick={copyMarkdown}
          className="inline-flex items-center gap-2 px-3 h-9 text-sm font-medium bg-white/5 hover:bg-white/10 text-gray-200 transition-colors"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span>{copied ? "Copied" : "Copy as Markdown"}</span>
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              type="button"
              aria-label="More export options"
              className="inline-flex items-center justify-center w-9 h-9 bg-white/5 hover:bg-white/10 text-gray-300 border-l border-white/10 transition-colors"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={6}
              className="z-50 min-w-[16rem] rounded-lg border border-white/15 bg-zinc-950/95 p-1 shadow-2xl shadow-black/50 backdrop-blur"
            >
              <DropdownMenu.Item onSelect={copyMarkdown} className={itemClass}>
                <FileText className="h-4 w-4 text-gray-400 shrink-0" />
                <span>Copy page as Markdown</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={askChatGPT} className={itemClass}>
                <MessageSquare className="h-4 w-4 text-gray-400 shrink-0" />
                <span>Ask ChatGPT about this page</span>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="h-px bg-white/10 my-1" />
              <DropdownMenu.Item onSelect={openSpec} className={itemClass}>
                <Braces className="h-4 w-4 text-gray-400 shrink-0" />
                <span>OpenAPI spec (openapi.json)</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>

      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[70] rounded-lg border border-white/15 bg-zinc-900 px-4 py-2 text-sm text-gray-200 shadow-xl"
        >
          {toast}
        </div>
      )}
    </>
  );
}

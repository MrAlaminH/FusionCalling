import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Truncate a string to `maxLen` characters without cutting the final word.
 * If the string fits, it's returned unchanged. If truncating would split a
 * word, the cut is moved back to the previous word boundary and an ellipsis
 * is appended. Output length therefore never exceeds `maxLen`.
 *
 * Used for meta descriptions / OG descriptions where slicing on a fixed
 * character count would otherwise leave a dangling partial word.
 */
export function truncateAtWord(input: string, maxLen: number): string {
  const text = input.trim();
  if (text.length <= maxLen) return text;

  // Try the slice first; if it already lands on a space or punctuation
  // boundary, we're done.
  const slice = text.slice(0, maxLen);
  if (/\s/.test(text[maxLen]) || /[.,;:!?)]$/.test(slice)) {
    return slice.replace(/[\s.,;:!?)]+$/, "") + "…";
  }

  // Otherwise walk back to the last whitespace inside the slice.
  const cut = slice.search(/\s\S*$/);
  const body = cut > 0 ? slice.slice(0, cut) : slice;
  return body.replace(/\s+$/, "") + "…";
}


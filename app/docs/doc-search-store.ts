"use client";

import { useSyncExternalStore } from "react";

let query = "";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): string {
  return query;
}

export function setDocSearchQuery(next: string) {
  if (next === query) return;
  query = next;
  listeners.forEach((l) => l());
}

export function useDocSearchQuery(): string {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

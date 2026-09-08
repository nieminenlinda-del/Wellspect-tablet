"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    if (process.env.NODE_ENV === "development") return;
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    void navigator.serviceWorker.register(`${prefix}/sw.js`, {
      scope: `${prefix}/`,
    });
  }, []);
  return null;
}

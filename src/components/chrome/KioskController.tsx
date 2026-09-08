"use client";

import { useEffect } from "react";
import { IDLE_MS, readKioskFlag, requestKioskFullscreen, writeKioskFlag } from "@/lib/kiosk";

export function KioskController() {
  useEffect(() => {
    const enabled = readKioskFlag();
    writeKioskFlag(enabled);
    if (enabled) {
      void requestKioskFullscreen();
    }

    if (!enabled) return;

    let timer = window.setTimeout(goHome, IDLE_MS);
    const bump = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(goHome, IDLE_MS);
    };

    const blockContext = (event: Event) => event.preventDefault();

    window.addEventListener("pointerdown", bump);
    window.addEventListener("keydown", bump);
    window.addEventListener("contextmenu", blockContext);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointerdown", bump);
      window.removeEventListener("keydown", bump);
      window.removeEventListener("contextmenu", blockContext);
    };
  }, []);

  return null;
}

function goHome() {
  if (window.location.pathname !== "/") {
    window.location.href = "/";
  }
}

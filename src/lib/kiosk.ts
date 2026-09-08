export const KIOSK_KEY = "wellspect.kiosk";
export const IDLE_MS = 3 * 60 * 1000;

export function readKioskFlag(): boolean {
  if (typeof window === "undefined") return false;
  const params = new URLSearchParams(window.location.search);
  if (params.get("kiosk") === "1") return true;
  if (params.get("kiosk") === "0") return false;
  return window.localStorage.getItem(KIOSK_KEY) === "1";
}

export function writeKioskFlag(on: boolean) {
  window.localStorage.setItem(KIOSK_KEY, on ? "1" : "0");
  document.body.classList.toggle("kiosk-mode", on);
}

export async function requestKioskFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    }
  } catch {
    // Browsers may block fullscreen without a fresh gesture.
  }
}

export async function exitKioskFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  } catch {
    // ignore
  }
}

import type { StringOverlay } from "@/content/i18n";

/**
 * English chrome/UI only (language, not a market).
 * Clinical/product copy falls back to Swedish until official English IFU text is supplied.
 */
export const enOverlay: StringOverlay = {
  home: {
    title: "BLADDER AND BOWEL CARE",
    subtitle: "Choose the area you want to learn more about.",
    skip: "Skip to content",
    readMore: "Read more",
  },
  market: {
    groupLabel: "Country and language",
    groupAria: "Choose country or language",
  },
  category: { title: "CONTENTS" },
  content: {
    fallbackNote:
      "Product texts and clinical sections are shown in Swedish until an official translation is available.",
  },
  journeys: {
    "rik-kvinnor": {
      homeLabel: "RIK- for women",
      homeLines: ["RIK-", "for women"],
      kicker: "RIK – FOR WOMEN",
    },
    "rik-man": {
      homeLabel: "RIK- for men",
      homeLines: ["RIK-", "for men"],
      kicker: "RIK – FOR MEN",
    },
    navina: {
      homeLabel: "Navina bowel care",
      homeLines: ["Navina", "Bowel care"],
      kicker: "NAVINA BOWEL CARE",
    },
  },
  notFound: {
    title: "Page not found",
    body: "Go back to the home screen and choose one of the three journeys.",
  },
  nav: {
    home: "Home",
    homeAria: "Go to the main menu",
    info: "Info",
    infoAria: "Information about the app",
    category: "Contents",
    categoryAria: "Go to the contents menu",
    back: "Back",
    backAria: "Go back",
    backToJourney: (name: string) => `Back to ${name}`,
    next: "Next page",
    previous: "Previous page",
    pageOf: (current: number, total: number) => `Page ${current}/${total}`,
    multiPage: "This topic has several pages",
    contentMap: "Content map",
    appNav: "App navigation",
  },
  sections: {
    products: "Products",
    support: "Support and information",
    safety: "Important safety information",
  },
  info: {
    title: "Information",
    kicker: "How to use the app",
    iconsHeading: "Menu icons",
    kioskHeading: "Kiosk mode",
    kioskBody:
      "Kiosk mode hides extra interface, asks for fullscreen, and returns to home after a period of inactivity. Suitable for clinic tablets.",
    kioskEnable: "Enable kiosk mode",
    kioskDisable: "Exit kiosk mode",
    kioskOn: "Kiosk mode is on",
    kioskOff: "Kiosk mode is off",
  },
  disclaimer: {
    short: "This content is educational support. It does not replace advice from your care contact.",
    title: "Important to know",
    notAdvice: "Does not replace medical advice",
  },
  video: {
    heading: "Video",
    placeholderTitle: "The video is not connected yet",
    coming: "Video coming",
    language: "Language",
  },
  actions: {
    open: "Open",
    close: "Close",
    play: "Play",
    instructions: "Instructions for use",
  },
};

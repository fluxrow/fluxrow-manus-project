// Lightweight tracking helper. Safe no-ops when gtag/fbq aren't loaded.
type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: TrackParams = {}) {
  try {
    if (typeof window === "undefined") return;
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
    if (typeof window.fbq === "function") {
      // Map a few common conversion intents to standard Meta events
      const standardMap: Record<string, string> = {
        whatsapp_click: "Contact",
        kit_cta_click: "Lead",
        purchase_intent: "InitiateCheckout",
      };
      const fbEvent = standardMap[name];
      if (fbEvent) {
        window.fbq("track", fbEvent, params);
      } else {
        window.fbq("trackCustom", name, params);
      }
    }
  } catch {
    // never throw from tracking
  }
}

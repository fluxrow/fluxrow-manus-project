// Single source of truth for PT/EN language detection.
// Used across bilingual surfaces (AI Operator Kit, Produtos hub, content articles).

export type Lang = "pt" | "en";

const STORAGE_KEY = "aok_lang";
const LEGACY_KEYS = ["aok-lang"]; // older variants we silently migrate

function readStored(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "pt" || v === "en") return v;
    for (const k of LEGACY_KEYS) {
      const lv = localStorage.getItem(k);
      if (lv === "pt" || lv === "en") {
        localStorage.setItem(STORAGE_KEY, lv);
        return lv;
      }
    }
  } catch {
    /* storage blocked */
  }
  return null;
}

function readUrlLang(): Lang | null {
  if (typeof window === "undefined") return null;
  try {
    const p = new URL(window.location.href).searchParams.get("lang");
    return p === "pt" || p === "en" ? p : null;
  } catch {
    return null;
  }
}

function readBrowserLang(): Lang {
  if (typeof navigator === "undefined") return "en";
  const candidates = [
    navigator.language,
    ...((navigator.languages as string[] | undefined) || []),
  ]
    .filter(Boolean)
    .map((l) => l.toLowerCase());
  return candidates.some((l) => l.startsWith("pt")) ? "pt" : "en";
}

/**
 * Resolves the user's language with this priority:
 * 1. ?lang=pt|en in the URL (explicit intent — also persisted)
 * 2. Stored preference (localStorage)
 * 3. Browser navigator.language(s)
 */
export function detectLang(): Lang {
  const url = readUrlLang();
  if (url) {
    persistLang(url);
    return url;
  }
  const stored = readStored();
  if (stored) return stored;
  return readBrowserLang();
}

export function persistLang(lang: Lang): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage blocked */
  }
}

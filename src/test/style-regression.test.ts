import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "fs";
import { join, relative } from "path";

/**
 * Static visual-regression guard.
 *
 * Fails the build if any forbidden pattern (neon gradient, colored shadow,
 * colored textShadow, vibrant tailwind colors) appears in the public-facing
 * source tree. Allowlist below covers the few intentional accent uses.
 *
 * Allowed:
 *  - The logo gradient classes inside FluxrowLogo.tsx
 *  - The .gradient-accent-* utilities defined in src/index.css
 *  - Files explicitly listed in ALLOWLIST_FILES (proposals, reports, etc.)
 */

const ROOT = join(process.cwd(), "src");

// Public, customer-facing surfaces only.
const SCAN_DIRS = [
  "components",
  "pages",
];

// Skip non-public surfaces (admin/proposals/reports/internal dashboards).
const SKIP_PATH_FRAGMENTS = [
  "/proposta",
  "/proposals",
  "/relatorio",
  "/admin",
  "/dashboard",
  "/test/",
  ".test.",
  ".spec.",
];

// Files explicitly allowed to keep brand gradient (the logo only).
const ALLOWLIST_FILES = [
  "src/components/ui/FluxrowLogo.tsx",
  "src/index.css", // defines the controlled accent utilities
];

// Patterns we never want to see again on public pages.
const FORBIDDEN: { name: string; re: RegExp }[] = [
  { name: "tailwind neon gradient", re: /bg-gradient-to-[a-z]+\s+from-(cyan|purple|pink|fuchsia|violet|indigo|emerald|lime|rose)-\d{3}/ },
  { name: "vibrant text color", re: /text-(cyan|purple|pink|fuchsia|violet|indigo|emerald|lime|rose|sky|teal)-(300|400|500)/ },
  { name: "colored textShadow", re: /textShadow:\s*['"`][^'"`]*(rgba?\((?!0\s*,\s*0\s*,\s*0)|#(?!000|fff|ffffff|000000))/i },
  { name: "neon box-shadow", re: /shadow-(cyan|purple|pink|fuchsia|violet|indigo|emerald|lime|rose)-\d{3}/ },
  { name: "raw neon hex", re: /#(0ff|ff0|f0f|0f0|ff00ff|00ffff|ffff00|00ff00)\b/i },
];

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = "/" + relative(process.cwd(), full).replace(/\\/g, "/");
    if (SKIP_PATH_FRAGMENTS.some((f) => rel.toLowerCase().includes(f))) continue;
    const s = statSync(full);
    if (s.isDirectory()) walk(full, out);
    else if (/\.(tsx?|css)$/.test(entry)) out.push(full);
  }
  return out;
}

describe("style regression guard (public pages)", () => {
  const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));

  it("collects files to scan", () => {
    expect(files.length).toBeGreaterThan(0);
  });

  for (const { name, re } of FORBIDDEN) {
    it(`does not reintroduce: ${name}`, () => {
      const violations: string[] = [];
      for (const file of files) {
        const rel = relative(process.cwd(), file).replace(/\\/g, "/");
        if (ALLOWLIST_FILES.includes(rel)) continue;
        const src = readFileSync(file, "utf8");
        const lines = src.split("\n");
        lines.forEach((line, i) => {
          if (re.test(line)) violations.push(`${rel}:${i + 1}  ${line.trim().slice(0, 160)}`);
        });
      }
      if (violations.length) {
        throw new Error(
          `Forbidden style "${name}" found:\n` + violations.slice(0, 20).join("\n"),
        );
      }
    });
  }
});

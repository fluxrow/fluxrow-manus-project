#!/usr/bin/env bunx tsx
/**
 * check-safe-wrap.ts
 * Scans the repository for legacy word-break patterns that should be
 * replaced by the standardized `safe-wrap` utility (defined in src/index.css).
 *
 * Patterns flagged:
 *   - "min-w-0 break-words"       (and reversed order)
 *   - "[overflow-wrap:anywhere]"  (Tailwind arbitrary value)
 *   - "overflow-wrap:anywhere"    (raw CSS in JSX/TSX style props)
 *
 * Exit codes:
 *   0 — clean
 *   1 — occurrences found
 *
 * Usage:
 *   npm run check:safe-wrap
 */
import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
// Directories to scan recursively. `components` is included for projects that
// hoist UI to the root; missing dirs are silently skipped.
const SCAN_DIRS = ["src", "public", "components"];
// Also scan loose files at the repo root (index.html, *.css, etc.).
const SCAN_ROOT_FILES = true;
const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".css", ".html", ".mdx"];
const IGNORE_DIRS = new Set([
  "node_modules",
  "dist",
  "build",
  ".git",
  ".lovable",
  ".next",
  "coverage",
  "reports",
]);

// Files exempt from the rule (e.g., the utility definition itself).
const EXEMPT_FILES = new Set<string>([
  "src/index.css", // contains the documentation comment for the utility
]);

const PATTERNS: { name: string; regex: RegExp }[] = [
  { name: "min-w-0 break-words", regex: /min-w-0\s+break-words/g },
  { name: "break-words min-w-0", regex: /break-words\s+min-w-0/g },
  { name: "[overflow-wrap:anywhere]", regex: /\[overflow-wrap:anywhere\]/g },
  { name: "overflow-wrap:anywhere", regex: /overflow-wrap\s*:\s*anywhere/g },
];

type Hit = { file: string; line: number; pattern: string; snippet: string };

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (IGNORE_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (EXTENSIONS.some((ext) => full.endsWith(ext))) out.push(full);
  }
  return out;
}

function existsDir(p: string): boolean {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

function scanFile(file: string) {
  const rel = relative(ROOT, file);
  if (EXEMPT_FILES.has(rel)) return;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    for (const { name, regex } of PATTERNS) {
      regex.lastIndex = 0;
      if (regex.test(line)) {
        hits.push({ file: rel, line: i + 1, pattern: name, snippet: line.trim() });
      }
    }
  });
}

const hits: Hit[] = [];
const scannedDirs: string[] = [];
for (const dir of SCAN_DIRS) {
  const abs = join(ROOT, dir);
  if (!existsDir(abs)) continue;
  scannedDirs.push(dir);
  for (const file of walk(abs)) scanFile(file);
}

if (SCAN_ROOT_FILES) {
  for (const entry of readdirSync(ROOT)) {
    const full = join(ROOT, entry);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (!st.isFile()) continue;
    if (EXTENSIONS.some((ext) => entry.endsWith(ext))) scanFile(full);
  }
  scannedDirs.push("<root files>");
}

const reportDir = join(ROOT, "reports");
mkdirSync(reportDir, { recursive: true });
const reportPath = join(reportDir, "safe-wrap-report.md");

const header =
  `# safe-wrap report\n\n` +
  `Generated: ${new Date().toISOString()}\n` +
  `Scanned: ${scannedDirs.join(", ")}\n` +
  `Patterns: ${PATTERNS.map((p) => "`" + p.name + "`").join(", ")}\n\n`;

let body: string;
if (hits.length === 0) {
  body = `**Status:** clean — no legacy word-break patterns found.\n`;
} else {
  body =
    `**Status:** ${hits.length} occurrence(s) found. Replace with \`safe-wrap\`.\n\n` +
    `| File | Line | Pattern | Snippet |\n| --- | --- | --- | --- |\n` +
    hits
      .map(
        (h) =>
          `| \`${h.file}\` | ${h.line} | \`${h.pattern}\` | \`${h.snippet
            .replace(/\|/g, "\\|")
            .slice(0, 120)}\` |`,
      )
      .join("\n") +
    "\n";
}

writeFileSync(reportPath, header + body);

if (hits.length === 0) {
  console.log(`safe-wrap: clean. Report → ${relative(ROOT, reportPath)}`);
  process.exit(0);
}

console.log(`safe-wrap: ${hits.length} occurrence(s) found.`);
for (const h of hits) console.log(`  ${h.file}:${h.line}  [${h.pattern}]`);
console.log(`\nReport → ${relative(ROOT, reportPath)}`);
process.exit(1);

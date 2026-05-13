import { test, expect } from "@playwright/test";

/**
 * Visual + runtime style guard for public pages.
 * Asserts that no element on the rendered page applies a vibrant gradient
 * background-image or a colored text-shadow. Logo (gradient text) is excluded.
 */

const ROUTES = [
  "/",
  "/agencia",
  "/produtos",
  "/conteudos",
  "/blog",
  "/contato",
];

const FORBIDDEN_GRADIENT_COLORS = [
  "rgb(34, 211, 238)",   // cyan-400
  "rgb(192, 132, 252)",  // purple-400
  "rgb(244, 114, 182)",  // pink-400
];

for (const route of ROUTES) {
  test(`no neon shadows / disallowed gradients on ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });

    const findings = await page.evaluate(() => {
      const out: { selector: string; reason: string; value: string }[] = [];
      const all = document.querySelectorAll<HTMLElement>("body *");
      const ALLOW_CLASS = ["gradient-accent-text", "gradient-accent-bg", "fluxrow-logo"];

      all.forEach((el) => {
        if (ALLOW_CLASS.some((c) => el.classList.contains(c))) return;
        // Skip inside the logo
        if (el.closest("[data-logo='true']")) return;

        const cs = getComputedStyle(el);
        const bgi = cs.backgroundImage;
        if (bgi && /linear-gradient|radial-gradient/.test(bgi)) {
          if (/rgb\(\s*(2[0-9]{2}|1[5-9][0-9])/.test(bgi)) {
            out.push({ selector: el.tagName + "." + el.className.slice(0, 40), reason: "gradient", value: bgi.slice(0, 200) });
          }
        }
        const ts = cs.textShadow;
        if (ts && ts !== "none" && !/rgba?\(\s*0\s*,\s*0\s*,\s*0/.test(ts)) {
          out.push({ selector: el.tagName + "." + el.className.slice(0, 40), reason: "textShadow", value: ts });
        }
      });
      return out;
    });

    expect(findings, JSON.stringify(findings, null, 2)).toEqual([]);

    // Snapshot for visual diff (created on first run, compared after)
    await expect(page).toHaveScreenshot(`${route.replace(/\W+/g, "_") || "home"}.png`, {
      fullPage: false,
      animations: "disabled",
      maxDiffPixelRatio: 0.03,
    });
  });
}

import { defineConfig, devices } from "@playwright/test";

/**
 * Visual smoke tests for the public site.
 * Run locally / in CI with: `npx playwright test`
 *
 * Requires the dev server on http://localhost:8080 (vite default for this repo).
 */
export default defineConfig({
  testDir: "./e2e",
  timeout: 30_000,
  expect: { toMatchSnapshot: { maxDiffPixelRatio: 0.02 } },
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:8080",
    viewport: { width: 1280, height: 800 },
    colorScheme: "dark",
  },
  projects: [{ name: "chromium", use: devices["Desktop Chrome"] }],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:8080",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});

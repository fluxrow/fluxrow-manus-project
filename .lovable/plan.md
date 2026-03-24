

## AI Operator Kit — Sales Funnel Implementation

### What changes

| File | Action |
|------|--------|
| `src/pages/AIOperatorKitSales.tsx` | **Create** — Short-form sales page |
| `src/App.tsx` | **Update** — `/kit` → Sales page, `/kit/content` → Product page |

### Sales Page (`AIOperatorKitSales.tsx`)

Same design system as the product page — dark `#080807`, `Instrument Serif` headings, `DM Mono` labels, `Inter` body, `#c8f000` accent. Restrained `framer-motion` fade/slide-up on scroll (no bouncy or flashy effects).

**Design guardrails to keep it premium Fluxrow:**
- Max-width `860px` centered, same as product page
- Generous whitespace between sections (64-80px padding)
- Subtle `1px solid #222220` dividers between sections
- No gradients, no cards with shadows, no generic SaaS patterns
- Typography-driven hierarchy: large serif headlines, mono labels, light sans body
- CTA buttons: `#c8f000` background, dark text, no rounded-full pills — squared-off with slight radius

**7 sections:**

1. **Hero** — Mono tag "AI OPERATOR STARTER KIT" + serif headline "Build the AI system that runs your content, DMs, and sales." + 1-line subheadline + "Get the Kit — $27" CTA button → `[INSERT_LEMON_SQUEEZY_LINK]`

2. **Problem** — 2-3 short paragraphs. Tools without a system, random prompts, inconsistent output, DMs that don't convert. Direct practitioner tone.

3. **What's Inside** — 6 benefit blocks in a 2-column grid (1-col on mobile). Each block: mono number/label + serif title + 1-line benefit. Blocks: System Architecture, AI Brain, Content Queue, Hook+Content System, DM Sales Engine, 7-Day Launch Checklist.

4. **Social Proof** — Stats row (120+, 850+, $0) with numbers slightly smaller than product page. Below: "Built from real implementation work." as a prominent line in accent-adjacent color, visually elevated (larger font, not buried).

5. **Who It's For / Not For** — Two-column layout. Clean ✓/✗ lists. Non-aggressive, non-defensive tone.

6. **Price Block** — $27 large serif number. Value stack list (prompts, templates, DM scripts, architecture, checklist). Reinforcing line: "Built to be used this week, not admired later." Two CTAs on mobile (`md:hidden` second instance at bottom). → `[INSERT_LEMON_SQUEEZY_LINK]`

7. **Footer** — `FLUXROW · 2026`, mono, muted.

### Routing (`App.tsx`)

- Add lazy import: `const AIOperatorKitSales = React.lazy(() => import("./pages/AIOperatorKitSales"))`
- Change line 111: `/kit` → `<AIOperatorKitSales />`
- Add new route: `/kit/content` → `<AIOperatorKit />`

### Post-implementation

- Replace `[INSERT_LEMON_SQUEEZY_LINK]` in `AIOperatorKitSales.tsx` with real checkout URL
- Product page at `/kit/content` preserved as-is, to be refined later


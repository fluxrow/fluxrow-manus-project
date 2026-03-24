import { useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

const AIOperatorKit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080807", color: "#e8e6df", fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 300, lineHeight: 1.7 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');
        .kit-page * { box-sizing: border-box; margin: 0; padding: 0; }
        .kit-page { max-width: 860px; margin: 0 auto; padding: 0 28px 120px; }
        .kit-serif { font-family: 'Instrument Serif', Georgia, serif; }
        .kit-mono { font-family: 'DM Mono', monospace; }
        .kit-accent { color: #c8f000; }
        .kit-muted { color: #6b6960; }
        .kit-faint { color: #3a3a36; }
        .kit-surface { background: #111110; }
        .kit-surface2 { background: #181816; }
        .kit-border { border-color: #222220; }
        .kit-border2 { border-color: #2e2e2a; }

        .kit-chapter-item:hover .kit-chapter-title { color: #c8f000; }
        .kit-step:hover { border-color: #2e2e2a; }
        .kit-tool-card:hover { border-color: #2e2e2a; }

        .kit-page a { color: #c8f000; text-decoration: none; font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.05em; }
        .kit-page a:hover { text-decoration: underline; }

        .kit-path-tag { font-family: 'DM Mono', monospace; font-size: 9px; letter-spacing: 0.08em; padding: 2px 8px; border-radius: 3px; border: 1px solid; display: inline-flex; align-items: center; gap: 4px; }
        .kit-path-fast { color: #c8f000; border-color: #2a4400; }
        .kit-path-stable { color: #60a0c0; border-color: #1a3040; }
        .kit-path-scale { color: #b080e0; border-color: #2a1a40; }

        @media(max-width:600px) {
          .kit-chapter-grid { grid-template-columns: 1fr !important; }
          .kit-diagram-row { flex-direction: column !important; }
          .kit-diagram-arrow { transform: rotate(90deg); }
          .kit-path-grid { grid-template-columns: 1fr !important; }
          .kit-dm-msg { grid-template-columns: 1fr !important; }
          .kit-workflow-node { grid-template-columns: 32px 1fr !important; }
          .kit-wf-type { display: none !important; }
          .kit-proof-row { gap: 24px !important; }
          .kit-glossary-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="kit-page">
        {/* NAV */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 0", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase" }}>
            FLUXROW / <span className="kit-accent">AI Operator Kit</span>
          </div>
          <div style={{ background: "#0f1f00", border: "1px solid #2a4400", color: "#c8f000", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 100 }}>
            v3.0 — 2026
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 1. HERO */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ padding: "80px 0 72px", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#6b6960", textTransform: "uppercase", marginBottom: 32 }}>
            The field manual for modern operators
          </div>
          <h1 className="kit-serif" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.0, letterSpacing: "-0.01em", marginBottom: 24, fontWeight: 400 }}>
            Build AI systems<br />that actually <em className="kit-accent" style={{ fontStyle: "italic" }}>run.</em>
          </h1>
          <p style={{ fontSize: 18, fontWeight: 300, color: "#999", maxWidth: 580, lineHeight: 1.65, marginBottom: 48 }}>
            Not another prompt collection. Not a course. A complete execution kit — one system, three paths, you pick what fits.
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, padding: "32px 0", borderTop: "1px solid #222220", borderBottom: "1px solid #222220", marginBottom: 32 }}>
            {[
              { num: "120+", label: "automations delivered" },
              { num: "850+", label: "leads generated" },
              { num: "3", label: "execution paths" },
              { num: "$0", label: "ad spend required" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div className="kit-serif" style={{ fontSize: "clamp(20px,3vw,28px)", color: "#e8e6df", marginBottom: 4 }}>{s.num}</div>
                <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.1em", color: "#6b6960", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Path selector */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { icon: "⚡", name: "Fast Path", desc: "Launch this week. Lowest friction.", color: "#c8f000", border: "#2a4400" },
              { icon: "🔁", name: "Stable Path", desc: "Repeatable. Dependable.", color: "#60a0c0", border: "#1a3040" },
              { icon: "📈", name: "Scale Path", desc: "Advanced. Automated.", color: "#b080e0", border: "#2a1a40" },
            ].map((p, i) => (
              <div key={i} style={{ flex: "1 1 200px", background: "#111110", border: `1px solid ${p.border}`, borderRadius: 8, padding: "18px 20px" }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: p.color, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#6b6960" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 2. POSITIONING BLOCK */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="—" title={<>One system. Three paths.<br /><em className="kit-accent" style={{ fontStyle: "italic" }}>You pick what fits.</em></>}
          intro="Most AI guides force one tool or one level. They teach you n8n or they teach you ChatGPT — and you're stuck on their path. This kit teaches the system first. Then you choose how to execute each layer based on your speed, skill, and goals.">

          <P>Every execution mode builds on the same architecture. The only difference is how you run each layer.</P>

          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Fastest to launch. Lowest friction. Best for beginners. Use Claude directly, browser tools, zero-cost setup. Go from zero to running this week.", time: "1–2 hours total" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Cleaner, more repeatable. Better for consistent daily operations. Good for solo operators who want a dependable setup they can trust.", time: "Half a day" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "More robust. Better for advanced workflows, teams, or heavier operations. Agents, APIs, orchestration layers.", time: "1–2 days" },
          ]} />

          <MistakeBlock text="You don't have to pick one path for everything. You can run your Brain on Stable Path and your Content Queue on Fast Path. The system is modular — upgrade each layer independently when it makes sense." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 3. TABLE OF CONTENTS */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: "24px 28px", margin: "48px 0" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase", marginBottom: 16 }}>
            What's inside
          </div>
          <div className="kit-chapter-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 32px" }}>
            {[
              { num: "01", title: "Start Here" },
              { num: "06", title: "When To Use What" },
              { num: "02", title: "The System" },
              { num: "07", title: "Prompt Library" },
              { num: "03", title: "Choose Your Path" },
              { num: "08", title: "Operator Repository" },
              { num: "04", title: "Execution" },
              { num: "09", title: "Launch Plan" },
              { num: "05", title: "Revenue Math" },
              { num: "10", title: "What Comes Next" },
            ].map((c, i) => (
              <a key={i} href={`#chapter-${c.num}`} className="kit-chapter-item" style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "5px 0", textDecoration: "none", borderBottom: "1px solid #222220" }}>
                <span className="kit-mono" style={{ fontSize: 10, color: "#3a3a36", flexShrink: 0, width: 24 }}>{c.num}</span>
                <span className="kit-chapter-title" style={{ fontSize: 13, color: "#999", transition: "color 0.15s" }}>{c.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 4. START HERE */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="01" title={<>Start <em className="kit-accent" style={{ fontStyle: "italic" }}>here</em></>}
          intro="How to use this kit, what the terms mean, and three ways to read it depending on where you are right now.">

          <H3>Three ways to read this</H3>
          <Steps items={[
            { title: "I need to launch something now", body: "Go straight to the Launch Plan (section 09). Set up the Fast Path. Come back for depth later." },
            { title: "I want to understand the system first", body: "Read sections 02–04 in order. This gives you the full architecture before any tool decisions." },
            { title: "I already have a system and want to upgrade", body: "Jump to Choose Your Path (section 03) and When To Use What (section 06). Find where your current setup sits and what to change." },
          ]} />

          <H3>Glossary</H3>
          <div className="kit-glossary-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, margin: "20px 0" }}>
            {[
              { term: "Brain", def: "Your AI's system prompt — the voice, rules, and intelligence layer that makes output sound like you, not a robot." },
              { term: "Queue", def: "Your content pipeline. Where ideas go in and scheduled posts come out. The editorial backbone." },
              { term: "Operator", def: "You. The person running the system. An operator builds, maintains, and improves the machine." },
              { term: "Skill", def: "A reusable prompt or workflow template. A skill file does one thing well and can be called repeatedly." },
              { term: "Agent", def: "An AI that acts semi-autonomously. Reads input, makes decisions, produces output with minimal oversight." },
              { term: "Path", def: "Your chosen execution mode — Fast, Stable, or Scale. Each path runs the same system differently." },
              { term: "Vault", def: "Your operator repository. The collection of skills, prompts, templates, and references you accumulate over time." },
              { term: "Publisher", def: "The layer that takes finished content and puts it live — manually, via scheduler, or via automation." },
            ].map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ background: "#111110", border: "1px solid #222220", borderRadius: 8, padding: "16px 20px" }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#c8f000", marginBottom: 4 }}>{g.term}</div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{g.def}</div>
              </motion.div>
            ))}
          </div>

          <QuickWin text="Bookmark this section. Come back to the glossary any time a term feels unfamiliar. The whole kit uses these terms consistently." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 5. THE SYSTEM */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="02" title={<>The <em className="kit-accent" style={{ fontStyle: "italic" }}>system</em></>}
          intro="Before tools, before tactics. This is the architecture. Every AI content and sales system has five layers. Understand them first — then choose how to execute each one.">

          <P>Most people start with tools. They pick ChatGPT, learn an automation platform, set up a DM bot — and wonder why nothing connects. That's backwards.</P>
          <P>The system is tool-agnostic. The logic matters more than the software. Tools change. Systems persist.</P>

          {/* System Diagram */}
          <div style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: 32, margin: "32px 0", overflowX: "auto" }}>
            <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase", marginBottom: 24 }}>
              Full stack — content to revenue
            </div>
            <div className="kit-diagram-row" style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 540 }}>
              {[
                { layer: "Layer 1", name: "Brain", desc: "Voice & intelligence" },
                { layer: "Layer 2", name: "Queue", desc: "Planning & scheduling" },
                { layer: "Layer 3", name: "Publisher", desc: "Creation & distribution" },
                { layer: "Layer 4", name: "DM Engine", desc: "Conversations & sales" },
                { layer: "Layer 5", name: "Revenue", desc: "Checkout & delivery" },
              ].map((n, i) => (
                <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
                  <div style={{ flex: 1, background: i === 0 ? "#0d1800" : "#181816", border: `1px solid ${i === 0 ? "#2a4400" : "#2e2e2a"}`, borderRadius: 6, padding: "16px 12px", textAlign: "center" }}>
                    <div className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{n.layer}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#e8e6df", marginBottom: 4 }}>{n.name}</div>
                    <div style={{ fontSize: 11, color: "#6b6960" }}>{n.desc}</div>
                  </div>
                  {i < 4 && <div className="kit-diagram-arrow" style={{ display: "flex", alignItems: "center", padding: "0 8px", color: "#3a3a36", fontSize: 20, flexShrink: 0 }}>→</div>}
                </div>
              ))}
            </div>
          </div>

          <H3>How the layers connect</H3>
          <Steps items={[
            { title: "Brain → defines what your AI knows", body: "Your voice, your audience, your rules. Every other layer draws from this. A weak brain produces generic content no matter what tools you use." },
            { title: "Queue → organizes what gets made", body: "Topics, status, publishing dates. Without a queue, you reinvent your content strategy every morning." },
            { title: "Publisher → puts content into the world", body: "Manual posting, schedulers, or automation. This layer handles the last mile from draft to live." },
            { title: "DM Engine → turns attention into conversations", body: "Comment triggers, keyword responses, conversation sequences. This is where organic reach becomes pipeline." },
            { title: "Revenue → converts conversations into money", body: "Checkout links, delivery systems, follow-up sequences. The final layer where trust becomes transaction." },
          ]} />

          <Callout text="You don't need all five layers on day one. Start with Brain + Queue. Add the other layers as you grow. The architecture stays the same — you just activate more of it." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 6. CHOOSE YOUR PATH */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="03" title={<>Choose your <em className="kit-accent" style={{ fontStyle: "italic" }}>path</em></>}
          intro="This is the core decision framework. Each path runs the same five-layer system — differently. Be honest about where you are. You can always upgrade.">

          <H3>Honest comparison</H3>
          <PathComparison />

          <H3>Which path matches you?</H3>
          <ActionBlock type="quick diagnostic" items={[
            "I've never automated anything before → ⚡ Fast Path",
            "I want to launch something this week with zero setup → ⚡ Fast Path",
            "I want a clean, repeatable process I can rely on daily → 🔁 Stable Path",
            "I've used AI tools before but my workflow is messy → 🔁 Stable Path",
            "I'm running a team or client operations → 📈 Scale Path",
            "I need advanced automation with agents and APIs → 📈 Scale Path",
          ]} />

          <DoThisNow text="Pick your starting path right now. Write it down. Don't overthink it. You can mix paths across layers and upgrade anytime. The important thing is to start." />

          <MistakeBlock text="Picking Scale Path because it sounds impressive when you haven't validated your content yet. Start Fast. Prove the system works for your audience. Then build infrastructure around what's already working." />

          <H3>Path details</H3>
          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Use ChatGPT or Claude directly in browser. Google Sheets for queue. Manual posting. Manual DMs. Zero monthly cost. Zero technical skill required.", time: "Live in 1–2 hours" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Claude Projects or Custom GPTs. Notion/Airtable database. Scheduler for posting. ManyChat for DM triggers. Clean, organized, repeatable.", time: "Live in half a day" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "API-connected AI. Automation platform for orchestration. Full CRM integration. Agents handling content generation and DM qualification.", time: "Live in 1–2 days" },
          ]} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 7. EXECUTION */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="04" title={<>Execution <em className="kit-accent" style={{ fontStyle: "italic" }}>layers</em></>}
          intro="Each layer of the system, explained practically. What it is, how it works on each path, and what to do right now.">

          {/* Layer 1: Brain */}
          <H3>Layer 01 — The Brain</H3>
          <P>Your voice, your rules, your prompts. The brain is a system prompt — the most important asset you'll build. A weak brain produces generic content. A strong brain produces content that sounds exactly like you.</P>

          <Steps items={[
            { title: "Identity — who is speaking", body: "Name, brand, what you do, who you serve. The AI needs context before it can write in character." },
            { title: "Audience — who is listening", body: "Be specific. \"Solo operators who want to use AI to replace 10 hours of manual work per week\" is someone the AI can write to." },
            { title: "Tone rules — how it sounds", body: "List what to do AND what to avoid. \"No emojis. No hype words. Write like a practitioner, not a marketer.\"" },
            { title: "Output format — what to produce", body: "Slide count, character limits, structure. Precision here means less editing later." },
          ]} />

          <PromptBlock type="Copy This — System Prompt Brain v1" content={`You are a content operator for [YOUR BRAND NAME].

IDENTITY:
You create content about [YOUR TOPIC] for [YOUR AUDIENCE] who want to [DESIRED OUTCOME].

AUDIENCE:
[Describe your ideal reader in 2-3 specific sentences. What do they struggle with? What have they tried? What are they skeptical about?]

VOICE & TONE:
- Direct. Short sentences. No filler.
- Write like a practitioner sharing what works, not a marketer selling a dream.
- Active voice. Specific over general. One idea per sentence.
- Never use: game-changing, revolutionary, unleash, unlock your potential, transform, empower
- No emojis unless explicitly requested.
- Treat the reader like an intelligent adult.

OUTPUT FORMAT — CAROUSEL (default unless told otherwise):
SLIDE 1 — HOOK
Headline: [max 8 words — bold claim or counterintuitive insight]
Body: [1 sentence that earns the headline — no fluff]

SLIDES 2–6 — CONTENT
Headline: [max 7 words]
Body: [1–2 sentences. One concrete idea. No padding.]

SLIDE 7 — CTA
Headline: Want the full system?
Body: Comment SYSTEM below. I'll send you the complete breakdown.

RULES:
- If you run out of real ideas before slide 6, stop at 5. Never pad.
- Each slide stands alone.
- No slide repeats information from another.
- Output slides only. No preamble.`} />

          <H3Sub>Where to deploy your brain — by path</H3Sub>
          <ToolGrid items={[
            { name: "Claude.ai — Projects", desc: "Paste your brain as the Project instruction. Every chat inherits it. Zero setup, zero cost. Best starting point.", tags: [{ label: "FREE", type: "free" }, { label: "FAST PATH", type: "fast" }], href: "https://claude.ai" },
            { name: "Anthropic API — system_prompt field", desc: "Pass brain as system_prompt on every API call in n8n. claude-sonnet-4 recommended. ~$0.003/1K tokens.", tags: [{ label: "PAY PER USE", type: "paid" }, { label: "STABLE PATH", type: "stable" }], href: "https://console.anthropic.com" },
            { name: "Obsidian Skills + Claude Code", desc: "Brain stored as a .md skill file, loaded dynamically by agents. Versioned, reusable, composable with other skills.", tags: [{ label: "SCALE PATH", type: "scale" }], href: "https://obsidian.md" },
          ]} />

          <MistakeBlock text="Writing a brain once and never updating it. After 10–20 outputs, review what you edited most. Update the brain to prevent those edits. A good brain improves continuously. It's a living document, not a config file you set once." />

          {/* Layer 2: Queue */}
          <H3>Layer 02 — Queue</H3>
          <P>The queue is your editorial calendar, content tracker, and production database in one. It exists to answer one question at any moment: <strong>what's the next piece of content, and what state is it in?</strong></P>

          <H3Sub>Queue setup by path</H3Sub>
          <PathIndicator path="fast" />
          <P>A simple Notion database. 5 columns: Title, Status, Hook, Content, Publish Date. No automations. You update it manually. That's fine — the goal is to build the habit, not the system.</P>

          <PathIndicator path="stable" />
          <P>Airtable with 8 fields (below). n8n reads from and writes to it automatically. Status changes trigger downstream actions. This is the core of the Stable Path operation.</P>

          <PathIndicator path="scale" />
          <P>Airtable or Supabase (Postgres) depending on volume and team size. Supabase unlocks real-time triggers, row-level security, and custom queries that Airtable can't handle at scale.</P>

          <TableWrap headers={["Field", "Type", "Purpose", "Path"]} rows={[
            ["Title", "Text", "Topic in one line. The brief for Claude.", "All"],
            ["Status", "Select", "Idea → Drafting → Review → Approved → Scheduled → Published", "All"],
            ["Hook", "Text", "Slide 1 only. The scroll-stopper. Claude fills this.", "All"],
            ["Content", "Long text", "Full Claude output — all slides.", "All"],
            ["Caption", "Long text", "Instagram caption. Separate Claude call.", "Stable+"],
            ["Publish Date", "Date", "n8n reads this to trigger scheduling.", "Stable+"],
            ["Platform", "Select", "Instagram / X / LinkedIn. Enables multi-platform.", "Stable+"],
            ["Notes", "Text", "Editing notes. What you changed. Improves the brain over time.", "All"],
          ]} />

          <ToolGrid items={[
            { name: "Notion", desc: "Fastest queue setup. Free tier is enough. No API needed for Fast Path. Best starting queue.", tags: [{ label: "FREE", type: "free" }, { label: "FAST PATH", type: "fast" }], href: "https://notion.so" },
            { name: "Airtable", desc: "Best n8n integration. Clean API. Free tier handles 1,000 records. The queue for Stable Path operators.", tags: [{ label: "FREE TIER", type: "free" }, { label: "STABLE PATH", type: "stable" }], href: "https://airtable.com" },
            { name: "Supabase", desc: "Postgres at scale. Real-time triggers, row-level security. For teams or high-volume operations.", tags: [{ label: "FREE TIER", type: "free" }, { label: "SCALE PATH", type: "scale" }], href: "https://supabase.com" },
          ]} />

          {/* Layer 2b: Content Creation */}
          <H3>Layer 02b — Content Creation</H3>
          <P>The content factory. Claude generates the raw content; you (or automation) formats and schedules it. The three-part formula for every carousel that works:</P>

          <Steps items={[
            { title: "HOOK — Stop the scroll", body: "Three patterns that consistently work: counterintuitive claim (\"The reason your AI sounds generic is your prompt, not the model\"), specific result (\"How we generated 850 leads with $0 in ads\"), or bold problem (\"You don't have an AI problem. You have a system problem.\")." },
            { title: "TEACH — Slides 2–6, one idea per slide", body: "The rule: if you can't explain the slide in a single sentence of body copy, the idea isn't clear enough. Cut it or split it. Density kills carousels. Clarity wins." },
            { title: "CTA — The ask must feel inevitable", body: "\"Comment SYSTEM below\" works because it's low friction, specific, and triggers the DM engine automatically. The CTA is not a request — it's the obvious next step for someone who just got value from slides 1–6." },
          ]} />

          <H3Sub>Execution by path</H3Sub>
          <PathIndicator path="fast" />
          <P>Open Claude.ai in your Project. Type: "Write a carousel about: [topic from your queue]." Copy the output. Paste into Canva. Design 7 slides using your template. Export PNG. Post manually or via Buffer.</P>

          <PathIndicator path="stable" />
          <P>n8n runs daily at 8am. Pulls 3 "Idea" records from Airtable. Calls Claude API with your brain prompt + title. Gets carousel + caption back. Writes to Airtable. You get a notification: "3 drafts ready." You review in 20 minutes, approve, set Publish Date. Buffer publishes on schedule.</P>

          <PathIndicator path="scale" />
          <P>Claude Code + Skills architecture. The content agent reads from the queue, generates using your skill files, evaluates against quality criteria autonomously, and only surfaces content that passes. Human review becomes exception-based, not default.</P>

          <ToolGrid items={[
            { name: "Canva", desc: "Build one carousel template. Duplicate per post. Brand Kit keeps it consistent. Export PNG slides. Free tier is enough for Fast Path.", tags: [{ label: "FREE TIER", type: "free" }, { label: "FAST PATH", type: "fast" }], href: "https://canva.com" },
            { name: "n8n", desc: "Orchestrates the full content pipeline — trigger, generate, save, notify, schedule. Self-host on Railway (~$5/mo) or n8n Cloud ($20/mo).", tags: [{ label: "$0–20/MO", type: "paid" }, { label: "STABLE PATH", type: "stable" }], href: "https://n8n.io" },
            { name: "Railway (n8n hosting)", desc: "Deploy self-hosted n8n in 5 minutes. Free tier available. ~$5/mo for always-on. Best cost-control balance.", tags: [{ label: "FREE TIER", type: "free" }, { label: "STABLE PATH", type: "stable" }], href: "https://railway.app" },
          ]} />

          <MistakeBlock text="Hooks that get likes but zero DMs. If your hook isn't connected to a pain point your offer solves, it drives engagement without revenue. Always tie the hook back to the CTA." />

          {/* Layer 3: Publisher */}
          <H3>Layer 03 — Publisher</H3>

          <H3Sub>Publishing by path</H3Sub>
          <PathIndicator path="fast" />
          <P>Post manually, or use Buffer's free tier to schedule up to 10 posts. Connect Instagram once. Upload your slides and caption. Schedule. Done. This works fine until you're posting 7+ times per week.</P>

          <PathIndicator path="stable" />
          <P>n8n sends approved posts to Buffer via API on the publish date in Airtable. Zero manual uploading. Buffer handles the actual Instagram delivery. Update Status to "Scheduled" automatically.</P>

          <PathIndicator path="scale" />
          <P>Meta Content Publishing API directly — no third-party dependency. Requires Facebook Developer account, Instagram Business, and access token. 100% autonomous once configured.</P>

          <ToolGrid items={[
            { name: "Buffer", desc: "Free tier: 3 channels, 10 scheduled posts. $6/mo for unlimited. Clean API. Best starting scheduler.", tags: [{ label: "FREE TIER", type: "free" }, { label: "FAST PATH", type: "fast" }, { label: "STABLE PATH", type: "stable" }], href: "https://buffer.com" },
            { name: "Meta Content Publishing API", desc: "Direct publish to Instagram. Free. Requires Business account + Developer setup. Fully autonomous. No third-party dependency.", tags: [{ label: "FREE", type: "free" }, { label: "SCALE PATH", type: "scale" }], href: "https://developers.facebook.com/docs/instagram-api/guides/content-publishing" },
          ]} />

          {/* Layer 4: DM Engine */}
          <H3>Layer 04 — DM Engine</H3>
          <P>When someone comments your keyword, ManyChat intercepts it, fires a public reply, and starts the DM sequence. This is the highest-leverage automation in this entire stack. Every post becomes a conversion opportunity.</P>

          <ToolGrid items={[
            { name: "ManyChat", desc: "Official Meta partner. No ban risk. Free tier handles 1,000 contacts — enough to validate the entire funnel before paying. Industry standard.", tags: [{ label: "FREE — 1K CONTACTS", type: "free" }, { label: "$15/MO PRO", type: "paid" }, { label: "ALL PATHS", type: "key" }], href: "https://manychat.com" },
          ]} />

          <H3Sub>The 5-message sequence — ready to use</H3Sub>
          <DMThread messages={[
            { label: "Public", timing: "Instant\nvisible under post", text: "Sent it to your DMs 👊", tag: "IG_COMMENT_SYSTEM", isBot: false },
            { label: "DM 1", timing: "Instant", text: "Hey — saw your comment.\n\nI'm sending you the breakdown right now.\nGive me one second.", tag: "IG_DM_OPENED", isBot: false },
            { label: "DM 2", timing: "60 sec later", text: "Most people who try to build AI systems fail at the same point.\n\nThey start with the tool. They pick something, watch a tutorial, build something that works once — then it breaks, or they can't repeat it, or they don't know what comes next.\n\nThe problem isn't the tool. It's that they built a workflow without a system underneath it.\n\nA real system has three parts: a brain (what the AI knows and how it thinks), a queue (what it needs to do and when), and an output layer (what actually gets published or sent).\n\nMost people only have the output layer. Almost nobody has the brain and the queue.\n\nThe AI Operator Kit fixes that.", tag: "IG_SAMPLE_SENT", isBot: true },
            { label: "DM 3", timing: "3 min later", text: "Here's what's inside:\n\n→ The full system architecture — 5 layers, tool-agnostic\n→ Three operating paths: Fast, Stable, Scale — you choose your level\n→ A ready-to-use brain prompt you run today\n→ Content queue setup for Notion, Airtable, or Supabase\n→ The complete ManyChat DM sequence (this one you're reading)\n→ 15 prompts — carousels, captions, hooks, DM replies, audits\n→ The \"When to use what\" decision layer — Claude vs agents vs automation\n→ Skills for the Operator Repository — reusable, versioned, ready\n→ Launch plan and revenue math\n\nThis is what we built from 120+ real automation projects.\nNot theory. A field kit you open and execute.", tag: "IG_LOW_TICKET_PITCHED", isBot: false },
            { label: "DM 4", timing: "5 min later", text: "It's $27.\n\n→ [YOUR CHECKOUT LINK]\n\nThe price is low on purpose. The kit earns your trust through what it delivers — not what it costs.", tag: "IG_PURCHASE_CLICK", isBot: true },
            { label: "DM 5", timing: "24h later\nif no click", text: "Hey — just checking if you had any questions before deciding.\n\nHappy to clarify anything. No pressure.", tag: "IG_FOLLOWUP_SENT", isBot: false },
          ]} />

          <H3>Objection handling — copy-ready</H3>
          <TableWrap headers={["Objection", "Response"]} rows={[
            ["\"Is this a course?\"", "\"No — it's a field guide. No videos, no modules. Open it, follow the steps, build your system this week.\""],
            ["\"I'm not technical\"", "\"The Fast Path requires zero technical skills. Just AI prompts and templates you copy-paste.\""],
            ["\"Will this work for my niche?\"", "\"The system is niche-agnostic. The architecture works the same — you fill in your topic, audience, and offer.\""],
            ["\"$27 seems too cheap\"", "\"It's priced to remove risk. If the first chapter alone doesn't save you 5 hours, I've failed.\""],
            ["\"I'll think about it\"", "\"Take your time. No pressure.\""],
          ]} />

          <MistakeBlock text="Automating before you know what converts. Run the first 20 conversations manually. See which messages get replies, which get ignored. Then automate what works." />

          {/* Layer 5: Revenue */}
          <H3>Layer 05 — Revenue</H3>
          <P>Where the system becomes money. This layer connects your DM engine to actual transactions.</P>

          <Steps items={[
            { title: "DM → Checkout", body: "Direct link in DM sequence. Best for low-ticket ($10-$50). Minimal friction, highest conversion." },
            { title: "DM → Call", body: "Book-a-call link for high-ticket services ($500+). DM sequence qualifies, calendar handles booking." },
            { title: "Content → Link in bio", body: "For passive sales. Every piece of content points to the same link. Lower conversion, broader reach." },
          ]} />

          <H3>Tool costs (monthly)</H3>
          <TableWrap headers={["Layer", "⚡ Fast", "🔁 Stable", "📈 Scale"]} rows={[
            ["AI Brain", "Free (browser)", "Free (Custom GPT/Project)", "~$3 (API)"],
            ["Queue", "Free (Sheets)", "Free (Notion/Airtable)", "Free (Airtable)"],
            ["Publishing", "Free (manual)", "$6 (Buffer)", "$25 (automation)"],
            ["DM Engine", "Free (manual)", "$15 (ManyChat)", "$15 (ManyChat Pro)"],
            ["Checkout", "Free (Gumroad/LS)", "Free (5% fee)", "Free (5% fee)"],
            ["Total monthly", "$0", "~$21", "~$43"],
          ]} />

          <Callout text="The system pays for itself with 1-2 sales per month. Everything after that is profit. Start on Fast Path at $0, upgrade when revenue covers the costs." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 8. REVENUE MATH */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="05" title={<>Revenue <em className="kit-accent" style={{ fontStyle: "italic" }}>math</em></>}
          intro="Conservative numbers. No hype. Real conversion logic based on organic reach, keyword DMs, and low-ticket checkout.">

          <H3>The conversion path</H3>
          <Steps items={[
            { title: "Post with CTA keyword", body: "Content ends with \"Comment SYSTEM below.\" This is the trigger that starts the sales sequence." },
            { title: "Comment triggers DM", body: "Manual or automated — when someone types your keyword, the DM sequence fires." },
            { title: "DM delivers value + link", body: "4-message framework: acknowledge → frame the problem → show what's inside → present checkout link." },
            { title: "Click → purchase", body: "Low-ticket removes the \"let me think about it\" reflex. $27 is an impulse-accessible decision." },
          ]} />

          <H3>Conservative scenario</H3>
          <RevenueBox rows={[
            { label: "Posts per week", value: "5" },
            { label: "Average reach per post", value: "2,000" },
            { label: "Comment rate", value: "2%" },
            { label: "Comments triggering DMs/week", value: "200" },
            { label: "DM → link click rate", value: "35%" },
            { label: "Click → purchase rate", value: "8%" },
            { label: "Sales per week", value: "5.6" },
            { label: "Price per unit", value: "$27" },
            { label: "Weekly revenue", value: "$151", isTotal: false },
            { label: "Monthly revenue (month 1)", value: "$604", isTotal: true },
          ]} />

          <QuickWin text="The one metric that tells you if it's working: DM → link click rate. Above 30% = messaging works. Below 30% = rewrite DM 2 (the value message)." />

          <H3>Low-ticket as trust mechanism</H3>
          <P>The $27 price isn't about maximizing revenue on the first sale. It's about removing friction and building a buyer list. People who buy once are 5-10x more likely to buy again.</P>
          <P>Upsell logic comes later: consulting, done-for-you services, premium kits, coaching. The low-ticket product is the door. What's behind it is where the real revenue lives.</P>

          <UseThisIf text="you're validating a new offer" action="Price it at $17-$27. Run the system for 30 days. If the DM-to-purchase rate is above 5%, you have a validated product. Then build the upsell." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 9. WHEN TO USE WHAT */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="06" title={<>When to use <em className="kit-accent" style={{ fontStyle: "italic" }}>what</em></>}
          intro="A decision framework for tools. Not a recommendation list — a logic map. Use this when you're choosing between approaches.">

          <H3>Tool decision matrix</H3>
          <TableWrap headers={["Scenario", "Best tool", "Why"]} rows={[
            ["Quick content generation", "Claude / ChatGPT (browser)", "Zero setup, high quality, paste brain and go"],
            ["Consistent daily content", "Claude Project / Custom GPT", "Brain persists across sessions, no copy-pasting"],
            ["Batch content at scale", "API + automation platform", "Programmatic, repeatable, hands-off"],
            ["Browser-based research + writing", "Claude with browser agent", "Can read URLs, analyze competitors, write in context"],
            ["DM automation on Instagram", "ManyChat + Meta integration", "Native keyword triggers, proven reliability"],
            ["Multi-step workflow orchestration", "n8n or similar platform", "When you need to chain 3+ tools in sequence"],
            ["Advanced agents / skills", "Claude Code / custom agents", "When you need AI to make decisions, not just generate"],
            ["Simple checkout", "Gumroad / Lemon Squeezy", "Free to start, handles delivery automatically"],
          ]} />

          <Callout text="n8n and orchestration platforms are powerful — but they're not mandatory. Use them when you have repetitive multi-step workflows. Don't add complexity before you have volume." />

          <UseThisIf text="you're doing the same 5-step process more than 3 times per week" action="That's when automation earns its setup cost. Below that threshold, manual is faster and more flexible." />

          <MistakeBlock text="Building a 15-step automation for a workflow you do twice a month. Automation should save time proportional to frequency. If it's rare, keep it manual." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 10. PROMPT LIBRARY */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="07" title={<>Prompt <em className="kit-accent" style={{ fontStyle: "italic" }}>library</em></>}
          intro="Copy-ready prompts organized by function. Replace brackets. Run. Iterate. Every prompt works with ChatGPT, Claude, Gemini, or any capable AI.">

          <H3>Content prompts</H3>

          <PromptBlock type="1. Hook Generator" content={`Write 10 carousel hook ideas for an Instagram account about [YOUR TOPIC].

Rules:
- Each hook must address a real pain point or counterintuitive insight
- Max 8 words per hook
- No emojis, no hype words
- Mix patterns: counterintuitive, bold claim, specific result, pattern interrupt
- Format: numbered list, hooks only`} />

          <PromptBlock type="2. Carousel Writer" content={`Write a 7-slide Instagram carousel about: [TOPIC]

Audience: [YOUR AUDIENCE]. Skeptical. Want real steps. Hate hype.

Format:
SLIDE 1 — HOOK: [max 8 words] + [1 sentence]
SLIDES 2–6 — CONTENT: [max 7 words] + [1–2 sentences. One idea per slide.]
SLIDE 7 — CTA: Want the full system? Comment SYSTEM below.

Tone: direct, peer-to-peer, practitioner. Output slides only.`} />

          <PromptBlock type="3. Caption Writer" content={`Write an Instagram caption for this carousel:

[PASTE CAROUSEL CONTENT]

Rules:
- First line = hook (slide 1 headline, slightly expanded)
- 3–4 short paragraphs max
- End with: "Comment SYSTEM below and I'll send you the full breakdown."
- 6 relevant hashtags (lowercase, no generic ones)
- Tone: peer-to-peer. A practitioner sharing.`} />

          <PromptBlock type="4. Weekly Content Calendar" content={`Create a 7-day content calendar for [YOUR BRAND].

Audience: [YOUR AUDIENCE]. Platform: Instagram (primary), X (secondary).

For each day:
- Content type (carousel, single image, reel)
- Topic (1 line)
- Hook (max 8 words)
- Angle (1 sentence)

Mix: 4 carousels, 2 single images, 1 reel.`} />

          <H3>Audit prompts</H3>

          <PromptBlock type="5. Content Audit" content={`Analyze my last 10 posts (descriptions below) and tell me:

1. What patterns are working (most engagement)?
2. What patterns are failing?
3. What topics am I missing?
4. What should I double down on next week?

Posts:
[PASTE DESCRIPTIONS OR HOOKS OF YOUR LAST 10 POSTS]`} />

          <PromptBlock type="6. Bio Optimizer" content={`Rewrite this Instagram bio:

Current: [PASTE BIO]

Format:
- Line 1: What you do (max 5 words)
- Line 2: Who you help + the result
- Line 3: Social proof or specific number
- Line 4: CTA`} />

          <H3>Sales / DM prompts</H3>

          <PromptBlock type="7. DM Response Handler" content={`You are handling DMs for [BRAND NAME].

Context: this person commented [KEYWORD] on a post about [TOPIC]. They received the DM sequence and are now replying with questions.

Rules:
- Be helpful, direct, and honest
- If they ask what's inside, list 3-4 key inclusions
- If they say it's too expensive, acknowledge and move on — no discounting
- If they ask for a preview, share ONE specific insight
- Never be pushy. If they say no, thank them
- Keep responses under 3 sentences when possible

Their message: [PASTE DM HERE]`} />

          <PromptBlock type="8. Objection Handler" content={`Write responses to these common objections about [YOUR PRODUCT]:

1. "Is this a course?"
2. "I'm not technical"
3. "Will this work for my niche?"
4. "Seems too cheap"
5. "I'll think about it"

Rules: honest, max 2 sentences each, no pressure, acknowledge the concern before responding.`} />

          <PromptBlock type="9. Testimonial Request" content={`Write a DM asking a client for a testimonial.

Context: I delivered [PROJECT TYPE]. Results: [RESULTS].

Rules: casual, genuine, ask for specifics, offer to draft something they can edit, max 5 sentences.`} />

          <H3>System / operator prompts</H3>

          <PromptBlock type="10. Topic Research" content={`Find the top questions [YOUR AUDIENCE] are asking about [YOUR TOPIC] right now.

For each question, suggest:
1. The question as-is
2. A carousel hook version (max 8 words)
3. The core insight the carousel should deliver

Return 10 results. Numbered list.`} />

          <PromptBlock type="11. Repurpose → X Thread" content={`Convert this Instagram carousel into an X/Twitter thread:

[PASTE CAROUSEL]

Rules:
- Tweet 1 = hook (max 280 chars)
- Tweets 2–7 = one per slide, expanded
- Last tweet = "Full breakdown: [link]"
- No hashtags. Max 240 chars per tweet.
- Format: 1/ 2/ 3/`} />

          <PromptBlock type="12. Product Description" content={`Write a product description for:

Product: [NAME] | Price: [PRICE]
Includes: [LIST] | For: [AUDIENCE]

Format: Headline (max 8 words) → 3 paragraphs (problem → solution → inside) → bullet list (max 8) → trust line.`} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 11. OPERATOR REPOSITORY */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="08" title={<>Operator <em className="kit-accent" style={{ fontStyle: "italic" }}>repository</em></>}
          intro="Your vault. The collection of reusable assets that compound over time. Not a folder dump — a living resource layer.">

          <P>Every operator accumulates assets: prompts that work, templates that convert, workflows that save time. Most people scatter these across apps and browser tabs. The vault centralizes them.</P>

          <H3>What goes in the vault</H3>
          <Steps items={[
            { title: "Skill files", body: "Reusable prompts that do one thing well. Your brain prompt, hook generator, carousel writer — each is a skill file. Name them clearly. Version them." },
            { title: "Prompt templates", body: "Prompts with placeholders for different contexts. A carousel prompt that works for any topic. A DM handler that works for any product." },
            { title: "Workflow references", body: "Step-by-step descriptions of your processes. \"How I publish a carousel\" — the exact steps, tools, and time involved." },
            { title: "Performance notes", body: "What hooks worked best. Which DM message got the most replies. What topics drove sales. This is your institutional memory." },
          ]} />

          <H3>How to organize it</H3>
          <TableWrap headers={["Category", "Examples", "Format"]} rows={[
            ["Brain files", "Content brain, DM brain, sales brain", "Text files with version numbers"],
            ["Content templates", "Carousel, caption, thread, reel script", "Prompt templates with placeholders"],
            ["DM scripts", "Trigger sequence, objection handlers, follow-ups", "Copy-ready message templates"],
            ["Hook bank", "Tested hooks with performance notes", "Spreadsheet with engagement data"],
            ["Workflow docs", "Publishing flow, DM setup, weekly review", "Step-by-step checklists"],
            ["Results log", "Weekly metrics, winning posts, revenue data", "Simple spreadsheet"],
          ]} />

          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "One Google Doc with sections. Copy-paste what you need. Simple, searchable, zero overhead.", time: "10 min setup" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Notion workspace with databases for each category. Linked, tagged, filterable.", time: "30 min setup" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "Version-controlled repository. Prompts accessible via API. Workflow definitions as configuration files.", time: "1 hour setup" },
          ]} />

          <QuickWin text="Start your vault today: create a document, paste your brain prompt, save the 3 prompts you use most, and write down your current publishing workflow in bullet points. 15 minutes." />

          <Callout text="The vault gets more valuable over time. Every week, add what worked and remove what didn't. After 90 days, you'll have a proprietary operating system no one else can replicate." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 12. LAUNCH PLAN */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="09" title={<>Launch <em className="kit-accent" style={{ fontStyle: "italic" }}>plan</em></>}
          intro="Stop reading. Start running. Pick your path, follow the checklist, go live. Each day builds on the previous one.">

          <H3>⚡ Fast Path — launch in 2 hours</H3>
          <Checklist items={[
            { title: "Hour 1 — Build & seed", desc: "Paste brain prompt into ChatGPT/Claude. Replace brackets.\nCreate Google Sheet with 8 queue columns.\nWrite 7 topic titles.\nGenerate first 3 carousels." },
            { title: "Hour 2 — Connect & go live", desc: "Design one Canva carousel template.\nSave DM scripts as quick replies.\nSet up Gumroad/Lemon Squeezy checkout.\nPublish your first post with CTA keyword." },
          ]} />

          <H3>🔁 Stable Path — launch in one day</H3>
          <Checklist items={[
            { title: "Morning — System setup", desc: "Create Claude Project or Custom GPT with brain.\nSet up Notion/Airtable content queue.\nSeed 20 topic ideas.\nGenerate first week of carousels (7 posts)." },
            { title: "Afternoon — Distribution & DMs", desc: "Build reusable Canva template.\nSet up Buffer/Later for scheduling.\nConfigure ManyChat with keyword trigger.\nCreate checkout page with landing page.\nSchedule first 3 posts." },
            { title: "Evening — Test & validate", desc: "Trigger the full flow from a test account.\nComment keyword → receive DM sequence → click link → test checkout.\nFix anything that breaks. Go live tomorrow." },
          ]} />

          <H3>📈 Scale Path — launch in 2 days</H3>
          <Checklist items={[
            { title: "Day 1 — Infrastructure", desc: "Set up API access for your AI provider.\nConfigure automation platform.\nBuild content generation workflow.\nConnect to Airtable queue via API.\nSet up CRM for DM tracking." },
            { title: "Day 2 — Automation & go live", desc: "Build ManyChat flow with qualification logic.\nConnect checkout with follow-up sequences.\nSet up analytics dashboard.\nRun full automated test.\nPublish and monitor for 24 hours." },
          ]} />

          <DoThisNow text="Pick one path from above. Block the time in your calendar — right now. Not tomorrow, not next week. The system works when you run it, not when you read about it." />

          <MistakeBlock text="Day-by-day perfectionism. Your system doesn't need to be perfect on launch day. It needs to be live. Perfect is the enemy of revenue. Launch, measure, iterate." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* 13. WHAT COMES NEXT */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="10" title={<>What comes <em className="kit-accent" style={{ fontStyle: "italic" }}>next</em></>}
          intro="The system is live. Now what? Here's how to grow from first sale to scaled operation.">

          <H3>After your first sales</H3>
          <Steps items={[
            { title: "Validate, don't celebrate", body: "First sales confirm the system works — not that it's optimized. Track DM → click → purchase rates for 2 weeks before changing anything." },
            { title: "Double down on what converts", body: "Look at which hooks drove the most keyword comments. Which DM messages got replies. Do more of what's already working." },
            { title: "Start building your vault", body: "Save every prompt that produced good output. Note which topics drove sales. This is your competitive advantage." },
          ]} />

          <H3>When to upgrade your path</H3>
          <TableWrap headers={["Signal", "Current path", "Upgrade to"]} rows={[
            ["You're consistent for 2+ weeks", "⚡ Fast", "🔁 Stable"],
            ["Copy-pasting brain prompt feels repetitive", "⚡ Fast", "🔁 Stable"],
            ["You're posting 5+/week and selling consistently", "🔁 Stable", "📈 Scale"],
            ["Manual DMs take more than 30 min/day", "🔁 Stable", "📈 Scale"],
            ["You're managing multiple brands or clients", "🔁 Stable", "📈 Scale"],
            ["You need agents to handle parts of the workflow", "📈 Scale", "📈 Scale (advanced)"],
          ]} />

          <H3>The upsell ladder</H3>
          <P>The low-ticket product ($27) is the entry point. Here's what comes after:</P>
          <Steps items={[
            { title: "Low-ticket → trust", body: "$17-$47. Removes risk. Builds buyer list. Proves your system delivers value." },
            { title: "Mid-ticket → depth", body: "$97-$297. Premium kit, workshop, or template pack. Sells to people who already bought and want more." },
            { title: "High-ticket → transformation", body: "$500-$5,000. Consulting, done-for-you setup, or coaching. Sells through calls, not DMs." },
          ]} />

          <UseThisIf text="you have 50+ buyers on your list" action="Launch a mid-ticket offer. You already have trust. A $97-$197 product to your existing buyers will convert at 5-15%. That's $250-$1,500 from one email." />

          <Quote text="The system doesn't need to be perfect. It needs to be live. Then it needs to be measured. Then it needs to be improved. That's the operator cycle." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 4 — WHEN TO USE WHAT */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="P4" title={<>The decision <em className="kit-accent" style={{ fontStyle: "italic" }}>layer</em></>}
          intro="The most common mistake operators make isn't choosing bad tools — it's using the right tool at the wrong time, or using complex tools when simple ones work better. This section is the decision framework.">

          <H3>Use Claude directly when…</H3>
          <DecisionCard
            name="Claude.ai"
            useWhen="Brainstorming, ideation, one-off content, reviewing drafts, live DM responses, testing a new prompt, exploring a new topic. Anything that benefits from back-and-forth conversation."
            skipWhen="You need the same task done automatically on a schedule, or you need to process 20+ items in sequence. That's what the API + n8n is for."
          />

          <H3>Use browser agents when…</H3>
          <DecisionCard
            name="Browser Agents"
            subtitle="Claude in Chrome or similar"
            useWhen="Researching competitors, scraping public data, filling forms, navigating web-based tools that don't have APIs, or performing one-time actions in a browser UI. Great for research tasks you'd otherwise do manually."
            skipWhen="The platform has a proper API — use the API. Browser agents are slower and less reliable than API integrations. They're the fallback when no API exists."
          />

          <H3>Use ManyChat + Meta when…</H3>
          <DecisionCard
            name="ManyChat"
            useWhen="You want to convert Instagram comments into DMs automatically. For broadcast campaigns to tagged contacts. For follow-up sequences with non-buyers. Any Instagram-native conversion flow."
            skipWhen="You're not yet posting consistently — there's nothing to trigger the flow. ManyChat converts traffic. If there's no traffic, there's nothing to convert. Content comes first."
          />

          <H3>Use an orchestration layer (n8n) when…</H3>
          <DecisionCard
            name="n8n"
            useWhen="You have a multi-step process that repeats on a schedule or trigger. When the same sequence of actions happens 3+ times per week. When you want to connect Claude to other systems (Airtable, Buffer, Slack, email). When timing and sequencing matter."
            skipWhen="You're still figuring out what the process should be. Automating a process before it's proven wastes your setup time. Validate manually first, then automate."
          />

          <H3>Use Claude Code + agents when…</H3>
          <DecisionCard
            name="Claude Code + Agents"
            useWhen="Your system is proven and you want to remove humans from the loop. When you need custom behavior that no off-the-shelf tool handles. When you want to build skills that agents reuse across multiple workflows. When you're operating at team or agency scale."
            skipWhen="You're still building your first system. Agent architectures require a stable underlying process to automate. If the process changes weekly, agents will break weekly."
          />

          <Callout text="The pattern: Simple tools → proven process → automate. Never the other way around. The best operators aren't using the most complex tools. They're using the minimum complexity required to get a consistent result." />

          <H3>Obsidian as an operator tool</H3>
          <P>Obsidian is not just a note-taking app — for operators on Scale Path, it becomes a local knowledge base and skill storage system. Your brain prompts, your skill files, your workflow documentation, and your prompt library all live here as markdown files. Claude Code can read from it directly.</P>
          <P>Why it matters: when your skills and prompts live as versioned markdown files in Obsidian (and synced to GitHub), any agent or workflow can reference them. Your knowledge becomes reusable infrastructure.</P>

          <ToolGrid items={[
            { name: "Obsidian", desc: "Free local markdown editor. Use for storing brain prompts, skills, SOPs, and operator documentation. Syncs to GitHub via Obsidian Git plugin.", tags: [{ label: "FREE", type: "free" }, { label: "SCALE PATH", type: "scale" }], href: "https://obsidian.md" },
            { name: "Claude Code", desc: "CLI agent that reads your codebase and files. Can execute multi-step tasks using your skill files as context. The execution engine for Scale Path.", tags: [{ label: "SCALE PATH", type: "scale" }], href: "https://claude.ai/code" },
            { name: "GitHub", desc: "Version control for your skills, prompts, and system files. Enables collaboration, history, and the Operator Repository access for kit buyers.", tags: [{ label: "FREE", type: "free" }, { label: "SCALE PATH", type: "scale" }], href: "https://github.com" },
          ]} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 5 — PROMPT LIBRARY */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="P5" title={<>15 prompts — <em className="kit-accent" style={{ fontStyle: "italic" }}>ready to run</em></>}
          intro="Each prompt includes context for when to use it and which path it fits. Copy the prompt, replace brackets, run. No modification needed to start.">

          <H3>Content prompts</H3>

          <H3Sub>1. Hook generator</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Hook Generator · use when: you need topics" content={`Write 10 carousel hook ideas for an Instagram account about AI automation for solo operators.

Rules:
- Address a real pain or a counterintuitive insight
- Max 8 words each
- No emojis, no hype
- Mix: counterintuitive claims, bold problems, specific results
- Output: numbered list, hooks only`} />

          <H3Sub>2. Full carousel writer</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Carousel Writer · use when: writing content" content={`Write a 7-slide carousel about: [TOPIC]

Audience: solo operators who want to use AI to automate their business. Skeptical. Want real steps, not inspiration.

SLIDE 1 — HOOK: [headline max 8 words] + [1 sentence that earns it]
SLIDES 2–6: [headline max 7 words] + [1–2 sentences, one idea each]
SLIDE 7: Headline: Want the full system? / Body: Comment SYSTEM below.

Tone: direct, peer-to-peer, practitioner voice. Output slides only.`} />

          <H3Sub>3. Caption writer</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Caption Writer · use after: carousel is written" content={`Write an Instagram caption for this carousel:
[PASTE CAROUSEL]

Rules:
- First line = hook (slide 1 headline, slightly expanded)
- 3–4 short paragraphs, one idea each
- End: "Comment SYSTEM below and I'll send you the full breakdown."
- 6 relevant hashtags at end, lowercase
- No emoji unless it adds meaning
- Peer-to-peer tone. Not a brand posting. A practitioner sharing.`} />

          <H3Sub>4. X thread adapter</H3Sub>
          <PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="X Thread Adapter · repurpose from carousel" content={`Convert this carousel into an X thread:
[PASTE CAROUSEL]

- Tweet 1 = hook (same as slide 1, max 240 chars)
- Tweets 2–7 = one per slide, slightly expanded
- Last tweet = "Full breakdown: [link]"
- No hashtags
- Max 240 chars per tweet
- Format: numbered 1/ 2/ 3/`} />

          <H3Sub>5. LinkedIn adapter</H3Sub>
          <PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="LinkedIn Post Adapter · repurpose from carousel" content={`Adapt this carousel for LinkedIn:
[PASTE CAROUSEL]

Format:
- First line = hook
- Line break
- 4–5 short paragraphs (2–3 sentences each)
- Bullet points for list items
- CTA: "DM me SYSTEM and I'll send the full breakdown."
- Slightly more professional than Instagram, still direct
- No hashtags`} />

          <H3Sub>6. Weekly content plan</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Weekly Content Plan · use weekly or bi-weekly" content={`Create a 7-day content plan for an Instagram account about AI automation for solo operators.

Mix:
- 3 carousel posts (educational, CTA = comment SYSTEM)
- 2 short posts (quick tips, behind-the-scenes, relatable)
- 1 social proof post (result, testimonial, case study)
- 1 direct offer post (product mention, no apology for selling)

For each day: Day | Type | Topic | Hook | One-line brief
Output as a clean table.`} />

          <H3>Audit & improvement prompts</H3>

          <H3Sub>7. Content quality audit</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Content Audit · use when: reviewing drafts" content={`Audit this carousel for quality. Be harsh.

[PASTE CAROUSEL]

Score each on 1–10:
1. Hook strength — would you stop scrolling?
2. Clarity — does each slide have one idea?
3. Specificity — does it teach something concrete?
4. CTA — is the ask clear and low friction?

For every score under 8: explain the problem and rewrite that slide.
Output: scores first, then rewrites only.`} />

          <H3Sub>8. Brain audit</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Brain Audit · use monthly" content={`I'm going to show you 5 pieces of content I've published and my current brain prompt. Identify the patterns in what I edited most. Then rewrite the brain prompt to prevent those edits automatically.

Brain prompt:
[PASTE CURRENT BRAIN]

Published content samples:
[PASTE 5 EXAMPLES]

Output: list of patterns found, then rewritten brain prompt.`} />

          <H3>Sales & DM prompts</H3>

          <H3Sub>9. DM response handler</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="DM Response Handler · use when: replying live" content={`You're handling DMs for [BRAND], an AI automation brand.

Context: this person commented SYSTEM. They received the 5-DM sequence and are now responding.

Their message: "[MESSAGE]"

Reply:
- Answer directly and briefly
- Keep moving toward the product without pressure
- Sound human, not like a bot
- Max 4 sentences
- No emoji`} />

          <H3Sub>10. Objection handler</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Objection Handler · use in: sales conversations" content={`Write responses to these 5 objections for a $27 AI automation kit:

1. "I'm not technical enough"
2. "I already have ChatGPT"
3. "Is this just another prompt pack?"
4. "I don't have time to set this up"
5. "Why is it so cheap?"

For each: 2–3 sentences. Direct, honest, no over-promising. Confident practitioner answering, not a salesperson deflecting.`} />

          <H3Sub>11. Short sales page</H3Sub>
          <PathIndicator path="fast" />
          <PromptBlock type="Short-Form Sales Page · use when: building checkout page" content={`Write a short-form sales page for:

Product: AI Operator Kit
Price: $27
Format: HTML guide / execution kit
Audience: solo operators and founders who want to build AI systems for content and sales

Structure:
- Headline (the transformation, not the product)
- 3-sentence subheadline (who it's for + what they get + why now)
- The problem (2 short paragraphs)
- What's inside (specific bullet list)
- Who it's for and NOT for
- Price anchor (what this info costs elsewhere)
- CTA button text

Tone: confident, direct, honest. No hype.`} />

          <H3Sub>12. Testimonial request</H3Sub>
          <PathIndicator path="fast" />{" "}<PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Testimonial Request DM · use 3–5 days post-purchase" content={`Write a DM to someone who bought the AI Operator Kit 3–5 days ago.

Goal: get one specific, usable testimonial — not "it was great" but something like "I set up the content queue in 2 hours and already have 4 carousels drafted."

Rules:
- Acknowledge their purchase naturally
- Ask one specific question: "What's the most useful thing you've applied from the kit so far?"
- Under 5 sentences
- No pressure, no incentive
- Sound like a real person following up`} />

          <H3>Operator / system prompts</H3>

          <H3Sub>13. Process documentation</H3Sub>
          <PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Process Documentation · use when: documenting workflows" content={`I'm going to describe a process I do manually. Turn it into a clear SOP (Standard Operating Procedure) that someone else — or an AI agent — could follow.

Process description:
[DESCRIBE WHAT YOU DO]

Output format:
- Process name
- Trigger (what starts it)
- Steps (numbered, specific, actionable)
- Decision points (if X then Y)
- Output (what the end result looks like)
- Common failure points

Keep language clear. Write for execution, not documentation.`} />

          <H3Sub>14. Skill file writer</H3Sub>
          <PathIndicator path="scale" />
          <PromptBlock type="Skill File Writer · use when: building Scale Path skills" content={`Write a skill file for Claude agents in SKILL.md format.

Task this skill should handle: [DESCRIBE THE TASK]

The skill file should include:
- Skill name and description
- When to use this skill (trigger conditions)
- Input format expected
- Step-by-step instructions the agent follows
- Output format
- Edge cases and how to handle them
- Example input → example output

Format as markdown. Write for an AI agent to read and execute, not for a human to understand.`} />

          <H3Sub>15. Weekly operator review</H3Sub>
          <PathIndicator path="stable" />{" "}<PathIndicator path="scale" />
          <PromptBlock type="Weekly Operator Review · use every Monday" content={`I'm going to share my content and sales data from last week. Give me a 5-point operator review.

Data:
- Posts published: [N]
- Total comments with SYSTEM keyword: [N]
- DM sequences opened: [N]
- Link clicks: [N]
- Sales: [N] at $[PRICE]

Review format:
1. What's working (1–2 specific observations)
2. What's leaking (where the funnel drops most)
3. Content priority for this week
4. One system change to make
5. Projected revenue if current rates hold

Be direct. No padding.`} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 6 — OPERATOR REPOSITORY */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="P6" title={<>The resource <em className="kit-accent" style={{ fontStyle: "italic" }}>vault</em></>}
          intro="The Operator Repository is where this kit lives beyond the PDF. It's a curated collection of skill files, prompt templates, and workflow references — maintained and updated as the tooling evolves. Built for operators who want resources that don't go stale.">

          <H3>What's in the vault</H3>
          <div className="kit-path-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, margin: "20px 0" }}>
            {[
              { icon: "SKILL / 01", name: "content-brain.md", desc: "The core content brain prompt as a versioned skill file. Loadable by Claude agents, Claude Code, or any system that reads markdown instructions." },
              { icon: "SKILL / 02", name: "carousel-writer.md", desc: "Carousel generation skill with format rules, tone guidelines, and output structure. Designed to be called by n8n or agents with just a topic as input." },
              { icon: "SKILL / 03", name: "dm-handler.md", desc: "DM response skill for handling replies in the ManyChat sequence. Handles objections, questions, and warm leads with context-aware responses." },
              { icon: "SKILL / 04", name: "content-audit.md", desc: "Quality evaluation skill. Scores carousel content against four criteria and rewrites underperforming slides. Use before publishing or in automated review steps." },
              { icon: "SKILL / 05", name: "operator-review.md", desc: "Weekly system review skill. Takes raw metrics and produces a structured 5-point operator report with priorities and projections." },
              { icon: "VAULT / REF", name: "n8n-workflows/", desc: "Reference workflow files for Stable Path operations — content generator, publisher, buyer welcome, weekly report. Import-ready JSON templates." },
            ].map((skill, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.06 }}
                style={{ background: "#111110", border: "1px solid #222220", borderRadius: 8, padding: "20px" }}>
                <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.1em", color: "#c8f000", marginBottom: 10 }}>{skill.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: "#e8e6df", marginBottom: 8 }}>{skill.name}</div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{skill.desc}</div>
              </motion.div>
            ))}
          </div>

          <H3>How to use the vault</H3>
          <Steps items={[
            { title: "Fast Path — read skills as enhanced prompts", body: "Open any .md skill file and paste its contents into Claude.ai. The skill file is a structured prompt — it works exactly like any other prompt, just more precise and reusable." },
            { title: "Stable Path — reference in n8n API calls", body: "Store skill content as variables in n8n. Pass as system_prompt in Claude API nodes. Your workflows become tool-agnostic — swap models without rewriting your logic." },
            { title: "Scale Path — mount as Claude Code skills", body: "Store skills in your Obsidian vault or /mnt/skills directory. Claude Code agents read them as context. Your skills become reusable infrastructure — build once, deploy anywhere in your system." },
          ]} />

          <Callout text="Access: Vault files are included with this kit. Check the /skills folder in your download, or access the latest versions at the resource URL included in your purchase confirmation." />

          <H3>The skill file format</H3>
          <P>Every skill in the vault follows this structure — so you can read them, modify them, and write new ones:</P>
          <PromptBlock type="Skill File Format — SKILL.md · Scale Path reference" content={`---
name: [skill-name]
description: [one sentence — what this skill does]
trigger: [when to use it — specific conditions]
---

## What this skill does
[2–3 sentences. Plain description. What task does it handle?]

## Input
[What the agent receives before running this skill]
Format: [text / JSON / variables]

## Instructions
[Step-by-step. Written for an AI to execute, not a human to understand.]
1. [First action]
2. [Second action]
...

## Output format
[Exact structure of what this skill produces]

## Edge cases
[What to do when inputs are incomplete, ambiguous, or unexpected]

## Example
Input: [example]
Output: [example]`} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* BONUS — 20 TOPIC IDEAS */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} style={{ padding: "48px 0", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#c8f000", textTransform: "uppercase", marginBottom: 16 }}>
            Bonus — seed your queue
          </div>
          <h3 className="kit-serif" style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, marginBottom: 24 }}>20 topic ideas to start with</h3>
          <TopicList topics={[
            { title: "Why your AI keeps giving you generic content", sub: "The brain prompt problem — and how to fix it in 10 minutes" },
            { title: "The 3-layer system every solo operator needs", sub: "Brain + Queue + Content — explained simply" },
            { title: "How to go from idea to published post in 4 minutes", sub: "The exact workflow, step by step" },
            { title: "The comment trick that turns followers into buyers", sub: "Keyword triggers explained" },
            { title: "Why I stopped writing captions manually", sub: "And what I do instead (with proof)" },
            { title: "5 automations under 10 steps that save 2h/day", sub: "Real workflows, not concepts" },
            { title: "How to build a content queue that runs itself", sub: "Template + AI + scheduler in 45 minutes" },
            { title: "The only 4 tools you need for a lean AI operation", sub: "Nothing else required" },
            { title: "What I learned from 120 automation projects", sub: "The patterns that work, the ones that don't" },
            { title: "How to write a system prompt that doesn't suck", sub: "The 4 components every AI brain needs" },
            { title: "The DM sequence that converts without being pushy", sub: "5 messages, zero pressure" },
            { title: "Why most people's AI content sounds like AI", sub: "The tone problem — and how to train around it" },
            { title: "How to use AI projects to manage multiple voices", sub: "One tool, multiple brands, no mixing" },
            { title: "What a $0 ad spend content system looks like", sub: "Organic-only, 850+ leads — how it was done" },
            { title: "The automation that replaced a VA", sub: "What it does, how it's built, what it cost" },
            { title: "How to productize a skill using AI", sub: "From freelancer to digital product seller in 7 days" },
            { title: "Building an audience that buys, not just follows", sub: "Intent-driven content strategy" },
            { title: "The content system that runs while you sleep", sub: "Full stack — tools, workflows, and results" },
            { title: "How to launch a digital product this week", sub: "The 7-day playbook, condensed" },
            { title: "Stop [doing X]. Do [Y] instead.", sub: "Pattern interrupt hook template with examples" },
          ]} />
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* BONUS — HOOK BANK */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} style={{ padding: "48px 0", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#c8f000", textTransform: "uppercase", marginBottom: 16 }}>
            Bonus — hook bank
          </div>
          <h3 className="kit-serif" style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, marginBottom: 24 }}>20 hook templates</h3>
          <TopicList topics={[
            { title: "Stop [doing X]. Do [Y] instead.", sub: "Pattern interrupt" },
            { title: "The [thing] nobody talks about.", sub: "Curiosity gap" },
            { title: "I [result] without [expected cost].", sub: "Specific result" },
            { title: "You don't need [X] to [Y].", sub: "Bold claim" },
            { title: "[Number] [things] that [unexpected result].", sub: "Listicle + surprise" },
            { title: "The real reason your [X] isn't working.", sub: "Problem diagnosis" },
            { title: "I replaced [expensive thing] with [simple thing].", sub: "Substitution" },
            { title: "What [X] looks like in 2026.", sub: "Timely relevance" },
            { title: "[X] is broken. Here's what works instead.", sub: "Contrarian take" },
            { title: "The [X]-minute [process] that saves [time].", sub: "Efficiency" },
            { title: "Why [common advice] is wrong.", sub: "Counterintuitive" },
            { title: "How to [result] in [short timeframe].", sub: "Speed promise" },
            { title: "The only [number] [things] you need.", sub: "Minimalism" },
            { title: "I tested [X] for [time]. Here's what happened.", sub: "Experiment" },
            { title: "Most people [do X]. Top operators [do Y].", sub: "Us vs. them" },
            { title: "The [X] nobody is using yet.", sub: "Early adopter" },
            { title: "This [simple thing] changed my [area].", sub: "Transformation" },
            { title: "[X] costs you more than you think.", sub: "Hidden cost" },
            { title: "The system behind [impressive result].", sub: "Behind the scenes" },
            { title: "Delete [X] from your process. Watch what happens.", sub: "Subtraction" },
          ]} />
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* BONUS — TROUBLESHOOTING */}
        {/* ═══════════════════════════════════════════════════ */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} style={{ padding: "48px 0", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#c8f000", textTransform: "uppercase", marginBottom: 16 }}>
            Bonus — troubleshooting
          </div>
          <h3 className="kit-serif" style={{ fontSize: "clamp(24px,3vw,32px)", fontWeight: 400, marginBottom: 24 }}>What to do when it breaks</h3>
          <TableWrap headers={["Symptom", "Likely cause", "Fix"]} rows={[
            ["Content sounds generic", "Brain prompt too vague", "Add more tone rules and audience specifics"],
            ["Low reach on posts", "Weak hooks", "Test different patterns from the hook bank"],
            ["DMs not converting", "Value message too long/vague", "Shorten DM 2. Make the benefit concrete."],
            ["No keyword comments", "CTA not clear enough", "Make the last slide instruction unmissable"],
            ["Queue keeps emptying", "Not seeding enough topics", "Block 20 min/week to add 10 new topics"],
            ["Automation breaks", "Platform API change", "Check connection status. Reconnect or update."],
            ["Buyers don't come back", "No follow-up sequence", "Send one value email 3 days after purchase"],
            ["Audience growth stalled", "Content too narrow", "Expand topic range. Test new hook patterns."],
          ]} />
        </motion.div>

        {/* FOOTER */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: "48px 0 0", borderTop: "1px solid #222220", marginTop: 80, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div className="kit-mono" style={{ fontSize: 11, color: "#6b6960", letterSpacing: "0.1em" }}>
            FLUXROW<span className="kit-accent">.</span>
          </div>
          <div className="kit-mono" style={{ fontSize: 10, color: "#3a3a36" }}>
            AI Operator Kit — v3.0 — 2026
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─── Sub-components ─── */

const Chapter = ({ num, title, intro, children }: { num: string; title: React.ReactNode; intro: string; children: React.ReactNode }) => (
  <motion.div
    id={`chapter-${num}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7 }}
    style={{ padding: "64px 0", borderBottom: "1px solid #222220" }}
  >
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
      <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.1em" }}>{num}</span>
      <span style={{ flex: 1, height: 1, background: "#222220" }} />
    </motion.div>
    <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="kit-serif" style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 20 }}>{title}</motion.h2>
    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} style={{ fontSize: 16, color: "#999", maxWidth: 620, lineHeight: 1.7, marginBottom: 36 }}>{intro}</motion.p>
    {children}
  </motion.div>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.05em", color: "#e8e6df", textTransform: "uppercase", margin: "36px 0 16px" }}>{children}</h3>
);

const H3Sub = ({ children }: { children: React.ReactNode }) => (
  <h4 style={{ fontSize: 13, fontWeight: 500, color: "#e8e6df", margin: "28px 0 14px" }}>{children}</h4>
);

const PathIndicator = ({ path }: { path: "fast" | "stable" | "scale" }) => {
  const config = { fast: { label: "FAST PATH", color: "#c8f000", bg: "#0d1800", border: "#2a4400" }, stable: { label: "STABLE PATH", color: "#60a0c0", bg: "#0a1520", border: "#1a3040" }, scale: { label: "SCALE PATH", color: "#b080e0", bg: "#120a20", border: "#2a1a40" } };
  const c = config[path];
  return <div className="kit-mono" style={{ display: "inline-block", fontSize: 9, letterSpacing: "0.1em", color: c.color, background: c.bg, border: `1px solid ${c.border}`, padding: "3px 10px", borderRadius: 4, margin: "12px 0 6px" }}>{c.label}</div>;
};

const ToolGrid = ({ items }: { items: { name: string; desc: string; tags: { label: string; type: string }[]; href: string }[] }) => {
  const tagColors: Record<string, { color: string; border: string }> = { free: { color: "#7acc7a", border: "#1a3a1a" }, paid: { color: "#e0a050", border: "#3a2a10" }, fast: { color: "#c8f000", border: "#2a4400" }, stable: { color: "#60a0c0", border: "#1a3040" }, scale: { color: "#b080e0", border: "#2a1a40" }, key: { color: "#e8e6df", border: "#3a3a36" } };
  return (
    <div className="kit-path-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`, gap: 8, margin: "20px 0" }}>
      {items.map((item, i) => (
        <motion.div key={i} className="kit-tool-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
          style={{ background: "#111110", border: "1px solid #222220", borderRadius: 8, padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500, color: "#e8e6df", marginBottom: 6 }}>{item.name}</div>
            <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{item.desc}</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center" }}>
            {item.tags.map((tag, j) => {
              const tc = tagColors[tag.type] || tagColors.key;
              return <span key={j} className="kit-mono" style={{ fontSize: 8, letterSpacing: "0.08em", color: tc.color, border: `1px solid ${tc.border}`, padding: "2px 6px", borderRadius: 3 }}>{tag.label}</span>;
            })}
            <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "auto", fontSize: 16, color: "#6b6960", textDecoration: "none" }}>→</a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: "#aaa", fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>{children}</p>
);

const Callout = ({ text, warn = false }: { text: string; warn?: boolean }) => (
  <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: warn ? "#140a00" : "#0a1400", border: `1px solid ${warn ? "#332200" : "#1e3300"}`, borderLeft: `3px solid ${warn ? "#ff8800" : "#c8f000"}`, borderRadius: "0 8px 8px 0", padding: "20px 24px", margin: "28px 0" }}>
    <p style={{ color: warn ? "#b07030" : "#9aba40", fontSize: 14, margin: 0 }}>{text}</p>
  </motion.div>
);

const ActionBlock = ({ type, items }: { type: string; items: string[] }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: "#111110", border: "1px solid #222220", borderRadius: 8, padding: "20px 24px", margin: "20px 0" }}>
    <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8f000", marginBottom: 12 }}>{type}</div>
    <ul style={{ listStyle: "none", display: "grid", gap: 8 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 14, color: "#bbb", paddingLeft: 16, position: "relative" }}>
          <span style={{ position: "absolute", left: 0, color: "#3a3a36" }}>→</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const MistakeBlock = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: "#140a00", border: "1px solid #332200", borderLeft: "3px solid #ff8800", borderRadius: "0 8px 8px 0", padding: "20px 24px", margin: "28px 0" }}>
    <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#ff8800", marginBottom: 8 }}>⚠ Common mistake</div>
    <p style={{ color: "#b07030", fontSize: 14, margin: 0 }}>{text}</p>
  </motion.div>
);

const QuickWin = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: "#0a1400", border: "1px solid #1e3300", borderLeft: "3px solid #c8f000", borderRadius: "0 8px 8px 0", padding: "20px 24px", margin: "28px 0" }}>
    <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8f000", marginBottom: 8 }}>⚡ Quick win</div>
    <p style={{ color: "#9aba40", fontSize: 14, margin: 0 }}>{text}</p>
  </motion.div>
);

const DoThisNow = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: "#0d1800", border: "1px solid #2a4400", borderRadius: 8, padding: "20px 24px", margin: "28px 0" }}>
    <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8f000", marginBottom: 8 }}>✓ Do this now</div>
    <p style={{ color: "#9aba40", fontSize: 14, margin: 0 }}>{text}</p>
  </motion.div>
);

const UseThisIf = ({ text, action }: { text: string; action: string }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: "#111110", border: "1px solid #222220", borderRadius: 8, padding: "20px 24px", margin: "20px 0" }}>
    <div className="kit-mono" style={{ fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "#60a0c0", marginBottom: 8 }}>Use this if… {text}</div>
    <p style={{ color: "#aaa", fontSize: 14, margin: 0 }}>{action}</p>
  </motion.div>
);

const PathGrid = ({ items }: { items: { path: string; icon: string; title: string; desc: string; time: string }[] }) => (
  <div className="kit-path-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, margin: "20px 0" }}>
    {items.map((item, i) => (
      <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.1 }}
        style={{ background: "#111110", border: `1px solid ${item.path === "fast" ? "#2a4400" : item.path === "stable" ? "#1a3040" : "#2a1a40"}`, borderRadius: 8, padding: "18px 20px" }}>
        <div style={{ fontSize: 16, marginBottom: 6 }}>{item.icon}</div>
        <div style={{ fontSize: 13, fontWeight: 500, color: item.path === "fast" ? "#c8f000" : item.path === "stable" ? "#60a0c0" : "#b080e0", marginBottom: 8 }}>{item.title}</div>
        <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</div>
        <div className="kit-mono" style={{ fontSize: 10, color: "#6b6960" }}>{item.time}</div>
      </motion.div>
    ))}
  </div>
);

const PathComparison = () => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}>
    <TableWrap headers={["", "⚡ Fast", "🔁 Stable", "📈 Scale"]} rows={[
      ["Setup time", "1-2 hours", "Half a day", "1-2 days"],
      ["Monthly cost", "$0", "~$21", "~$43"],
      ["Technical skill", "None", "Low", "Moderate"],
      ["Daily time", "30-45 min", "15-20 min", "5-10 min"],
      ["Best for", "Launching this week", "Consistent ops", "Teams & growth"],
      ["Upgrade trigger", "When consistent", "When volume grows", "You're here"],
    ]} />
  </motion.div>
);

const Steps = ({ items }: { items: { title: string; body: string }[] }) => (
  <div style={{ display: "grid", gap: 2, margin: "24px 0" }}>
    {items.map((item, i) => (
      <motion.div key={i} className="kit-step" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
        style={{ background: "#111110", border: "1px solid #222220", padding: "24px 28px", display: "grid", gridTemplateColumns: "56px 1fr", gap: 16, transition: "border-color 0.2s",
          borderRadius: i === 0 ? "8px 8px 0 0" : i === items.length - 1 ? "0 0 8px 8px" : 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 2 }}>
          <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</span>
          {i < items.length - 1 && <span style={{ width: 1, flex: 1, background: "#222220", margin: "6px auto 0" }} />}
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#e8e6df", marginBottom: 6 }}>{item.title}</div>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.65, margin: 0, whiteSpace: "pre-wrap" }}>{item.body}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const PromptBlock = ({ type, content }: { type: string; content: string }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }} style={{ margin: "20px 0" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#181816", border: "1px solid #222220", borderBottom: "none", borderRadius: "6px 6px 0 0", padding: "10px 16px" }}>
      <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.12em", textTransform: "uppercase" }}>{type}</span>
      <button onClick={() => navigator.clipboard.writeText(content)} className="kit-mono" style={{ fontSize: 10, color: "#6b6960", letterSpacing: "0.05em", background: "none", border: "none", cursor: "pointer" }}>copy all</button>
    </div>
    <div className="kit-mono" style={{ background: "#070706", border: "1px solid #222220", borderTop: "none", borderRadius: "0 0 6px 6px", padding: 20, fontSize: 13, color: "#c8c4b8", lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
      {content}
    </div>
  </motion.div>
);

const TableWrap = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }} style={{ overflowX: "auto", margin: "20px 0" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={{ background: "#181816", color: "#6b6960", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", padding: "10px 16px", textAlign: "left", borderBottom: "1px solid #2e2e2a" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "12px 16px", borderBottom: i < rows.length - 1 ? "1px solid #222220" : "none", color: j === 0 ? "#e8e6df" : "#aaa", fontWeight: j === 0 ? 500 : 300, verticalAlign: "top" }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </motion.div>
);

const TopicList = ({ topics }: { topics: { title: string; sub: string }[] }) => (
  <ul style={{ listStyle: "none", margin: "16px 0", border: "1px solid #222220", borderRadius: 8, overflow: "hidden" }}>
    {topics.map((t, i) => (
      <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 20px", borderBottom: i < topics.length - 1 ? "1px solid #222220" : "none", fontSize: 14, color: "#999", background: i % 2 === 0 ? "#111110" : "#181816" }}>
        <span style={{ width: 16, height: 16, border: "1px solid #3a3a36", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
        <div>
          <strong style={{ color: "#e8e6df", fontWeight: 500, display: "block", marginBottom: 2 }}>{t.title}</strong>
          <span style={{ fontSize: 12, color: "#6b6960" }}>{t.sub}</span>
        </div>
      </li>
    ))}
  </ul>
);

const DMThread = ({ messages }: { messages: { label: string; timing: string; text: string; tag: string; isBot: boolean }[] }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 0, margin: "24px 0" }}>
    {messages.map((m, i) => (
      <motion.div key={i} className="kit-dm-msg" initial={{ opacity: 0, x: m.isBot ? -15 : 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
        style={{ padding: "20px 24px", border: "1px solid #222220", marginBottom: 2, display: "grid", gridTemplateColumns: "80px 1fr", gap: 16,
          background: m.isBot ? "#111110" : "transparent",
          borderRadius: i === 0 ? "8px 8px 0 0" : i === messages.length - 1 ? "0 0 8px 8px" : 0 }}>
        <div>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.08em", color: m.isBot ? "#c8f000" : "#6b6960", textTransform: "uppercase", paddingTop: 3 }}>{m.label}</div>
          <div className="kit-mono" style={{ fontSize: 9, color: "#3a3a36", marginTop: 4 }}>{m.timing}</div>
        </div>
        <div>
          <div style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{m.text}</div>
          <span className="kit-mono" style={{ display: "inline-block", fontSize: 9, color: "#6b6960", background: "#080807", border: "1px solid #222220", padding: "2px 8px", borderRadius: 3, marginTop: 10, letterSpacing: "0.05em" }}>{m.tag}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

const RevenueBox = ({ rows }: { rows: { label: string; value: string; isTotal?: boolean }[] }) => (
  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }} style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: "28px 32px", margin: "24px 0" }}>
    <div style={{ display: "grid", gap: 12 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: r.isTotal ? "16px 0 8px" : "8px 0", borderBottom: i < rows.length - 1 ? "1px solid #222220" : "none" }}>
          <span style={{ fontSize: r.isTotal ? 15 : 14, color: r.isTotal ? "#e8e6df" : "#888", fontWeight: r.isTotal ? 500 : 300 }}>{r.label}</span>
          <span className="kit-mono" style={{ fontSize: r.isTotal ? 20 : 14, color: r.isTotal ? "#c8f000" : "#e8e6df" }}>{r.value}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Checklist = ({ items }: { items: { title: string; desc: string }[] }) => (
  <div style={{ display: "grid", gap: 2, margin: "24px 0" }}>
    {items.map((item, i) => (
      <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
        style={{ background: "#111110", border: "1px solid #222220", padding: "24px 28px", display: "grid", gridTemplateColumns: "24px 1fr", gap: 16,
          borderRadius: i === 0 ? "8px 8px 0 0" : i === items.length - 1 ? "0 0 8px 8px" : 0 }}>
        <span style={{ width: 20, height: 20, border: "1px solid #3a3a36", borderRadius: 4, display: "block", marginTop: 2 }} />
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#e8e6df", marginBottom: 6 }}>{item.title}</div>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.65, margin: 0, whiteSpace: "pre-wrap" }}>{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

const Quote = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.6 }}
    style={{ padding: "40px 0", textAlign: "center" }}>
    <p className="kit-serif" style={{ fontSize: 22, fontStyle: "italic", color: "#777", maxWidth: 500, margin: "0 auto", lineHeight: 1.5 }}>"{text}"</p>
  </motion.div>
);

export default AIOperatorKit;

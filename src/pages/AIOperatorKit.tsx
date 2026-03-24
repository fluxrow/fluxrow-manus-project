import { useEffect } from "react";
import { motion } from "framer-motion";

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
        }
      `}</style>

      <div className="kit-page">
        {/* NAV */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 0", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase" }}>
            FLUXROW / <span className="kit-accent">AI Operator Starter Kit</span>
          </div>
          <div style={{ background: "#0f1f00", border: "1px solid #2a4400", color: "#c8f000", fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 100 }}>
            v2.0 — 2026
          </div>
        </motion.div>

        {/* HERO */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ padding: "80px 0 72px", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#6b6960", textTransform: "uppercase", marginBottom: 32 }}>
            The complete operator kit
          </div>
          <h1 className="kit-serif" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.0, letterSpacing: "-0.01em", marginBottom: 32, fontWeight: 400 }}>
            The system first.<br />Then pick your<br /><em className="kit-accent" style={{ fontStyle: "italic" }}>execution path.</em>
          </h1>
          <p style={{ fontSize: 18, fontWeight: 300, color: "#999", maxWidth: 580, lineHeight: 1.65, marginBottom: 48 }}>
            One architecture. Three ways to run it — based on your speed, skill, and scale. Pick the path that fits you now. Upgrade when you're ready.
          </p>

          {/* Path selector */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid #222220" }}>
            {[
              { icon: "⚡", name: "Fast Path", desc: "Launch this week", color: "#c8f000", border: "#2a4400" },
              { icon: "🔁", name: "Stable Path", desc: "Repeatable system", color: "#60a0c0", border: "#1a3040" },
              { icon: "📈", name: "Scale Path", desc: "Advanced workflows", color: "#b080e0", border: "#2a1a40" },
            ].map((p, i) => (
              <div key={i} style={{ flex: "1 1 200px", background: "#111110", border: `1px solid ${p.border}`, borderRadius: 8, padding: "18px 20px" }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{p.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: p.color, marginBottom: 4 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "#6b6960" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TABLE OF CONTENTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: "24px 28px", margin: "48px 0" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase", marginBottom: 16 }}>
            What's inside
          </div>
          <div className="kit-chapter-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 32px" }}>
            {[
              { num: "00", title: "The operating system" },
              { num: "04", title: "DM sales engine" },
              { num: "01", title: "The AI brain" },
              { num: "05", title: "Revenue layer" },
              { num: "02", title: "Content queue" },
              { num: "06", title: "7-day launch playbook" },
              { num: "03", title: "Hook + content system" },
              { num: "++", title: "Operator's toolkit" },
            ].map((c, i) => (
              <a key={i} href={`#chapter-${c.num}`} className="kit-chapter-item" style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "5px 0", textDecoration: "none", borderBottom: "1px solid #222220" }}>
                <span className="kit-mono" style={{ fontSize: 10, color: "#3a3a36", flexShrink: 0, width: 24 }}>{c.num}</span>
                <span className="kit-chapter-title" style={{ fontSize: 13, color: "#999", transition: "color 0.15s" }}>{c.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 00 — THE OPERATING SYSTEM */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="00" title={<>The operating <em className="kit-accent" style={{ fontStyle: "italic" }}>system</em></>}
          intro="Before tools, before tactics. This is the architecture. Every AI content and sales system has five layers. Understand them first — then choose how to execute each one.">

          <P>Most people start with tools. They pick ChatGPT, learn n8n, set up ManyChat — and then wonder why nothing connects. That's backwards.</P>
          <P>Start with the system map. Then pick tools that fit your path.</P>

          {/* System Diagram */}
          <div style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: 32, margin: "32px 0", overflowX: "auto" }}>
            <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase", marginBottom: 24 }}>
              Full stack — content to revenue
            </div>
            <div className="kit-diagram-row" style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 540 }}>
              {[
                { layer: "Layer 1", name: "Brain", desc: "Voice & intelligence" },
                { layer: "Layer 2", name: "Queue", desc: "Planning & scheduling" },
                { layer: "Layer 3", name: "Content", desc: "Creation & publishing" },
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

          <H3>Which path is right for you?</H3>
          <ActionBlock type="quick diagnostic" items={[
            "I want to launch something this week → ⚡ Fast Path",
            "I want a repeatable system I can rely on → 🔁 Stable Path",
            "I'm running a team or need advanced automation → 📈 Scale Path",
          ]} />

          <PathComparison />

          <Callout text="You don't have to pick one path for everything. You can run your Brain on Stable Path and your Content Queue on Fast Path. The system is modular — upgrade each layer independently." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 01 — THE AI BRAIN */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="01" title={<>The AI <em className="kit-accent" style={{ fontStyle: "italic" }}>brain</em></>}
          intro="Your voice, your rules, your prompts. The brain is a system prompt — the most important asset you'll build. A weak brain produces generic content. A strong brain produces content that sounds exactly like you.">

          <H3>What a brain needs</H3>
          <Steps items={[
            { title: "Identity — who is speaking", body: "Name, brand, what you do, who you serve. The AI needs to know the persona before it can write in character." },
            { title: "Audience — who is listening", body: "Be specific. \"Solo operators who want to use AI to replace 10 hours of manual work per week but don't know where to start\" is a person the AI can write to." },
            { title: "Tone rules — how it sounds", body: "List what to do AND what to avoid. \"No emojis. No phrases like 'game-changing'. Write like a practitioner, not a marketer. Max 8 words per headline.\"" },
            { title: "Output format — what to produce", body: "Exact structure. Slide count. Character limits. The more precise, the less editing you'll do." },
          ]} />

          <PromptBlock type="System Prompt — Content Brain v1" content={`You are a content operator for [YOUR BRAND NAME].

IDENTITY:
You create content about [YOUR TOPIC] for [YOUR AUDIENCE] who want to [DESIRED OUTCOME].

AUDIENCE:
[Describe your ideal reader in 2-3 specific sentences. What do they struggle with? What have they already tried? What are they skeptical about?]

VOICE & TONE:
- Direct and clear. No fluff, no filler sentences.
- Write like a practitioner sharing what actually works, not a marketer selling a dream.
- Short sentences. Active voice. Specific over general.
- No emojis unless I ask.
- Never use: "game-changing", "revolutionary", "unleash", "unlock your potential"
- Treat the reader like a smart adult who has been burned by bad advice before.

CAROUSEL FORMAT (default):
SLIDE 1 — HOOK: [max 8 words, bold claim or counterintuitive insight]
Body: [1 sentence that earns the headline]

SLIDE 2–6 — CONTENT (one clear idea per slide)
Headline: [max 7 words]
Body: [1–2 sentences. One practical insight. No padding.]

SLIDE 7 — CTA
Headline: Want the full system?
Body: Comment SYSTEM below. I'll send you the complete breakdown.

RULES:
- Never pad content. If you run out of real ideas before slide 6, stop at 5.
- Each slide must be able to stand alone.
- Output only the slides. No preamble, no explanation.`} />

          <MistakeBlock text="Common mistake: Writing prompts about you instead of your buyer. The brain should think from the audience's perspective — their pain, their language, their objections." />

          <H3>Path execution</H3>
          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Use ChatGPT or Claude directly in the browser. Paste your brain prompt at the start of each conversation. Save it as a note you copy-paste.", time: "15 min setup" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Create a Claude Project or Custom GPT with your brain as the system instruction. Every conversation inherits your rules automatically. No copy-pasting.", time: "30 min setup" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "Connect via API. Pass the brain as system_prompt on every call. Use with automation platforms for fully hands-off content generation.", time: "45 min setup" },
          ]} />

          <QuickWin text="The 5-minute persona setup: Open your AI tool. Paste the brain prompt above. Replace the brackets. Ask it to write one carousel. If the tone feels right, you're 80% done." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 02 — CONTENT QUEUE */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="02" title={<>Content <em className="kit-accent" style={{ fontStyle: "italic" }}>queue</em></>}
          intro="From one idea to a week of content, systematically. The queue is your editorial calendar, production tracker, and content database in one. Without it, you have outputs. With it, you have a system.">

          <H3>Minimum viable queue — 8 fields</H3>
          <TableWrap headers={["Field", "Type", "What goes here"]} rows={[
            ["Title", "Text", "The topic in one line"],
            ["Status", "Select", "Idea → Drafting → Review → Approved → Scheduled → Published"],
            ["Hook", "Text", "Slide 1 headline only — the scroll-stopper"],
            ["Content", "Long text", "Full AI output — all slides. Paste raw, review here."],
            ["Caption", "Long text", "Platform caption with CTA and hashtags"],
            ["Publish Date", "Date", "When it goes live"],
            ["Platform", "Select", "Instagram / X / LinkedIn / TikTok"],
            ["Notes", "Text", "Your editing notes — what to improve next time"],
          ]} />

          <DoThisNow text="Fill your first week in 20 minutes: Open the queue template. Write 7 topic titles. Don't overthink — just pick 7 things your audience asks about. That's your first week." />

          <H3>Path execution</H3>
          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Google Sheets. One tab, 8 columns. Fill manually, check off when done. Zero learning curve.", time: "10 min setup" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Notion database or Airtable. Use views to filter by status. Repeatable, organized, easy to maintain.", time: "25 min setup" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "Airtable with API access. Connected to automation platform for auto-fill, auto-scheduling, and status updates.", time: "40 min setup" },
          ]} />

          <UseThisIf text="you post less than 3x/week" action="Start with the Fast Path queue. It takes 10 minutes to set up and removes the 'what do I post today?' problem immediately." />

          <H3>20 topic ideas to seed your queue</H3>
          <P>Copy these. Replace with your own spin once you understand the format.</P>
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
            { title: "The real cost of manual content creation", sub: "Time math that will change how you work" },
            { title: "How to use AI projects to manage multiple voices", sub: "One tool, multiple brands, no mixing" },
            { title: "What a $0 ad spend content system looks like", sub: "Organic-only, 850+ leads — how it was done" },
            { title: "The automation that replaced a VA", sub: "What it does, how it's built, what it cost" },
            { title: "How to productize a skill using AI", sub: "From freelancer to digital product seller in 7 days" },
            { title: "Building an audience that buys, not just follows", sub: "Intent-driven content strategy" },
            { title: "The content system that runs while you sleep", sub: "Full stack — tools, workflows, and results" },
            { title: "How to launch a digital product this week", sub: "The 7-day playbook, condensed" },
          ]} />

          <Callout text="Seed the queue before building automations. Add 20 topic ideas manually. This gives you something to work with on day one and reveals gaps in your topic strategy before you automate." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 03 — HOOK + CONTENT SYSTEM */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="03" title={<>Hook + content <em className="kit-accent" style={{ fontStyle: "italic" }}>system</em></>}
          intro="What makes people stop, read, and move toward your offer. A carousel that works has three things: a hook that creates tension, teaching that delivers value, and a CTA that feels like the obvious next step.">

          <H3>The hook formula — 4 patterns that work in 2026</H3>
          <TableWrap headers={["Pattern", "Template", "Example"]} rows={[
            ["Counterintuitive", "\"The [thing everyone does] is why [bad result]\"", "\"Using ChatGPT for everything is why your content sounds generic\""],
            ["Bold claim", "\"You don't need [expected thing] to [desired result]\"", "\"You don't need a team to publish 5x per week\""],
            ["Specific result", "\"How we [specific result] without [expected cost]\"", "\"How we generated 850 leads with $0 in ads\""],
            ["Pattern interrupt", "\"Stop [common action]. Do [alternative] instead.\"", "\"Stop writing posts from scratch. Build a queue instead.\""],
          ]} />

          <MistakeBlock text="Common mistake: hooks that get likes but zero DMs. If your hook isn't connected to a pain point your offer solves, it drives engagement without revenue. Always tie the hook back to the CTA." />

          <PromptBlock type="Hook Generator — Copy This" content={`Write 10 carousel hook ideas for an Instagram account about [YOUR TOPIC].

Rules:
- Each hook must address a real pain point or a counterintuitive insight
- Max 8 words per hook
- No emojis, no hype words
- Mix patterns: counterintuitive, bold claim, specific result, pattern interrupt
- Format: numbered list, hooks only, no explanation`} />

          <PromptBlock type="Carousel Writer — Copy This" content={`Write a 7-slide Instagram carousel about: [TOPIC]

Audience: [YOUR AUDIENCE DESCRIPTION]

Format:
SLIDE 1 — HOOK: [max 8 words] + [1 sentence body]
SLIDES 2–6 — CONTENT: [max 7 words headline] + [1–2 sentences, one idea per slide]
SLIDE 7 — CTA: Want the full system? Comment SYSTEM below.

Tone: direct, peer-to-peer, practitioner. No buzzwords. Output slides only.`} />

          <QuickWin text="Rewrite your last 3 posts using these hook patterns. Compare engagement before and after. Most people see 2-3x improvement on reach from hooks alone." />

          <H3>Path execution</H3>
          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Use the prompt templates above manually. Generate hooks, pick the best one, write the carousel. Build design in Canva with one reusable template.", time: "20 min/post" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Hook bank stored in your queue. Content templates saved in your AI brain. Consistent format, repeatable process, quality stays high.", time: "10 min/post" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "AI-scored hooks with performance feedback. Connect analytics to your brain so it learns what works for your audience over time.", time: "5 min/post" },
          ]} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 04 — DM SALES ENGINE */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="04" title={<>DM sales <em className="kit-accent" style={{ fontStyle: "italic" }}>engine</em></>}
          intro="Conversations that qualify, nurture, and close. The comment-to-DM flow is the most reliable organic sales mechanism on social platforms right now. No ad spend. No landing pages. Just conversations that convert.">

          <H3>The DM philosophy</H3>
          <P>This isn't about blasting automated messages. It's about building conversations that feel personal at scale. Someone comments your keyword, a sequence fires, and 24-72 hours later they've either bought or moved on. No pressure. No hard sell.</P>

          <H3>The 4-message framework</H3>
          <DMThread messages={[
            { label: "DM 1", timing: "Instant after trigger", text: "Hey — saw your comment.\n\nI'm sending you the breakdown right now.\nGive me one second.", tag: "TRIGGER: keyword comment", isBot: false },
            { label: "DM 2", timing: "60 seconds later", text: "Most people who try to build [YOUR SYSTEM TYPE] fail at the same point.\n\nThey start with the tool instead of the system.\n\nA real system has three parts: a brain (what your AI knows), a queue (what it needs to do), and an output layer (what gets published).\n\nMost people have the output layer. Almost no one has the brain and the queue.\n\nThat's what [YOUR PRODUCT] fixes.", tag: "VALUE: problem framing", isBot: true },
            { label: "DM 3", timing: "3 minutes later", text: "Here's what's inside:\n\n→ The full system architecture\n→ Ready-to-use AI prompts you paste and run\n→ Content queue templates\n→ DM sales scripts\n→ A 7-day launch checklist\n\nThis is everything built from [YOUR PROOF POINT].\nNot theory. A field guide you open and execute.", tag: "VALUE: what's inside", isBot: false },
            { label: "DM 4", timing: "5 minutes later", text: "It's $27.\n\n→ [YOUR CHECKOUT LINK]\n\nThe price is low on purpose. It has to earn your trust through what it delivers — not through what it costs.", tag: "CTA: checkout", isBot: true },
          ]} />

          <PromptBlock type="DM Response Handler — Copy This" content={`You are handling DMs for [BRAND NAME].

Context: this person commented [KEYWORD] on a post about [TOPIC]. They received the DM sequence and are now replying with questions.

Rules:
- Be helpful, direct, and honest
- If they ask what's inside, list 3-4 key inclusions
- If they say it's too expensive, acknowledge and move on — no discounting
- If they ask for a preview, share ONE specific insight
- Never be pushy. If they say no, thank them
- Keep responses under 3 sentences when possible

Their message: [PASTE DM HERE]`} />

          <MistakeBlock text="Common mistake: automating before you know what converts. Run the first 20 conversations manually. See which messages get replies, which get ignored. Then automate what works." />

          <H3>Objection handling — copy-ready scripts</H3>
          <TableWrap headers={["Objection", "Response"]} rows={[
            ["\"Is this a course?\"", "\"No — it's a field guide. No videos, no modules. You open it, follow the steps, and build your system this week.\""],
            ["\"I'm not technical\"", "\"The Fast Path requires zero technical skills. Just AI prompts and templates you copy-paste.\""],
            ["\"What if it doesn't work for my niche?\"", "\"The system is niche-agnostic. The architecture works the same — you just fill in your topic, audience, and offer.\""],
            ["\"$27 seems too cheap\"", "\"It's priced to remove risk. If the first chapter alone doesn't save you 5 hours this week, I've failed.\""],
            ["\"I'll think about it\"", "\"Take your time. The kit will be here when you're ready. No pressure.\""],
          ]} />

          <H3>Path execution</H3>
          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Manual DMs using saved reply templates. Copy-paste the scripts above. Handle responses yourself using the DM handler prompt.", time: "15 min/day" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Semi-automated with ManyChat or similar. Keyword triggers fire the sequence automatically. You only handle replies.", time: "5 min/day" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "Full automation with qualification flows, CRM tagging, and follow-up sequences. Human only handles edge cases.", time: "1 min/day" },
          ]} />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 05 — REVENUE LAYER */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="05" title={<>Revenue <em className="kit-accent" style={{ fontStyle: "italic" }}>layer</em></>}
          intro="Where the system becomes money. This layer connects your DM engine to actual transactions. The buyer clicks a link, pays, and receives the product — without you doing anything.">

          <H3>Mapping your conversion path</H3>
          <Steps items={[
            { title: "DM → Checkout", body: "Direct link in DM sequence. Best for low-ticket products ($10-$50). Minimal friction, highest conversion." },
            { title: "DM → Call", body: "Book a call link for high-ticket services ($500+). DM sequence qualifies, calendar handles booking." },
            { title: "Content → Link in bio", body: "For passive sales. Every piece of content points to the same link. Lower conversion, broader reach." },
          ]} />

          <H3>Revenue math — conservative scenario</H3>
          <RevenueBox rows={[
            { label: "Posts per week", value: "5" },
            { label: "Average reach per post", value: "2,000" },
            { label: "Comment rate", value: "2%" },
            { label: "Comments/week triggering DMs", value: "200" },
            { label: "DM → link click rate", value: "35%" },
            { label: "Link click → purchase rate", value: "8%" },
            { label: "Sales per week", value: "5.6" },
            { label: "Price per unit", value: "$27" },
            { label: "Weekly revenue", value: "$151", isTotal: false },
            { label: "Monthly revenue (month 1)", value: "$604", isTotal: true },
          ]} />

          <QuickWin text="The one metric that tells you if your system works: DM → link click rate. If it's above 30%, your messaging is working. Below that, rewrite DM 2 (the value message)." />

          <H3>Path execution</H3>
          <PathGrid items={[
            { path: "fast", icon: "⚡", title: "Fast Path", desc: "Link in bio + manual tracking in a spreadsheet. Use Gumroad, Lemon Squeezy, or any simple checkout tool.", time: "20 min setup" },
            { path: "stable", icon: "🔁", title: "Stable Path", desc: "Dedicated landing page + UTM tracking. Know exactly which posts drive sales. Spreadsheet or simple analytics.", time: "1 hour setup" },
            { path: "scale", icon: "📈", title: "Scale Path", desc: "Multi-touchpoint attribution + automated follow-up sequences. Full funnel visibility from first touch to purchase.", time: "2-3 hours setup" },
          ]} />

          <H3>Tool costs (monthly)</H3>
          <TableWrap headers={["Layer", "Fast Path", "Stable Path", "Scale Path"]} rows={[
            ["AI Brain", "Free (ChatGPT/Claude)", "Free (Custom GPT/Project)", "~$3 (API)"],
            ["Content Queue", "Free (Google Sheets)", "Free (Notion/Airtable)", "Free (Airtable)"],
            ["Content + Publishing", "Free (manual)", "$6 (Buffer)", "$25 (automation platform)"],
            ["DM Engine", "Free (manual)", "$15 (ManyChat)", "$15 (ManyChat Pro)"],
            ["Checkout", "Free (Gumroad/Lemon Squeezy)", "Free (5% fee)", "Free (5% fee)"],
            ["Total monthly", "$0", "~$21", "~$43"],
          ]} />

          <Callout text="The system pays for itself with 1-2 sales per month. Everything after that is profit. Start on Fast Path at $0, upgrade to Stable when revenue covers the costs." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* PART 06 — 7-DAY LAUNCH PLAYBOOK */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="06" title={<>7-day launch <em className="kit-accent" style={{ fontStyle: "italic" }}>playbook</em></>}
          intro="Stop reading. Start running. Each day builds on the previous one. By day 7, your system is live. Pick your path icon at each step.">

          <Checklist items={[
            { title: "Day 1 — Build the Brain", desc: "⚡ Paste brain prompt into ChatGPT/Claude (15 min)\n🔁 Create a Claude Project or Custom GPT (30 min)\n📈 Set up API access with system prompt (45 min)\n\nTest: generate 3 carousels. If tone feels right, move on." },
            { title: "Day 2 — Set Up the Queue", desc: "⚡ Create Google Sheet with 8 columns (10 min)\n🔁 Set up Notion/Airtable database (25 min)\n📈 Set up Airtable with API access (40 min)\n\nSeed with 20 topic ideas from the list above." },
            { title: "Day 3 — Create Your First Week", desc: "⚡ Generate 7 carousels manually with your brain (60 min)\n🔁 Use templates to batch-produce content (45 min)\n📈 Run automated generation flow (30 min)\n\nDesign: build one Canva template, reuse for everything." },
            { title: "Day 4 — Install Your Hook System", desc: "Pick 7 hooks from the hook bank or generate new ones.\nMatch each hook to a topic in your queue.\nRewrite any weak hooks using the 4 patterns.\n\nTest: read each hook out loud. Would you stop scrolling?" },
            { title: "Day 5 — Set Up Your DM Engine", desc: "⚡ Save the 4 DM templates as quick replies (15 min)\n🔁 Set up ManyChat with keyword trigger (45 min)\n📈 Build full automation with tagging and follow-up (90 min)\n\nTest: trigger the flow yourself from a test account." },
            { title: "Day 6 — Connect Revenue", desc: "⚡ Set up Gumroad/Lemon Squeezy + link in bio (20 min)\n🔁 Create landing page + connect to DM flow (45 min)\n📈 Set up tracking + follow-up sequences (90 min)\n\nTest: complete a test purchase. Full flow, start to finish." },
            { title: "Day 7 — Go Live", desc: "Publish your first post with CTA keyword.\nMonitor the DM flow for 24 hours.\nFix anything that breaks.\n\nDone. Your system is running." },
          ]} />

          <MistakeBlock text="Common mistake per day — Day 1: spending too long perfecting the brain. Day 3: designing instead of producing. Day 5: automating before testing manually. Day 7: not publishing because it's 'not ready'." />

          <Quote text="The system doesn't need to be perfect on day 7. It needs to be live. Perfect is the enemy of revenue. Launch, measure, iterate." />
        </Chapter>

        {/* ═══════════════════════════════════════════════════ */}
        {/* BONUS — OPERATOR'S TOOLKIT */}
        {/* ═══════════════════════════════════════════════════ */}
        <Chapter num="++" title={<>Operator's <em className="kit-accent" style={{ fontStyle: "italic" }}>toolkit</em></>}
          intro="Reference material. Come back often. Everything below is designed to be grabbed and used — not studied.">

          <H3>Prompt library — 12 copy-ready prompts</H3>
          <P>Every prompt below works with ChatGPT, Claude, Gemini, or any capable AI. Replace brackets. Run. Iterate.</P>

          <PromptBlock type="1. Hook Generator" content={`Write 10 carousel hook ideas for an Instagram account about [YOUR TOPIC].

Rules:
- Each hook must address a real pain point or a counterintuitive insight
- Max 8 words per hook
- No emojis, no hype words
- Mix patterns: counterintuitive, bold claim, specific result, pattern interrupt
- Format: numbered list, hooks only, no explanation`} />

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

          <PromptBlock type="4. Topic Research" content={`Search for the top questions [YOUR AUDIENCE] are asking about [YOUR TOPIC] right now.

For each question, suggest:
1. The question as-is
2. A carousel hook version (max 8 words)
3. The core insight the carousel should deliver

Return 10 results. Numbered list.`} />

          <PromptBlock type="5. Repurpose → X Thread" content={`Convert this Instagram carousel into an X/Twitter thread:

[PASTE CAROUSEL]

Rules:
- Tweet 1 = hook (max 280 chars)
- Tweets 2–7 = one per slide, expanded
- Last tweet = "Full breakdown: [link]"
- No hashtags. Max 240 chars per tweet.
- Format: 1/ 2/ 3/`} />

          <PromptBlock type="6. Repurpose → LinkedIn" content={`Adapt this Instagram carousel for a LinkedIn post:

[PASTE CAROUSEL]

- First line = hook
- 4–5 short paragraphs
- Bullet points for lists
- CTA: "DM me SYSTEM and I'll send the breakdown."
- No hashtags`} />

          <PromptBlock type="7. Content Repurposer (any → carousel)" content={`Convert this content into a 7-slide Instagram carousel:

[PASTE ARTICLE / THREAD / TRANSCRIPT]

Rules:
- Extract the most actionable insights only
- Follow standard format (hook → 5 content → CTA)
- Each slide = one idea, max 2 sentences`} />

          <PromptBlock type="8. Weekly Content Calendar" content={`Create a 7-day content calendar for [YOUR BRAND].

Audience: [YOUR AUDIENCE]. Platform: Instagram (primary), X (secondary).

For each day:
- Content type (carousel, single image, reel)
- Topic (1 line)
- Hook (max 8 words)
- Angle (1 sentence)

Mix: 4 carousels, 2 single images, 1 reel.`} />

          <PromptBlock type="9. Testimonial Request" content={`Write a DM asking a client for a testimonial.

Context: I delivered [PROJECT TYPE]. Results: [RESULTS].

Rules: casual, genuine, ask for specifics, offer to draft something they can edit, max 5 sentences.`} />

          <PromptBlock type="10. Bio Optimizer" content={`Rewrite this Instagram bio:

Current: [PASTE BIO]

Format:
- Line 1: What you do (max 5 words)
- Line 2: Who you help + the result
- Line 3: Social proof or specific number
- Line 4: CTA`} />

          <PromptBlock type="11. Product Description" content={`Write a product description for:

Product: [NAME] | Price: [PRICE]
Includes: [LIST] | For: [AUDIENCE]

Format: Headline (max 8 words) → 3 paragraphs (problem → solution → inside) → bullet list (max 8) → trust line.`} />

          <PromptBlock type="12. Objection Handler" content={`Write responses to these common objections about [YOUR PRODUCT]:

1. "Is this a course?"
2. "I'm not technical"
3. "Will this work for my niche?"
4. "Seems too cheap"
5. "I'll think about it"

Rules: honest, max 2 sentences each, no pressure, acknowledge the concern before responding.`} />

          <H3>Hook bank — 20 templates</H3>
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

          <H3>Tool comparison — by path</H3>
          <TableWrap headers={["Layer", "⚡ Fast", "🔁 Stable", "📈 Scale"]} rows={[
            ["AI Brain", "ChatGPT / Claude (browser)", "Custom GPT / Claude Project", "API (any provider)"],
            ["Queue", "Google Sheets", "Notion / Airtable", "Airtable + API"],
            ["Design", "Canva (manual)", "Canva templates", "Canva API / Figma"],
            ["Publishing", "Manual posting", "Buffer / Later", "Automation platform"],
            ["DM Engine", "Manual replies", "ManyChat", "ManyChat + CRM"],
            ["Checkout", "Gumroad / LemonSqueezy", "Same + landing page", "Same + attribution"],
            ["Analytics", "Platform native", "Spreadsheet", "Dashboard + AI analysis"],
          ]} />

          <H3>What to do when it breaks</H3>
          <TableWrap headers={["Symptom", "Likely cause", "Fix"]} rows={[
            ["Content sounds generic", "Brain prompt too vague", "Add more tone rules and audience specifics"],
            ["Low reach on posts", "Weak hooks", "Test different patterns from the hook bank"],
            ["DMs not converting", "Value message too long or too vague", "Shorten DM 2. Make the benefit concrete."],
            ["No one comments the keyword", "CTA not clear enough", "Make the last slide's instruction unmissable"],
            ["Queue keeps emptying", "Not seeding enough topics", "Block 20 min/week to add 10 new topics"],
            ["Automation breaks", "Platform API change", "Check connection status. Reconnect or update."],
          ]} />
        </Chapter>

        {/* FOOTER */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: "48px 0 0", borderTop: "1px solid #222220", marginTop: 80, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div className="kit-mono" style={{ fontSize: 11, color: "#6b6960", letterSpacing: "0.1em" }}>
            FLUXROW<span className="kit-accent">.</span>
          </div>
          <div className="kit-mono" style={{ fontSize: 10, color: "#3a3a36" }}>
            AI Operator Starter Kit — v2.0 — 2026
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

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: "#aaa", fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>{children}</p>
);

const Callout = ({ text, warn = false }: { text: string; warn?: boolean }) => (
  <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5 }}
    style={{ background: warn ? "#140a00" : "#0a1400", border: `1px solid ${warn ? "#332200" : "#1e3300"}`, borderLeft: `3px solid ${warn ? "#ff8800" : "#c8f000"}`, borderRadius: "0 8px 8px 0", padding: "20px 24px", margin: "28px 0" }}>
    <p style={{ color: warn ? "#b07030" : "#9aba40", fontSize: 14, margin: 0 }}>{text}</p>
  </motion.div>
);

/* ── New v2 blocks ── */

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
      ["Daily time investment", "30-45 min", "15-20 min", "5-10 min"],
      ["Best for", "Launching this week", "Consistent operations", "Teams & growth"],
      ["Upgrade to next?", "When you're consistent", "When volume grows", "You're here"],
    ]} />
  </motion.div>
);

/* ── Existing sub-components (preserved) ── */

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

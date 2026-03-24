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

        @media(max-width:600px) {
          .kit-chapter-grid { grid-template-columns: 1fr !important; }
          .kit-diagram-row { flex-direction: column !important; }
          .kit-diagram-arrow { transform: rotate(90deg); }
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
            v1.0 — 2025
          </div>
        </div>

        {/* HERO */}
        <div style={{ padding: "80px 0 72px", borderBottom: "1px solid #222220" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.2em", color: "#6b6960", textTransform: "uppercase", marginBottom: 32 }}>
            The complete field guide
          </div>
          <h1 className="kit-serif" style={{ fontSize: "clamp(48px,7vw,84px)", lineHeight: 1.0, letterSpacing: "-0.01em", marginBottom: 32, fontWeight: 400 }}>
            Build an AI system<br />that runs your<br />content & <em className="kit-accent" style={{ fontStyle: "italic" }}>sales.</em>
          </h1>
          <p style={{ fontSize: 18, fontWeight: 300, color: "#999", maxWidth: 560, lineHeight: 1.65, marginBottom: 48 }}>
            Everything we learned from delivering 120+ automations and 850+ leads for real businesses — condensed into a step-by-step system you can build this week.
          </p>
          <div className="kit-proof-row" style={{ display: "flex", gap: 40, flexWrap: "wrap", paddingTop: 32, borderTop: "1px solid #222220" }}>
            {[
              { num: "120+", label: "Automations delivered" },
              { num: "850+", label: "Leads generated" },
              { num: "$0", label: "Ad spend required" },
              { num: "7 days", label: "To first sale" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div className="kit-serif" style={{ fontSize: 36, color: "#e8e6df", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#6b6960", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CHAPTER NAV */}
        <div style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: "24px 28px", margin: "48px 0" }}>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase", marginBottom: 16 }}>
            What's inside
          </div>
          <div className="kit-chapter-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 32px" }}>
            {[
              { num: "01", title: "The system architecture" },
              { num: "06", title: "The DM sales engine" },
              { num: "02", title: "Building your AI brain" },
              { num: "07", title: "Prompt library (12 prompts)" },
              { num: "03", title: "Content queue setup" },
              { num: "08", title: "n8n automation workflows" },
              { num: "04", title: "Content creation system" },
              { num: "09", title: "Revenue math & pricing" },
              { num: "05", title: "Publishing automation" },
              { num: "10", title: "7-day launch checklist" },
            ].map((c, i) => (
              <a key={i} href={`#chapter-${c.num}`} className="kit-chapter-item" style={{ display: "flex", gap: 12, alignItems: "baseline", padding: "5px 0", textDecoration: "none", borderBottom: "1px solid #222220" }}>
                <span className="kit-mono" style={{ fontSize: 10, color: "#3a3a36", flexShrink: 0, width: 24 }}>{c.num}</span>
                <span className="kit-chapter-title" style={{ fontSize: 13, color: "#999", transition: "color 0.15s" }}>{c.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CHAPTER 01 */}
        <Chapter num="01" title={<>The system <em className="kit-accent" style={{ fontStyle: "italic" }}>architecture</em></>}
          intro="Before touching any tool, understand what you're building. Most people start with tools. That's why they fail. Start with the system, then pick the tools that fit.">
          <P>A real AI content and sales system has five layers. Each one feeds the next. Remove any layer and the whole thing breaks.</P>

          {/* System Diagram */}
          <div style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: 32, margin: "32px 0", overflowX: "auto" }}>
            <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#6b6960", textTransform: "uppercase", marginBottom: 24 }}>
              Full stack — content to revenue
            </div>
            <div className="kit-diagram-row" style={{ display: "flex", alignItems: "stretch", gap: 0, minWidth: 540 }}>
              {[
                { layer: "Layer 1", name: "Brain", tool: "Claude API" },
                { layer: "Layer 2", name: "Queue", tool: "Airtable" },
                { layer: "Layer 3", name: "Publisher", tool: "n8n + Buffer" },
                { layer: "Layer 4", name: "DM Engine", tool: "ManyChat" },
                { layer: "Layer 5", name: "Revenue", tool: "Lemon Squeezy" },
              ].map((n, i) => (
                <div key={i} style={{ display: "flex", alignItems: "stretch" }}>
                  <div style={{ flex: 1, background: i === 0 ? "#0d1800" : "#181816", border: `1px solid ${i === 0 ? "#2a4400" : "#2e2e2a"}`, borderRadius: 6, padding: "16px 12px", textAlign: "center" }}>
                    <div className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{n.layer}</div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "#e8e6df", marginBottom: 4 }}>{n.name}</div>
                    <div style={{ fontSize: 11, color: "#6b6960" }}>{n.tool}</div>
                  </div>
                  {i < 4 && <div className="kit-diagram-arrow" style={{ display: "flex", alignItems: "center", padding: "0 8px", color: "#3a3a36", fontSize: 20, flexShrink: 0 }}>→</div>}
                </div>
              ))}
            </div>
          </div>

          <H3>What each layer does</H3>
          <Steps items={[
            { title: "Brain — the intelligence layer", body: "A system prompt that encodes your brand voice, audience knowledge, content formats, and output rules. Claude reads this on every request and produces consistent, on-brand content. Without a good brain, every output is random." },
            { title: "Queue — the operations layer", body: "An Airtable database that tracks every piece of content from idea to published. The queue is what transforms a random content effort into a production system. It's also what n8n reads to know what to generate next." },
            { title: "Publisher — the delivery layer", body: "n8n + Buffer (or Meta API directly) takes approved content from the queue and publishes it on schedule. You review once. Everything else is automated. Target: 5–7 posts per week, zero manual publishing." },
            { title: "DM Engine — the conversion layer", body: "ManyChat intercepts every comment containing your keyword (SYSTEM) and fires a 5-message DM sequence. This is where followers become leads and leads become buyers. Fully automated, Meta-approved, no ban risk." },
            { title: "Revenue — the checkout layer", body: "Lemon Squeezy hosts your product, handles payment, and delivers the file automatically. The buyer clicks a link in a DM, pays, and receives the product — without you doing anything. This layer runs 24/7." },
          ]} />

          <Callout text="Build in order. Brain first, then Queue, then Publisher. Don't set up ManyChat before you have content to drive traffic. Don't build the DM engine before your checkout is live. Every layer depends on the one before it." />
        </Chapter>

        {/* CHAPTER 02 */}
        <Chapter num="02" title={<>Building your AI <em className="kit-accent" style={{ fontStyle: "italic" }}>brain</em></>}
          intro="The brain is a system prompt. It's the most important thing you'll build. A weak brain produces generic content. A strong brain produces content that sounds exactly like you — at scale.">
          <H3>What a brain needs</H3>
          <Steps items={[
            { title: "Identity — who is speaking", body: "Name, brand, what you do, who you serve. Claude needs to know the persona before it can write in character." },
            { title: "Audience — who is listening", body: "Be specific. \"Founders and freelancers\" is too vague. \"Solo operators who want to use AI to replace 10 hours of manual work per week but don't know where to start\" is a person Claude can write to." },
            { title: "Tone rules — how it sounds", body: "List what to do AND what to avoid. \"No emojis. No phrases like 'game-changing' or 'revolutionary'. Write like a practitioner, not a marketer. Max 8 words per headline.\"" },
            { title: "Output format — what to produce", body: "Exact structure. Slide count. Character limits. Numbering format. The more precise this is, the less editing you'll do after." },
          ]} />

          <PromptBlock type="System Prompt — Content Brain v1" content={`You are a content operator for [YOUR BRAND NAME].

IDENTITY:
You create content about AI automation, systems thinking, and practical tools for founders, freelancers, and solo operators who want to run lean, efficient businesses.

AUDIENCE:
Solo operators and small team founders who are curious about AI but overwhelmed. They've tried ChatGPT for random tasks. They've never built a real system. They're skeptical of hype. They want proof and steps, not inspiration.

VOICE & TONE:
- Direct and clear. No fluff, no filler sentences.
- Write like a practitioner sharing what actually works, not a marketer selling a dream.
- Short sentences. Active voice. Specific over general.
- No emojis unless I ask.
- Never use: "game-changing", "revolutionary", "unleash", "unlock your potential", "transform your business"
- Treat the reader like a smart adult who has been burned by bad advice before.

CAROUSEL FORMAT (default):
When asked for a carousel, always produce exactly this structure:

SLIDE 1 — HOOK
Headline: [max 8 words, bold claim or counterintuitive insight]
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
- No slide should repeat information from a previous slide.
- Output only the slides. No preamble, no explanation.`} />

          <Callout text="Iterate the brain. After your first 10 carousels, review what needed editing. Update the brain to prevent those edits. A good brain after 30 carousels requires almost zero editing of the output." />

          <H3>Where to use your brain</H3>
          <ToolGrid items={[
            { name: "Claude.ai — Projects", desc: "Save your brain as a Project instruction. Every chat in that project inherits the brain automatically. Best for manual use and quick tests.", tags: [{ label: "FREE", type: "free" }, { label: "START HERE", type: "key" }], link: "claude.ai →" },
            { name: "Anthropic API — claude-sonnet-4", desc: "For automated n8n flows. Pass the brain as system_prompt on every API call. ~$0.003/1K tokens. 100 carousels costs less than $1.", tags: [{ label: "PAY PER USE", type: "paid" }, { label: "FOR AUTOMATION", type: "key" }], link: "console.anthropic.com →" },
          ]} />
        </Chapter>

        {/* CHAPTER 03 */}
        <Chapter num="03" title={<>Content queue <em className="kit-accent" style={{ fontStyle: "italic" }}>setup</em></>}
          intro="The queue is your editorial calendar, production tracker, and content database in one. Without it, you have outputs. With it, you have a system.">
          <ToolGrid items={[
            { name: "Airtable", desc: "Best choice. Native n8n integration, clean UI, fast API. Free tier handles up to 1,000 records — more than enough to start.", tags: [{ label: "FREE TIER", type: "free" }, { label: "RECOMMENDED", type: "key" }], link: "airtable.com →" },
            { name: "Notion Database", desc: "Works well if you already live in Notion. Use a database view with filters. n8n has a Notion connector that works reliably.", tags: [{ label: "FREE TIER", type: "free" }], link: "notion.so →" },
          ]} />

          <H3>Minimum viable queue — 8 fields</H3>
          <TableWrap headers={["Field", "Type", "What goes here"]} rows={[
            ["Title", "Text", "The carousel topic in one line. Ex: \"Why most AI automations break in week 1\""],
            ["Status", "Select", "Idea → Drafting → Review → Approved → Scheduled → Published"],
            ["Hook", "Text", "Slide 1 headline only. The scroll-stopper. Filled by Claude."],
            ["Content", "Long text", "Full Claude output — all 7 slides. Paste raw, review here."],
            ["Caption", "Long text", "Instagram caption with CTA and hashtags. Generated separately."],
            ["Publish Date", "Date", "When it goes live. n8n reads this to trigger scheduling."],
            ["Platform", "Select", "Instagram / X / LinkedIn. Allows multi-platform queuing."],
            ["Notes", "Text", "Your editing notes. What you changed, what to improve next time."],
          ]} />

          <Callout text="Seed the queue before building automations. Add 20 topic ideas manually. This gives n8n something to work with on day one and reveals gaps in your topic strategy before you automate." />

          <H3>20 topic ideas to seed your queue right now</H3>
          <P>Use these as starting points. Replace with your own spin once you understand the format.</P>
          <TopicList topics={[
            { title: "Why your AI keeps giving you generic content", sub: "The brain prompt problem — and how to fix it in 10 minutes" },
            { title: "The 3-layer AI system every solo operator needs", sub: "Brain + Queue + Publisher — explained simply" },
            { title: "How to go from idea to published post in 4 minutes", sub: "The exact n8n workflow we use daily" },
            { title: "The comment trick that turns followers into buyers", sub: "ManyChat keyword triggers explained" },
            { title: "Why I stopped writing captions manually", sub: "And what I do instead (with proof)" },
            { title: "5 n8n automations under 10 nodes that save 2h/day", sub: "Real workflows, not concepts" },
            { title: "How to build a content queue that runs itself", sub: "Airtable + Claude + n8n in 45 minutes" },
            { title: "The only 4 tools you need to run a lean AI operation", sub: "Claude, n8n, Airtable, ManyChat — nothing else" },
            { title: "What I learned from 120 automation projects", sub: "The patterns that work, the ones that don't" },
            { title: "How to write a system prompt that doesn't suck", sub: "The 4 components every AI brain needs" },
            { title: "Airtable as a content OS — the exact setup", sub: "Fields, views, and automations we use" },
            { title: "The DM sequence that converts without being pushy", sub: "5 messages, $27, zero pressure" },
            { title: "Why most people's AI content sounds like AI", sub: "The tone problem — and how to train around it" },
            { title: "How to build an n8n workflow in 30 minutes", sub: "From scratch — no coding, no prior experience" },
            { title: "The real cost of manual content creation", sub: "Time math that will change how you work" },
            { title: "How to use Claude Projects to manage client voices", sub: "One account, multiple brands, no mixing" },
            { title: "What a $0 ad spend content system looks like", sub: "Organic-only, 850+ leads — how we did it" },
            { title: "The automation that replaced our VA", sub: "What it does, how it's built, what it cost" },
            { title: "How to productize a skill using AI", sub: "From freelancer to digital product seller in 7 days" },
            { title: "The content system that runs while you sleep", sub: "Our full stack — tools, workflows, and results" },
          ]} />
        </Chapter>

        {/* CHAPTER 04 */}
        <Chapter num="04" title={<>Content creation <em className="kit-accent" style={{ fontStyle: "italic" }}>system</em></>}
          intro="A carousel that stops the scroll has three things: a hook that creates tension, teaching that delivers real value, and a CTA that feels like the obvious next step. Here's how to build all three with Claude.">
          <H3>The hook formula</H3>
          <P>The hook is the only thing that matters for reach. If slide 1 doesn't stop someone mid-scroll, the other 6 slides don't exist. Use one of these three patterns:</P>

          <TableWrap headers={["Pattern", "Template", "Example"]} rows={[
            ["Counterintuitive", "\"The [thing everyone does] is why [bad result]\"", "\"Using ChatGPT for everything is why your content sounds like everyone else's\""],
            ["Bold claim", "\"You don't need [expected thing] to [desired result]\"", "\"You don't need a team to publish 5x per week\""],
            ["Specific result", "\"How we [specific result] without [expected cost]\"", "\"How we generated 850 leads with $0 in ads\""],
          ]} />

          <H3>Visual design — the minimum viable carousel</H3>
          <P>You don't need a designer. You need a template. Build one in Canva — black background, white text, one idea per slide. Use the same template for every post for 90 days. Consistency beats variety when you're building an audience.</P>

          <ToolGrid items={[
            { name: "Canva Pro", desc: "Build one carousel template. Duplicate for every new post. Brand Kit keeps fonts and colors consistent. Export as PNG slides.", tags: [{ label: "FREE TIER", type: "free" }, { label: "$13/MO PRO", type: "paid" }], link: "canva.com →" },
            { name: "Canva API (advanced)", desc: "Connect to n8n to fill templates automatically with Claude-generated text. Requires Canva for Teams. Fully hands-off design at scale.", tags: [{ label: "TEAMS PLAN", type: "paid" }, { label: "FOR SCALE", type: "key" }], link: "canva.com/developers →" },
          ]} />
        </Chapter>

        {/* CHAPTER 05 */}
        <Chapter num="05" title={<>Publishing <em className="kit-accent" style={{ fontStyle: "italic" }}>automation</em></>}
          intro="Two paths to automated publishing: Buffer (fast setup, slight manual step) or Meta Content Publishing API (fully automated, more setup). Start with Buffer. Graduate to Meta API when you're ready.">
          <ToolGrid items={[
            { name: "Buffer", desc: "Connect Instagram, schedule via API from n8n. Free tier supports 3 channels and 10 scheduled posts. Upgrade to $6/mo for unlimited. Best starting point.", tags: [{ label: "FREE — 3 CHANNELS", type: "free" }, { label: "$6/MO UNLIMITED", type: "paid" }, { label: "START HERE", type: "key" }], link: "buffer.com →" },
            { name: "Meta Content Publishing API", desc: "Direct publish to Instagram. Requires Facebook Developer account, Instagram Business account, and user access token. 100% automated when set up. No third-party dependency.", tags: [{ label: "FREE", type: "free" }, { label: "FULLY AUTONOMOUS", type: "key" }], link: "Meta Developers →" },
            { name: "n8n — the orchestrator", desc: "Connects Claude, Airtable, Canva, and Buffer/Meta into one automated flow. Self-host free on Railway or use n8n Cloud at $20/mo.", tags: [{ label: "SELF-HOST FREE", type: "free" }, { label: "$20/MO CLOUD", type: "paid" }], link: "n8n.io →" },
            { name: "Railway (n8n hosting)", desc: "Deploy self-hosted n8n in 5 minutes. Free tier available. ~$5/mo for always-on instance. Best cost-to-control ratio for this stack.", tags: [{ label: "FREE TIER", type: "free" }, { label: "~$5/MO", type: "paid" }], link: "railway.app →" },
          ]} />

          <H3>The publishing workflow — step by step</H3>
          <Steps items={[
            { title: "TRIGGER", body: "Schedule — daily 8am\nn8n runs automatically every morning. No manual trigger." },
            { title: "READ", body: "Airtable — get \"Idea\" rows\nPull records where Status = \"Idea\". Take first 3. These become today's content batch." },
            { title: "AI", body: "Claude API — generate carousel\nSend brain prompt + \"Write a carousel about: [Title]\". Receive full 7-slide script." },
            { title: "AI", body: "Claude API — generate caption\nSecond API call: \"Write an Instagram caption for this carousel: [output]\". Separate call keeps both outputs clean." },
            { title: "WRITE", body: "Airtable — update record\nWrite carousel + caption to Content and Caption fields. Update Status to \"Review\". You get notified." },
            { title: "NOTIFY", body: "Email/Slack — review alert\n\"3 carousels ready for review.\" You open Airtable, approve, set Publish Date, change Status to \"Approved\"." },
            { title: "TRIGGER", body: "Airtable automation — status change\nWhen Status changes to \"Approved\" → triggers a second n8n workflow that schedules to Buffer." },
            { title: "PUBLISH", body: "Buffer API — schedule post\nn8n sends the caption + scheduled time to Buffer via API. Buffer publishes at the right time. Done." },
          ]} />

          <Callout text="Your daily time investment after setup: 20 minutes. Review the drafts in Airtable, approve the good ones, delete the bad ones. Everything else is handled." />
        </Chapter>

        {/* CHAPTER 06 */}
        <Chapter num="06" title={<>The DM sales <em className="kit-accent" style={{ fontStyle: "italic" }}>engine</em></>}
          intro="The comment-to-DM flow is the most reliable organic sales mechanism on Instagram right now. Someone comments your keyword, ManyChat fires a 5-message sequence, and 24–72 hours later, they've either bought or they haven't. No human involvement.">
          <ToolGrid items={[
            { name: "ManyChat", desc: "Industry standard for Instagram DM automation. Uses Meta's official API. No ban risk. Free tier handles up to 1,000 contacts — enough to validate the entire funnel before paying.", tags: [{ label: "FREE — 1K CONTACTS", type: "free" }, { label: "$15/MO PRO", type: "paid" }, { label: "REQUIRED", type: "key" }], link: "manychat.com →" },
          ]} />

          <H3>The full 5-message sequence — copy-ready</H3>
          <DMThread messages={[
            { label: "Public reply", timing: "Instant — visible under the post", text: "Sent it to your DMs 👊", tag: "tag: IG_COMMENT_SYSTEM", isBot: true },
            { label: "DM 1", timing: "Instant after comment", text: "Hey — saw your comment.\n\nI'm sending you the breakdown right now.\nGive me one second.", tag: "tag: IG_DM_OPENED", isBot: false },
            { label: "DM 2", timing: "60 seconds later", text: "Most people who try to build AI automations fail at the same point.\n\nThey start with the tool. They pick n8n or Make, watch a tutorial, build something that works once — and then it breaks, or they can't repeat it, or they don't know what to do next.\n\nThe reason is simple: they built a workflow without a system.\n\nA real system has three parts: a brain (what your AI knows and how it thinks), a queue (what it needs to do and when), and an output layer (what actually gets published or sent).\n\nMost people have the output layer. Almost no one has the brain and the queue.\n\nThat's what the AI Operator Starter Kit fixes.", tag: "tag: IG_SAMPLE_SENT", isBot: true },
            { label: "DM 3", timing: "3 minutes later", text: "Here's what's inside:\n\n→ The exact system architecture we use (brain + queue + publisher + DM engine + checkout)\n→ A ready-to-use Claude brain prompt you paste in and run today\n→ The Airtable content queue setup — fields, views, automations\n→ 20 carousel topic ideas pre-loaded and ready\n→ The full n8n publishing workflow — 8 steps, no coding\n→ The complete 5-DM ManyChat sequence (this one you're reading right now)\n→ 12 copy-ready prompts for content, captions, hooks, and DM responses\n→ Links to every tool with pricing, tiers, and setup order\n→ A 7-day launch checklist\n→ The revenue math — what this system generates at different conversion rates\n\nThis is everything we built from 120+ real automation projects.\nNot theory. Not a course with 6 hours of video. A field guide you open and execute.", tag: "tag: IG_LOW_TICKET_PITCHED", isBot: false },
            { label: "DM 4", timing: "5 minutes later", text: "It's $27.\n\n→ [YOUR LEMON SQUEEZY LINK]\n\nThe price is low on purpose. The kit has to earn your trust through what it delivers — not through what it costs.", tag: "tag: IG_PURCHASE_CLICK", isBot: true },
            { label: "DM 5", timing: "24h later — only if no link click", text: "Hey — just checking if you had any questions about the kit.\n\nHappy to clarify anything before you decide.\nNo pressure either way.", tag: "tag: IG_FOLLOWUP_SENT", isBot: false },
          ]} />

          <H3>ManyChat tag strategy</H3>
          <TableWrap headers={["Tag", "When applied", "Use it for"]} rows={[
            ["IG_COMMENT_SYSTEM", "Comment received", "All people who triggered the flow"],
            ["IG_DM_OPENED", "DM 1 delivered", "Confirmed the DM window opened"],
            ["IG_SAMPLE_SENT", "DM 2 delivered", "Received the teaser"],
            ["IG_LOW_TICKET_PITCHED", "DM 3 delivered", "Saw the full pitch"],
            ["IG_PURCHASE_CLICK", "Link clicked in DM 4", "Hot leads — retarget with broadcast"],
            ["IG_FOLLOWUP_SENT", "DM 5 delivered", "Didn't buy in 24h — warm leads"],
          ]} />

          <Callout text="Retargeting with tags. After 30 days, broadcast to everyone with IG_LOW_TICKET_PITCHED but without IG_PURCHASE_CLICK. These are people who saw the pitch but didn't buy. A single broadcast with a new angle converts 5–15% of this list." />
        </Chapter>

        {/* CHAPTER 07 */}
        <Chapter num="07" title={<>Prompt library — <em className="kit-accent" style={{ fontStyle: "italic" }}>12 prompts</em></>}
          intro="Copy these directly. Replace brackets. Run. These are the actual prompts we use across client projects and our own content operation.">

          <PromptBlock type="1. Hook Generator" content={`Write 10 carousel hook ideas for an Instagram account about AI automation for solo operators.

Rules:
- Each hook must address a real pain point or a counterintuitive insight
- Max 8 words per hook
- No emojis, no hype words
- Mix patterns: counterintuitive claims, bold statements, specific results
- Format: numbered list, hooks only, no explanation`} />

          <PromptBlock type="2. Carousel Writer" content={`Write a 7-slide Instagram carousel about: [TOPIC]

Audience: solo operators who want to use AI to automate their business. Skeptical. Want real steps. Hate hype.

Format:
SLIDE 1 — HOOK
Headline: [max 8 words]
Body: [1 sentence that earns the headline]

SLIDES 2–6 — CONTENT
Headline: [max 7 words]
Body: [1–2 sentences. One idea per slide. No padding.]

SLIDE 7 — CTA
Headline: Want the full system?
Body: Comment SYSTEM below. I'll send you the complete breakdown.

Tone: direct, peer-to-peer, practitioner. No buzzwords. Output slides only.`} />

          <PromptBlock type="3. Caption Writer" content={`Write an Instagram caption for this carousel:

[PASTE CAROUSEL CONTENT HERE]

Rules:
- First line = the hook (slide 1 headline, slightly expanded)
- 3–4 short paragraphs max. Each paragraph = one idea.
- End with: "Comment SYSTEM below and I'll send you the full breakdown."
- Add 6 relevant hashtags at the end (lowercase, no generic ones)
- No emojis unless they add meaning
- Tone: peer-to-peer. Not a brand posting. A practitioner sharing.`} />

          <PromptBlock type="4. Topic Research (with web search)" content={`Search for the top questions solo operators, freelancers, and founders are asking about AI automation right now.

Sources to consider: Reddit (r/automation, r/entrepreneur), X/Twitter, Quora, Product Hunt discussions.

For each question found, suggest:
1. The question as-is
2. A carousel hook version (max 8 words, no hype)
3. The core insight the carousel should deliver

Return 10 results. Format: numbered list.`} />

          <PromptBlock type="5. Repurpose to X Thread" content={`Convert this Instagram carousel into an X/Twitter thread:

[PASTE CAROUSEL]

Rules:
- Tweet 1 = the hook (same as slide 1, max 280 chars)
- Tweets 2–7 = one per carousel slide, expanded slightly
- Last tweet = "Full breakdown: [link]"
- Each tweet must stand alone
- No hashtags
- Max 240 characters per tweet (leave room for engagement)
- Format: numbered 1/ 2/ 3/ etc.`} />

          <PromptBlock type="6. LinkedIn Post Adapter" content={`Adapt this Instagram carousel for a LinkedIn post:

[PASTE CAROUSEL]

LinkedIn format:
- First line = hook (same as slide 1)
- Line break
- 4–5 short paragraphs (2–3 sentences each)
- Bullet points for the list items
- CTA at the end: "I wrote a full breakdown of this system. DM me "SYSTEM" and I'll send it."
- Tone: slightly more professional than Instagram but still direct
- No hashtags (LinkedIn reach doesn't depend on them)`} />

          <PromptBlock type="7. DM Response Handler" content={`You are handling Instagram DMs for [BRAND NAME], an AI automation brand.

Context: this person commented SYSTEM on a post about AI automation systems. They received a 5-DM sequence and are now replying with questions.

Rules:
- Be helpful, direct, and honest
- If they ask what's inside, list 3-4 key inclusions
- If they say it's too expensive, acknowledge and move on — no discounting
- If they ask for a preview, share ONE specific insight from the kit
- Never be pushy. If they say no, thank them and end the conversation
- Keep responses under 3 sentences when possible

Their message: [PASTE DM HERE]`} />

          <PromptBlock type="8. Content Repurposer (any → carousel)" content={`Convert this content into a 7-slide Instagram carousel:

[PASTE ARTICLE / THREAD / VIDEO TRANSCRIPT]

Rules:
- Extract the most actionable insights only
- Ignore introductions, filler, and repetition
- Follow the standard carousel format (hook → 5 content slides → CTA)
- The CTA slide should say: "Want the full system? Comment SYSTEM below."
- Each slide = one idea, max 2 sentences`} />

          <PromptBlock type="9. Weekly Content Calendar" content={`Create a 7-day content calendar for an AI automation brand.

Audience: solo operators, freelancers, small founders.
Platform: Instagram (primary), X (secondary).
Posting frequency: 1 post per day.

For each day provide:
- Day + content type (carousel, single image, reel script)
- Topic (1 line)
- Hook (slide 1 headline, max 8 words)
- Angle (1 sentence — what makes this post different)

Mix formats: 4 carousels, 2 single images, 1 reel.
No repeated topics across the week.`} />

          <PromptBlock type="10. Testimonial Request Writer" content={`Write a DM I can send to a client asking for a testimonial.

Context: I just delivered an AI automation project for them. The results were [DESCRIBE RESULTS].

Rules:
- Keep it casual and genuine
- Ask for specific details (what changed, what surprised them)
- Give them permission to keep it short
- Offer to draft something they can edit (reduces friction)
- Max 5 sentences`} />

          <PromptBlock type="11. Bio & Profile Optimizer" content={`Rewrite this Instagram bio for an AI automation brand:

Current bio: [PASTE CURRENT BIO]

Rules:
- Line 1: What you do (max 5 words)
- Line 2: Who you help + the result
- Line 3: Social proof or specific number
- Line 4: CTA (what to do next)
- Use line breaks, not sentences
- No emojis unless they genuinely add clarity`} />

          <PromptBlock type="12. Product Description Writer" content={`Write a product description for a digital product on Lemon Squeezy.

Product: [NAME]
Price: [PRICE]
What it includes: [LIST OF INCLUSIONS]
Who it's for: [TARGET AUDIENCE]

Format:
- Headline (max 8 words, benefit-driven)
- 3 short paragraphs: problem → solution → what's inside
- Bullet list of key inclusions (max 8)
- One-line money-back guarantee or trust statement
- Tone: direct, confident, no hype`} />
        </Chapter>

        {/* CHAPTER 08 */}
        <Chapter num="08" title={<>n8n automation <em className="kit-accent" style={{ fontStyle: "italic" }}>workflows</em></>}
          intro="These are the three core workflows that power the entire system. Each one can be built in under 30 minutes with zero coding.">

          <H3>Workflow 1 — Content Generation</H3>
          <WorkflowTable nodes={[
            { type: "TRIGGER", name: "Schedule — daily 8am", desc: "Runs every morning automatically" },
            { type: "READ", name: "Airtable — get ideas", desc: "Filter Status = 'Idea', limit 3" },
            { type: "AI", name: "Claude — write carousel", desc: "Brain prompt + topic → 7 slides" },
            { type: "AI", name: "Claude — write caption", desc: "Carousel content → Instagram caption" },
            { type: "WRITE", name: "Airtable — update record", desc: "Save content + caption, set Status = 'Review'" },
            { type: "NOTIFY", name: "Email — review alert", desc: "\"3 carousels ready for review\"" },
          ]} />

          <H3>Workflow 2 — Publishing</H3>
          <WorkflowTable nodes={[
            { type: "TRIGGER", name: "Airtable — status change", desc: "Fires when Status = 'Approved'" },
            { type: "READ", name: "Airtable — get record", desc: "Pull caption + publish date" },
            { type: "PUBLISH", name: "Buffer — schedule post", desc: "Send caption + images + schedule time" },
            { type: "WRITE", name: "Airtable — update status", desc: "Set Status = 'Scheduled'" },
          ]} />

          <H3>Workflow 3 — Analytics Digest</H3>
          <WorkflowTable nodes={[
            { type: "TRIGGER", name: "Schedule — weekly Monday", desc: "Runs every Monday at 9am" },
            { type: "READ", name: "Instagram API — get metrics", desc: "Pull reach, engagement, follower growth" },
            { type: "READ", name: "ManyChat — get stats", desc: "DM opens, link clicks, conversions" },
            { type: "AI", name: "Claude — analyze", desc: "Summarize performance, suggest improvements" },
            { type: "NOTIFY", name: "Email — weekly report", desc: "Send formatted digest to inbox" },
          ]} />
        </Chapter>

        {/* CHAPTER 09 */}
        <Chapter num="09" title={<>Revenue math & <em className="kit-accent" style={{ fontStyle: "italic" }}>pricing</em></>}
          intro="The math behind a $27 digital product powered by organic content and automated DMs. These numbers are based on real client data across 120+ projects.">

          <H3>Conservative scenario — month 1</H3>
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

          <H3>Growth scenario — month 3</H3>
          <RevenueBox rows={[
            { label: "Posts per week", value: "7" },
            { label: "Average reach per post (growing audience)", value: "5,000" },
            { label: "Comment rate", value: "2.5%" },
            { label: "Comments/week triggering DMs", value: "875" },
            { label: "DM → link click rate", value: "35%" },
            { label: "Link click → purchase rate", value: "10%" },
            { label: "Sales per week", value: "30.6" },
            { label: "Price per unit", value: "$27" },
            { label: "Weekly revenue", value: "$826", isTotal: false },
            { label: "Monthly revenue (month 3)", value: "$3,306", isTotal: true },
          ]} />

          <H3>Tool costs (monthly)</H3>
          <TableWrap headers={["Tool", "Tier", "Cost"]} rows={[
            ["Claude API", "Pay per use", "~$3"],
            ["Airtable", "Free tier", "$0"],
            ["n8n (Railway)", "Self-hosted", "~$5"],
            ["Buffer", "Essentials", "$6"],
            ["ManyChat", "Pro", "$15"],
            ["Lemon Squeezy", "Free (5% fee)", "$0"],
            ["Total monthly overhead", "", "$29"],
          ]} />

          <Callout text="The system pays for itself with a single sale per month. Everything after that is profit." />
        </Chapter>

        {/* CHAPTER 10 */}
        <Chapter num="10" title={<>7-day launch <em className="kit-accent" style={{ fontStyle: "italic" }}>checklist</em></>}
          intro="Follow this exact order. Each day builds on the previous one. By day 7, your system is live and generating leads.">

          <Checklist items={[
            { title: "Day 1 — Build the Brain", desc: "Create Claude Project, paste brain prompt, test with 3 carousel topics" },
            { title: "Day 2 — Set Up the Queue", desc: "Create Airtable base, add 8 fields, seed with 20 topic ideas" },
            { title: "Day 3 — Create Your Template", desc: "Build carousel template in Canva, create 2 sample carousels" },
            { title: "Day 4 — Build Workflow 1", desc: "Set up n8n on Railway, build content generation workflow, test end-to-end" },
            { title: "Day 5 — Set Up Publishing", desc: "Connect Buffer, build publishing workflow in n8n, schedule first 3 posts" },
            { title: "Day 6 — Build the DM Engine", desc: "Set up ManyChat, create keyword trigger, build 5-message sequence" },
            { title: "Day 7 — Go Live", desc: "Create Lemon Squeezy product, connect link to DM 4, publish first post with CTA, monitor" },
          ]} />

          <Quote text="The system doesn't need to be perfect on day 7. It needs to be live. Perfect is the enemy of revenue. Launch, measure, iterate." />
        </Chapter>

        {/* FOOTER */}
        <div style={{ padding: "48px 0 0", borderTop: "1px solid #222220", marginTop: 80, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div className="kit-mono" style={{ fontSize: 11, color: "#6b6960", letterSpacing: "0.1em" }}>
            FLUXROW<span className="kit-accent">.</span>
          </div>
          <div className="kit-mono" style={{ fontSize: 10, color: "#3a3a36" }}>
            AI Operator Starter Kit — v1.0 — Built from 120+ real projects
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Sub-components ─── */

const Chapter = ({ num, title, intro, children }: { num: string; title: React.ReactNode; intro: string; children: React.ReactNode }) => (
  <div id={`chapter-${num}`} style={{ padding: "64px 0", borderBottom: "1px solid #222220" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
      <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.1em" }}>{num}</span>
      <span style={{ flex: 1, height: 1, background: "#222220" }} />
    </div>
    <h2 className="kit-serif" style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 20 }}>{title}</h2>
    <p style={{ fontSize: 16, color: "#999", maxWidth: 620, lineHeight: 1.7, marginBottom: 36 }}>{intro}</p>
    {children}
  </div>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.05em", color: "#e8e6df", textTransform: "uppercase", margin: "36px 0 16px" }}>{children}</h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ color: "#aaa", fontSize: 15, lineHeight: 1.75, marginBottom: 16 }}>{children}</p>
);

const Callout = ({ text, warn = false }: { text: string; warn?: boolean }) => (
  <div style={{
    background: warn ? "#140a00" : "#0a1400",
    border: `1px solid ${warn ? "#332200" : "#1e3300"}`,
    borderLeft: `3px solid ${warn ? "#ff8800" : "#c8f000"}`,
    borderRadius: "0 8px 8px 0",
    padding: "20px 24px",
    margin: "28px 0",
  }}>
    <p style={{ color: warn ? "#b07030" : "#9aba40", fontSize: 14, margin: 0 }}>{text}</p>
  </div>
);

const Steps = ({ items }: { items: { title: string; body: string }[] }) => (
  <div style={{ display: "grid", gap: 2, margin: "24px 0" }}>
    {items.map((item, i) => (
      <div key={i} className="kit-step" style={{
        background: "#111110",
        border: "1px solid #222220",
        padding: "24px 28px",
        display: "grid",
        gridTemplateColumns: "56px 1fr",
        gap: 16,
        transition: "border-color 0.2s",
        borderRadius: i === 0 ? "8px 8px 0 0" : i === items.length - 1 ? "0 0 8px 8px" : 0,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 2 }}>
          <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</span>
          {i < items.length - 1 && <span style={{ width: 1, flex: 1, background: "#222220", margin: "6px auto 0" }} />}
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#e8e6df", marginBottom: 6 }}>{item.title}</div>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.65, margin: 0, whiteSpace: "pre-wrap" }}>{item.body}</p>
        </div>
      </div>
    ))}
  </div>
);

const PromptBlock = ({ type, content }: { type: string; content: string }) => (
  <div style={{ margin: "20px 0" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#181816", border: "1px solid #222220", borderBottom: "none", borderRadius: "6px 6px 0 0", padding: "10px 16px" }}>
      <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", letterSpacing: "0.12em", textTransform: "uppercase" }}>{type}</span>
      <button
        onClick={() => navigator.clipboard.writeText(content)}
        className="kit-mono"
        style={{ fontSize: 10, color: "#6b6960", letterSpacing: "0.05em", background: "none", border: "none", cursor: "pointer" }}
      >
        copy all
      </button>
    </div>
    <div className="kit-mono" style={{ background: "#070706", border: "1px solid #222220", borderTop: "none", borderRadius: "0 0 6px 6px", padding: 20, fontSize: 13, color: "#c8c4b8", lineHeight: 1.75, whiteSpace: "pre-wrap" }}>
      {content}
    </div>
  </div>
);

const ToolGrid = ({ items }: { items: { name: string; desc: string; tags: { label: string; type: string }[]; link: string }[] }) => (
  <div style={{ display: "grid", gap: 8, margin: "20px 0" }}>
    {items.map((item, i) => (
      <div key={i} className="kit-tool-card" style={{ background: "#111110", border: "1px solid #222220", borderRadius: 8, padding: "18px 22px", display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center", transition: "border-color 0.2s" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#e8e6df", marginBottom: 4 }}>{item.name}</div>
          <div style={{ fontSize: 12, color: "#6b6960", lineHeight: 1.5 }}>{item.desc}</div>
          <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
            {item.tags.map((tag, j) => (
              <span key={j} className="kit-mono" style={{
                fontSize: 9,
                letterSpacing: "0.08em",
                padding: "2px 8px",
                borderRadius: 3,
                border: "1px solid",
                color: tag.type === "free" ? "#6ab840" : tag.type === "key" ? "#c8f000" : "#888",
                borderColor: tag.type === "free" ? "#1e3a10" : tag.type === "key" ? "#2a4400" : "#222220",
              }}>{tag.label}</span>
            ))}
          </div>
        </div>
        <span style={{ color: "#c8f000", fontFamily: "'DM Mono', monospace", fontSize: 11, whiteSpace: "nowrap", letterSpacing: "0.05em" }}>{item.link}</span>
      </div>
    ))}
  </div>
);

const TableWrap = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div style={{ overflowX: "auto", margin: "20px 0" }}>
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
  </div>
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
      <div key={i} className="kit-dm-msg" style={{
        padding: "20px 24px",
        border: "1px solid #222220",
        marginBottom: 2,
        display: "grid",
        gridTemplateColumns: "80px 1fr",
        gap: 16,
        background: m.isBot ? "#111110" : "transparent",
        borderRadius: i === 0 ? "8px 8px 0 0" : i === messages.length - 1 ? "0 0 8px 8px" : 0,
      }}>
        <div>
          <div className="kit-mono" style={{ fontSize: 10, letterSpacing: "0.08em", color: m.isBot ? "#c8f000" : "#6b6960", textTransform: "uppercase", paddingTop: 3 }}>{m.label}</div>
          <div className="kit-mono" style={{ fontSize: 9, color: "#3a3a36", marginTop: 4 }}>{m.timing}</div>
        </div>
        <div>
          <div style={{ fontSize: 14, color: "#bbb", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>{m.text}</div>
          <span className="kit-mono" style={{ display: "inline-block", fontSize: 9, color: "#6b6960", background: "#080807", border: "1px solid #222220", padding: "2px 8px", borderRadius: 3, marginTop: 10, letterSpacing: "0.05em" }}>{m.tag}</span>
        </div>
      </div>
    ))}
  </div>
);

const WorkflowTable = ({ nodes }: { nodes: { type: string; name: string; desc: string }[] }) => (
  <div style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, overflow: "hidden", margin: "24px 0" }}>
    {nodes.map((n, i) => (
      <div key={i} className="kit-workflow-node" style={{ padding: "18px 24px", borderBottom: i < nodes.length - 1 ? "1px solid #222220" : "none", display: "grid", gridTemplateColumns: "32px 120px 1fr", gap: 16, alignItems: "start" }}>
        <span className="kit-mono" style={{ fontSize: 10, color: "#c8f000", paddingTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
        <span className="kit-mono kit-wf-type" style={{ fontSize: 10, color: "#6b6960", letterSpacing: "0.05em", paddingTop: 2 }}>{n.type}</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#e8e6df", marginBottom: 4 }}>{n.name}</div>
          <div style={{ fontSize: 12, color: "#777", lineHeight: 1.6 }}>{n.desc}</div>
        </div>
      </div>
    ))}
  </div>
);

const RevenueBox = ({ rows }: { rows: { label: string; value: string; isTotal?: boolean }[] }) => (
  <div style={{ background: "#111110", border: "1px solid #222220", borderRadius: 10, padding: "28px 32px", margin: "24px 0" }}>
    <div style={{ display: "grid", gap: 12 }}>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: r.isTotal ? "16px 0 8px" : "8px 0",
          borderBottom: i < rows.length - 1 ? "1px solid #222220" : "none",
        }}>
          <span style={{ fontSize: r.isTotal ? 15 : 14, color: r.isTotal ? "#e8e6df" : "#888", fontWeight: r.isTotal ? 500 : 300 }}>{r.label}</span>
          <span className="kit-mono" style={{ fontSize: r.isTotal ? 20 : 14, color: r.isTotal ? "#c8f000" : "#e8e6df" }}>{r.value}</span>
        </div>
      ))}
    </div>
  </div>
);

const Checklist = ({ items }: { items: { title: string; desc: string }[] }) => (
  <ul style={{ listStyle: "none", margin: "16px 0", border: "1px solid #222220", borderRadius: 8, overflow: "hidden" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 20px", borderBottom: i < items.length - 1 ? "1px solid #222220" : "none", fontSize: 14, color: "#999", background: i % 2 === 0 ? "#111110" : "#181816" }}>
        <span style={{ width: 16, height: 16, border: "1px solid #3a3a36", borderRadius: 3, flexShrink: 0, marginTop: 2 }} />
        <div>
          <strong style={{ color: "#e8e6df", fontWeight: 500, display: "block", marginBottom: 2 }}>{item.title}</strong>
          <span style={{ fontSize: 12, color: "#6b6960" }}>{item.desc}</span>
        </div>
      </li>
    ))}
  </ul>
);

const Quote = ({ text }: { text: string }) => (
  <div style={{ borderLeft: "3px solid #c8f000", padding: "20px 24px", margin: "32px 0", background: "#111110" }}>
    <p className="kit-serif" style={{ fontSize: 22, color: "#e8e6df", lineHeight: 1.4, fontStyle: "italic", marginBottom: 0 }}>{text}</p>
  </div>
);

export default AIOperatorKit;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Copy,
  Check,
  Rocket,
  Brain,
  Cog,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Zap,
  TrendingUp,
  HelpCircle,
  Layers,
  Wrench,
  CalendarDays,
} from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { buildFaqSchema } from '../lib/faqSchema';

interface PromptCard {
  id: number;
  title: string;
  description: string;
  icon: typeof Brain;
  color: string;
  prompt: string;
  tips: string[];
  potential: string;
  whenToUse: string;
}

const prompts: PromptCard[] = [
  {
    id: 1,
    title: 'Idea organizer',
    description: 'Turns mental chaos into a prioritized, actionable structure.',
    icon: Brain,
    color: 'from-purple-500 to-blue-600',
    whenToUse: 'You have 30 loose ideas for the business and don\'t know where to start.',
    prompt: `I have several ideas for my business and I need to organize them.

My business: [DESCRIBE YOUR BUSINESS]
Main goal for the next 90 days: [YOUR GOAL]
Target audience: [YOUR AUDIENCE]
Available resources (time/money/team): [DETAIL]

Ideas I have today:
- [IDEA 1]
- [IDEA 2]
- [IDEA 3]

Organize them in a matrix with 4 columns:
1. Priority (P0/P1/P2) with justification
2. Estimated investment ($ and hours)
3. Expected return (short/medium/long term)
4. Execution risk (low/medium/high)

End with the 3 next steps for this week, each with a measurable "done" criterion.`,
    tips: [
      'List at least 5 ideas to make the matrix meaningful',
      'Include real constraints (cash, deadline, team)',
      'Ask for a measurable "done" criterion, not a subjective one',
      'Iterate: run again after executing the first week',
    ],
    potential: 'High — strategic foundation for the next 90 days',
  },
  {
    id: 2,
    title: 'Internal process builder',
    description: 'Documents and standardizes operations to reduce rework.',
    icon: Cog,
    color: 'from-green-500 to-emerald-600',
    whenToUse: 'Each team member handles things differently; no standard exists.',
    prompt: `Create an SOP (Standard Operating Procedure) for [PROCESS] in my business.

Type of business: [DESCRIBE]
Team size: [N EMPLOYEES]
Average daily volume: [HOW MANY UNITS/INTERACTIONS]
Main bottleneck today: [PROBLEM]
Tools already in use: [LIST]

Structure the SOP with:
1. Goal of the process in 1 sentence
2. Owner per step (simplified RACI)
3. Numbered step-by-step with average time per step
4. Quality control checkpoints and what to do if they fail
5. 3 measurable KPIs to track
6. Ready-to-use scripts for the 3 most common situations

Focus on something a new hire could execute by reading the document.`,
    tips: [
      'Start with the most painful process, not the prettiest',
      'Include real time per step (time it once)',
      'Define KPIs you can already measure today',
      'Review the SOP every 30 days with whoever executes it',
    ],
    potential: 'Very high — reduces dependency on key people',
  },
  {
    id: 3,
    title: 'Automation mapper',
    description: 'Identifies repetitive tasks with the highest automation ROI.',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    whenToUse: 'You feel you lose hours every week on mechanical tasks.',
    prompt: `Analyze my business and identify the highest-ROI automations.

My business: [TYPE]
Tasks consuming the most team time (with hours/week):
- [TASK 1]: [HOURS]
- [TASK 2]: [HOURS]
- [TASK 3]: [HOURS]

Current stack: [TOOLS]
Monthly automation budget: [VALUE]
Team technical level: [BASIC/MEDIUM/ADVANCED]

For each task, return:
1. Recommended tool (n8n, Make, Zapier, custom) with reason
2. Implementation complexity (1-5)
3. Estimated monthly hours saved
4. Total first-year cost
5. Payback in months
6. Risks and what could go wrong

Sort by fastest payback. Recommend the first to implement this week.`,
    tips: [
      'Time the tasks beforehand — guesswork is expensive',
      'Start with the cheapest and most predictable',
      'Include maintenance cost, not just implementation',
      'Document the manual flow before automating it',
    ],
    potential: 'High — frees hours for strategic work',
  },
  {
    id: 4,
    title: 'Product validator',
    description: 'Tests real demand before investing in development.',
    icon: Target,
    color: 'from-blue-500 to-cyan-600',
    whenToUse: 'You have a product idea and want to validate before building/producing.',
    prompt: `I want to validate the idea of [PRODUCT] before investing.

Product: [DESCRIBE IN 2 LINES]
Target audience: [DETAILED PROFILE]
Hypothetical price: [RANGE]
Known competitors: [LIST]
What I want to discover: [MAIN HYPOTHESIS]

Create:
1. 8 questions for discovery interviews (focus on pain, do not mention the solution)
2. 6 quantitative survey questions (online form)
3. Smoke test copy: 1-paragraph landing page + "I want to learn more" CTA
4. 3-touch email sequence to warm up interested leads
5. Validation criterion: how many conversions/responses approve moving forward
6. Invalidation criterion: when to kill the idea

Validate pain before validating the solution.`,
    tips: [
      'Never show the solution in early interviews',
      'Define the "validated" criterion before you start',
      'Minimum: 20 interviews + 50 survey responses',
      'Count qualified responses, not curious clicks',
    ],
    potential: 'Very high — reduces risk of financial failure',
  },
  {
    id: 5,
    title: 'Identity-preserving content scaler',
    description: 'Multiplies formats while keeping voice and original angle.',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    whenToUse: 'You publish little but well; you want to scale without going generic.',
    prompt: `Act as a copywriter trained on my voice.

Voice reference (samples of my writing):
"""
[PASTE 2-3 OF YOUR OWN TEXTS]
"""

Source content to multiply:
"""
[PASTE THE MAIN TEXT]
"""

Tone: [DESCRIPTIVE/PROVOCATIVE/TECHNICAL/CONVERSATIONAL]
Audience: [PROFILE]
Goal: [EDUCATE/SELL/POSITION]

Generate 5 derivatives:
1. Instagram carousel (8 slides with hook + payoff)
2. X/Twitter thread (8 tweets, headline + body format)
3. Newsletter email (subject + 200-word body)
4. Reels/Shorts script (45 seconds, hook in 3s)
5. LinkedIn post (300 words, first line as hook)

Keep my voice markers: [LIST 3 — e.g. short sentences, no emoji, concrete examples].
Avoid internet clichés ("you're leaving money on the table", "secret #1", etc).`,
    tips: [
      'Always paste 2-3 of your own samples for the AI to absorb the style',
      'Explicitly list what NOT to use (clichés, emoji, hype)',
      'Manually refine 1 derivative; copy that pattern to the others',
      'Measure engagement per format, not by volume',
    ],
    potential: 'High — scales without diluting authenticity',
  },
];

const faqs = [
  {
    q: 'What does it mean to use AI to scale a business?',
    a: 'It means applying generative AI, automations, and agents to multiply company capacity without multiplying fixed cost. Examples: documenting processes in hours, qualifying leads on WhatsApp 24/7, generating reports automatically, validating ideas before investing, standardizing service. The real gain is operational, not in shiny marketing.',
  },
  {
    q: 'Do I need to know how to code to scale with AI?',
    a: 'Not to start. No-code tools like n8n, Make, Zapier, ChatGPT, Claude, and platforms like Lovable let you build flows without coding. Programming helps to go deeper (custom APIs, custom MCP), but it is not a prerequisite for the first 6 months of gains.',
  },
  {
    q: 'How long until I see real results from AI in my business?',
    a: 'Simple automations (lead reply, document generation) deliver gains in the same week. Medium processes (structured service, automatic reports) mature in 30-60 days. Business model shifts (a new product enabled by AI) take 3-6 months.',
  },
  {
    q: 'Which AI tools should I use to scale?',
    a: 'For text and reasoning: ChatGPT, Claude, Gemini. For workflow automation: n8n (open source), Make, or Zapier. For operational agents: Claude Code + MCP, or platforms like Lovable/Cursor. For image/video: Midjourney, Sora, Runway. Start with 2-3 tools mastered, not 10 superficially.',
  },
  {
    q: 'Will AI replace my team?',
    a: 'It will replace tasks, not people — as long as the team learns to operate the AI. Repetitive tasks (transcribing, formatting, copying data from A to B) disappear. Judgment tasks (decision, relationship, creation) gain leverage. Companies that adopt tend to hire more, with a different profile.',
  },
  {
    q: 'What is the average cost to start using AI in a business?',
    a: 'For a small business: USD 20-60/month (ChatGPT Plus or Claude Pro) cover 80% of cases. Adding automation (self-hosted n8n or Make basic plan): another $20-60/month. Initial implementation may take 20-40 hours of work — outsourcing costs between $500 and $3,000 depending on scope.',
  },
  {
    q: 'Where to start if I have never used AI in my business?',
    a: 'Map the task that consumes most of your time in a week. Use one of the prompts in this article to generate the first process or validation. Run for 2 weeks and measure the time saved. From there, choose the next task by ROI. Avoid starting with the most ambitious project.',
  },
  {
    q: 'Does AI work for physical businesses (store, clinic, restaurant)?',
    a: 'Yes. Common cases: 24/7 WhatsApp service, automatic scheduling, weekly menu/promo generation, inventory control with demand forecast, team training via AI-generated SOPs, customer review analysis to spot patterns.',
  },
];

const enFormCopy = {
  eyebrow: 'NEXT STEP',
  title: 'Ready to apply AI in your business?',
  description:
    'Get the AI Operator Kit: playbooks, prompts, and the method to put AI running in your business in under 7 days.',
  namePlaceholder: 'Your name',
  emailPlaceholder: 'Your best email',
  submit: 'Get the Kit',
  submitting: 'Submitting...',
  successTitle: 'All set.',
  successDescription:
    'Taking you to the AI Operator Kit. If it does not redirect automatically, use the button below.',
  duplicateTitle: 'You are already on the list.',
  duplicateDescription:
    'This email is already registered. No problem — sending you straight to the AI Operator Kit.',
  successCta: 'Go to the AI Operator Kit',
  privacyNote: 'No spam. You can unsubscribe anytime.',
  invalidName: 'Please enter your name (min 2 characters).',
  invalidEmail: 'Please enter a valid email (e.g. name@company.com).',
  serverInvalid: 'The information looks invalid. Check your name and email and try again.',
  networkError: 'No connection to the server. Check your internet and try again.',
  genericError: 'We could not submit right now. Please try again shortly.',
};

const sevenDayPlan = [
  {
    day: 'Day 1',
    title: 'Time diagnosis',
    task: 'List every recurring task of the week and time the 5 that consume the most time. No guessing — measure.',
    metric: 'Hours/week per task (baseline).',
  },
  {
    day: 'Day 2',
    title: 'Pick the target',
    task: 'Apply the priority matrix. Pick 1 high-frequency, high-pain task to attack first.',
    metric: 'Target task defined with a "done" criterion.',
  },
  {
    day: 'Day 3',
    title: 'Manual documentation (SOP)',
    task: 'Write the numbered step-by-step of how you do it today. No AI yet — clarity first.',
    metric: '1-page SOP validated by whoever executes.',
  },
  {
    day: 'Day 4',
    title: 'First prompt',
    task: 'Take the closest prompt from this guide, adapt to your context, and run it 3 times refining the output.',
    metric: 'Acceptable output quality within 3 iterations.',
  },
  {
    day: 'Day 5',
    title: 'Human copilot',
    task: 'Execute the task with AI assisting (not replacing). Note where it nailed and where it stalled.',
    metric: 'Time spent vs. Day 1 baseline.',
  },
  {
    day: 'Day 6',
    title: 'Standardization',
    task: 'Update the SOP with what you learned. Save the prompt in a fixed location (Notion, doc, repo).',
    metric: 'SOP + prompt versioned and accessible to the team.',
  },
  {
    day: 'Day 7',
    title: 'Measure and decide',
    task: 'Compare hours saved, output quality, and satisfaction. Decide: scale, refine, or kill.',
    metric: 'Decision recorded with data, not gut feeling.',
  },
];

const ContentAIScaleBusiness = () => {
  const [copiedPrompts, setCopiedPrompts] = useState<number[]>([]);

  const copyToClipboard = async (text: string, promptIndex: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompts((prev) => [...prev, promptIndex]);
      setTimeout(() => {
        setCopiedPrompts((prev) => prev.filter((index) => index !== promptIndex));
      }, 2000);
    } catch {
      // ignore
    }
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI to scale your business: a practical guide with prompts and frameworks',
    description:
      'Practical guide on how to use generative AI, automations, and agents to scale processes, sales, and operations in small and mid-sized businesses.',
    image: 'https://fluxrow.com/og-ia-escalar.jpg',
    url: 'https://fluxrow.com/content/ai-scale-business',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://fluxrow.com/content/ai-scale-business',
    },
    inLanguage: 'en-US',
    datePublished: '2025-09-01',
    dateModified: '2026-05-13',
    author: { '@type': 'Organization', name: 'Fluxrow', url: 'https://fluxrow.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Fluxrow',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fluxrow.com/OG_logo_fluxrow.png',
      },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="AI to scale your business in 2026: a practical guide with prompts"
        description="How to use generative AI, automations, and agents to scale processes, sales, and operations in small and mid-sized businesses. 5 tested prompts, frameworks, 7-day plan, and FAQ."
        path="/content/ai-scale-business"
        image="https://fluxrow.com/og-ia-escalar.jpg"
        imageAlt="AI to scale business — practical guide by Fluxrow"
        lang="en"
        locale="en_US"
        jsonLd={[articleSchema, buildFaqSchema(faqs)]}
      />
      <Header />

      <main className="pt-24 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/conteudos"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-space-grotesk"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to content
            </Link>
          </div>

          <header className="text-center mb-14">
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-purple-400 font-semibold font-space-grotesk text-sm">
                STRATEGY GUIDE · ARTICLE 06
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
              AI to scale your business:{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                a practical guide with prompts and frameworks
              </span>
            </h1>

            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto leading-relaxed mb-6">
              Artificial intelligence is no longer a content-creator tool — it became an operational layer for any
              business. This guide shows how to apply generative AI, automations, and agents to scale processes,
              sales, and operations: 5 tested prompts, adoption frameworks, a 7-day plan, and answers to the most
              common questions.
            </p>

            <p className="text-sm text-gray-500 font-space-grotesk">
              Reading time: 12 min · Updated May 2026
            </p>
          </header>

          <nav aria-label="Table of contents" className="glass-card mb-12 border border-purple-500/20">
            <h2 className="text-sm uppercase tracking-wider text-purple-400 font-space-grotesk mb-3">
              Table of contents
            </h2>
            <ol className="space-y-1.5 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li><a href="#why-now" className="hover:text-purple-300">Why scale with AI now</a></li>
              <li><a href="#frameworks" className="hover:text-purple-300">3 AI adoption frameworks</a></li>
              <li><a href="#where-to-start" className="hover:text-purple-300">Where to start: the priority matrix</a></li>
              <li><a href="#prompts" className="hover:text-purple-300">5 ready-to-use prompts</a></li>
              <li><a href="#stack" className="hover:text-purple-300">Minimum AI stack for SMBs</a></li>
              <li><a href="#mistakes" className="hover:text-purple-300">Common mistakes when adopting AI</a></li>
              <li><a href="#metrics" className="hover:text-purple-300">How to measure AI ROI</a></li>
              <li><a href="#seven-day-plan" className="hover:text-purple-300">7-day plan to get started</a></li>
              <li><a href="#faq" className="hover:text-purple-300">Frequently asked questions</a></li>
            </ol>
            <p className="text-xs text-gray-500 font-space-grotesk mt-3">
              Ler em português:{' '}
              <a
                href="/conteudos/ia-escalar-negocio"
                className="text-purple-300 hover:text-purple-200 underline"
              >
                versão em português →
              </a>
            </p>
          </nav>

          <section id="why-now" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Why scale with AI now</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Inference cost dropped more than 90% in the last 18 months. Models like Claude, GPT-5, and Gemini today
              perform tasks that in 2023 required a whole team: documenting processes, qualifying leads, generating
              reports, translating, summarizing meetings. The bottleneck stopped being technology and became{' '}
              <strong className="text-white">operational design</strong> — knowing which task is worth automating and how.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Businesses mastering this layer run lean and at higher margins. Businesses ignoring it lose
              competitiveness silently: the competitor responds to the lead in 30 seconds, sends an automatic
              proposal, and closes while you are still typing.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              Good news: the adoption curve is shorter than it looks. In 90 days you can move from zero to a business
              with 3-5 critical processes running AI-assisted — provided you start in the right place.
            </p>
          </section>

          <section id="frameworks" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">3 AI adoption frameworks</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">1. Augment first, automate later</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Before automating, use AI as a human copilot. You execute, AI accelerates. When the process is
                  mature and stable (3-4 weeks), then automate. Skipping this step produces broken bots.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">2. Time-to-value over sophistication</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Prefer simple solutions delivering value in 1 week over elegant architectures taking 3 months.
                  You learn more by running than by designing.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">3. Document the manual before the automatic</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  If you can't describe the process as numbered steps, AI can't either. SOP first, automation second.
                  This step separates those who scale from those who only post about AI.
                </p>
              </div>
            </div>
          </section>

          <section id="where-to-start" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Target className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Where to start: the priority matrix</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-5">
              List every recurring business task. For each one, classify it on two dimensions: frequency (how many
              times per week it happens) and pain (how much time or money it consumes). Start with the top-right
              quadrant.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Priority</th>
                    <th className="py-3 pr-4 text-white">Frequency</th>
                    <th className="py-3 pr-4 text-white">Pain</th>
                    <th className="py-3 text-white">Action</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  <tr><td className="py-3 pr-4 text-green-400">P0</td><td className="py-3 pr-4">High</td><td className="py-3 pr-4">High</td><td className="py-3">Automate this week</td></tr>
                  <tr><td className="py-3 pr-4 text-yellow-400">P1</td><td className="py-3 pr-4">High</td><td className="py-3 pr-4">Medium</td><td className="py-3">Standardize with SOP + AI copilot</td></tr>
                  <tr><td className="py-3 pr-4 text-yellow-400">P1</td><td className="py-3 pr-4">Low</td><td className="py-3 pr-4">High</td><td className="py-3">Use AI on demand</td></tr>
                  <tr><td className="py-3 pr-4 text-gray-500">P2</td><td className="py-3 pr-4">Low</td><td className="py-3 pr-4">Low</td><td className="py-3">Ignore for now</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="prompts" className="mb-12 scroll-mt-24">
            <div className="flex items-center mb-6">
              <Wrench className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold font-space-grotesk text-white">5 ready-to-use prompts</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-8">
              The prompts below were tested in real businesses. Use ChatGPT, Claude, or Gemini. Replace bracketed
              blocks with your context. The more specific, the better the result.
            </p>

            <div className="space-y-8">
              {prompts.map((promptData, index) => {
                const IconComponent = promptData.icon;
                const isCopied = copiedPrompts.includes(index);

                return (
                  <div key={promptData.id} className="glass-card group">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`bg-gradient-to-r ${promptData.color} p-4 rounded-2xl`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-2xl font-bold font-space-grotesk text-white">
                            {promptData.title}
                          </h3>
                          <span className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">
                            #{promptData.id}
                          </span>
                        </div>
                        <p className="text-gray-300 font-space-grotesk leading-relaxed mb-2">
                          {promptData.description}
                        </p>
                        <p className="text-sm text-purple-300 font-space-grotesk">
                          <strong>When to use:</strong> {promptData.whenToUse}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-6 relative">
                      <button
                        onClick={() => copyToClipboard(promptData.prompt, index)}
                        className="absolute top-4 right-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white p-2 rounded-lg transition-all duration-300"
                        title="Copy prompt"
                        aria-label="Copy prompt"
                      >
                        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-gray-300 font-space-grotesk text-sm leading-relaxed whitespace-pre-wrap pr-12">
                        {promptData.prompt}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-base font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          Tips
                        </h4>
                        <ul className="space-y-2">
                          {promptData.tips.map((tip, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="text-gray-300 font-space-grotesk text-sm flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                          Result potential
                        </h4>
                        <div className={`bg-gradient-to-r ${promptData.color} bg-opacity-20 border border-current border-opacity-30 rounded-xl p-4`}>
                          <p className="text-white font-space-grotesk font-semibold">
                            {promptData.potential}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="stack" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Wrench className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Minimum AI stack for SMBs</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-5">
              Don't start with 10 tools. Start with 3, master them, then expand.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Language model (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Claude (reasoning + writing), ChatGPT (general), or Gemini (multimodal). Pick one, subscribe to the
                  paid plan, use it daily for 30 days before testing another.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Automation platform (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  n8n (open source, self-hostable), Make (visual, robust), or Zapier (simplest). n8n wins on cost for
                  medium volume.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Execution layer (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  For agents operating inside code:{' '}
                  <Link to="/conteudos/claude-code" className="text-purple-300 underline">Claude Code</Link>. To
                  connect AI to systems:{' '}
                  <Link to="/conteudos/mcp-claude" className="text-purple-300 underline">MCP</Link>.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Procedural knowledge (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  <Link to="/conteudos/claude-skills" className="text-purple-300 underline">Claude Skills</Link> to
                  package SOPs as bundles the agent loads on demand.
                </p>
              </div>
            </div>
          </section>

          <section id="mistakes" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-7 h-7 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Common mistakes when adopting AI</h2>
            </div>
            <ul className="space-y-3 text-gray-300 font-space-grotesk">
              <li>• <strong className="text-white">Automating before standardizing</strong> — a good bot on top of a bad process only amplifies chaos.</li>
              <li>• <strong className="text-white">Buying 8 tools in the first month</strong> — you'll use 1 and waste money on 7.</li>
              <li>• <strong className="text-white">Waiting for perfection</strong> — AI gets 80% right; the rest is solved with human review or guardrails.</li>
              <li>• <strong className="text-white">Hiding usage from the team</strong> — creates resistance. Teach, give access, ask them to improve the system.</li>
              <li>• <strong className="text-white">Not measuring ROI</strong> — without metrics, it becomes a fad that dies in 3 months.</li>
              <li>• <strong className="text-white">Ignoring security</strong> — don't paste customer data in public chats without understanding retention and training.</li>
            </ul>
          </section>

          <section id="metrics" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">How to measure AI ROI</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Without measurement, AI becomes hard-to-defend expense. Use 3 metric families:
            </p>
            <ol className="space-y-3 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li>
                <strong className="text-white">Time saved</strong>: hours/week freed per process. Multiply by the
                person's hourly cost to get the dollar value.
              </li>
              <li>
                <strong className="text-white">Response speed</strong>: average time from lead arriving to being
                answered, time from proposal requested to sent, lead-to-close.
              </li>
              <li>
                <strong className="text-white">Perceived quality</strong>: customer NPS, rework rate, complaints by
                type. Done well, AI improves it — done poorly, it makes it worse.
              </li>
            </ol>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mt-4">
              Measure baseline before implementing. Compare 30 and 90 days later. If it didn't improve, kill the
              experiment and try something else.
            </p>
          </section>

          <section id="seven-day-plan" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <CalendarDays className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                7-day plan to start applying AI in your business
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-6">
              Forget the 6-month roadmap. In 7 days you can put 1 process running AI-assisted with a clear metric.
              Use this plan as a starting point — one task per day, no detours.
            </p>

            <ol className="space-y-4">
              {sevenDayPlan.map((d) => (
                <li
                  key={d.day}
                  className="bg-black/40 border border-gray-700 rounded-xl p-5 flex flex-col md:flex-row gap-4"
                >
                  <div className="md:w-28 flex-shrink-0">
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold font-space-grotesk px-3 py-1 rounded-full">
                      {d.day}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold font-space-grotesk mb-1">{d.title}</h3>
                    <p className="text-gray-300 font-space-grotesk text-sm mb-2 leading-relaxed">{d.task}</p>
                    <p className="text-purple-300 font-space-grotesk text-xs">
                      <strong>Metric:</strong> {d.metric}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 bg-purple-500/5 border border-purple-500/20 rounded-xl p-5">
              <p className="text-gray-300 font-space-grotesk text-sm leading-relaxed">
                <strong className="text-white">Plan rule:</strong> end every day with something that didn't exist
                before (SOP, prompt, number, decision). If a day produces only "nice idea", you didn't comply.
              </p>
            </div>
          </section>

          <section id="faq" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Frequently asked questions</h2>
            </div>
            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-800 pb-4 last:border-0">
                  <h3 className="text-white font-semibold font-space-grotesk mb-2">{q}</h3>
                  <p className="text-gray-300 font-space-grotesk text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <div
            id="cta-kit"
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 md:p-10"
          >
            <LeadCaptureForm
              source="ia-escalar-en"
              lang="en"
              redirectTo="/produtos/ai-operator-kit?lang=en"
              copy={enFormCopy}
            />
            <div className="mt-6 pt-6 border-t border-purple-500/20 text-center">
              <Link
                to="/conteudos"
                className="inline-block text-purple-300 font-semibold font-space-grotesk text-sm hover:text-purple-200 transition-colors"
              >
                See more content →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ContentAIScaleBusiness;

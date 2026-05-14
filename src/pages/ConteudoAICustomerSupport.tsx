import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { buildFaqSchema } from '../lib/faqSchema';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Layers,
  BarChart3,
  Wrench,
  AlertTriangle,
  Activity,
  Users,
  HelpCircle,
  Network,
  ListChecks,
} from 'lucide-react';

const faqs = [
  {
    q: "What's the best AI chatbot for customer service in 2026?",
    a: "There isn't one. Intercom Fin leads on resolution-based pricing for SaaS; Forethought wins for enterprise volume; Chatbase is the cheapest entry point; DIY with Claude or gpt-4o-mini wins above 2,000 tickets/month. Match the vendor to your stack and volume, not a leaderboard.",
  },
  {
    q: 'What are the best AI tools for customer service?',
    a: 'For customer-facing automation: Intercom Fin, Zendesk AI agents, Forethought, CoSupport AI. For agent copilots: Zendesk AI, HubSpot Service Hub AI, Cresta. For DIY: Claude Sonnet or gpt-4o-mini paired with pgvector or Pinecone on top of your existing ticketing platform.',
  },
  {
    q: 'How do I build an AI chatbot for support?',
    a: 'Five components: a ticketing platform with webhooks, a vector database for retrieval, an LLM for generation, tool integrations for actions, and observability. Total infra cost at 5,000 tickets/month is under $100. The work is in the knowledge base prep and the eval suite.',
  },
  {
    q: 'How does AI customer support integrate with Zendesk or Intercom?',
    a: 'Both offer native AI products (Zendesk AI agents, Intercom Fin). For DIY or third-party, integration goes through webhooks: ticket created, your endpoint processes it, reply posted back via API. All major platforms support this pattern.',
  },
  {
    q: 'How do I get started with AI customer support?',
    a: 'Start with one workflow on a single channel. Pick the highest-volume, lowest-stakes ticket type (password resets, order status). Run it for 30 days, measure honest deflection and CSAT, expand from there.',
  },
  {
    q: 'What is RAG and why does it matter for support?',
    a: 'RAG (Retrieval Augmented Generation) means the model retrieves relevant KB passages before answering. Without RAG, the model invents. With RAG, it cites your actual help center. Every credible AI support deployment in 2026 uses RAG.',
  },
  {
    q: 'How do I train my team to work alongside AI?',
    a: 'Three changes: shift agent KPIs from volume to complexity-handled, give agents authority to override the bot, and create a weekly review where they flag bad AI replies.',
  },
  {
    q: 'Do banks really use AI chatbots?',
    a: "Yes. Bank of America's Erica handles over a billion interactions, JPMorgan and Wells Fargo have deployed similar systems. But these are tightly scoped to account information and basic transactions, with hard handoffs for anything that touches advice or disputes.",
  },
];

const vendorSnapshot = [
  ['Intercom Fin', '$0.99/resolution', '45–55%', '-70%', 'SaaS with mature KB'],
  ['Forethought', '$30k+/yr custom', '40–60%', '-65%', 'Enterprise, high volume'],
  ['Zendesk AI', '$115/agent/mo', '25–40%', '-50%', 'Already on Zendesk'],
  ['Freshworks Freddy', '$29/agent + add-on', '20–35%', '-45%', 'SMB'],
  ['Salesforce Einstein', '$75/user/mo', '30–45%', '-55%', 'Salesforce ecosystem'],
  ['Chatbase', '$40–500/mo', '15–30%', '-40%', 'MVP, small sites'],
  ['Amazon Q', '$20/user/mo', '30–50%', '-60%', 'AWS-native shops'],
  ['CoSupport AI', 'Custom', '35–50%', '-55%', 'E-commerce'],
  ['DIY (LLM + RAG)', '$200–2k/mo infra', '30–55%', 'varies', 'Internal tech team'],
  ['ChatGPT Team', '$25/user/mo', '10–25%', 'n/a', 'Internal support only'],
];

const featureMatrix = [
  ['Intercom Fin', 'Yes', '45+', 'No', 'Strong', 'Partial'],
  ['Forethought', 'Yes', '25+', 'Beta', 'Strong', 'NDA'],
  ['Zendesk AI', 'Yes', '30+', 'Yes', 'Native', 'No'],
  ['Freshworks Freddy', 'Partial', '20+', 'Limited', 'Native', 'No'],
  ['Salesforce Einstein', 'Yes', '35+', 'Yes', 'Strong', 'No'],
  ['Chatbase', 'Yes', '80+', 'No', 'Basic', 'No'],
  ['Amazon Q', 'Yes', '75+', 'Via Connect', 'API', 'No'],
  ['CoSupport AI', 'Yes', '12', 'No', 'Strong', 'Partial'],
  ['Crisp', 'Limited', '50+', 'No', 'Native', 'No'],
  ['HubSpot AI', 'Yes', '12', 'No', 'Native', 'No'],
  ['Drift', 'Yes', 'EN-first', 'No', 'Native', 'No'],
  ['Tidio Lyro', 'Yes', '7', 'No', 'Native', 'Some'],
];

const pricingReality = [
  ['Intercom Fin', '$59,400', '$5–15k', '$8–20k', '$72k–94k'],
  ['Forethought', '$36k–60k', '$20–40k incl.', '$0', '$36k–60k'],
  ['Zendesk AI', '$13,800 + per-res', '$0', '$5–12k', '$18k–26k'],
  ['Chatbase Pro', '$4,800', '$0', '$3–8k', '$8k–13k'],
  ['DIY (gpt-4o-mini + pgvector)', '$2,400 infra', '$15–40k dev', '$5–15k', '$22k–57k'],
];

const teardown = [
  ['Deflection rate (honest)', '0%', '47%', '+47pp'],
  ['Median FRT', '4h12', '1h08', '-73%'],
  ['CSAT', '4.2', '4.1', '-0.1'],
  ['Cost per ticket', '$6.80', '$3.40', '-50%'],
  ['Escalation rate', 'n/a', '18%', '—'],
  ['Reopen rate (7-day)', '6%', '9%', '+3pp'],
];

const ConteudoAICustomerSupport = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="AI for customer support: a vendor-free breakdown with real deflection numbers"
        description="A practitioner's breakdown of AI customer support in 2026 — real deflection rates, vendor pricing, DIY stacks, and when not to deploy. No vendor spin."
        path="/conteudos/ai-for-customer-support"
        jsonLd={[
          buildArticleSchema({
            title:
              'AI for customer support: a vendor-free breakdown with real deflection numbers',
            description:
              'Real deflection rates, vendor pricing, DIY stacks, deployment teardown and when not to deploy AI on customer support.',
            slug: 'ai-for-customer-support',
            datePublished: '2026-05-14',
            dateModified: '2026-05-14',
          }),
          buildFaqSchema(faqs),
        ]}
      />
      <Header />

      <main className="pt-24 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <Link
            to="/conteudos"
            className="inline-flex items-center text-white hover:text-white font-space-grotesk mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Content
          </Link>

          <header className="text-center mb-12">
            <div className="bg-white/5 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk inline-block mb-6">
              AI OPERATOR HUB · CUSTOMER SUPPORT
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">AI for customer support</span>
              <br />
              a vendor-free breakdown with real deflection numbers
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Real deflection sits between 30–55%, not the 70–80% on landing pages. ROI breaks
              even above ~2,000 tickets/month. The KB is the project, not the model. A
              practitioner's read on vendors, DIY stacks, and when not to deploy.
            </p>
            <p className="text-sm text-gray-500 font-space-grotesk mt-4">
              ~15 min read · Updated May 2026
            </p>
          </header>

          <nav aria-label="Table of contents" className="glass-card mb-10 border border-white/15">
            <h2 className="text-sm uppercase tracking-wider text-white font-space-grotesk mb-3">
              Contents
            </h2>
            <ol className="space-y-1.5 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li><a href="#tldr" className="hover:text-white">TL;DR</a></li>
              <li><a href="#categories" className="hover:text-white">What AI for support actually means</a></li>
              <li><a href="#vendors" className="hover:text-white">The 12 vendors compared</a></li>
              <li><a href="#diy" className="hover:text-white">Build it yourself: the DIY stack</a></li>
              <li><a href="#teardown" className="hover:text-white">Real deployment teardown</a></li>
              <li><a href="#never" className="hover:text-white">When NOT to use AI for support</a></li>
              <li><a href="#metrics" className="hover:text-white">Quality metrics that matter</a></li>
              <li><a href="#team" className="hover:text-white">Training your team</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ol>
          </nav>

          {/* TL;DR */}
          <section id="tldr" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <ListChecks className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">TL;DR</h2>
            </div>
            <ul className="space-y-2 text-gray-300 font-space-grotesk leading-relaxed mb-6">
              <li>• Real deflection lands between <strong className="text-white">30% and 55%</strong>, not the 70–80% on landing pages.</li>
              <li>• First response time drops <strong className="text-white">60–80%</strong>; CSAT stays flat or dips slightly for 90 days.</li>
              <li>• ROI breaks even above <strong className="text-white">~2,000 tickets/month</strong>. Below that, you're paying for a project.</li>
              <li>• The fastest unlock is the <strong className="text-white">knowledge base</strong>, not the model.</li>
              <li>• Don't deploy on regulated support (healthcare, legal, financial) without human-in-the-loop.</li>
            </ul>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Vendor</th>
                    <th className="py-3 pr-4 text-white">Pricing entry</th>
                    <th className="py-3 pr-4 text-white">Real deflection</th>
                    <th className="py-3 pr-4 text-white">FRT impact</th>
                    <th className="py-3 text-white">Best fit</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  {vendorSnapshot.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={`py-3 ${i < row.length - 1 ? 'pr-4' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Categories */}
          <section id="categories" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                What "AI for customer support" actually means in 2026
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              The phrase covers four distinct categories, and most teams pick the wrong one because
              vendors blur the lines on purpose. Picking the wrong category is the first failure
              mode and the most expensive one — you can re-tune a prompt, but you can't refund a
              six-figure annual contract for the wrong product.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mt-6 mb-3">
              Chatbot, AI agent, RAG assistant, copilot — they're not the same thing
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              A <strong className="text-white">chatbot</strong> runs on decision trees with optional
              NLU on top. Deterministic. Most "AI chatbots" sold pre-2023 fall here.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              An <strong className="text-white">AI agent</strong> uses an LLM to plan and execute
              multi-step actions: read the ticket, check the order via API, draft a reply, escalate
              if confidence drops. The model is the runtime.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              A <strong className="text-white">RAG assistant</strong> retrieves passages from your
              KB, conditions the LLM, and answers. It doesn't take actions — it answers. Without
              RAG, the model invents.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              A <strong className="text-white">copilot</strong> sits next to the human agent. The
              customer never talks to it directly. Safest first deployment.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Type</th>
                    <th className="py-3 pr-4 text-white">Customer-facing?</th>
                    <th className="py-3 pr-4 text-white">Takes actions?</th>
                    <th className="py-3 pr-4 text-white">Needs your KB?</th>
                    <th className="py-3 text-white">Risk profile</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  <tr><td className="py-3 pr-4">Chatbot</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Limited</td><td className="py-3 pr-4">Optional</td><td className="py-3">Low</td></tr>
                  <tr><td className="py-3 pr-4">AI agent</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">Yes</td><td className="py-3">High</td></tr>
                  <tr><td className="py-3 pr-4">RAG assistant</td><td className="py-3 pr-4">Yes</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">Yes</td><td className="py-3">Medium</td></tr>
                  <tr><td className="py-3 pr-4">Copilot</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">No</td><td className="py-3 pr-4">Helpful</td><td className="py-3">Very low</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mt-6 mb-3">
              The deflection metric, demystified
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              <strong className="text-white">Vendor definition:</strong> any conversation that ended
              without a human reply. By that math, a customer who gave up counts as deflected.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              <strong className="text-white">Honest definition:</strong> resolved without a human,
              CSAT ≥ 4, and no reopen on the same topic within 7 days. The gap is usually 15–25
              percentage points. A vendor quoting "72% deflection" probably has 50% honest deflection.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              When you ask vendors for benchmarks, ask: how is "resolved" defined, what's the post-AI
              CSAT, and what percentage reopen within 7 days. If they don't know, the number is
              marketing.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mt-6 mb-3">
              Why CPC is $29 and what it tells you
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              The phrase "ai for customer support" carries a CPC of about $29 in the US database.
              SaaS vendors pay that much per click because customer support is where AI shows the
              clearest dollar impact. High CPC ≠ high difficulty — it means the category is mature,
              the buyers are real, and the budgets exist.
            </p>
          </section>

          {/* Vendors */}
          <section id="vendors" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                The 12 vendors, compared without the spin
              </h2>
            </div>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              Feature matrix
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Vendor</th>
                    <th className="py-3 pr-4 text-white">Native RAG</th>
                    <th className="py-3 pr-4 text-white">Multilingual</th>
                    <th className="py-3 pr-4 text-white">Voice</th>
                    <th className="py-3 pr-4 text-white">Handoff</th>
                    <th className="py-3 text-white">Honest metrics?</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  {featureMatrix.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={`py-3 ${i < row.length - 1 ? 'pr-4' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-6 text-sm">
              Native RAG matters more than the rest combined. Multilingual support matters more than
              vendors realize — the moment you serve a second market, English-first vendors become a
              tax on growth.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              Pricing reality check — the cost of 5,000 tickets/month
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Vendor</th>
                    <th className="py-3 pr-4 text-white">List cost</th>
                    <th className="py-3 pr-4 text-white">Implementation</th>
                    <th className="py-3 pr-4 text-white">KB cleanup</th>
                    <th className="py-3 text-white">Real year-1</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  {pricingReality.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={`py-3 ${i < row.length - 1 ? 'pr-4' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-6 text-sm">
              Resolution-priced models punish success — the better the bot, the more you pay.
              Subscription-priced models cap downside. Math out both at projected resolution before
              signing.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              Where each one breaks
            </h3>
            <ul className="space-y-2 break-words text-gray-300 font-space-grotesk text-sm">
              <li>• <strong className="text-white">Intercom Fin:</strong> pricing scales linearly with success. Win too hard, bleed margin.</li>
              <li>• <strong className="text-white">Forethought:</strong> heavy setup, 90+ days to ROI. Wrong fit for sub-enterprise.</li>
              <li>• <strong className="text-white">Zendesk AI:</strong> locked to Zendesk. Macro and intent system fights the LLM.</li>
              <li>• <strong className="text-white">Freshworks Freddy:</strong> "AI" varies by add-on. Read the SKU table carefully.</li>
              <li>• <strong className="text-white">Salesforce Einstein:</strong> only makes sense inside the Salesforce ecosystem.</li>
              <li>• <strong className="text-white">Chatbase:</strong> ceiling around 1k tickets/month. Great to start, bad to stay.</li>
              <li>• <strong className="text-white">Amazon Q:</strong> primitives, not a product. Best for AWS-native teams.</li>
              <li>• <strong className="text-white">CoSupport AI:</strong> strong on e-commerce, weaker on technical SaaS.</li>
              <li>• <strong className="text-white">Crisp:</strong> SMB UI, weak RAG. Containment up, resolution flat.</li>
              <li>• <strong className="text-white">HubSpot:</strong> good if HubSpot is your CRM. Mediocre standalone.</li>
              <li>• <strong className="text-white">Drift:</strong> pivoted to revenue. Support roadmap is no longer the priority.</li>
              <li>• <strong className="text-white">Tidio Lyro:</strong> honest about limits, narrow language coverage.</li>
            </ul>
          </section>

          {/* DIY */}
          <section id="diy" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Wrench className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Build it yourself: the DIY stack
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              DIY stopped being scary somewhere in 2024. The primitives are cheap, the patterns are
              documented, and the maintenance is lower than vendors imply. The hard part is no
              longer the LLM call — it's the orchestration, the KB hygiene, and the eval suite.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              Reference architecture
            </h3>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-xs md:text-sm overflow-x-auto mb-6">
{`Customer message
      |
      v
Ticketing platform (Intercom / Zendesk / HelpScout)
      |
      | webhook
      v
Your endpoint (Edge Function / Lambda / Cloud Run)
      |
      +--> Vector DB (pgvector / Pinecone)  <-- KB ingest pipeline
      |
      +--> LLM (Claude Sonnet / gpt-4o / gpt-4o-mini)
      |
      +--> Tools (order lookup, refund API, account status)
      |
      v
Response back to ticketing + observability log (Langfuse / Helicone)`}
            </pre>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              Real cost for 5,000 tickets/month
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Item</th>
                    <th className="py-3 text-white">Cost</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  <tr><td className="py-3 pr-4">gpt-4o-mini (5k convos × 4 × 1k tokens)</td><td className="py-3">~$45</td></tr>
                  <tr><td className="py-3 pr-4">Embeddings (10k chunks, monthly refresh)</td><td className="py-3">~$5</td></tr>
                  <tr><td className="py-3 pr-4">pgvector on Supabase Pro</td><td className="py-3">$25</td></tr>
                  <tr><td className="py-3 pr-4">Langfuse Cloud (free tier)</td><td className="py-3">$0</td></tr>
                  <tr><td className="py-3 pr-4">Edge Function compute</td><td className="py-3">~$10</td></tr>
                  <tr><td className="py-3 pr-4 text-white font-semibold">Total infrastructure</td><td className="py-3 text-white font-semibold">~$85/mo</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              When DIY actually wins
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3 text-sm">
              Use this checklist. If you answer yes to four or more, build it.
            </p>
            <ul className="space-y-2 break-words text-gray-300 font-space-grotesk text-sm">
              <li>• You have at least one engineer who's shipped an LLM integration before.</li>
              <li>• Your support volume is above 2k tickets/month.</li>
              <li>• You need data residency or self-hosting.</li>
              <li>• Your product surface changes faster than a vendor can re-train.</li>
              <li>• You want to own the prompts, the model choice, and the eval suite.</li>
              <li>• You already have a working knowledge base.</li>
            </ul>
          </section>

          {/* Teardown */}
          <section id="teardown" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Activity className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Real deployment teardown
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Anonymized B2B SaaS, ~8,000 tickets/month, Zendesk + Intercom Fin, ~600 KB articles,
              14 agents. Pre-AI baseline: median FRT 4h12, CSAT 4.2, $6.80 per ticket.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              Metrics after 90 days
            </h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Metric</th>
                    <th className="py-3 pr-4 text-white">Before</th>
                    <th className="py-3 pr-4 text-white">After 90 days</th>
                    <th className="py-3 text-white">Δ</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  {teardown.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i} className={`py-3 ${i < row.length - 1 ? 'pr-4' : ''}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-6 text-sm">
              Deflection landed at 47%, not 65% from the sales deck. Reopen rate went up because the
              AI was closing tickets it shouldn't have. Savings paid for the contract within 5
              months — only after the unsexy fixes below.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
              What went wrong in the first three weeks
            </h3>
            <ol className="space-y-3 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li>
                <strong className="text-white">Stale KB content.</strong> 12% of articles were
                outdated. Model answered confidently from wrong sources. Fix: one-time audit by
                support leads, then monthly review cadence. ~80 hours of senior agent time.
              </li>
              <li>
                <strong className="text-white">No fallback.</strong> When confidence dropped, the bot
                still tried to answer. CSAT cratered for two days. Fix: hard handoff at confidence
                &lt; 0.6, plus an "I don't know — connecting you with someone" template.
              </li>
              <li>
                <strong className="text-white">Tone collapse.</strong> Default Fin tone too corporate
                for the brand. Fix: custom voice prompt, three rounds of human review on samples.
                Two weeks to land.
              </li>
            </ol>
          </section>

          {/* Never */}
          <section id="never" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                When NOT to use AI for support
              </h2>
            </div>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
              Volume below 500 tickets/month
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4 text-sm">
              The math doesn't work. Implementation effort takes 18+ months to pay back. Use a
              copilot or template library — same LLM tech, applied to existing agents, lifts
              productivity 20–30% without the integration tax.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
              KB inexistent or stale
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4 text-sm">
              If your KB is a Google Doc from 2022 and a #support Slack channel, do not deploy AI on
              top of it. The model produces coherent, confident, wrong answers — at scale. Fix the
              KB first. The KB cleanup <em>is</em> the project.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
              Regulated support
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4 text-sm">
              Healthcare, legal, financial advice, insurance claims — anywhere a wrong answer
              creates liability. Use AI for triage and drafting, never for direct customer-facing
              answers without a human reviewer in the loop.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
              When the real problem is product
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed text-sm">
              If 40% of your tickets are "how do I do X" and X is core to your product, AI doesn't
              fix that. It hides it. You'll deflect tickets while churn climbs. AI on support is a
              force multiplier, not a band-aid for bad UX.
            </p>
          </section>

          {/* Metrics */}
          <section id="metrics" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Network className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Quality metrics that actually matter
              </h2>
            </div>
            <ul className="space-y-3 break-words text-gray-300 font-space-grotesk text-sm">
              <li>• <strong className="text-white">Containment rate</strong> — % of conversations that ended in the AI without escalation. Easy to inflate; track but don't celebrate.</li>
              <li>• <strong className="text-white">Resolution rate</strong> — containment + CSAT ≥ 4 + no reopen within 7 days. The honest deflection number.</li>
              <li>• <strong className="text-white">Escalation rate</strong> — healthy range 15–35%. Below 10% means suppressing escalations; above 50% means the bot isn't pulling weight.</li>
              <li>• <strong className="text-white">Hallucination rate</strong> — spot-check 50 random conversations weekly. Target &lt;2%. Above 5% means RAG is broken.</li>
              <li>• <strong className="text-white">Post-AI CSAT (separated)</strong> — tag AI conversations and measure separately. Convergence over 90 days = winning.</li>
              <li>• <strong className="text-white">Cost per resolved ticket</strong> — total AI spend ÷ resolved tickets. The only number that matters to the CFO.</li>
              <li>• <strong className="text-white">Time-to-resolution (TTR)</strong> — measure end-to-end, not just FRT.</li>
            </ul>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mt-4 text-sm">
              Two metrics most teams skip: <strong className="text-white">prompt drift</strong> (how
              often the system prompt changes per quarter) and <strong className="text-white">KB
              freshness</strong> (% of articles updated in last 90 days). Both predict next-quarter
              performance better than today's deflection number.
            </p>
          </section>

          {/* Team */}
          <section id="team" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Users className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Training your team (what vendors don't say)
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              The team doesn't shrink. The job changes.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
              Support agents become curators
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4 text-sm">
              The repetitive 60% goes to AI; the interesting 40% — angry customers, complex bugs,
              retention conversations — stays human and gets more time per ticket. Agent
              satisfaction goes up. Budget two weeks of training and expect a productivity dip in
              month one.
            </p>

            <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
              A new role appears: AI ops for support
            </h3>
            <p className="text-gray-300 font-space-grotesk leading-relaxed text-sm">
              Someone owns the system. They audit logs weekly, update prompts, retrain RAG when the
              product ships, run the eval suite. In a 14-person team, this is a 0.5–1.0 FTE
              responsibility. Trying to make it everyone's job means nobody's job.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">FAQ</h2>
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

          {/* CTA */}
          <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">
              Want the deployment playbook without the vendor markup?
            </h3>
            <p className="text-gray-300 font-space-grotesk mb-6">
              The AI Operator Kit walks through the exact stack — prompts, eval suites, escalation
              logic, RAG pipeline — used to ship support automation for clients.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/produtos/ai-operator-kit"
                className="inline-block bg-white/10 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-white/20 transition-all"
              >
                Explore the AI Operator Kit →
              </Link>
              <Link
                to="/conteudos"
                className="inline-block border border-white/15 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-white/10 transition-all"
              >
                Back to all content
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ConteudoAICustomerSupport;

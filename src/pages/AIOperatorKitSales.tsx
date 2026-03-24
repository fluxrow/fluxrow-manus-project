import React from "react";
import { motion, type Easing } from "framer-motion";
import SEO from "@/components/SEO";

const LEMON_LINK = "[INSERT_LEMON_SQUEEZY_LINK]";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const insideBlocks = [
  {
    num: "01",
    title: "System Architecture",
    desc: "The 5-layer map — Brain, Queue, Publisher, DM Engine, Revenue. Understand the full system before picking a single tool.",
  },
  {
    num: "02",
    title: "3 Execution Paths",
    desc: "Fast (launch this week), Stable (repeatable ops), or Scale (fully automated). Pick the path that fits your speed and skill.",
  },
  {
    num: "03",
    title: "Execution Layers",
    desc: "Tool-agnostic setup for each layer — AI brain deployment, content queue, publishing, ManyChat DM engine, and checkout.",
  },
  {
    num: "04",
    title: "Decision Framework",
    desc: "When to use Claude vs. n8n vs. ManyChat vs. agents. The logic map that prevents you from using complex tools when simple ones work.",
  },
  {
    num: "05",
    title: "15 Copy-Ready Prompts",
    desc: "Hooks, carousels, captions, X threads, LinkedIn posts, DM handlers, objection scripts, audits — paste and run.",
  },
  {
    num: "06",
    title: "Operator Repository",
    desc: "5 versioned skill files, n8n workflow templates, and the SKILL.md format — reusable infrastructure for your AI system.",
  },
  {
    num: "07",
    title: "Launch Plan",
    desc: "Path-specific checklists: Fast Path in 2 days, Stable Path in 7 days, Scale Path direction. Step-by-step activation.",
  },
  {
    num: "08",
    title: "Revenue Math",
    desc: "Funnel benchmarks, monthly revenue scenarios, and upsell math from $27 buyers to $500–$5,000 high-ticket conversions.",
  },
];

const forList = [
  "Solo operators who sell services or digital products",
  "Creators building an audience with intent to monetize",
  "Freelancers tired of posting without a system behind it",
  "Beginners who want a clear starting point — not a 40-hour course",
];

const notForList = [
  "People looking for a shortcut with no effort",
  "Anyone who won't implement what they read",
  "Teams that already have a full marketing department",
  "People expecting a done-for-you service",
];

const valueStack = [
  "5-layer system architecture (Brain → Queue → Publisher → DM → Revenue)",
  "3 execution paths (Fast / Stable / Scale) with tool recommendations",
  "15 copy-ready AI prompts — carousels, captions, DMs, audits, skill files",
  "5-message ManyChat DM sequence — ready to deploy",
  "Operator Repository with 5 skill files + n8n workflow templates",
  "Decision framework — when to use which tool",
  "Path-specific launch checklists (2 days → 7 days)",
  "Revenue math + upsell strategy breakdown",
  "20 topic ideas + 20 hook templates",
  "Troubleshooting guide for common issues",
];

const Divider = () => (
  <div className="w-full h-px" style={{ backgroundColor: "#222220" }} />
);

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={LEMON_LINK}
    className={`inline-block font-medium text-sm tracking-wide px-8 py-4 rounded-sm transition-opacity hover:opacity-90 ${className}`}
    style={{ backgroundColor: "#c8f000", color: "#080807" }}
  >
    Get the Kit — $27
  </a>
);

const AIOperatorKitSales = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080807", color: "#e5e5e0" }}>
      <SEO
        title="AI Operator Starter Kit — Fluxrow"
        description="The system behind your content, DMs, and sales. Prompts, templates, architecture, and a 7-day launch checklist for solo operators. $27."
        path="/kit"
        image="https://fluxrow.com/og-kit.jpg"
        imageAlt="AI Operator Starter Kit by Fluxrow"
      />
      {/* ── Hero ── */}
      <motion.section
        className="pt-24 pb-20 px-6"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-[860px] mx-auto">
          <motion.p
            variants={fade}
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "'DM Mono', monospace", color: "#888" }}
          >
            AI Operator Starter Kit
          </motion.p>
          <motion.h1
            variants={fade}
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Build the AI system that runs your content, DMs, and sales.
          </motion.h1>
          <motion.p
            variants={fade}
            className="text-lg mb-10 max-w-[600px]"
            style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
          >
            One architecture. Three execution paths — Fast, Stable, or Scale. 40+ prompts, templates, DM scripts, and a 7-day launch playbook. Pick the path that fits you now.
          </motion.p>
          <motion.div variants={fade}>
            <CTAButton />
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      {/* ── Problem ── */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="max-w-[860px] mx-auto">
          <motion.p
            variants={fade}
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}
          >
            The Problem
          </motion.p>
          <motion.p
            variants={fade}
            className="text-lg leading-relaxed mb-6"
            style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
          >
            You have the tools. ChatGPT, Canva, a scheduling app, maybe even an automation platform. But there's no system connecting them. Every week starts from scratch — new prompts, new ideas, new guesswork.
          </motion.p>
          <motion.p
            variants={fade}
            className="text-lg leading-relaxed mb-6"
            style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
          >
            Your content is inconsistent. Your DMs don't convert. Your "strategy" is whatever you feel like posting today. The problem isn't the tools — it's the lack of architecture behind them.
          </motion.p>
          <motion.p
            variants={fade}
            className="text-lg leading-relaxed"
            style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
          >
            You don't need another course. You need a system you can install and run.
          </motion.p>
        </div>
      </motion.section>

      <Divider />

      {/* ── What's Inside ── */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="max-w-[860px] mx-auto">
          <motion.p
            variants={fade}
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}
          >
            What's Inside
          </motion.p>
          <motion.h2
            variants={fade}
            className="text-3xl md:text-4xl mb-14"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            One system. Three paths. Your speed.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {insideBlocks.map((block) => (
              <motion.div key={block.num} variants={fade}>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: "'DM Mono', monospace", color: "#c8f000" }}
                >
                  {block.num}
                </p>
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {block.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
                >
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Divider />

      {/* ── Social Proof ── */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="max-w-[860px] mx-auto text-center">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { num: "120+", label: "automations built" },
              { num: "850+", label: "leads generated" },
              { num: "$0", label: "ad spend" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fade}>
                <p
                  className="text-2xl md:text-3xl mb-1"
                  style={{ fontFamily: "'Instrument Serif', serif", color: "#e5e5e0" }}
                >
                  {stat.num}
                </p>
                <p
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'DM Mono', monospace", color: "#666" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fade}
            className="text-lg md:text-xl"
            style={{ fontFamily: "'Inter', sans-serif", color: "#c8f000" }}
          >
            Built from real implementation work.
          </motion.p>
        </div>
      </motion.section>

      <Divider />

      {/* ── Who It's For / Not For ── */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="max-w-[860px] mx-auto">
          <motion.p
            variants={fade}
            className="text-xs tracking-[0.3em] uppercase mb-12"
            style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}
          >
            Is This For You?
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fade}>
              <h3
                className="text-xl mb-6"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                This is for you if…
              </h3>
              <ul className="space-y-4">
                {forList.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
                  >
                    <span style={{ color: "#c8f000" }} className="mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fade}>
              <h3
                className="text-xl mb-6"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                This is not for you if…
              </h3>
              <ul className="space-y-4">
                {notForList.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "#777", fontFamily: "'Inter', sans-serif" }}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: "#555" }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Divider />

      {/* ── Price Block ── */}
      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="max-w-[860px] mx-auto text-center">
          <motion.p
            variants={fade}
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}
          >
            Get Started
          </motion.p>
          <motion.p
            variants={fade}
            className="text-6xl md:text-7xl mb-2"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            $27
          </motion.p>
          <motion.p
            variants={fade}
            className="text-sm mb-10"
            style={{ color: "#666", fontFamily: "'DM Mono', monospace" }}
          >
            one-time payment · instant access
          </motion.p>

          {/* CTA top — always visible */}
          <motion.div variants={fade} className="mb-12">
            <CTAButton />
          </motion.div>

          <motion.ul variants={fade} className="text-left max-w-[400px] mx-auto space-y-3 mb-12">
            {valueStack.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-sm"
                style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
              >
                <span
                  className="w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: "#c8f000" }}
                />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={fade}
            className="text-base italic mb-10"
            style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}
          >
            Built to be used this week, not admired later.
          </motion.p>

          {/* CTA bottom — mobile duplicate */}
          <motion.div variants={fade} className="md:hidden">
            <CTAButton />
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      {/* ── Footer ── */}
      <footer className="py-12 px-6 text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'DM Mono', monospace", color: "#444" }}
        >
          FLUXROW · 2026
        </p>
      </footer>
    </div>
  );
};

export default AIOperatorKitSales;

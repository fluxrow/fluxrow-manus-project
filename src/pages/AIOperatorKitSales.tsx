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
    title: "The System Architecture",
    desc: "The full blueprint — how every layer connects and runs without you.",
  },
  {
    num: "02",
    title: "The AI Brain",
    desc: "Pre-built prompts that think in your voice, your offer, your audience.",
  },
  {
    num: "03",
    title: "Content Queue",
    desc: "A repeatable pipeline that turns one idea into a week of content.",
  },
  {
    num: "04",
    title: "Hook + Content System",
    desc: "Frameworks that stop the scroll and move people toward your offer.",
  },
  {
    num: "05",
    title: "DM Sales Engine",
    desc: "Automated conversations that qualify leads and close without awkwardness.",
  },
  {
    num: "06",
    title: "7-Day Launch Checklist",
    desc: "Step-by-step activation — go from reading to running in one week.",
  },
];

const forList = [
  "Solo operators who sell services or digital products",
  "Creators building an audience with intent to monetize",
  "Freelancers tired of posting without a system behind it",
  "Small teams who want to do more with fewer people",
];

const notForList = [
  "People looking for a \"get rich quick\" shortcut",
  "Anyone who won't implement what they read",
  "Teams that already have a full marketing department",
  "People expecting a done-for-you service",
];

const valueStack = [
  "5-layer system architecture",
  "40+ pre-built AI prompts",
  "Content queue templates",
  "Hook + content frameworks",
  "DM sales scripts & flows",
  "7-day launch checklist",
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
            A practical guide with prompts, templates, and architecture — built for solo operators who want to stop improvising and start running a system.
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
            Six systems. One kit.
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

import React, { useEffect, useState, useCallback } from "react";
import { motion, type Easing } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useSearchParams, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { trackEvent } from "@/utils/tracking";
import { KIT_CONTENT, KIT_PRICE, type KitLang } from "@/content/aiOperatorKit";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { detectLang as detectGlobalLang, persistLang } from "@/utils/langDetect";

const ease: Easing = [0.25, 0.1, 0.25, 1];
const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Divider = () => <div className="w-full h-px" style={{ backgroundColor: "#222220" }} />;

function detectLang(): KitLang {
  return detectGlobalLang();
}

const AIOperatorKitSales = () => {
  const [params, setParams] = useSearchParams();
  const urlLang = params.get("lang");
  const [lang, setLang] = useState<KitLang>(() => {
    if (urlLang === "pt" || urlLang === "en") return urlLang;
    return detectLang();
  });

  // Sync URL ↔ state once on mount if URL had no lang
  useEffect(() => {
    if (!urlLang) {
      const next = new URLSearchParams(params);
      next.set("lang", lang);
      setParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React to URL changes (back/forward)
  useEffect(() => {
    if ((urlLang === "pt" || urlLang === "en") && urlLang !== lang) {
      setLang(urlLang);
    }
  }, [urlLang, lang]);

  const switchLang = useCallback(() => {
    const next: KitLang = lang === "pt" ? "en" : "pt";
    setLang(next);
    localStorage.setItem("aok-lang", next);
    const sp = new URLSearchParams(params);
    sp.set("lang", next);
    setParams(sp, { replace: true });
    trackEvent("kit_lang_switch", { from: lang, to: next });
  }, [lang, params, setParams]);

  const c = KIT_CONTENT[lang];
  const price = KIT_PRICE[lang];
  const otherLang: KitLang = lang === "pt" ? "en" : "pt";

  const { openCheckout, checkoutElement } = useStripeCheckout();

  const handleCta = (location: string) => {
    trackEvent("kit_cta_click", { location, lang, price: price.amount, currency: price.currency });
    openCheckout({
      priceId: price.priceId,
      lang,
      returnUrl: `${window.location.origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}&lang=${lang}`,
    });
  };

  const CTAButton = ({ className = "", location }: { className?: string; location: string }) => (
    <button
      type="button"
      onClick={() => handleCta(location)}
      className={`inline-block font-medium text-sm tracking-wide px-8 py-4 rounded-sm transition-opacity hover:opacity-90 ${className}`}
      style={{ backgroundColor: "#c8f000", color: "#080807" }}
    >
      {c.hero.cta}
    </button>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#080807", color: "#e5e5e0" }}>
      <SEO
        title={c.meta.title}
        description={c.meta.description}
        path={`/produtos/ai-operator-kit?lang=${lang}`}
        image="https://fluxrow.com/og-kit.jpg"
        imageAlt="AI Operator Starter Kit by Fluxrow"
        lang={lang === "pt" ? "pt-BR" : "en-US"}
        locale={lang === "pt" ? "pt_BR" : "en_US"}
      />
      {checkoutElement}
      <Helmet>
        <link rel="canonical" href={`https://fluxrow.com/produtos/ai-operator-kit?lang=${lang}`} />
        <link rel="alternate" hrefLang="en" href="https://fluxrow.com/produtos/ai-operator-kit?lang=en" />
        <link rel="alternate" hrefLang="pt-BR" href="https://fluxrow.com/produtos/ai-operator-kit?lang=pt" />
        <link rel="alternate" hrefLang="x-default" href="https://fluxrow.com/produtos/ai-operator-kit" />
      </Helmet>

      {/* ── Top bar with lang toggle + back link ── */}
      <div className="px-6 pt-6 flex items-center justify-between max-w-[860px] mx-auto">
        <Link
          to="/produtos"
          className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'DM Mono', monospace", color: "#666" }}
        >
          ← {lang === "pt" ? "Produtos" : "Products"}
        </Link>
        <button
          onClick={switchLang}
          aria-label={c.toggle.ariaLabel}
          className="text-xs tracking-[0.2em] uppercase px-3 py-2 border border-white/15 hover:border-white/40 transition-colors rounded-sm"
          style={{ fontFamily: "'DM Mono', monospace", color: "#bbb" }}
        >
          {otherLang.toUpperCase()} · {c.toggle.other}
        </button>
      </div>

      {/* ── Hero ── */}
      <motion.section className="pt-16 pb-20 px-6" initial="hidden" animate="visible" variants={stagger}>
        <div className="max-w-[860px] mx-auto">
          <motion.p variants={fade} className="text-xs tracking-[0.3em] uppercase mb-8" style={{ fontFamily: "'DM Mono', monospace", color: "#888" }}>
            {c.hero.eyebrow}
          </motion.p>
          <motion.h1 variants={fade} className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
            {c.hero.title}
          </motion.h1>
          <motion.p variants={fade} className="text-lg mb-10 max-w-[600px]" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
            {c.hero.subtitle}
          </motion.p>
          <motion.div variants={fade}>
            <CTAButton location="hero" />
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      {/* ── Problem ── */}
      <motion.section className="py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
        <div className="max-w-[860px] mx-auto">
          <motion.p variants={fade} className="text-xs tracking-[0.3em] uppercase mb-8" style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}>
            {c.problem.eyebrow}
          </motion.p>
          {c.problem.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fade}
              className={`text-lg leading-relaxed ${i < c.problem.paragraphs.length - 1 ? "mb-6" : ""}`}
              style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </motion.section>

      <Divider />

      {/* ── What's Inside ── */}
      <motion.section className="py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
        <div className="max-w-[860px] mx-auto">
          <motion.p variants={fade} className="text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}>
            {c.inside.eyebrow}
          </motion.p>
          <motion.h2 variants={fade} className="text-3xl md:text-4xl mb-14" style={{ fontFamily: "'Instrument Serif', serif" }}>
            {c.inside.title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {c.inside.blocks.map((block) => (
              <motion.div key={block.num} variants={fade}>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'DM Mono', monospace", color: "#c8f000" }}>
                  {block.num}
                </p>
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Divider />

      {/* ── Social Proof ── */}
      <motion.section className="py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
        <div className="max-w-[860px] mx-auto text-center">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {c.proof.stats.map((stat) => (
              <motion.div key={stat.label} variants={fade}>
                <p className="text-2xl md:text-3xl mb-1" style={{ fontFamily: "'Instrument Serif', serif", color: "#e5e5e0" }}>
                  {stat.num}
                </p>
                <p className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "#666" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fade} className="text-lg md:text-xl" style={{ fontFamily: "'Inter', sans-serif", color: "#c8f000" }}>
            {c.proof.line}
          </motion.p>
        </div>
      </motion.section>

      <Divider />

      {/* ── Who It's For ── */}
      <motion.section className="py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
        <div className="max-w-[860px] mx-auto">
          <motion.p variants={fade} className="text-xs tracking-[0.3em] uppercase mb-12" style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}>
            {c.audience.eyebrow}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fade}>
              <h3 className="text-xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {c.audience.forTitle}
              </h3>
              <ul className="space-y-4">
                {c.audience.forList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}>
                    <span style={{ color: "#c8f000" }} className="mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fade}>
              <h3 className="text-xl mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {c.audience.notForTitle}
              </h3>
              <ul className="space-y-4">
                {c.audience.notForList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "#777", fontFamily: "'Inter', sans-serif" }}>
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

      {/* ── Price ── */}
      <motion.section className="py-20 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
        <div className="max-w-[860px] mx-auto text-center">
          <motion.p variants={fade} className="text-xs tracking-[0.3em] uppercase mb-6" style={{ fontFamily: "'DM Mono', monospace", color: "#555" }}>
            {c.price.eyebrow}
          </motion.p>
          <motion.p variants={fade} className="text-6xl md:text-7xl mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
            {price.amount}
          </motion.p>
          <motion.p variants={fade} className="text-sm mb-10" style={{ color: "#666", fontFamily: "'DM Mono', monospace" }}>
            {price.suffix}
          </motion.p>

          <motion.div variants={fade} className="mb-12">
            <CTAButton location="price_top" />
          </motion.div>

          <motion.ul variants={fade} className="text-left max-w-[400px] mx-auto space-y-3 mb-12">
            {c.price.valueStack.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#bbb", fontFamily: "'Inter', sans-serif" }}>
                <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#c8f000" }} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p variants={fade} className="text-base italic mb-10" style={{ color: "#999", fontFamily: "'Inter', sans-serif" }}>
            {c.price.tagline}
          </motion.p>

          <motion.div variants={fade} className="md:hidden">
            <CTAButton location="price_bottom" />
          </motion.div>
        </div>
      </motion.section>

      <Divider />

      <footer className="py-12 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Mono', monospace", color: "#444" }}>
          {c.footer}
        </p>
      </footer>
    </div>
  );
};

export default AIOperatorKitSales;

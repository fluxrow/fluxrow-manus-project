import React from 'react';
import { useTranslation } from 'react-i18next';
import { FocusRail, type FocusRailItem } from '../ui/focus-rail';
import fachiniImage from '../../assets/fachini-industrial.jpg';
import medclinicaImage from '../../assets/medclinica-saude.jpg';

const caseImages = [
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  fachiniImage,
  medclinicaImage,
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
];

// These are brand/company names and metrics — they stay the same across languages
const casesData = [
  { title: "Match Solutions - Distribution", meta: "AI • Distribution", metrics: [{ label: "Conversion increase", value: "+35%" }, { label: "Daily savings", value: "12h" }, { label: "6-month ROI", value: "320%" }], testimonial: { author: "Carlos Mendes", role: "Commercial Director, Match Solutions" } },
  { title: "Promotrip - Tourism", meta: "Tourism • Paid Traffic", metrics: [{ label: "Conversion increase", value: "+47%" }, { label: "Cost per lead", value: "-38%" }, { label: "Response time", value: "<5min" }], testimonial: { author: "Ana Paula Santos", role: "CEO, Promotrip" } },
  { title: "Maranata - Consortiums", meta: "Consortiums • Lead Gen", metrics: [{ label: "Qualified leads", value: "+83%" }, { label: "Conversion rate", value: "12%" }, { label: "Monthly sales", value: "+65%" }], testimonial: { author: "Roberto Lima", role: "Sales Manager, Maranata" } },
  { title: "Fachini - Industrial", meta: "SaaS • Industrial", metrics: [{ label: "Cost reduction", value: "-64%" }, { label: "Operational efficiency", value: "+45%" }, { label: "Implementation time", value: "3 wks" }], testimonial: { author: "Marcos Fachini", role: "Industrial Director" } },
  { title: "MedClínica - Healthcare", meta: "Healthcare • Telemedicine", metrics: [{ label: "No-show reduction", value: "-73%" }, { label: "Patient satisfaction", value: "98%" }, { label: "Consultations/day", value: "+40%" }], testimonial: { author: "Dr. Fernanda Costa", role: "Clinical Director" } },
  { title: "EduTech - Online Learning", meta: "Education • AI", metrics: [{ label: "Trial-to-paid", value: "+156%" }, { label: "Student retention", value: "89%" }, { label: "NPS", value: "72" }], testimonial: { author: "Pedro Henrique", role: "Head of Product, EduTech" } },
  { title: "FitLife - Gym", meta: "Fitness • Mobile App", metrics: [{ label: "Weekly frequency", value: "+124%" }, { label: "Monthly churn", value: "-52%" }, { label: "Average ticket", value: "+35%" }], testimonial: { author: "Julia Ramos", role: "Owner, FitLife" } },
  { title: "LogiExpress - Transport", meta: "Logistics • Optimization", metrics: [{ label: "Delay reduction", value: "-59%" }, { label: "Fuel savings", value: "-23%" }, { label: "Deliveries/day", value: "+30%" }], testimonial: { author: "Fernando Oliveira", role: "Operations Director" } },
  { title: "BellaEstética - Aesthetics", meta: "Aesthetics • Visual AI", metrics: [{ label: "Average ticket", value: "+267%" }, { label: "Auto upsell", value: "45%" }, { label: "Client return", value: "78%" }], testimonial: { author: "Camila Almeida", role: "Founder, BellaEstética" } },
  { title: "TechStartup - SaaS B2B", meta: "B2B • Enterprise", metrics: [{ label: "Sales cycle", value: "-45%" }, { label: "Demos done", value: "+180%" }, { label: "Close rate", value: "+28%" }], testimonial: { author: "Lucas Andrade", role: "VP Sales" } },
];

const caseDescriptions = {
  en: [
    "We implemented 6 specialized AI Agents that automated the entire sales process, from qualification to closing.",
    "Complete sales funnel automation with CRM integration, optimized paid traffic and automated nurturing.",
    "Consortium simulator integrated to the website with automatic capture of qualified leads via WhatsApp and email.",
    "Custom SaaS for industrial management with RD Station integration and real-time dashboards.",
    "Smart scheduling system with predictive AI for no-show reduction and integrated telemedicine.",
    "Learning platform with AI-personalized tracks and gamification to increase engagement.",
    "Custom app with rewards program, adaptive workouts and wearable integration.",
    "GPS tracking system with AI-powered route optimization and real-time delivery prediction.",
    "AI-powered skin analysis evaluation system with personalized treatment recommendations.",
    "Automated demos with conversational AI and progressive onboarding to accelerate sales cycle.",
  ],
  pt: [
    "Implementamos 6 Agentes IA especializados que automatizaram todo o processo de vendas, desde a qualificação até o fechamento.",
    "Automação completa do funil de vendas com integração CRM, tráfego pago otimizado e nurturing automatizado.",
    "Simulador de consórcio integrado ao site com captação automática de leads qualificados via WhatsApp e e-mail.",
    "SaaS personalizado para gestão industrial com integração RD Station e dashboards em tempo real.",
    "Sistema de agendamento inteligente com IA preditiva para redução de no-show e telemedicina integrada.",
    "Plataforma de ensino com trilhas personalizadas por IA e gamificação para aumentar engajamento.",
    "App personalizado com programa de recompensas, treinos adaptativos e integração com wearables.",
    "Sistema de rastreamento GPS com otimização de rotas por IA e previsão de entrega em tempo real.",
    "Sistema de avaliações com IA visual para análise de pele e recomendação de tratamentos personalizados.",
    "Demos automatizadas com IA conversacional e onboarding progressivo para acelerar ciclo de vendas.",
  ],
};

const caseQuotes = {
  en: [
    "The AI agents completely transformed our operation. Now we can serve 3x more clients with the same team.",
    "Automation allowed us to scale without growing the team. The ROI was impressive from the first quarter.",
    "The simulator changed our lead capture. Leads arrive already qualified and ready to close.",
    "The system gave us complete visibility of operations. We make faster and more assertive decisions.",
    "The AI scheduling dramatically reduced our no-shows. Automatic reminders are spot-on.",
    "Personalized tracks massively increased our engagement. Students complete more courses.",
    "The rewards app changed student behavior. Attendance skyrocketed and so did retention.",
    "Route optimization saved thousands in fuel. Customers love real-time tracking.",
    "The AI skin analysis impresses clients and naturally generates sales of complementary treatments.",
    "Automated demos qualify leads 24/7. Our sales team focuses only on hot prospects.",
  ],
  pt: [
    "Os agentes IA transformaram completamente nossa operação. Agora conseguimos atender 3x mais clientes com a mesma equipe.",
    "A automação nos permitiu escalar sem aumentar a equipe. O ROI foi impressionante já no primeiro trimestre.",
    "O simulador mudou nossa captação. Os leads chegam já qualificados e prontos para fechar negócio.",
    "O sistema nos deu visibilidade total da operação. Tomamos decisões mais rápidas e assertivas.",
    "A IA de agendamento reduziu drasticamente nossas faltas. Os lembretes automáticos são precisos.",
    "As trilhas personalizadas aumentaram absurdamente nosso engajamento. Alunos completam mais cursos.",
    "O app de recompensas mudou o comportamento dos alunos. A frequência disparou e a retenção também.",
    "A otimização de rotas economizou milhares em combustível. Os clientes adoram o rastreamento em tempo real.",
    "A análise de pele por IA impressiona as clientes e gera vendas naturais de tratamentos complementares.",
    "As demos automatizadas qualificam leads 24/7. Nosso time comercial foca apenas nos prospects quentes.",
  ],
};

const CasesPortfolio = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'pt' ? 'pt' : 'en';

  const casesItems: FocusRailItem[] = casesData.map((c, i) => ({
    id: i + 1,
    title: c.title,
    description: caseDescriptions[lang][i],
    meta: c.meta,
    imageSrc: caseImages[i],
    href: `#case-${i}`,
    metrics: c.metrics,
    testimonial: {
      quote: caseQuotes[lang][i],
      author: c.testimonial.author,
      role: c.testimonial.role,
    },
  }));

  return (
    <section id="cases" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('cases.title')}
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            {t('cases.subtitle')}
          </p>
        </div>
        
        <FocusRail 
          items={casesItems} 
          autoPlay={true}
          interval={5000}
          loop={true}
        />
      </div>
    </section>
  );
};

export default CasesPortfolio;

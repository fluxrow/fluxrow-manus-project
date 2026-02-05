import React from 'react';
import { FocusRail, type FocusRailItem } from '../ui/focus-rail';
import fachiniImage from '../../assets/fachini-industrial.jpg';
import medclinicaImage from '../../assets/medclinica-saude.jpg';

const CasesPortfolio = () => {
  const casesItems: FocusRailItem[] = [
    {
      id: 1,
      title: "Match Solutions - Distribuição",
      description: "Implementamos 6 Agentes IA especializados que automatizaram todo o processo de vendas, desde a qualificação até o fechamento.",
      meta: "IA • Distribuição",
      imageSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      href: "#case-match",
      metrics: [
        { label: "Aumento em conversões", value: "+35%" },
        { label: "Economia diária", value: "12h" },
        { label: "ROI em 6 meses", value: "320%" }
      ],
      testimonial: {
        quote: "Os agentes IA transformaram completamente nossa operação. Agora conseguimos atender 3x mais clientes com a mesma equipe.",
        author: "Carlos Mendes",
        role: "Diretor Comercial, Match Solutions"
      }
    },
    {
      id: 2,
      title: "Promotrip - Turismo",
      description: "Automação completa do funil de vendas com integração CRM, tráfego pago otimizado e nurturing automatizado.",
      meta: "Turismo • Tráfego Pago",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      href: "#case-promotrip",
      metrics: [
        { label: "Aumento em conversões", value: "+47%" },
        { label: "Custo por lead", value: "-38%" },
        { label: "Tempo de resposta", value: "<5min" }
      ],
      testimonial: {
        quote: "A automação nos permitiu escalar sem aumentar a equipe. O ROI foi impressionante já no primeiro trimestre.",
        author: "Ana Paula Santos",
        role: "CEO, Promotrip"
      }
    },
    {
      id: 3,
      title: "Maranata - Consórcios",
      description: "Simulador de consórcio integrado ao site com captação automática de leads qualificados via WhatsApp e e-mail.",
      meta: "Consórcios • Lead Generation",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      href: "#case-maranata",
      metrics: [
        { label: "Leads qualificados", value: "+83%" },
        { label: "Taxa de conversão", value: "12%" },
        { label: "Vendas mensais", value: "+65%" }
      ],
      testimonial: {
        quote: "O simulador mudou nossa captação. Os leads chegam já qualificados e prontos para fechar negócio.",
        author: "Roberto Lima",
        role: "Gerente de Vendas, Maranata"
      }
    },
    {
      id: 4,
      title: "Fachini - Industrial",
      description: "SaaS personalizado para gestão industrial com integração RD Station e dashboards em tempo real.",
      meta: "SaaS • Industrial",
      imageSrc: fachiniImage,
      href: "#case-fachini",
      metrics: [
        { label: "Redução de custos", value: "-64%" },
        { label: "Eficiência operacional", value: "+45%" },
        { label: "Tempo de implantação", value: "3 sem" }
      ],
      testimonial: {
        quote: "O sistema nos deu visibilidade total da operação. Tomamos decisões mais rápidas e assertivas.",
        author: "Marcos Fachini",
        role: "Diretor Industrial"
      }
    },
    {
      id: 5,
      title: "MedClínica - Saúde",
      description: "Sistema de agendamento inteligente com IA preditiva para redução de no-show e telemedicina integrada.",
      meta: "Saúde • Telemedicina",
      imageSrc: medclinicaImage,
      href: "#case-medclinica",
      metrics: [
        { label: "Redução no-show", value: "-73%" },
        { label: "Satisfação paciente", value: "98%" },
        { label: "Consultas/dia", value: "+40%" }
      ],
      testimonial: {
        quote: "A IA de agendamento reduziu drasticamente nossas faltas. Os lembretes automáticos são precisos.",
        author: "Dra. Fernanda Costa",
        role: "Diretora Clínica"
      }
    },
    {
      id: 6,
      title: "EduTech - Ensino Online",
      description: "Plataforma de ensino com trilhas personalizadas por IA e gamificação para aumentar engajamento.",
      meta: "Educação • IA",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      href: "#case-edutech",
      metrics: [
        { label: "Conversão trial-pago", value: "+156%" },
        { label: "Retenção de alunos", value: "89%" },
        { label: "NPS", value: "72" }
      ],
      testimonial: {
        quote: "As trilhas personalizadas aumentaram absurdamente nosso engajamento. Alunos completam mais cursos.",
        author: "Pedro Henrique",
        role: "Head de Produto, EduTech"
      }
    },
    {
      id: 7,
      title: "FitLife - Academia",
      description: "App personalizado com programa de recompensas, treinos adaptativos e integração com wearables.",
      meta: "Fitness • App Mobile",
      imageSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      href: "#case-fitlife",
      metrics: [
        { label: "Frequência semanal", value: "+124%" },
        { label: "Churn mensal", value: "-52%" },
        { label: "Ticket médio", value: "+35%" }
      ],
      testimonial: {
        quote: "O app de recompensas mudou o comportamento dos alunos. A frequência disparou e a retenção também.",
        author: "Julia Ramos",
        role: "Proprietária, FitLife"
      }
    },
    {
      id: 8,
      title: "LogiExpress - Transportes",
      description: "Sistema de rastreamento GPS com otimização de rotas por IA e previsão de entrega em tempo real.",
      meta: "Logística • Otimização",
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      href: "#case-logiexpress",
      metrics: [
        { label: "Redução de atrasos", value: "-59%" },
        { label: "Economia combustível", value: "-23%" },
        { label: "Entregas/dia", value: "+30%" }
      ],
      testimonial: {
        quote: "A otimização de rotas economizou milhares em combustível. Os clientes adoram o rastreamento em tempo real.",
        author: "Fernando Oliveira",
        role: "Diretor de Operações"
      }
    },
    {
      id: 9,
      title: "BellaEstética - Estética",
      description: "Sistema de avaliações com IA visual para análise de pele e recomendação de tratamentos personalizados.",
      meta: "Estética • IA Visual",
      imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      href: "#case-bellaestetica",
      metrics: [
        { label: "Ticket médio", value: "+267%" },
        { label: "Upsell automático", value: "45%" },
        { label: "Retorno de clientes", value: "78%" }
      ],
      testimonial: {
        quote: "A análise de pele por IA impressiona as clientes e gera vendas naturais de tratamentos complementares.",
        author: "Camila Almeida",
        role: "Fundadora, BellaEstética"
      }
    },
    {
      id: 10,
      title: "TechStartup - SaaS B2B",
      description: "Demos automatizadas com IA conversacional e onboarding progressivo para acelerar ciclo de vendas.",
      meta: "B2B • Enterprise",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      href: "#case-techstartup",
      metrics: [
        { label: "Ciclo de vendas", value: "-45%" },
        { label: "Demos realizadas", value: "+180%" },
        { label: "Taxa de fechamento", value: "+28%" }
      ],
      testimonial: {
        quote: "As demos automatizadas qualificam leads 24/7. Nosso time comercial foca apenas nos prospects quentes.",
        author: "Lucas Andrade",
        role: "VP de Vendas"
      }
    }
  ];

  return (
    <section id="cases" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 px-6">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cases de Sucesso
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Resultados reais que transformaram negócios com tecnologia
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

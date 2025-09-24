"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "../hooks/use-mobile"
import ImageWithFallback from "./ui/image-with-fallback"

// Importar imagens existentes
import avatar1 from '../assets/avatar-1.jpg'
import avatar2 from '../assets/avatar-2.jpg'
import avatar3 from '../assets/avatar-3.jpg'

interface TestimonialProfile {
  id: string
  author: string
  role: string
  text: string
  result: string
  avatar: string
  expandedContent: string
  timeline: string
  beforeAfter: {
    before: string
    after: string
  }
  metrics: {
    label: string
    value: string
  }[]
  keyActions: string[]
}

const testimonialProfiles: TestimonialProfile[] = [
  {
    id: "1",
    author: "Bruno R.",
    role: "Agência de Performance",
    text: "Implementei as automações do módulo 2 e aumentei 2,4x meu faturamento em 45 dias. É surreal.",
    result: "+240% faturamento",
    avatar: avatar1,
    expandedContent: "Consegui automatizar todo o processo de criação de campanhas, desde a pesquisa de palavras-chave até a otimização dos anúncios. O que antes levava 8 horas agora leva 2 horas, e com resultados muito melhores.",
    timeline: "Resultados em 45 dias",
    beforeAfter: {
      before: "R$ 15.000/mês com muito trabalho manual",
      after: "R$ 51.000/mês com processos automatizados"
    },
    metrics: [
      { label: "Aumento no faturamento", value: "240%" },
      { label: "Redução de tempo", value: "75%" },
      { label: "Novos clientes", value: "12" },
      { label: "ROI das campanhas", value: "+180%" }
    ],
    keyActions: [
      "Automatizou criação de campanhas Google Ads",
      "Implementou chatbot para qualificação de leads",
      "Criou relatórios automáticos para clientes",
      "Otimizou lances com IA preditiva"
    ]
  },
  {
    id: "2", 
    author: "Jéssica L.",
    role: "Infoprodutora",
    text: "O conteúdo é cirúrgico. Em 3 dias recuperei o investimento só com um fluxo de WhatsApp.",
    result: "ROI em 3 dias",
    avatar: avatar2,
    expandedContent: "Criei um fluxo de nutrição no WhatsApp que identifica o perfil de cada lead e envia conteúdo personalizado. As conversões aumentaram absurdamente porque cada pessoa recebe exatamente o que precisa ouvir.",
    timeline: "Recuperou investimento em 72 horas",
    beforeAfter: {
      before: "Conversão de 2% nos lançamentos",
      after: "Conversão de 12% com automação"
    },
    metrics: [
      { label: "Taxa de conversão", value: "600%" },
      { label: "Tempo para ROI", value: "3 dias" },
      { label: "Leads qualificados", value: "+400%" },
      { label: "Vendas automáticas", value: "85%" }
    ],
    keyActions: [
      "Criou fluxo inteligente no WhatsApp Business",
      "Implementou segmentação automática de leads",
      "Automatizou follow-up pós-compra",
      "Desenvolveu quiz de qualificação com IA"
    ]
  },
  {
    id: "3",
    author: "Felipe C.",
    role: "Autônomo",
    text: "Eu achava que precisava contratar alguém. Agora eu tenho sistema de vendas rodando com IA todo dia.",
    result: "Automatização completa",
    avatar: avatar3,
    expandedContent: "Montei um sistema que funciona 24/7: captura leads, qualifica, agenda reuniões e até faz follow-up. É como ter uma equipe de vendas trabalhando enquanto durmo. O melhor é que custa uma fração do que seria contratar pessoas.",
    timeline: "Sistema funcionando em 2 semanas",
    beforeAfter: {
      before: "Dependia 100% do seu tempo para vender",
      after: "70% das vendas acontecem automaticamente"
    },
    metrics: [
      { label: "Vendas automáticas", value: "70%" },
      { label: "Leads por mês", value: "+500%" },
      { label: "Taxa de agendamento", value: "45%" },
      { label: "Economia vs contratar", value: "R$ 8.000/mês" }
    ],
    keyActions: [
      "Implementou chatbot no site e redes sociais",
      "Automatizou agendamento de reuniões",
      "Criou sequência de e-mail marketing inteligente",
      "Desenvolveu sistema de pontuação de leads"
    ]
  }
]

function TestimonialCard({ testimonial }: { testimonial: TestimonialProfile }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="glass-card p-6 cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          {/* Avatar */}
          <div className="w-14 h-14 flex-shrink-0">
            <ImageWithFallback
              src={testimonial.avatar}
              alt={testimonial.author}
              className="w-14 h-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Result Badge */}
            <div className="mb-3">
              <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                {testimonial.result}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-white font-space-grotesk text-base leading-relaxed italic mb-4">
              "{testimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-cyan-400 font-space-grotesk text-sm">
                {testimonial.author}
              </h4>
              <span className="text-white/60 text-sm font-space-grotesk">
                • {testimonial.role}
              </span>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-6"
                >
                  {/* Timeline */}
                  <motion.div 
                    className="bg-white/5 p-4 rounded-lg mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-green-400 text-sm">⏱️</span>
                      <span className="text-white font-semibold text-sm font-space-grotesk">{testimonial.timeline}</span>
                    </div>
                    <p className="text-white/90 text-sm font-space-grotesk leading-relaxed">
                      {testimonial.expandedContent}
                    </p>
                  </motion.div>

                  {/* Before/After */}
                  <motion.div 
                    className="grid grid-cols-1 gap-3 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-red-400 text-xs">❌</span>
                        <span className="text-red-300 font-medium text-xs font-space-grotesk">ANTES</span>
                      </div>
                      <p className="text-white/80 text-sm font-space-grotesk">{testimonial.beforeAfter.before}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-green-400 text-xs">✅</span>
                        <span className="text-green-300 font-medium text-xs font-space-grotesk">DEPOIS</span>
                      </div>
                      <p className="text-white/80 text-sm font-space-grotesk">{testimonial.beforeAfter.after}</p>
                    </div>
                  </motion.div>

                  {/* Metrics */}
                  <motion.div 
                    className="grid grid-cols-2 gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {testimonial.metrics.map((metric, index) => (
                      <div key={index} className="bg-white/5 p-3 rounded-lg text-center">
                        <div className="text-cyan-400 font-bold text-lg font-space-grotesk">{metric.value}</div>
                        <div className="text-white/70 text-xs font-space-grotesk">{metric.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Key Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-white font-semibold text-sm mb-3 font-space-grotesk">O que implementou:</h4>
                    <div className="space-y-2">
                      {testimonial.keyActions.map((action, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-cyan-400 text-sm">▶</span>
                          <span className="text-white/80 text-sm font-space-grotesk">{action}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Chevron Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white flex-shrink-0 ml-3 touch-target"
        >
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  )
}

export function TestimonialsMobileCards() {
  const isMobile = useIsMobile()

  return (
    <section className="py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title font-space-grotesk">
            Resultados <span className="gradient-text">Comprovados</span>
          </h2>
          <p className="text-white/80 text-lg mt-4 font-space-grotesk max-w-3xl mx-auto">
            Descubra como nossos alunos transformaram seus negócios com IA
          </p>
        </div>

        <div className={`${isMobile ? 'space-y-6' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
          {testimonialProfiles.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1 + 0.3,
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
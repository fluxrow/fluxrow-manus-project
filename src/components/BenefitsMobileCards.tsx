"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "../hooks/use-mobile"
import ImageWithFallback from "./ui/image-with-fallback"

// Importar imagens existentes
import estudantes from '../assets/estudantes.webp'
import freelancerAgencias from '../assets/freelancer-agencias.webp'
import profissionaisLiberais from '../assets/profissionais-liberais.webp'
import donosPequenosNegocios from '../assets/donos-pequenos-negocios.webp'
import empreendedoresIniciantes from '../assets/empreendedores-iniciantes.webp'

interface BenefitProfile {
  id: string
  title: string
  description: string
  highlight: string
  checkText: string
  image: string
  expandedContent: string
  strategies: string[]
  tools: string[]
  examples: string[]
}

const benefitProfiles: BenefitProfile[] = [
  {
    id: "1",
    title: "Estudantes",
    description: "Dominar IA desde a graduação te coloca na frente de 95% dos profissionais no mercado.",
    highlight: "Vantagem competitiva desde o início",
    checkText: "Perfeito para quem quer se destacar",
    image: estudantes,
    expandedContent: "Como estudante, você tem a oportunidade única de dominar IA enquanto ainda está formando sua base profissional. Isso significa que você pode integrar essas habilidades desde o início da carreira.",
    strategies: [
      "Automatizar pesquisas acadêmicas com IA",
      "Criar assistentes para estudos personalizados",
      "Desenvolver projetos diferenciados para o portfólio"
    ],
    tools: ["ChatGPT para pesquisa", "Notion AI para organização", "GitHub Copilot para código"],
    examples: ["TCC com dados analisados por IA", "Estágio com projetos automatizados", "Freelances durante a faculdade"]
  },
  {
    id: "2", 
    title: "Freelancers e Agências",
    description: "Multiplique sua capacidade de entrega e aumente seus preços com automações inteligentes.",
    highlight: "3-5x mais produtividade",
    checkText: "Ideal para escalar operações",
    image: freelancerAgencias,
    expandedContent: "Para freelancers e agências, IA significa poder entregar muito mais valor em menos tempo, justificando preços premium e conquistando clientes maiores.",
    strategies: [
      "Automatizar criação de conteúdo e campanhas",
      "Implementar chatbots para clientes",
      "Usar IA para análise de dados e relatórios"
    ],
    tools: ["Make.com para automações", "Claude para copywriting", "Zapier para integrações"],
    examples: ["Agência que automatizou 80% das tasks", "Freelancer que triplicou a renda", "Campanhas que se otimizam sozinhas"]
  },
  {
    id: "3",
    title: "Profissionais Liberais", 
    description: "Automatize tarefas administrativas e foque no que realmente importa: seus clientes.",
    highlight: "Mais tempo para o essencial",
    checkText: "Perfeito para otimizar rotina",
    image: profissionaisLiberais,
    expandedContent: "Médicos, advogados, dentistas e outros profissionais podem usar IA para eliminar burocracias e melhorar o atendimento aos pacientes/clientes.",
    strategies: [
      "Automatizar agendamentos e lembretes",
      "IA para análise de documentos e laudos",
      "Sistemas inteligentes de follow-up"
    ],
    tools: ["Calendly + IA para agendamentos", "AI para análise de documentos", "WhatsApp Business automatizado"],
    examples: ["Clínica que reduziu 70% do tempo administrativo", "Escritório que automatizou contratos", "Consultório com atendimento 24h via IA"]
  },
  {
    id: "4",
    title: "Donos de Pequenos Negócios",
    description: "Compete com grandes empresas usando IA para marketing, vendas e atendimento automatizados.",
    highlight: "David vs Golias com IA",
    checkText: "Ideal para competir com gigantes", 
    image: donosPequenosNegocios,
    expandedContent: "Pequenos negócios podem usar IA para ter capacidades que antes só grandes empresas tinham: marketing sofisticado, atendimento 24h, análises avançadas.",
    strategies: [
      "Marketing automatizado e personalizado",
      "Atendimento ao cliente com IA",
      "Análise preditiva de vendas"
    ],
    tools: ["HubSpot + IA para CRM", "Manychat para WhatsApp", "Google Analytics + IA"],
    examples: ["Loja que aumentou vendas em 200%", "Restaurante com delivery otimizado", "Loja online que vende sozinha"]
  },
  {
    id: "5",
    title: "Empreendedores Iniciantes",
    description: "Valide ideias, crie MVPs e lance produtos usando IA como seu co-founder virtual.",
    highlight: "IA como sócio gratuito",
    checkText: "Perfeito para validar ideias",
    image: empreendedoresIniciantes, 
    expandedContent: "Para quem está começando, IA é como ter um sócio expert em tecnologia, marketing, vendas e análise de dados - sem dividir equity.",
    strategies: [
      "Validação rápida de ideias com IA",
      "Criação de protótipos e MVPs",
      "Automatizar desde o dia 1"
    ],
    tools: ["No-code + IA para protótipos", "IA para pesquisa de mercado", "Automações para validação"],
    examples: ["Startup que validou ideia em 48h", "App criado sem programar", "Negócio digital 100% automatizado"]
  }
]

function BenefitCard({ profile }: { profile: BenefitProfile }) {
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
          {/* Profile Image */}
          <div className="w-16 h-16 flex-shrink-0">
            <ImageWithFallback
              src={profile.image}
              alt={profile.title}
              className="w-16 h-16 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-white text-lg font-space-grotesk">
                {profile.title}
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold rounded-full">
                {profile.highlight}
              </span>
            </div>

            <p className="text-white/80 text-sm leading-relaxed font-space-grotesk mb-3">
              {profile.description}
            </p>

            <div className="flex items-center gap-2 text-cyan-400 text-sm font-space-grotesk">
              <span className="text-green-400">✓</span>
              {profile.checkText}
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
                  <motion.p 
                    className="text-white/90 text-sm leading-relaxed font-space-grotesk mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {profile.expandedContent}
                  </motion.p>

                  {/* Strategies */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="text-white font-semibold text-sm mb-2 font-space-grotesk">Estratégias Principais:</h4>
                    <ul className="space-y-1">
                      {profile.strategies.map((strategy, index) => (
                        <li key={index} className="text-white/80 text-sm font-space-grotesk flex items-start gap-2">
                          <span className="text-cyan-400 text-xs mt-1 shrink-0">▶</span>
                          <span className="min-w-0 break-words">{strategy}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Tools */}
                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-white font-semibold text-sm mb-2 font-space-grotesk">Ferramentas Recomendadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Examples */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-white font-semibold text-sm mb-2 font-space-grotesk">Casos de Sucesso:</h4>
                    <ul className="space-y-1">
                      {profile.examples.map((example, index) => (
                        <li key={index} className="text-white/80 text-sm font-space-grotesk flex items-center gap-2">
                          <span className="text-green-400 text-xs">✓</span>
                          {example}
                        </li>
                      ))}
                    </ul>
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

export function BenefitsMobileCards() {
  const isMobile = useIsMobile()

  return (
    <section className="py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title font-space-grotesk">
            IA Para <span className="gradient-text">Seu Perfil</span>
          </h2>
          <p className="text-white/80 text-lg mt-4 font-space-grotesk max-w-3xl mx-auto">
            Descubra como a inteligência artificial pode transformar especificamente sua área de atuação
          </p>
        </div>

        <div className={`${isMobile ? 'space-y-6' : 'grid md:grid-cols-2 gap-6'}`}>
          {benefitProfiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1 + 0.3,
              }}
            >
              <BenefitCard profile={profile} />
            </motion.div>
          ))}
        </div>

        {/* Conclusão */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-space-grotesk">
              Independente do seu perfil...
            </h3>
            <p className="text-white/90 text-lg font-space-grotesk leading-relaxed">
              Nossa metodologia se adapta ao seu nível de conhecimento. <span className="text-cyan-400">Desde iniciante absoluto até profissional avançado</span>, você vai encontrar o caminho certo para dominar IA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
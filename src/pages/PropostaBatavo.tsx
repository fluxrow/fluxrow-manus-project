import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, QrCode, Stamp, Gift, Star, Shield, Users, TrendingUp,
  Smartphone, MessageCircle, CheckCircle, BarChart3, Globe, ArrowRight,
  Heart, Award, ShoppingBag, Eye, Lock, Sparkles, Send, ChevronRight,
  PieChart, UserCheck, Store, Megaphone, Database, Zap
} from 'lucide-react';
import heroImg from '@/assets/batavo-hero.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};

const PropostaBatavo = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#3E2723] font-sans">
      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tortas artesanais" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/70 via-[#3E2723]/50 to-[#3E2723]/80" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          initial="hidden" animate="visible"
        >
          <motion.p variants={fadeUp} custom={0} className="text-[#FFCC80] uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Projeto Exclusivo
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Rota das Tortas<br />
            <span className="text-[#FFCC80]">Batavo</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-xl md:text-2xl text-white/80 mb-4">
            Uma experiência gastronômica que transforma consumo em jornada
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
            Uma rota gastronômica imersiva em Carambeí, conectando sabor, cultura e tecnologia em uma experiência inesquecível.
          </motion.p>
          <motion.a
            variants={fadeUp} custom={4}
            href="#investimento"
            className="inline-flex items-center gap-2 bg-[#FFCC80] text-[#3E2723] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFB74D] transition-colors"
          >
            Apresentar Projeto <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* ═══ 2. SOBRE O PROJETO ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold mb-6">
              O que é a <span className="text-[#C62828]">Rota das Tortas</span>?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-[#5D4037] max-w-3xl mx-auto">
              Uma rota gastronômica em Carambeí onde participantes visitam 4 tortearias, consomem uma fatia em cada local e, ao completar a jornada, ganham um prato exclusivo Batavo.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {[
              { icon: Heart, title: 'Experiência', desc: 'Jornada sensorial única que conecta sabor e memória' },
              { icon: Users, title: 'Engajamento', desc: 'Gamificação que motiva o participante a completar a rota' },
              { icon: ShoppingBag, title: 'Consumo', desc: 'Incentivo direto ao consumo em pontos comerciais locais' },
              { icon: Award, title: 'Marca', desc: 'Fortalecimento da Batavo como protagonista da experiência' },
            ].map((item, i) => (
              <motion.div
                key={item.title} variants={fadeUp} custom={i}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(62,39,35,0.08)] hover:shadow-[0_8px_30px_rgba(62,39,35,0.12)] transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#FFCC80]/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-[#C62828]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#5D4037] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. COMO FUNCIONA ═══ */}
      <section className="py-24 px-6 bg-[#EFEBE9]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Como <span className="text-[#C62828]">funciona</span>?
          </motion.h2>
          <motion.div className="space-y-0" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: QrCode, title: 'Cadastro via QR Code', desc: 'O participante escaneia o QR e se registra em segundos.' },
              { icon: MapPin, title: 'Visita às tortearias', desc: 'Percorre as 4 tortearias participantes pela cidade.' },
              { icon: Stamp, title: 'Check-in digital + carimbo', desc: 'Faz check-in via QR e recebe carimbo no card físico.' },
              { icon: CheckCircle, title: 'Completa 4 pontos', desc: 'Ao completar todas as visitas, ativa o resgate.' },
              { icon: Gift, title: 'Resgata prêmio exclusivo', desc: 'Ganha um prato exclusivo da coleção Batavo.' },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="flex gap-6 items-start relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#C62828] flex items-center justify-center text-white font-bold shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-0.5 h-16 bg-[#C62828]/20" />}
                </div>
                <div className="pb-10">
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon size={18} className="text-[#C62828]" />
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="text-[#5D4037] text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. EXPERIÊNCIA DO USUÁRIO ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            A <span className="text-[#C62828]">jornada</span> do participante
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Card Físico Mock */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p className="text-sm text-[#5D4037] uppercase tracking-widest mb-4 font-medium">Card Físico</p>
              <div className="bg-[#FFF3E0] border-2 border-dashed border-[#BCAAA4] rounded-2xl p-8 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">🥧 Rota das Tortas</h3>
                  <span className="text-xs text-[#8D6E63] bg-[#EFEBE9] px-3 py-1 rounded-full">#0042</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Tortearia do Vale', 'Sabor Colonial', 'Doce Batavo', 'Casa da Torta'].map((name, i) => (
                    <div key={name} className="flex flex-col items-center gap-2">
                      <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${i < 2 ? 'border-[#C62828] bg-[#C62828]/10' : 'border-[#BCAAA4] bg-white'}`}>
                        {i < 2 ? <Stamp size={24} className="text-[#C62828]" /> : <span className="text-[#BCAAA4] text-2xl">?</span>}
                      </div>
                      <span className="text-xs text-[#5D4037] text-center">{name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-[#8D6E63]">
                  <div className="flex-1 h-2 bg-[#D7CCC8] rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-[#C62828] rounded-full" />
                  </div>
                  <span>2/4</span>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Mock */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <p className="text-sm text-[#5D4037] uppercase tracking-widest mb-4 font-medium">Acompanhamento via WhatsApp</p>
              <div className="bg-[#ECE5DD] rounded-2xl overflow-hidden shadow-md">
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Rota das Tortas Batavo</p>
                    <p className="text-white/60 text-xs">online</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {[
                    { from: 'bot', text: '🎉 Check-in confirmado na Tortearia do Vale! Faltam 3 pontos para o prêmio.', time: '10:32' },
                    { from: 'bot', text: '📍 Próxima parada: Sabor Colonial — a apenas 400m!', time: '10:32' },
                    { from: 'user', text: 'Partiu! 🥧', time: '10:35' },
                    { from: 'bot', text: '✅ Check-in na Sabor Colonial! Você já completou 50% da rota. Continue assim!', time: '11:15' },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] px-3 py-2 rounded-xl text-sm ${msg.from === 'user' ? 'bg-[#DCF8C6] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                        <p>{msg.text}</p>
                        <p className="text-[10px] text-[#8D6E63] text-right mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 5. DIFERENCIAIS ═══ */}
      <section className="py-24 px-6 bg-[#3E2723] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[#FFCC80]">Diferenciais</span> do projeto
          </motion.h2>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: Zap, title: 'Sistema Híbrido', desc: 'Combina o digital (QR Code) com o físico (card com carimbos) para máxima confiabilidade.' },
              { icon: Shield, title: 'Antifraude', desc: 'Card numerado com validação digital, impedindo uso duplicado ou falsificação.' },
              { icon: Users, title: 'Engajamento Real', desc: 'Presença física obrigatória — não é só interação online, é vivência.' },
              { icon: Sparkles, title: 'Experiência Memorável', desc: 'Cada parada é uma nova descoberta sensorial, construindo memória de marca.' },
            ].map((item, i) => (
              <motion.div
                key={item.title} variants={fadeUp} custom={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <item.icon size={32} className="text-[#FFCC80] mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 6. BENEFÍCIOS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Benefícios para <span className="text-[#C62828]">todos</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(62,39,35,0.08)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C62828]/10 flex items-center justify-center">
                  <Megaphone size={20} className="text-[#C62828]" />
                </div>
                <h3 className="text-2xl font-bold">Para a Batavo</h3>
              </div>
              <ul className="space-y-4">
                {['Fortalecimento de marca na região', 'Experiência positiva associada ao produto', 'Dados estratégicos de comportamento do consumidor'].map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-[#C62828] mt-0.5 shrink-0" />
                    <span className="text-[#5D4037]">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(62,39,35,0.08)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#FFCC80]/30 flex items-center justify-center">
                  <Store size={20} className="text-[#8D6E63]" />
                </div>
                <h3 className="text-2xl font-bold">Para as Lojas</h3>
              </div>
              <ul className="space-y-4">
                {['Aumento significativo de fluxo', 'Maior ticket médio por visita', 'Visibilidade e divulgação da marca'].map((b, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-[#FFCC80] mt-0.5 shrink-0" />
                    <span className="text-[#5D4037]">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 7. TECNOLOGIA ═══ */}
      <section className="py-24 px-6 bg-[#EFEBE9]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            <span className="text-[#C62828]">Tecnologia</span> por trás
          </motion.h2>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: QrCode, title: 'Check-in QR Code', desc: 'Leitura rápida e precisa em cada ponto.' },
              { icon: MessageCircle, title: 'WhatsApp Integrado', desc: 'Notificações automáticas de progresso.' },
              { icon: Lock, title: 'Validação por Card', desc: 'Número único vinculado ao participante.' },
              { icon: Database, title: 'Controle de Resgates', desc: 'Dashboard com dados em tempo real.' },
            ].map((item, i) => (
              <motion.div
                key={item.title} variants={fadeUp} custom={i}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(62,39,35,0.06)] text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C62828]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[#C62828]" />
                </div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-[#5D4037]">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 8. DADOS E MÉTRICAS ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Resultados <span className="text-[#C62828]">mensuráveis</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center text-[#5D4037] mb-16 max-w-2xl mx-auto">
            Todas as interações geram dados estratégicos para tomada de decisão.
          </motion.p>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: UserCheck, label: 'Participantes', value: 'Total registrados' },
              { icon: TrendingUp, label: 'Taxa de Conclusão', value: '% que completam' },
              { icon: BarChart3, label: 'Fluxo por Loja', value: 'Visitas por ponto' },
              { icon: PieChart, label: 'Engajamento', value: 'Interações totais' },
            ].map((m, i) => (
              <motion.div key={m.label} variants={fadeUp} custom={i}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(62,39,35,0.06)] text-center"
              >
                <m.icon size={28} className="text-[#C62828] mx-auto mb-3" />
                <p className="text-2xl font-bold mb-1">{m.value}</p>
                <p className="text-sm text-[#8D6E63]">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. INVESTIMENTO ═══ */}
      <section id="investimento" className="py-24 px-6 bg-[#3E2723]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#4E342E] to-[#3E2723] border border-[#FFCC80]/20 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} custom={0} className="text-[#FFCC80] uppercase tracking-[0.2em] text-sm mb-2">
              Investimento para implementação
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-5xl md:text-6xl font-bold text-white mb-2">
              R$ 9.000<span className="text-2xl text-white/50">,00</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-white/60 max-w-xl mx-auto mb-8 text-lg">
              Projeto completo incluindo estrutura digital, automação via WhatsApp, sistema de validação, gestão da experiência e suporte à operação.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-3 text-sm text-[#FFCC80]/80">
              {['Estrutura digital', 'Automação WhatsApp', 'Sistema de validação', 'Gestão da experiência', 'Suporte à operação'].map(t => (
                <span key={t} className="bg-[#FFCC80]/10 px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ 10. EXPANSÃO ═══ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="w-16 h-16 rounded-full bg-[#C62828]/10 flex items-center justify-center mx-auto mb-6">
              <Globe size={32} className="text-[#C62828]" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-[#C62828]">escalar</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-[#5D4037] max-w-2xl mx-auto">
              A Rota das Tortas é uma plataforma replicável. Após o piloto em Carambeí, o modelo pode ser expandido para outras cidades e marcas — transformando experiências gastronômicas em estratégia nacional.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 11. CTA FINAL ═══ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#EFEBE9] to-[#FFF8F0]">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold mb-6">
            Vamos ativar essa experiência <span className="text-[#C62828]">juntos</span>?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-lg text-[#5D4037] mb-10">
            Inicie o piloto em Carambeí e transforme a relação entre marca, produto e consumidor.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521979099380?text=Quero%20aprovar%20o%20projeto%20Rota%20das%20Tortas%20Batavo"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C62828] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B71C1C] transition-colors"
            >
              Aprovar Projeto <Send size={20} />
            </a>
            <a
              href="https://wa.me/5521979099380?text=Quero%20saber%20mais%20sobre%20o%20projeto%20Rota%20das%20Tortas"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#C62828] text-[#C62828] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#C62828]/5 transition-colors"
            >
              Iniciar Piloto em Carambeí <ChevronRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#8D6E63] bg-[#FFF8F0] border-t border-[#EFEBE9]">
        <p>Projeto desenvolvido por <span className="font-semibold text-[#3E2723]">Fluxrow</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default PropostaBatavo;


## Objetivo

Criar uma proposta comercial interativa para a **Positivo**, hospedada em `/propostas/positivo`, seguindo o padrão de propostas existentes (Comunica, Batavo, Teresópolis) mas com identidade visual própria: Dark Slate-900/Zinc-950 com amarelo institucional `#f9b217` como cor de conversão.

## Conteúdo (extraído do Google Doc "Proposta Estratégica Positivo - Fluxrow")

1. **Sumário Executivo** — Ponto de inflexão da Positivo, gargalo no WhatsApp, ecossistema unificado.
2. **Dores e Diagnóstico** — Tabela (sintoma atual → solução Fluxrow) sobre: agentes WhatsApp deficitários, falta de roteamento por especialidade, dados cegos vs Meta/LinkedIn/GMN, sem qualificação NLP.
3. **Arquitetura da Solução** — Hub Omnichannel (Meta, LinkedIn, Google Meu Negócio) → Agente SDR (NLP) → Routing Engine para vendedor especialista em < 3s.
4. **Cronograma** — 3 fases: Estabilização (1-30d), Roteamento e Ativação (31-60d), Otimização e Escala (61d+).
5. **Visão de Futuro** — Apps proprietários integrados a ERPs/CRMs + Mentoria estratégica.

## Arquivos a criar

- `src/data/propostaPositivo.ts` — Estrutura tipada com dores, fases, canais.
- `src/pages/PropostaPositivo.tsx` — Página principal com SEO noindex.
- `src/components/positivo/HeroPositivo.tsx` — Hero dark com headline serif, badge "Proposta exclusiva", validade.
- `src/components/positivo/LeadRoutingPanel.tsx` — **Componente assinatura**: 3 canais (Meta/LinkedIn/GMN) com pulsos animados → linhas SVG convergindo para bloco central "IA SDR Inteligente" → após 2s dispara para card "Vendedor Especialista Responsável". Loop infinito controlado por Framer Motion.
- `src/components/positivo/DoresGrid.tsx` — Grid de cards de dores. Hover/click revela "Sintoma Atual" (badge vermelho) → expande para "Solução Arquitetada Fluxrow" (borda iluminada `#f9b217`).
- `src/components/positivo/CronogramaTimeline.tsx` — Timeline vertical com 3 fases. IntersectionObserver / useScroll do Framer ilumina cada nó conforme o usuário rola.
- `src/components/positivo/VisaoFuturoSection.tsx` — Seção "oculta" que aparece com fade+slide elegante (whileInView).
- `src/components/positivo/MagneticCTA.tsx` — Botão CTA flutuante (fixed bottom) magnético (segue cursor com spring) escrito "Aceitar Proposta e Iniciar Setup" — feedback de clique com burst de partículas amarelas.
- Rota em `src/App.tsx`: `<Route path="positivo" element={<PropostaPositivo />} />` dentro de `/propostas`.

## Detalhes técnicos

- **Stack**: Tailwind + Framer Motion (já instalado v12.23.21) + lucide-react.
- **Tokens locais**: variável CSS `--positivo-yellow: #f9b217`, fundo `bg-slate-950` com camadas `bg-slate-900/50`, texto `text-slate-100/200/400`.
- **Tipografia**: mantém Instrument Serif para headlines (padrão Fluxrow) e DM Mono para labels técnicos.
- **Animações**:
  - LeadRoutingPanel: timeline orquestrada (`useAnimate` + sequence) com 3 etapas de 2s cada, linhas SVG com `pathLength` e gradiente animado, pulsos `animate-ping` no nó central.
  - Cards dores: `whileHover={{ y: -4 }}` + `AnimatePresence` para expansão.
  - Timeline: `whileInView` com `viewport={{ once: false, amount: 0.6 }}` para iluminar nó.
  - CTA magnético: `useMotionValue` + `useSpring` rastreando posição do mouse dentro de raio.
  - Partículas: 8-12 divs absolutos animados radialmente no `onClick`.
- **60fps**: usar somente `transform` e `opacity`, evitar layout thrash, `will-change` em elementos animados intensos.
- **CTA destino**: WhatsApp Fluxrow (+55 41 99236-1868) com mensagem pré-preenchida "Quero aceitar a proposta Positivo e iniciar o setup."
- **SEO**: `noindex, nofollow` (proposta confidencial), title "Proposta Estratégica Positivo · Fluxrow".

## Estrutura visual da página

```text
[ Header Fluxrow existente ]
[ Hero — headline + subtítulo + data/validade + scroll cue ]
[ Sumário Executivo — texto editorial centrado ]
[ LeadRoutingPanel — componente animado em destaque ]
[ Arquitetura da Solução — 3 cards (Hub / SDR / Routing) ]
[ DoresGrid — 4 cards interativos ]
[ CronogramaTimeline — 3 fases ]
[ VisaoFuturoSection — 2 pilares de longo prazo ]
[ Investimento / Próximos passos — bloco final ]
[ Footer Fluxrow existente ]
[ MagneticCTA — fixed bottom-right ]
```

## Fora do escopo

- Não conecta gateway de pagamento, não cria registro em banco, não envia e-mail.
- Não altera demais páginas/propostas existentes.
- Não cria botão de aprovação com assinatura digital (apenas WhatsApp CTA).

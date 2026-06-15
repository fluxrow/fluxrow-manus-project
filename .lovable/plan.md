
# Proposta Estratégica Evolder · Fluxrow

Landing page interativa, padrão Fluxrow (dark `#080807`, Instrument Serif + DM Mono), em `/propostas/evolder`, `noindex,nofollow`, CTA WhatsApp Fluxrow `+55 41 99236-1868`. Paleta de destaque será extraída da imagem de ID visual da Evolder assim que você enviar (placeholder por enquanto: azul/verde "energy" + neutro escuro).

## Estrutura da página

1. **Hero** — "Proposta exclusiva · Evolder", headline serif, badge animado, CTA âncora.
2. **Contexto / Diagnóstico** — leitura rápida do site atual (`evolderenergy.com.br`): ajustes de produtos + botão WhatsApp do vendedor Ericson (`+55 41 99841-4088`).
3. **Escopo 1 — Ajustes no Site** (R$ 1.000):
   - Inserção de produtos
   - Botões "Comprar / Falar com vendedor" → WhatsApp Ericson com mensagem pré-preenchida por produto
   - Otimizações básicas de UX e performance
4. **Escopo 2 — App de Assinatura de Manutenção** (R$ 6.000):
   - PF e PJ, planos recorrentes
   - Onboarding do assinante simples e intuitivo
   - Histórico de manutenções e agendamento
   - Área admin: assinantes, planos, cobranças, agenda técnica, status de visitas
5. **Mockup interativo do App** — componente em destaque com Framer Motion + GSAP:
   - Frame de celular animado, telas deslizando (Onboarding → Plano → Pagamento → Agenda → Admin)
   - Cards flutuantes com micro-interações, parallax leve, ticker de planos
   - Usa as cores do ID visual da Evolder (após você enviar a imagem)
6. **Arquitetura técnica** (linguagem acessível ao Ericson):
   - Stack: React Native / Expo, backend gerenciado, autenticação, pagamentos recorrentes, push notifications
   - Painel admin web
   - Diagrama leve "Assinante ↔ App ↔ Backend ↔ Admin"
7. **Infraestrutura e custos por conta da Evolder** (transparência total):
   - Banco de dados / backend gerenciado (mensal)
   - Gateway de pagamento (taxa por transação)
   - Conta Apple Developer (US$ 99/ano)
   - Conta Google Play (US$ 25 único)
   - Domínio, push, e-mails transacionais
   - Aviso explícito: **custos de infraestrutura, lojas e gateway são de responsabilidade da Evolder**, não da Fluxrow.
8. **Cronograma** — timeline animada:
   - Semana 0: Onboarding de descoberta (definição de layout, funcionalidades, fluxos) já incluso no fechamento
   - Semanas 1–8: Desenvolvimento, revisões e homologação
   - Entrega: mínimo 2 meses
9. **Investimento** — dois cards:
   - **Site** — R$ 1.000 (taxa única)
   - **App** — R$ 6.000 (taxa única, 2 meses de desenvolvimento)
   - Nota: assinatura de sustentação/evolução pode ser proposta depois (não incluído agora).
10. **Próximos passos + CTA magnético** "Aceitar Proposta e Iniciar Onboarding" → WhatsApp Fluxrow.

## Arquivos a criar

- `src/data/propostaEvolder.ts` — conteúdo tipado (escopos, custos infra, cronograma, mockup screens).
- `src/pages/PropostaEvolder.tsx` — página com SEO `noindex`.
- `src/components/evolder/HeroEvolder.tsx`
- `src/components/evolder/EscopoSite.tsx`
- `src/components/evolder/EscopoApp.tsx`
- `src/components/evolder/AppMockup.tsx` — celular animado (Framer Motion + GSAP timeline com telas trocando, cards flutuando, gradient subtil das cores Evolder).
- `src/components/evolder/ArquiteturaTecnica.tsx`
- `src/components/evolder/InfraCustos.tsx` — cards "por conta da Evolder".
- `src/components/evolder/CronogramaEvolder.tsx`
- `src/components/evolder/InvestimentoEvolder.tsx`
- `src/components/evolder/CTAEvolderMagnetic.tsx`

## Alterações

- `src/App.tsx` — rota lazy `/propostas/evolder`.
- `src/data/propostas.ts` — entrada no dashboard interno (PIN 2907).
- `gsap` será instalado (Framer Motion já existe).

## Pendências (vou aplicar quando você enviar)

- Imagem do ID visual / cores hex da Evolder → aplico em `--evolder-primary` e gradientes do mockup.
- Mockup de referência → uso só como inspiração de telas (você disse pra ignorar o visual horrível e usar só as cores).

## Fora do escopo

- Pagamento real, banco de dados, e-mail, assinatura digital — só CTA WhatsApp.
- Implementação do app/site em si (esta entrega é só a proposta).

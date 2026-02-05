

# Proposta Teresópolis Shopping - Central de IA Multicanal

## Visão Geral

Uma proposta completa e impactante para a **Ingrid Bosi** do **Teresópolis Shopping**, focando em resolver problemas reais e tangíveis, com precificação baseada em **valor entregue** (problemas resolvidos) em vez de quantidade de atendimentos.

---

## Sistemas de Integração Identificados

| Sistema | Nome Correto | Função |
|---------|--------------|--------|
| Group Shopping | **Group Shopping** (Group Software) | Gestão financeira, contratos, cobrança |
| BeMall CRM | **BeMall CRM** (Be Sistemas) | CRM para shoppings, marketing, portal lojista |
| Com21 | **COM21 Online** (Group Software) | App de gestão condominial |

---

## Estrutura da Proposta (Componentizada)

### Arquivos a Criar

| Arquivo | Descrição |
|---------|-----------|
| `src/pages/PropostaTeresopolis.tsx` | Página principal |
| `src/components/teresopolis/ProblemSection.tsx` | Problemas destrinchados (8 cards) |
| `src/components/teresopolis/SolutionSection.tsx` | Soluções destrinchadas (8 cards) |
| `src/components/teresopolis/ChannelsSection.tsx` | Canais integrados (WhatsApp, Insta, FB, Email) |
| `src/components/teresopolis/ScopeB2CSection.tsx` | Escopo detalhado para clientes |
| `src/components/teresopolis/ScopeB2BSection.tsx` | Escopo detalhado para lojistas |
| `src/components/teresopolis/IntelligenceSection.tsx` | Índices de comportamento e analytics |
| `src/components/teresopolis/IntegrationsSection.tsx` | Group Shopping + BeMall CRM |
| `src/components/teresopolis/GamificationSection.tsx` | Sistema de pontos para lojistas |
| `src/components/teresopolis/PlansSection.tsx` | 3 planos por valor entregue |
| `src/components/teresopolis/TimelineSection.tsx` | Cronograma 4-5 semanas |
| `src/components/teresopolis/FAQSection.tsx` | Perguntas frequentes |
| `src/components/teresopolis/LowRiskSection.tsx` | Por que o risco é baixo |
| Modificar: `src/App.tsx` | Adicionar rota `/proposta-teresopolis` |

---

## Conteúdo Detalhado das Seções

### 1. Header
```
Olá, Ingrid!
Proposta para Teresópolis Shopping
Central de IA Multicanal para Atendimento e Relacionamento
```

### 2. OS PROBLEMAS (ProblemSection) - 8 Cards Impactantes

| Ícone | Título | Descrição | Impacto |
|-------|--------|-----------|---------|
| Clock | Tempo perdido com perguntas repetitivas | "Qual horário?", "Onde fica a loja X?" consomem horas da recepção | -40% produtividade |
| Users | Atendimento centralizado na recepção | Um único ponto de contato para todo o shopping | Gargalo crítico |
| MessageSquare | Respostas não padronizadas | Cada pessoa responde de um jeito diferente | Experiência inconsistente |
| Clock | Demora no tempo de resposta | Clientes aguardando por informações básicas | Perda de satisfação |
| AlertTriangle | Sem visibilidade sobre demandas | Não sabe quais são as maiores dúvidas | Decisões no escuro |
| Database | Dados de clientes perdidos | Não captura informações de quem entra em contato | Base zero para campanhas |
| Shuffle | Canais fragmentados | WhatsApp, Instagram, Facebook separados | Esforço multiplicado |
| Building | Lojistas sem canal eficiente | Comunicação interna fragmentada | Retrabalho constante |

### 3. AS SOLUÇÕES (SolutionSection) - 8 Cards Destrinchados

| Ícone | Título | Descrição |
|-------|--------|-----------|
| Bot | IA responde 24/7 | Atendimento automático para dúvidas comuns, qualquer hora |
| Zap | Respostas em <5 segundos | Cliente pergunta, IA responde instantaneamente |
| MessageCircle | Linguagem adaptada | Tom conservador e claro para o público do shopping |
| GitMerge | Todos os canais unificados | WhatsApp + Instagram + Facebook + Email em uma só tela |
| Filter | Triagem inteligente | IA identifica casos que precisam de humano e direciona |
| BarChart3 | Dashboard de insights | Veja as maiores demandas, horários de pico, satisfação |
| UserPlus | Captura automática de dados | Forma base de clientes para campanhas futuras |
| Building | Portal do Lojista integrado | Canal exclusivo para comunicação B2B |

### 4. CANAIS INTEGRADOS (ChannelsSection)

Visual com 4 cards mostrando os canais:

```
[WhatsApp]     [Instagram]     [Facebook]     [Email]
   |               |               |             |
   +--------------+---------------+-------------+
                         |
              [Central de IA Unificada]
                         |
        +----------------+----------------+
        |                |                |
  [Dashboard]      [Humano]        [Sistemas]
   Analytics      Quando preciso    BeMall/Group
```

**Cada canal com especificações:**
- **WhatsApp**: Número virtual, respostas automáticas, catálogo de lojas
- **Instagram Direct**: Respostas a DMs, link para WhatsApp
- **Facebook Messenger**: Atendimento automatizado, FAQ integrado
- **Email**: Respostas contextuais, encaminhamento para setores

### 5. ESCOPO B2C - Clientes Finais (ScopeB2CSection)

| Categoria | Exemplos de Perguntas |
|-----------|----------------------|
| Horários | "Que horas abre?", "Funciona no feriado?" |
| Lojas | "Tem loja da X?", "Onde fica a loja Y?" |
| Serviços | "Tem wifi?", "Onde fica o banheiro?" |
| Estacionamento | "Quanto custa?", "Aceita cartão?" |
| Eventos | "Tem cinema?", "Qual filme está passando?" |
| Promoções | "Tem promoção hoje?", "Como participo?" |
| Localização | "Como chego aí?", "Qual o endereço?" |
| Achados e Perdidos | "Perdi minha carteira", "Onde procuro?" |

### 6. ESCOPO B2B - Lojistas (ScopeB2BSection)

| Categoria | Exemplos |
|-----------|----------|
| Comunicados | Circulares, avisos importantes |
| Solicitações | Manutenção, limpeza, segurança |
| Achados e Perdidos | Registro e consulta |
| Financeiro | Boletos, datas de pagamento |
| Eventos | Calendário, participação |
| Normas | Regras do shopping, horários de carga |

### 7. INTELIGÊNCIA E ANALYTICS (IntelligenceSection)

| Métrica | Descrição | Uso |
|---------|-----------|-----|
| Top 10 Perguntas | Quais dúvidas mais aparecem | Identificar gaps de comunicação |
| Horários de Pico | Quando mais atendimentos acontecem | Dimensionar equipe humana |
| Taxa de Resolução | % resolvido pela IA vs humano | Medir eficiência |
| Transferências por Setor | Quais setores recebem mais demandas | Otimizar estrutura |
| Tempo Médio de Resposta | Velocidade de atendimento | SLA |
| Satisfação (NPS) | Nota do cliente após atendimento | Qualidade |
| Canais mais usados | WhatsApp vs Insta vs FB | Foco de investimento |

**"Fishing" de Dados:**
- Nome e telefone capturados
- Lojas de interesse identificadas
- Preferências mapeadas
- Base para campanhas de marketing

### 8. INTEGRAÇÕES (IntegrationsSection)

| Sistema | Função | Possibilidades |
|---------|--------|----------------|
| **Group Shopping** | Gestão financeira | Consulta de boletos, status de contratos |
| **BeMall CRM** | CRM de marketing | Sincronizar dados de clientes, promoções |
| **COM21 Online** | App de gestão | Integração com portal do lojista |

### 9. GAMIFICAÇÃO PARA LOJISTAS (GamificationSection)

**Como funciona:**
- Cada interação gera pontos (responder solicitação, enviar vendas, etc.)
- Lojistas com mais pontos aparecem em destaque no site/app do shopping
- Ranking mensal com prêmios ou benefícios
- "Loja do Mês" escolhida pelo engajamento
- Indicações inteligentes: "Procurando X? Veja a loja Y que responde rápido!"

### 10. PLANOS DE INVESTIMENTO (PlansSection) - VALORES ATUALIZADOS

**Modelo: Valor por Problemas Resolvidos**

| Plano | Nome | Valor Mensal | Implementação | O Que Resolve |
|-------|------|--------------|---------------|---------------|
| **Essencial** | Atendimento Básico | R$ 1.800/mês | R$ 1.500 | Automação B2C (WhatsApp + 1 canal adicional) |
| **Profissional** | Multicanal Completo | **R$ 3.400/mês** | **R$ 3.000** | B2C + B2B + Todos os canais + Analytics básico |
| **Enterprise** | Inteligência Total | R$ 4.200/mês | R$ 4.000 | Tudo + Integrações + Gamificação + BI avançado |

**Detalhamento dos Planos:**

**Essencial - R$ 1.800/mês** (Implementação: R$ 1.500)
- WhatsApp + 1 canal adicional (Insta OU Facebook)
- IA treinada com FAQ do shopping
- Respostas automáticas B2C
- Dashboard básico
- Suporte por email
- Ideal para: Começar a automatizar

**Profissional - R$ 3.400/mês** (Implementação: R$ 3.000)
- Todos os canais (WhatsApp + Insta + FB + Email)
- IA para B2C + B2B (lojistas)
- Triagem inteligente para setores
- Dashboard de analytics
- Captura de dados de clientes
- Suporte prioritário
- Ideal para: Operação completa

**Enterprise - R$ 4.200/mês** (Implementação: R$ 4.000)
- Tudo do Profissional +
- Integrações com Group Shopping / BeMall
- Sistema de gamificação para lojistas
- BI avançado com insights de comportamento
- Reuniões mensais de otimização
- Suporte premium (WhatsApp direto)
- Ideal para: Transformação digital completa

### 11. TIMELINE DE IMPLEMENTAÇÃO (TimelineSection)

| Semana | Fase | Entregas |
|--------|------|----------|
| 1 | Descoberta | Mapeamento de FAQs, coleta de informações, definição de tom de voz |
| 2 | Configuração | Setup dos canais, treinamento da IA, integração inicial |
| 3 | Testes | Ambiente de testes com equipe do shopping, ajustes finos |
| 4 | Go-Live | Lançamento oficial B2C |
| 5* | B2B | Lançamento do canal para lojistas (se aplicável) |

### 12. POR QUE O RISCO É BAIXO (LowRiskSection)

| Argumento | Descrição |
|-----------|-----------|
| V1 Simples | Começamos com atendimento informativo, sem transações complexas |
| Sem Integração Inicial | Primeira versão não depende de APIs externas |
| Investimento Acessível | A partir de R$ 60/dia |
| Escalamento Gradual | Comece no Essencial, migre para Enterprise depois |
| IA Complementa | Não substitui humanos, libera para tarefas complexas |
| Prazo Curto | 4 semanas para primeira entrega |
| Resultados Visíveis | Dashboard mostra economia desde o primeiro dia |

### 13. FAQ (FAQSection)

- "E se a IA não souber responder?"
- "Preciso mudar meu número de WhatsApp?"
- "Como atualizo as informações do shopping?"
- "Posso ver as conversas que a IA teve?"
- "E se quiser cancelar?"
- "Como funciona a integração com nossos sistemas?"
- "O sistema funciona 24h mesmo?"
- "Como os lojistas acessam a plataforma?"

### 14. CTA FINAL

```
Vamos Começar?
[Falar no WhatsApp]
```

---

## Tema Visual

**Paleta:** Azul + Teal (modernidade, confiança, varejo)

```
Background: from-slate-900 via-blue-950 to-black
Accent primário: blue-500, blue-400
Accent secundário: teal-500, emerald-400
Cards problemas: red-500/20 border
Cards soluções: emerald-500/20 border
```

---

## Resumo de Arquivos

| Ação | Arquivo |
|------|---------|
| Criar | `src/pages/PropostaTeresopolis.tsx` |
| Criar | `src/components/teresopolis/ProblemSection.tsx` |
| Criar | `src/components/teresopolis/SolutionSection.tsx` |
| Criar | `src/components/teresopolis/ChannelsSection.tsx` |
| Criar | `src/components/teresopolis/ScopeB2CSection.tsx` |
| Criar | `src/components/teresopolis/ScopeB2BSection.tsx` |
| Criar | `src/components/teresopolis/IntelligenceSection.tsx` |
| Criar | `src/components/teresopolis/IntegrationsSection.tsx` |
| Criar | `src/components/teresopolis/GamificationSection.tsx` |
| Criar | `src/components/teresopolis/PlansSection.tsx` |
| Criar | `src/components/teresopolis/TimelineSection.tsx` |
| Criar | `src/components/teresopolis/LowRiskSection.tsx` |
| Criar | `src/components/teresopolis/FAQSection.tsx` |
| Modificar | `src/App.tsx` |

**Total: 13 arquivos novos + 1 modificação**


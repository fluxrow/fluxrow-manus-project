

# Plano Atualizado: Proposta Evolua Digital - Modelos de Contrato

## Stack Real da Consultoria (Ajustado)

Com base nas suas respostas, a stack real que será ensinada:

| Categoria | Ferramentas |
|-----------|-------------|
| **WhatsApp** | API Oficial Meta + API não-oficial (Evolution/similar) |
| **Automação** | Plataforma low-code + Stack React/Edge Functions |
| **Backend** | Supabase (PostgreSQL, Auth, Edge Functions) |
| **IA** | OpenAI API (qualificação e respostas) |
| **Email** | Resend (campanhas e transacional) |
| **Dados** | Importação de CSV + conexão com outras APIs |

---

## MODELO 1: SUCCESS FEE (sem alterações)

| Componente | Valor |
|------------|-------|
| Setup | R$ 5.000 (único) |
| Mensalidade Base | R$ 8.000/mês |
| Fee de Sucesso | 1.5% por contrato fechado |

**Pacotes de Volume:**
- Starter (~112k msg): R$ 8.000/mês
- Professional (~262k msg): R$ 12.000/mês
- Enterprise (~412k msg): R$ 16.000/mês

---

## MODELO 2: CONSULTORIA TÉCNICA (Revisado)

### Estrutura do Programa - 3 Meses

| Mês | Foco | Horas |
|-----|------|-------|
| **Mês 1** | Fundamentos + Backend | 16-24h |
| **Mês 2** | WhatsApp + Automação | 16-24h |
| **Mês 3** | IA + Interface + Go-live | 16-24h |

**Total: 48-72 horas de sessões ao vivo**

### Formato

- 2 sessões por semana
- 2-3 horas por sessão
- Chamada de vídeo com compartilhamento de tela
- Até 3 participantes da equipe técnica

### Cronograma Detalhado

```text
+----------------------------------------------------------------+
|                        MÊS 1: FUNDAMENTOS                       |
+----------------------------------------------------------------+
| Semana 1-2: BANCO DE DADOS                                      |
|   • PostgreSQL/SQL avançado                                     |
|   • Modelagem de dados para CRM e prospecção                   |
|   • Migrations e versionamento                                  |
|   • Estrutura de tabelas para leads e campanhas                |
+----------------------------------------------------------------+
| Semana 3-4: BACKEND                                             |
|   • Edge Functions (TypeScript/Deno)                            |
|   • APIs REST e webhooks                                        |
|   • Autenticação e segurança                                    |
|   • Filas e processamento assíncrono                           |
+----------------------------------------------------------------+

+----------------------------------------------------------------+
|                   MÊS 2: WHATSAPP + AUTOMAÇÃO                   |
+----------------------------------------------------------------+
| Semana 5-6: WHATSAPP E META                                     |
|   • WhatsApp Business API (oficial)                             |
|   • Verificação e aprovação Meta Business                       |
|   • APIs não-oficiais e contingência                           |
|   • Sistema de rotação de números                               |
|   • Limites, compliance e anti-bloqueio                        |
+----------------------------------------------------------------+
| Semana 7-8: AUTOMAÇÃO E INTEGRAÇÕES                             |
|   • Fluxos automatizados com low-code + Edge Functions         |
|   • Conexão com APIs externas (CRMs, ERPs)                     |
|   • Importação e processamento de CSV/bases                     |
|   • Chaves de API e segurança de credenciais                   |
|   • Monitoramento e tratamento de erros                        |
+----------------------------------------------------------------+

+----------------------------------------------------------------+
|                     MÊS 3: IA + INTERFACE                       |
+----------------------------------------------------------------+
| Semana 9-10: INTELIGÊNCIA ARTIFICIAL                           |
|   • OpenAI API (GPT para qualificação)                         |
|   • Prompt engineering para vendas                              |
|   • Contexto e memória de conversas                            |
|   • Otimização de custos de tokens                             |
+----------------------------------------------------------------+
| Semana 11-12: FRONTEND + GO-LIVE                               |
|   • Dashboard React/TypeScript                                  |
|   • Interface de operação                                       |
|   • Gráficos e métricas (Recharts)                             |
|   • Testes finais e go-live                                    |
|   • Email marketing com Resend                                  |
+----------------------------------------------------------------+
```

### O Que NÃO Está na Proposta (interno)

- Não mencionamos "Lovable" - falamos "plataforma low-code + stack React"
- Não mencionamos "n8n/Make" - focamos em "automação com Edge Functions"
- Deixamos claro que usam ferramentas modernas e flexíveis

### Entregáveis

1. **Documentação Técnica Completa**
   - Arquitetura do sistema
   - Diagramas de fluxo de disparo
   - Guias passo-a-passo

2. **Templates e Código Base**
   - Estrutura de banco pronta
   - Componentes frontend reutilizáveis
   - Prompts de IA otimizados
   - Scripts de importação CSV

3. **Gravações das Sessões**
   - Para consulta futura
   - Onboarding de novos devs

4. **Suporte Durante o Período**
   - Canal direto WhatsApp
   - Resposta em até 24h

### Preços

| Componente | Valor |
|------------|-------|
| Programa Completo (3 meses) | R$ 25.000 |
| Suporte Pós-Implementação (opcional) | R$ 3.000/mês |

**Parcelamento:**
- 40% na assinatura (R$ 10.000)
- 30% no início do mês 2 (R$ 7.500)
- 30% na entrega final (R$ 7.500)

---

## Mudanças no Arquivo

### `src/pages/PropostaEvoluaDigital.tsx`

A página será completamente refatorada para mostrar:

1. **Header** - Saudação personalizada
2. **Contexto** - "Após nossa conversa, duas opções flexíveis"
3. **Card Success Fee** - Badge "Preferido pela Diretoria"
   - Mensalidade R$ 8.000 + 1.5% fee
   - 3 pacotes de volume
4. **Card Consultoria** - Badge "Independência Total"
   - R$ 25.000 em 3 meses
   - Cronograma visual
5. **Comparativo** - Tabela lado a lado
6. **Detalhes Success Fee** - Pacotes expandíveis
7. **Detalhes Consultoria** - Cronograma + stack
8. **FAQ** - Dúvidas comuns
9. **CTA** - Agendar conversa

### Visual dos Cards

```text
┌──────────────────────────────┐     ┌──────────────────────────────┐
│      SUCCESS FEE             │     │     CONSULTORIA              │
│  ★ Preferido pela Diretoria  │     │   ⚡ Independência Total     │
├──────────────────────────────┤     ├──────────────────────────────┤
│  R$ 8.000/mês                │     │  R$ 25.000                   │
│  + 1.5% por contrato         │     │  (programa de 3 meses)       │
│                              │     │                              │
│  ✓ Nós operamos tudo         │     │  ✓ 48-72h de sessões         │
│  ✓ Vocês focam em vender     │     │  ✓ Stack completa            │
│  ✓ Zero risco técnico        │     │  ✓ Documentação + gravações  │
│  ✓ 3 pacotes de volume       │     │  ✓ Suporte durante período   │
└──────────────────────────────┘     └──────────────────────────────┘
```

### Stack Apresentada na Proposta

```text
┌─────────────────────────────────────────────────────┐
│              STACK TÉCNICA                          │
├─────────────────────────────────────────────────────┤
│ ▸ Banco de Dados: PostgreSQL                        │
│ ▸ Backend: Edge Functions (TypeScript)             │
│ ▸ Frontend: React + TypeScript                     │
│ ▸ Automação: Low-code + Funções serverless         │
│ ▸ WhatsApp: API Oficial + Não-oficial              │
│ ▸ IA: OpenAI API                                   │
│ ▸ Email: Resend                                    │
│ ▸ Dados: CSV, APIs externas, CRMs                  │
└─────────────────────────────────────────────────────┘
```

---

## Resumo das Alterações

| Item | Antes | Depois |
|------|-------|--------|
| Automação | n8n/Make | "Low-code + Edge Functions" |
| WhatsApp | Genérico | "API Oficial + Não-oficial" |
| Integrações | Não detalhado | "CSV, APIs, CRMs" |
| Duração | 4-6 semanas | 3 meses (12 semanas) |
| Horas | 24-36h | 48-72h |
| Formato | 2x/semana 2-3h | Mantido |


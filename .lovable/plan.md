
# Proposta Comunica - Sistema Gestão de Boletos + NF

## Resumo do Projeto

Criar uma proposta completa para a **Comunica** baseada no template da Evolua Digital, adaptando todo o conteúdo para um **Sistema Web de Gestão de Boletos + NF** com:
- Automação de envio por WhatsApp e e-mail
- Validações robustas (CNPJ + confronto de valores + detecção de parcelamento)
- Sistema RBAC (Admin, Operador, Financeiro, Cliente)
- Extração inteligente via IA/OCR

---

## Arquivos a Criar

### 1. Página Principal
**`src/pages/PropostaComunica.tsx`**

Estrutura baseada na Evolua Digital com seções adaptadas:
- Header personalizado para "Comunica"
- Seções de componentes específicos
- FAQ atualizado para o contexto de boletos/NF
- CTA final com WhatsApp

### 2. Componentes de Seção
**Pasta: `src/components/comunica/`**

| Arquivo | Descrição |
|---------|-----------|
| `ProblemSection.tsx` | Dores do financeiro manual |
| `SolutionSection.tsx` | Funcionalidades do sistema |
| `ModulesSection.tsx` | Módulos detalhados do sistema |
| `ValidationSection.tsx` | Processo de validação NF x Boleto |
| `PlansSection.tsx` | Pacotes Start, Growth, Pro, Scale |
| `FeaturesSection.tsx` | O que está incluso em todos os planos |
| `LowRiskSection.tsx` | Argumentos de baixo risco |
| `TechStackSection.tsx` | Stack técnica e integrações |
| `FAQSection.tsx` | Perguntas frequentes específicas |

### 3. Rota no App.tsx
Adicionar: `/propostas/comunica`

---

## Detalhamento das Seções

### Header
- Badge: "Proposta Comercial"
- Título: "Olá, [Nome]! 👋"
- Subtítulo: "Sistema Gestão de Boletos + NF para Comunica"
- Descrição: "Automatize o envio de boletos e notas fiscais com validações inteligentes"
- Tema de cores: **Azul/Cyan** (diferente do roxo da Evolua)

### ProblemSection - "Os Desafios do Financeiro"

```text
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│  Envio Manual   │  Erros Humanos  │  Sem Rastreio   │  Tempo Perdido  │
│  Demorado       │  de Validação   │  de Entregas    │  com Conferência│
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

4 cards com ícones:
1. **Envio manual é lento** - "Horas gastas enviando boletos um a um por WhatsApp ou e-mail"
2. **Erros de CNPJ/valores** - "NF enviada para cliente errado ou com valor divergente"
3. **Sem controle de entregas** - "Não sabe se o cliente recebeu, abriu ou viu"
4. **Tempo perdido conferindo** - "Validação manual de XML, PDF, valores e CNPJ"

### SolutionSection - "A Solução Inteligente"

4 cards:
1. **Validação automática** - "IA extrai e valida CNPJ, valores e confronta NF x Boleto"
2. **Envio em massa** - "WhatsApp + e-mail simultâneos com templates prontos"
3. **Detecção de parcelamento** - "Sistema identifica e agrupa parcelas automaticamente"
4. **Dashboard completo** - "Acompanhe status de envios, aberturas e confirmações"

### ModulesSection - "Módulos do Sistema"

Timeline visual com 5 módulos:

**Módulo 1 - Login + RBAC**
- 4 perfis: Admin, Operador, Financeiro, Cliente
- Permissões granulares por função
- Auto-cadastro de clientes via link público

**Módulo 2 - Gestão de Clientes**
- Listagem e busca por CNPJ/razão social
- Cadastro manual ou importação CSV
- Validações: CNPJ, WhatsApp internacional, e-mail
- Campos: razão social, nome fantasia, CNPJ, email_financeiro, whatsapp

**Módulo 3 - Envio de Boleto + NF**
- Upload de Boleto PDF (obrigatório)
- Upload de NF (XML e/ou PDF) opcional
- Extração automática via IA/OCR
- Validação de CNPJ + confronto de valores

**Módulo 4 - Validações Inteligentes**
- Extração do Boleto: valor, vencimento, linha digitável, pagador
- Extração da NF: chave de acesso, número, série, valor total
- Confronto: MATCH_TOTAL, MATCH_PARCEL ou MISMATCH
- Detecção de parcelamento automática

**Módulo 5 - Fila de Envios**
- Fila de mensagens WhatsApp + e-mail
- Status: queued, sent, failed
- Anexos ou links seguros para download
- Retry automático em caso de falha

### ValidationSection - "Validações Robustas"

Diagrama visual do fluxo:

```text
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Upload    │ -> │  Extração   │ -> │  Validação  │
│  Boleto/NF  │    │   IA/OCR    │    │   CNPJ      │
└─────────────┘    └─────────────┘    └─────────────┘
                                            │
                                            v
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│    Envio    │ <- │  Decisão    │ <- │  Confronto  │
│  Automático │    │  Auto/Manual│    │   Valores   │
└─────────────┘    └─────────────┘    └─────────────┘
```

Cards explicativos:
1. **Validação CNPJ** - NF e Boleto são verificados contra o CNPJ informado
2. **Confronto de Valores** - Tolerância de 0.1% ou R$ 0,50 (o que for maior)
3. **Detecção de Parcelamento** - Agrupa boletos pela chave de acesso da NF
4. **Status de Parcelamento** - Em aberto, Completo ou Estouro (manual review)
5. **Envio Automático** - Só quando validações passam; caso contrário, revisão manual
6. **Auditoria Completa** - Todo o histórico de uploads, validações e envios

### PlansSection - "Pacotes de Envio"

4 cards lado a lado:

```text
┌──────────────┬──────────────┬──────────────┬──────────────┐
│    START     │    GROWTH    │     PRO      │    SCALE     │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  R$ 450/mês  │  R$ 650/mês  │  R$ 850/mês  │  R$ 950/mês  │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  Até 250     │  251 a 500   │  501 a 750   │  751 a 1000  │
│  NF/mês      │  NF/mês      │  NF/mês      │  NF/mês      │
├──────────────┼──────────────┼──────────────┼──────────────┤
│  Ideal para  │  Volume      │  Operação    │  Grande      │
│  começar     │  constante   │  crítica     │  escala      │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

Highlight: "Upgrade disponível a qualquer momento"

### FeaturesSection - "Incluso em Todos os Planos"

Grid de features:
- Envio de NF (PDF/XML) + boleto
- Validação de CNPJ automática
- Confronto NF x boleto
- Detecção de parcelamento
- WhatsApp + e-mail simultâneos
- Histórico e auditoria completa
- Dashboard de acompanhamento
- Suporte técnico incluso

### LowRiskSection - "Por Que o Risco é Baixo"

6 cards adaptados:
1. **Implementação Rápida** - Sistema pronto em dias, não meses
2. **Sem Lock-in** - Contratação mensal, cancele quando quiser
3. **Validações Evitam Erros** - Menos retrabalho e reclamações
4. **ROI Imediato** - Economia de horas da equipe desde o primeiro dia
5. **Escalável** - Upgrade de plano a qualquer momento
6. **Suporte Incluso** - Ajuda sempre que precisar

Destaque: "Menos de R$ 15/dia para automatizar todo o financeiro"

### TechStackSection - "Tecnologia e Integrações"

Cards com integrações configuráveis:
- Provedor WhatsApp (endpoint + token)
- Provedor e-mail (SMTP/API)
- Storage de arquivos (links seguros)
- IA para extração (OCR + parsing)

### FAQ Específico

1. **Quantas NF posso enviar por mês?** - Depende do plano (250 a 1000)
2. **Funciona com boletos parcelados?** - Sim, detecta automaticamente
3. **E se a validação falhar?** - Vai para revisão manual do Financeiro/Admin
4. **Posso enviar só boleto, sem NF?** - Sim, NF é opcional
5. **Como funciona a detecção de parcelamento?** - Agrupa boletos pela chave de acesso da NF
6. **Quais formatos de NF são aceitos?** - PDF e XML; XML é mais preciso

---

## Estrutura de Cores

Diferenciação visual da proposta Evolua:

| Proposta | Cor Principal | Cor Secundária |
|----------|---------------|----------------|
| Evolua Digital | Roxo/Fuchsia | Emerald/Teal |
| Comunica | **Azul/Cyan** | Emerald/Teal |

Gradientes:
- Background: `from-slate-900 via-blue-950 to-black`
- Efeitos: `from-blue-600/40 to-cyan-600/40`
- Highlights: `from-cyan-500 to-blue-500`

---

## Modificações no App.tsx

Adicionar import e rota:

```tsx
import PropostaComunica from "./pages/PropostaComunica";

// Na seção de rotas:
<Route path="/propostas/comunica" element={<PropostaComunica />} />
```

---

## Resumo dos Arquivos

### A Criar (10 arquivos)

| Arquivo | Caminho |
|---------|---------|
| PropostaComunica.tsx | `src/pages/` |
| ProblemSection.tsx | `src/components/comunica/` |
| SolutionSection.tsx | `src/components/comunica/` |
| ModulesSection.tsx | `src/components/comunica/` |
| ValidationSection.tsx | `src/components/comunica/` |
| PlansSection.tsx | `src/components/comunica/` |
| FeaturesSection.tsx | `src/components/comunica/` |
| LowRiskSection.tsx | `src/components/comunica/` |
| TechStackSection.tsx | `src/components/comunica/` |
| FAQSection.tsx | `src/components/comunica/` |

### A Modificar (1 arquivo)

| Arquivo | Modificação |
|---------|-------------|
| App.tsx | Adicionar import e rota `/propostas/comunica` |

---

## Fluxo Visual da Proposta

```text
1. Header → Apresentação personalizada
2. ProblemSection → 4 dores do financeiro manual
3. SolutionSection → 4 funcionalidades principais
4. ModulesSection → 5 módulos detalhados
5. ValidationSection → Fluxo de validação visual
6. PlansSection → 4 planos de preço
7. FeaturesSection → O que está incluso
8. LowRiskSection → Argumentos de baixo risco
9. TechStackSection → Integrações configuráveis
10. FAQSection → 6 perguntas frequentes
11. CTA → Botão WhatsApp para contato
12. Footer → Validade e exclusividade
```

---

## Dados Técnicos para Implementação

### Planos (array para PlansSection)

```tsx
const plans = [
  {
    name: "Start",
    price: "450",
    nfLimit: "250",
    description: "Ideal para começar a automatizar",
    borderColor: "border-emerald-500/40",
    bgColor: "from-emerald-900/20",
    iconColor: "text-emerald-400"
  },
  {
    name: "Growth",
    price: "650",
    nfLimit: "500",
    description: "Para volume constante",
    borderColor: "border-blue-500/40",
    bgColor: "from-blue-900/20",
    iconColor: "text-blue-400"
  },
  {
    name: "Pro",
    price: "850",
    nfLimit: "750",
    description: "Operação crítica",
    borderColor: "border-purple-500/40",
    bgColor: "from-purple-900/20",
    iconColor: "text-purple-400"
  },
  {
    name: "Scale",
    price: "950",
    nfLimit: "1000",
    description: "Grande escala",
    borderColor: "border-cyan-500/40",
    bgColor: "from-cyan-900/20",
    iconColor: "text-cyan-400"
  }
];
```

### Ícones Principais

| Contexto | Ícone |
|----------|-------|
| Boleto | FileText |
| NF | Receipt |
| WhatsApp | MessageCircle |
| E-mail | Mail |
| Validação | ShieldCheck |
| Parcelamento | Layers |
| Dashboard | BarChart3 |
| Cliente | Users |
| Upload | Upload |
| Extração | Scan |

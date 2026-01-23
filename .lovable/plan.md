
# Plano de Ajuste - Proposta Promotrip

## Objetivo
Reformular a proposta para focar exclusivamente na **Promotrip Corporate** com valor de **R$ 2.200/mês**, removendo a divisão entre 3 agências e adicionando o módulo Orbit como funcionalidade extra futura.

---

## Mudanças Estruturais

### 1. Header e Introdução
- Manter saudação ao Augusto
- Atualizar descrição para focar em "prospecção B2B com base própria de contatos"

### 2. Seção "As 3 Frentes" - REMOVER/SUBSTITUIR
**Remover completamente:**
- Card Promotrip Lazer
- Card Promotrip Goiânia
- Seção especial do Evandro & Arquitetura

**Substituir por:** Seção "Foco Inicial: Promotrip Corporate"
- Destacar operação B2B do Alexandre
- Enfatizar base de ~3.000 contatos em CSV
- Personalização de mensagens por setor
- Disparos segmentados WhatsApp + Email

### 3. Seção "Módulos do Sistema" - ATUALIZAR
**Remover:**
- "3 Agentes de IA Especializados" → mudar para "1 Agente de IA Especializado"
- Referências a múltiplas frentes

**Manter:**
- Disparos WhatsApp (Z-API)
- Email Marketing Integrado
- Integração com Planilhas (DESTACAR CSV de 3.000 contatos)
- Dashboard de Controle
- Avisos Inteligentes de Follow-up

**Adicionar novo módulo:**
- "Personalização por Setor" - mensagens customizadas por segmento da empresa

### 4. Seção "Agentes de IA nas Redes Sociais"
- Manter mas simplificar
- Remover referência "Corporate, Lazer e Goiânia - cada um com seu painel"

### 5. Seção "Investimento" - ATUALIZAR
**Alterar valor:**
- De R$ 3.200/mês para **R$ 2.200/mês**

**Remover:**
- Grid de divisão por frente (Corporate, Lazer, Goiânia com R$ 1.067 cada)

**Manter:**
- Sem custo de implementação
- Setup completo incluso
- Treinamento incluso

### 6. NOVA SEÇÃO: Módulo Extra - Orbit
Adicionar após "Módulos do Sistema":

**Conteúdo:**
- Nome: "Orbit - Captura de Novos Leads"
- Descrição: Sistema de prospecção ativa para capturar leads qualificados
- Funcionalidades:
  - Filtros por CNAE
  - Filtro por tamanho da empresa
  - Captura de: nome, setor, telefone, email, LinkedIn
  - Integração automática com base de disparos

**Destaque:**
- Badge: "Módulo Extra - Ative Quando Quiser"
- Nota: "Disponível para ativação posterior mediante negociação"
- Não mostrar valor específico

### 7. Seção "Benefícios" - ATUALIZAR
**Remover/Atualizar:**
- "3 Agentes = 3 Vendedores 24/7" → "1 Agente IA = Vendedor 24/7"
- "R$ 1.067/frente" → Remover ou mudar para destacar valor único

### 8. Seção "Próximos Passos" - ATUALIZAR
- Ajustar descrições para focar na operação Corporate apenas
- Remover referências a múltiplas equipes

### 9. CTA Final - ATUALIZAR
- Manter estrutura mas ajustar texto
- Remover "3 agentes trabalhando 24/7"
- Focar em "operação B2B automatizada com sua base de contatos"

---

## Seções Técnicas

### Arquivo a modificar
`src/pages/PropostaPromotrip.tsx`

### Estrutura de dados a atualizar

```typescript
// REMOVER array frentes ou reduzir para apenas Corporate
const frentes = [
  // Manter apenas Corporate com foco em CSV
];

// ATUALIZAR modulos
const modulos = [
  // Atualizar "3 Agentes" para "1 Agente"
  // Adicionar módulo de personalização por setor
];

// ATUALIZAR beneficios
const beneficios = [
  // Remover referências a múltiplas frentes
  // Ajustar métricas para operação única
];

// ATUALIZAR proximosPassos
const proximosPassos = [
  // Simplificar para foco Corporate
];
```

### Nova seção Orbit (estrutura)
```typescript
// Card destacado com gradiente diferenciado
// Badge "Módulo Extra"
// Lista de funcionalidades
// Nota sobre ativação posterior
```

---

## Resultado Final Esperado

A proposta ficará focada em:

1. **Operação única:** Promotrip Corporate (Alexandre)
2. **Base própria:** ~3.000 contatos em CSV
3. **Disparos inteligentes:** WhatsApp + Email segmentados por setor
4. **Valor claro:** R$ 2.200/mês sem divisões
5. **Upsell preparado:** Módulo Orbit para expansão futura
6. **Funcionalidades mantidas:** Funil, relatórios, dashboard, agente IA

---

## Fluxo Visual da Nova Proposta

```text
+------------------------------------------+
|  HEADER - Proposta Promotrip Corporate   |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  QUEM SOMOS (manter como está)           |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  SISTEMA FLUXROW.PRO (manter/simplificar)|
+------------------------------------------+
           |
           v
+------------------------------------------+
|  FOCO INICIAL: PROMOTRIP CORPORATE       |
|  - Alexandre líder                       |
|  - Base CSV 3.000 contatos               |
|  - Segmentação por setor                 |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  MÓDULOS DO SISTEMA                      |
|  - WhatsApp Z-API                        |
|  - Email Marketing                       |
|  - Integração CSV                        |
|  - Personalização por Setor              |
|  - Dashboard                             |
|  - Agente IA (1)                         |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  MÓDULO ORBIT (EXTRA)                    |
|  "Ative quando quiser"                   |
|  - Captura leads: CNAE, tamanho, etc     |
|  - Negociação posterior                  |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  AGENTES IA REDES SOCIAIS (simplificar)  |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  AVISOS FOLLOW-UP (manter)               |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  CRIADOR PROPOSTAS (manter)              |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  INVESTIMENTO                            |
|  R$ 2.200/mês (valor único)              |
|  Sem custo implementação                 |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  ESCALE SEM LIMITES (manter/ajustar)     |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  POR QUE INVESTIR (ajustar benefícios)   |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  PRÓXIMOS PASSOS (simplificar)           |
+------------------------------------------+
           |
           v
+------------------------------------------+
|  CTA FINAL                               |
+------------------------------------------+
```

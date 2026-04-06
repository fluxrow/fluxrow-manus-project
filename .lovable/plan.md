

## Plano: Reestruturar Proposta Teresópolis Shopping (Pacote Inicial R$ 500/mês)

### Resumo

Transformar a proposta de 3 planos (R$ 1.800 a R$ 3.500/mês) em um pacote único inicial de **R$ 500/mês + R$ 2.500 de implementação**, focado no que realmente será entregue agora. O que não entra no pacote inicial fica visível como "upgrade futuro".

### O que muda na proposta

**Escopo do pacote inicial (R$ 500/mês):**
- Atendimento B2C via WhatsApp (canal principal)
- Sistema de atendimento telefônico com IA que atende ligações, responde perguntas e sugere continuar no WhatsApp, abrindo a conversa direto
- IA treinada com FAQ do shopping (horários, lojas, serviços, etc.)
- Fluxo B2B para lojistas: IA coleta a demanda do lojista e encaminha para o setor responsável dar andamento
- Dashboard básico de atendimentos

**O que fica como upgrade futuro (visível mas não incluso):**
- Instagram, Facebook e Email como canais adicionais
- Analytics avançado / BI com índices de comportamento
- Integrações com Group Shopping / BeMall / COM21
- Gamificação para lojistas
- Captura avançada de dados (data fishing)

### Arquivos que serão alterados

1. **`src/pages/PropostaTeresopolis.tsx`**
   - Atualizar Hero: trocar "Central de IA Multicanal" por foco em WhatsApp + Atendimento Telefônico
   - Remover tags de Instagram/Facebook/Email do hero
   - Remover seções que não fazem parte do pacote: `IntelligenceSection`, `IntegrationsSection`, `GamificationSection`
   - Manter `ScopeB2CSection` e `ScopeB2BSection` (com ajustes)

2. **`src/components/teresopolis/PlansSection.tsx`**
   - Substituir os 3 planos por um card único: R$ 500/mês + R$ 2.500 implementação
   - Listar detalhadamente o que está incluso
   - Adicionar seção "Upgrades Futuros" com lista do que pode ser adicionado depois

3. **`src/components/teresopolis/ProblemSection.tsx`**
   - Manter problemas relevantes (perguntas repetitivas, ligações, lojistas sem canal)
   - Adicionar destaque para o problema de ligações excessivas

4. **`src/components/teresopolis/SolutionSection.tsx`**
   - Focar nas soluções do pacote: WhatsApp + atendimento telefônico inteligente + fluxo lojistas
   - Adicionar simulação de como funciona: ligação → IA atende → sugere WhatsApp → conversa aberta

5. **`src/components/teresopolis/ChannelsSection.tsx`**
   - Simplificar para mostrar WhatsApp + Telefone como canais principais
   - Instagram/FB/Email ficam como "canais futuros"

6. **`src/components/teresopolis/ScopeB2BSection.tsx`**
   - Simplificar: IA recebe demanda do lojista → coleta informações → encaminha ao setor responsável
   - Remover portal do lojista, gamificação e ranking

7. **`src/components/teresopolis/TimelineSection.tsx`**
   - Ajustar para 3 semanas (descoberta, configuração, go-live)
   - Remover fase B2B separada (lojistas entram junto no go-live)

8. **`src/data/propostas.ts`**
   - Atualizar valor de "R$ 8.000/mês" para "R$ 500/mês"

### Detalhes Técnicos

- Nenhuma mudança de backend ou banco de dados
- Apenas alterações de componentes React e dados estáticos
- As seções removidas da página principal (`GamificationSection`, `IntelligenceSection`, `IntegrationsSection`) continuam existindo no código para uso futuro


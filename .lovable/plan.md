

# Implementação do Modelo Híbrido - Proposta Evolua Digital

## Resumo das Alterações

Transformar a proposta atual (dois modelos separados) em um **modelo híbrido único** com as seguintes características:

- **Mensalidade**: R$ 4.200/mês (sem mostrar total de 6 meses)
- **Fee de Sucesso**: 3% sobre contratos fechados
- **Duração**: 6 meses de contrato
- **Implementação e treinamento presencial** na Evolua
- **Entrega final**: Sistema White Label + código-fonte transferido
- **Programa de indicações**: 5% de desconto por indicação
- **Suporte opcional**: R$ 1.200/mês após os 6 meses
- **Cláusula**: Não pode revender o sistema por 2 anos

---

## Estrutura da Nova Página

```text
1. Header (manter)
2. O Problema (manter - ProblemSection)
3. A Solução (manter - SolutionSection)
4. Os Resultados (manter - ResultsSection)
5. Nossa Proposta (NOVO) - Apresentação do modelo híbrido
6. O Que Entregamos (NOVO) - Cronograma detalhado mês a mês
7. O Que Vocês Recebem no Final (NOVO) - White label + código
8. Por Que o Risco é Baixo (NOVO) - Argumentos para diretoria
9. Investimento (REFORMULAR) - R$ 4.200/mês + 3% fee
10. Programa de Indicações (NOVO) - Bônus 5% por indicação
11. Suporte Pós-Contrato (NOVO) - Opcional R$ 1.200/mês
12. Termos (NOVO) - Cláusula de não-revenda
13. FAQ (atualizar)
14. CTA (manter)
```

---

## Componentes a Criar

| Componente | Descrição |
|------------|-----------|
| `HybridProposalSection.tsx` | Apresentação do conceito: operamos + treinamos + transferimos |
| `DeliveryTimelineSection.tsx` | Cronograma mês a mês com entregas detalhadas |
| `FinalDeliverablesSection.tsx` | White label, GitHub, documentação, equipe treinada |
| `LowRiskSection.tsx` | Argumentos visuais para convencer a diretoria |
| `ReferralProgramSection.tsx` | Programa de indicações com 5% desconto |
| `PostContractSupportSection.tsx` | Suporte opcional R$ 1.200/mês |
| `ContractTermsSection.tsx` | Cláusula de não-revenda por 2 anos |

---

## Componentes a Modificar

| Componente | Ação |
|------------|------|
| `InvestmentSection.tsx` | Reescrever com modelo único: R$ 4.200/mês + 3% fee (SEM total) |

---

## Componentes a Remover

| Componente | Motivo |
|------------|--------|
| `PartnershipModelsSection.tsx` | Não há mais duas opções - modelo único |

---

## Detalhes das Novas Seções

### HybridProposalSection - "Nossa Proposta"

Conceito visual explicando o modelo:

- **Título**: "Parceria de 6 Meses com Transferência Total"
- **Subtítulo**: "Operamos junto, ensinamos durante, vocês ficam com tudo no final"
- **3 pilares**:
  - Operação: Colocamos o sistema para funcionar e geramos resultados
  - Capacitação: Treinamos a equipe presencialmente na Evolua
  - Transferência: Código-fonte, documentação e independência total

### DeliveryTimelineSection - "O Que Entregamos"

Timeline visual com entregas mês a mês:

**Mês 1 - Implementação**
- Setup completo do sistema
- Configuração das instâncias WhatsApp
- Primeiros disparos piloto
- Treinamento presencial: introdução ao sistema e ferramentas

**Mês 2 - Escala + Operação**
- Aumento gradual do volume
- IA de qualificação ativa
- Dashboard liberado
- Treinamento presencial: como interpretar métricas e operar disparos

**Mês 3 - Otimização**
- Análise de resultados
- Ajustes baseados em dados
- Treinamento presencial: banco de dados e backend

**Mês 4 - Capacitação Técnica I**
- Treinamento presencial: WhatsApp APIs (oficial e não-oficial)
- Como as automações funcionam
- Acesso ao código-fonte

**Mês 5 - Capacitação Técnica II**
- Treinamento presencial: IA e qualificação de leads
- Como customizar fluxos
- Como integrar novas bases

**Mês 6 - Transferência**
- Migração do código para GitHub de vocês
- Documentação completa entregue
- Sistema White Label configurado
- Equipe 100% autônoma

**Destaque visual**:
- "Implementação e treinamento presenciais na Evolua"
- "Mostramos na prática as ferramentas que usamos para criar e evoluir o sistema"

### FinalDeliverablesSection - "O Que Vocês Recebem no Final"

Cards visuais:

| Entregável | Descrição |
|------------|-----------|
| Sistema White Label | Plataforma completa com a marca Evolua |
| Código-Fonte | Repositório transferido para o GitHub de vocês |
| Documentação Técnica | Manuais de operação e manutenção |
| Gravações | Todas as sessões de treinamento gravadas |
| Templates | Modelos de mensagens que funcionam |
| Dashboard Premium | BI completo com métricas em tempo real |
| Equipe Treinada | Pessoas capazes de operar e evoluir sozinhas |

### LowRiskSection - "Por Que o Risco é Baixo"

Argumentos visuais para convencer a diretoria:

| Argumento | Explicação |
|-----------|------------|
| Investimento Diluído | R$ 4.200/mês por 6 meses - não é um gasto único grande |
| Fee sobre Resultado | 3% só incide quando vocês FECHAM vendas |
| Ativo Próprio | Vocês ficam donos do sistema - não é aluguel |
| Independência Total | Após 6 meses, zero custo obrigatório |
| Suporte Opcional | Se quiserem ajuda depois, é opcional |
| Treinamento Real | Presencial na Evolua, com a equipe de vocês |

**Destaque**: "Menos de R$ 140/dia para ter sistema + operação + treinamento + transferência"

### InvestmentSection (Reformulado)

Apresentação simples e direta:

```text
┌─────────────────────────────────────────────────┐
│  INVESTIMENTO                                   │
├─────────────────────────────────────────────────┤
│  R$ 4.200/mês                                   │
│  + 3% sobre contratos fechados via ferramenta   │
│                                                 │
│  Duração: 6 meses de contrato                   │
│                                                 │
│  ✓ Operação completa do sistema                 │
│  ✓ Treinamento presencial na Evolua             │
│  ✓ Transferência total ao final                 │
│  ✓ Sistema White Label seu                      │
│  ✓ Código-fonte no seu GitHub                   │
└─────────────────────────────────────────────────┘
```

**NÃO mostrar**: R$ 25.200 (total dos 6 meses)

### ReferralProgramSection - "Bônus: Programa de Indicações"

| Benefício | Descrição |
|-----------|-----------|
| Desconto por Indicação | 5% de desconto na mensalidade para cada cliente indicado do mesmo ramo |
| Máximo | Até 3 indicações = 15% de desconto |
| Por que funciona | Vocês já recebem visitas de empresas menores querendo ver suas ferramentas |

**Destaque**: "A Evolua é referência regional - transformem isso em economia"

### PostContractSupportSection - "Suporte Pós-Contrato"

| Item | Valor |
|------|-------|
| Suporte Mensal | R$ 1.200/mês |
| Inclui | Manutenção + correções + pequenas evoluções + suporte via WhatsApp |
| Obrigatório? | NÃO - vocês decidem se precisam após os 6 meses |

### ContractTermsSection - "Termos do Contrato"

| Cláusula | Descrição |
|----------|-----------|
| Não-Revenda | O sistema não pode ser comercializado para terceiros por 2 anos |
| Uso Interno | Destinado exclusivamente para operação da Evolua Digital |
| Propriedade | Código-fonte transferido integralmente ao final |

---

## FAQ Atualizado

Novas perguntas para refletir o modelo único:

1. "Por que 6 meses?" - Tempo ideal para implementar, gerar resultados, treinar e transferir
2. "O fee de 3% é sobre todo contrato?" - Apenas sobre vendas vindas dos leads gerados pela ferramenta
3. "E se precisarmos de suporte depois?" - Opcional por R$ 1.200/mês
4. "Podemos indicar outras empresas?" - Sim, cada indicação gera 5% de desconto
5. "O sistema é nosso mesmo?" - Sim, código-fonte transferido para o GitHub de vocês

---

## Arquivos a Modificar

| Arquivo | Ação |
|---------|------|
| `PropostaEvoluaDigital.tsx` | Remover seções antigas, adicionar novas seções, atualizar FAQ |
| `InvestmentSection.tsx` | Reescrever completamente com modelo híbrido |

## Arquivos a Criar

| Arquivo | Local |
|---------|-------|
| `HybridProposalSection.tsx` | `src/components/evolua/` |
| `DeliveryTimelineSection.tsx` | `src/components/evolua/` |
| `FinalDeliverablesSection.tsx` | `src/components/evolua/` |
| `LowRiskSection.tsx` | `src/components/evolua/` |
| `ReferralProgramSection.tsx` | `src/components/evolua/` |
| `PostContractSupportSection.tsx` | `src/components/evolua/` |
| `ContractTermsSection.tsx` | `src/components/evolua/` |

## Arquivos a Remover

| Arquivo | Motivo |
|---------|--------|
| `PartnershipModelsSection.tsx` | Substituído pelo modelo único |

---

## Pontos-Chave para a Diretoria

1. **Não é gasto, é investimento** - Eles ficam com um ativo (o sistema)
2. **Risco compartilhado** - Fee só quando há resultado real
3. **Presencial e prático** - Treinamento na Evolua com as ferramentas reais
4. **Independência garantida** - Após 6 meses, zero custo obrigatório
5. **Preço acessível** - R$ 4.200/mês é muito mais digerível
6. **Economia extra** - Programa de indicações gera até 15% de desconto


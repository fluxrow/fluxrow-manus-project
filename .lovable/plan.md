

# Ajuste Proposta + Contrato Promotrip

## Resumo das Alterações

1. **Ajustar valor na proposta Promotrip** de R$ 2.200 para R$ 1.500/mês
2. **Criar contrato Promotrip** baseado no modelo Match Solutions, sem assinatura digital - apenas botão de download PDF

---

## Dados do Contratante (extraídos do PDF)

| Campo | Valor |
|-------|-------|
| **Razão Social** | LINE AGENCIA DE VIAGENS LTDA |
| **Nome Fantasia** | PROMOTRIP CORPORATE |
| **CNPJ** | 40.789.152/0001-30 |
| **Endereço** | Rua Pedro Horokoski, 60, Campo Comprido |
| **Cidade/UF** | Curitiba/PR |
| **CEP** | 81.210-130 |
| **E-mail** | financeiro@promotripcorporate.com |
| **Telefone** | (41) 8851-8644 |

## Dados do Contratado (Fluxrow - já existente)

| Campo | Valor |
|-------|-------|
| **Razão Social** | Fluxrow Inteligência Criativa |
| **CNPJ** | 61.260.831/0001-97 |
| **Endereço** | Curitiba/PR |
| **E-mail** | contato@fluxrow.com |
| **Telefone** | (41) 99236-1868 |
| **Chave PIX** | 61.260.831/0001-97 |

---

## Arquivos a Modificar/Criar

### 1. PropostaPromotrip.tsx (Modificar)

**Alteração simples:**
- Linha 794: Mudar `R$ 2.200` para `R$ 1.500`

### 2. ContratoPromotrip.tsx (Criar)

Novo contrato baseado no template Match Solutions, com as seguintes diferenças:

| Aspecto | Match Solutions | Promotrip |
|---------|-----------------|-----------|
| Valor mensal | R$ 5.200/mês | **R$ 1.500/mês** |
| Prazo | 3 meses | **1 mês (teste)** |
| Renovação | Automática | **Mediante acordo prévio + nova assinatura** |
| Assinatura digital | Sim (edge function) | **Não - apenas botão Baixar PDF** |
| CNPJ contratante | 34.325.200/0001-36 | **40.789.152/0001-30** |
| Empresa | Match Solutions | **Line Agência de Viagens LTDA** |
| Nome fantasia | - | **Promotrip Corporate** |

### 3. App.tsx (Modificar)

Adicionar rota: `/contrato-promotrip`

---

## Estrutura do Contrato Promotrip

**CABEÇALHO**
- Contrato de Prestação de Serviços
- Sistema de Prospecção B2B com IA para Promotrip Corporate

**PARTES**
```
CONTRATANTE:
LINE AGENCIA DE VIAGENS LTDA
CNPJ: 40.789.152/0001-30
Rua Pedro Horokoski, 60 - Campo Comprido
Curitiba/PR - CEP: 81.210-130
E-mail: financeiro@promotripcorporate.com
Tel: (41) 8851-8644

CONTRATADA:
Fluxrow Inteligência Criativa
CNPJ: 61.260.831/0001-97
Curitiba/PR
E-mail: contato@fluxrow.com
Tel: (41) 99236-1868
Chave PIX: 61.260.831/0001-97
```

---

## Cláusulas do Contrato

### CLÁUSULA PRIMEIRA - DO OBJETO
Sistema de Prospecção B2B com IA para Promotrip Corporate:
- Agente de IA especializado para qualificação de leads B2B
- Integração com base CSV de ~3.000 contatos
- Disparos inteligentes WhatsApp (Z-API) + Email
- Dashboard de controle e métricas
- Avisos inteligentes de follow-up

### CLÁUSULA SEGUNDA - DO PRAZO
- **1 (um) mês** inicial para testes
- Renovação mediante acordo prévio com nova assinatura
- Pode manter mesmo período ou aumentar conforme necessidade
- Não há renovação automática

### CLÁUSULA TERCEIRA - DO VALOR E PAGAMENTO
- **Valor Mensal:** R$ 1.500,00
- **Forma:** PIX
- **Chave PIX (CNPJ):** 61.260.831/0001-97
- **Taxa de implementação:** ISENTA

### CLÁUSULA QUARTA - DO ESCOPO TÉCNICO
**Inclui:**
- Disparos WhatsApp via Z-API
- Email Marketing integrado
- Integração com base CSV (~3.000 contatos)
- Personalização por setor empresarial
- Agente de IA especializado
- Dashboard de controle
- Avisos inteligentes de follow-up

### CLÁUSULA QUINTA - DA CAPACIDADE TÉCNICA
- Operação 24/7 via agente de IA
- Base de ~3.000 contatos
- Segmentação por setor empresarial
- Tempo de resposta < 5 segundos

### CLÁUSULA SEXTA - OBRIGAÇÕES DA CONTRATADA
- Implementar sistema conforme especificações
- Fornecer treinamento à equipe (Alexandre)
- Manter disponibilidade do sistema
- Gerar relatórios mensais
- Prestar suporte técnico
- Garantir sigilo (LGPD)

### CLÁUSULA SÉTIMA - OBRIGAÇÕES DA CONTRATANTE
- Fornecer base CSV de contatos
- Definir segmentos e prioridades
- Disponibilizar equipe para atendimento de leads
- Efetuar pagamentos nas datas acordadas

### CLÁUSULA OITAVA - DO SLA
- Uptime: 99%
- Suporte: resposta em 24h úteis
- Problemas críticos: 4h

### CLÁUSULA NONA - CONFIDENCIALIDADE E LGPD
(Mesma estrutura do Match Solutions)

### CLÁUSULA DÉCIMA - DA RESCISÃO
- Aviso prévio de 30 dias
- Inadimplência > 15 dias = suspensão
- Não entrega no prazo = rescisão sem multa

### CLÁUSULA DÉCIMA PRIMEIRA - MEDIAÇÃO E CONFLITOS
(Mesma estrutura do Match Solutions)

### CLÁUSULA DÉCIMA SEGUNDA - DISPOSIÇÕES GERAIS
(Mesma estrutura do Match Solutions)

### CLÁUSULA DÉCIMA TERCEIRA - DO FORO
- Foro da comarca de Curitiba/PR

---

## Diferenças do Match Solutions

**Removido:**
- Toda a lógica de assinatura digital (useState, useEffect, edge function)
- Botão "Assinar Digitalmente"
- Status de assinatura
- Campos de representante legal
- Testemunhas

**Mantido:**
- Botão "Baixar PDF" (window.print())
- Estrutura visual das cláusulas
- Layout responsivo
- Estilo visual do contrato

---

## Seção de Assinaturas (Simplificada)

Apenas campos em branco para assinatura física:

```
CONTRATANTE                      CONTRATADA
_________________________       _________________________
LINE AGENCIA DE VIAGENS LTDA    Fluxrow Inteligência Criativa
CNPJ: 40.789.152/0001-30        CNPJ: 61.260.831/0001-97
```

---

## Resumo dos Arquivos

| Ação | Arquivo | Descrição |
|------|---------|-----------|
| Modificar | `PropostaPromotrip.tsx` | Valor de R$ 2.200 → R$ 1.500 |
| Criar | `ContratoPromotrip.tsx` | Contrato completo sem assinatura digital |
| Modificar | `App.tsx` | Adicionar rota `/contrato-promotrip` |


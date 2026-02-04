

# Ajustes no Contrato Promotrip

## Resumo das Alterações

1. **Atualizar chave PIX** para o formato aleatório informado
2. **Remover nome "Alexandre"** de todas as menções no contrato

---

## Alterações no Arquivo

### ContratoPromotrip.tsx

| Linha | De | Para |
|-------|-----|------|
| 63 | `Chave PIX CNPJ: 61.260.831/0001-97` | `Chave PIX: 7a124eac-3cd8-4f24-aa83-40aa439900a1` |
| 87-88 | `...da CONTRATANTE (Alexandre).` | `...da CONTRATANTE.` |
| 120 | `Chave PIX (CNPJ): 61.260.831/0001-97` | `Chave PIX: 7a124eac-3cd8-4f24-aa83-40aa439900a1` |
| 152 | `Treinamento da equipe (Alexandre): 1 sessão` | `Treinamento da equipe: 1 sessão` |
| 190 | `...da CONTRATANTE (Alexandre)` | `...da CONTRATANTE` |

---

## Detalhamento

### 1. Chave PIX (2 ocorrências)

**Seção de Dados da Contratada (linha 63):**
```
Antes: Chave PIX CNPJ: 61.260.831/0001-97
Depois: Chave PIX: 7a124eac-3cd8-4f24-aa83-40aa439900a1
```

**Cláusula Terceira - Pagamento (linha 120):**
```
Antes: Chave PIX (CNPJ): 61.260.831/0001-97
Depois: Chave PIX: 7a124eac-3cd8-4f24-aa83-40aa439900a1
```

### 2. Remover "Alexandre" (3 ocorrências)

**Cláusula Primeira - Importante (linha 87-88):**
```
Antes: ...responsabilidade da equipe de vendas da CONTRATANTE (Alexandre).
Depois: ...responsabilidade da equipe de vendas da CONTRATANTE.
```

**Cláusula Quarta - Prazo de Implementação (linha 152):**
```
Antes: Treinamento da equipe (Alexandre): 1 sessão
Depois: Treinamento da equipe: 1 sessão
```

**Cláusula Sexta - Obrigações da Contratada (linha 190):**
```
Antes: Fornecer treinamento para equipe da CONTRATANTE (Alexandre)
Depois: Fornecer treinamento para equipe da CONTRATANTE
```

---

## Resumo

| Ação | Arquivo | Descrição |
|------|---------|-----------|
| Modificar | `ContratoPromotrip.tsx` | Atualizar chave PIX e remover nome Alexandre |


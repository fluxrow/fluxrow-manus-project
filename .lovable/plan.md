
# Ajustar Espaçamento Horizontal dos Cards

## Mudança

Reduzir o espaçamento horizontal entre os cards empilhados, mantendo o espaçamento vertical atual.

---

## Valores Atuais vs Novos

| Card | translate-x Atual | translate-x Novo | translate-y (mantém) |
|------|-------------------|------------------|----------------------|
| 1 - Briefing | 0 | 0 | 0 |
| 2 - Estratégia | translate-x-20 (80px) | translate-x-12 (48px) | translate-y-8 |
| 3 - Criação | translate-x-40 (160px) | translate-x-24 (96px) | translate-y-16 |
| 4 - Otimização | translate-x-60 (240px) | translate-x-36 (144px) | translate-y-24 |

---

## Arquivo a Modificar

**`src/components/ui/process-cards.tsx`**

Alterar as classes de translate-x nos cards 2, 3 e 4 do array `defaultCards`:

- Card 2: `translate-x-20` → `translate-x-12`
- Card 3: `translate-x-40` → `translate-x-24`
- Card 4: `translate-x-60` → `translate-x-36`

---

## Resultado

Os cards ficarão mais sobrepostos horizontalmente, criando um efeito visual mais compacto enquanto mantém a separação vertical para legibilidade.

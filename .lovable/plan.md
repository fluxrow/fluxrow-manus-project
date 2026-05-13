## Diagnóstico do que existe hoje

- **Apenas 1 produto real** no código: `AIOperatorKitSales.tsx` (447 linhas, todo em EN, em `/produtos/ai-operator-kit`).
- `KitOperadorIA.tsx` (99 linhas) **não é um produto** — é uma landing PT que manda o usuário de volta pra página EN.
- O hub `/produtos` mostra 2 cards mas eles apontam pro mesmo conteúdo final.
- **Stripe**: o checkout existe (`create-checkout` resolve preço por `lookup_key`), mas eu não consegui inspecionar o que está cadastrado. **Precisa verificação manual antes de mexer em preço.**
- i18n já tem PT/EN configurados com detecção IP→Brasil=PT, resto=EN, e cache em localStorage. **Vamos reusar isso.**

## Decisão estrutural

Sua resposta foi clara: **2 produtos distintos, cada um com PT + EN**. Mas você levantou "talvez mesclar num produto único". Eu recomendo **começar com 1 produto bem-feito em PT+EN e depois lançar o 2º**, porque hoje só existe 1 produto real e construir 4 combinações de algo que ainda não foi escrito vai criar dívida. Mas o plano abaixo deixa a arquitetura pronta pra escalar pros 2.

## Arquitetura proposta

### URLs e roteamento

```text
/produtos                          → hub com os 2 produtos
/produtos/ai-operator-kit          → Produto 1 (idioma auto pelo navegador, com toggle PT/EN no topo)
/produtos/ai-operator-kit?lang=pt  → força PT
/produtos/ai-operator-kit?lang=en  → força EN
/produtos/kit-operador-pro         → Produto 2 (mesmo padrão; nome a definir — NÃO usar "kit-operador-ia" pra não confundir com o 1)
```

- `kit-operador-ia` vira **301 → ai-operator-kit?lang=pt** (preserva SEO atual).
- Cada produto = **1 página React** com conteúdo em arquivo i18n separado (`kits/operatorKit.pt.json` + `.en.json`), não 2 componentes duplicados.
- Toggle PT/EN visível no header da página do produto (não esconde a opção, mesmo quando detecta automático).

### Pricing por moeda

- **Sem IP novo**: aproveitar o `i18n.language` já detectado.
- Regra: `language === 'pt' → BRL` ; resto → `USD`.
- Preços (do que você definiu):
  - Produto 1 (AI Operator Kit): **$27 USD** / **R$ 147 BRL**
  - Produto 2 (Kit Operador Pro — escopo a definir): preços a definir.
- Mostrar **só uma moeda** na página do produto (a que casa com o idioma). Stripe recebe o `priceId` correspondente.

### Stripe

Antes de criar/atualizar preço:

1. Verificar quais `lookup_key` já existem no Stripe (sandbox e live).
2. Mapear pra: `aok_usd_27` e `aok_brl_147` (Produto 1). Produto 2 entra depois.
3. `create-checkout` já aceita `priceId` — só passar o `lookup_key` certo conforme idioma ativo.

### SEO / hreflang

- 1 canonical por idioma usando `?lang=` ou path separado. Recomendo manter `?lang=` (mesma URL base, mais simples pra hub). `<link rel="alternate" hreflang>` aponta a versão oposta.
- Atualizar `sitemap.xml` e `scripts/generate-sitemap.ts`.

## Etapas de execução

1. **Auditoria Stripe** (eu rodo) — listar produtos/preços ativos pra você confirmar o que mantém.
2. **Refatorar Produto 1** em página única bilingue:
  - Extrair copy de `AIOperatorKitSales.tsx` pra `src/content/kits/aiOperatorKit.{pt,en}.ts`.
  - Reescrever a página consumindo via `useTranslation`.
  - Adicionar toggle PT/EN.
  - Lógica de preço por idioma + `priceId` correspondente.
  - **Tradução PT do Kit precisa ser escrita** — eu posso fazer um primeiro draft, você revisa.
3. **Apagar `KitOperadorIA.tsx**` e criar redirect 301.
4. **Atualizar `/produtos**` pra mostrar os 2 produtos como SKUs distintos (Produto 2 fica como "em breve" até existir).
5. **Stripe**: criar/atualizar `lookup_keys` `aok_usd_27` e `aok_brl_147` (depende da auditoria).
6. **SEO + sitemap** atualizados.
7. **Produto 2** fica fora deste plano até você definir escopo (nome, conteúdo, preço).

## Pendências que preciso de você antes de implementar

1. **Confirmo a estratégia "1 produto bilingue agora, 2º produto depois"?** Ou quer que eu já estruture os 2 mesmo sem conteúdo do 2?j JUNTA os dois em umproduto so. podemos deixar esse ainda mais forte e completo. Pense.
2. **Posso traduzir o conteúdo do AI Operator Kit pra PT** (draft pra você revisar), ou você prefere escrever? pode escrever 
3. **Nome do Produto 2** quando existir — pra não conflitar com Produto 1. nao vamso pro produto dois ainda 

Sem essas 3 respostas eu não começo a implementar — não quero refazer trabalho de novo.
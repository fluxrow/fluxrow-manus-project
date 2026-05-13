## Problema

A copy atual de `/produtos` lidera com "Um sistema. Dois idiomas. Sua moeda." — isso é um detalhe operacional, não uma promessa de produto. Quem chega na página quer saber **o que é, o que resolve e quanto custa**. Idioma/moeda viram fricção visual em vez de venda.

## Princípio da reescrita

- Hero fala do **resultado**, não da infraestrutura bilíngue.
- Idioma é detectado em silêncio (já está); moeda aparece só no bloco de preço.
- Tom practitioner: ativo, sem hype, sem "disponível em".
- Um único CTA primário ("Comprar / Get the kit") + secundário ("Ver detalhes").

## Mudanças em `src/pages/ProdutosHub.tsx`

### 1. Header (hero)

Substituir:
- Eyebrow: `PRODUTOS` → `AI OPERATOR KIT`
- H1: `Um sistema. Dois idiomas. Sua moeda.` → **`O sistema de IA que opera sua operação.`**
- Sub: trocar a frase sobre PT/EN por algo orientado a quem compra:
  > `Brain, fila, publicador, engine de DM e receita — montados em 5 camadas pra você abrir e rodar essa semana. Não é curso. É um kit de campo.`

### 2. Card do produto (lado esquerdo)

- Eyebrow `AI OPERATOR KIT · PT + EN` → `AI OPERATOR KIT · v1`
- H2 mantém: `Build the AI system that runs your operation.` (ou versão PT equivalente — confirmar com você qual idioma fica no card já que a página em si está em PT).
- Descrição mantém.
- **Trocar os 2 botões de idioma por 1 CTA primário:**
  - Botão único: `Acessar o Kit →` que vai para `/produtos/ai-operator-kit` (a própria página detecta idioma e moeda).
  - Remover os botões "Ver em Português · R$ 147" e "Read in English · $27" — eles expõem a duplicidade de idioma sem necessidade.

### 3. Bloco de preço (lado direito)

- Manter os dois preços (BRL e USD), mas como **referência discreta**, não como dois "produtos":
  - Título: `INVESTIMENTO`
  - Mostrar preço grande **da moeda detectada** (ex: `R$ 147` se navegador PT, `$27` se EN).
  - Embaixo, em `text-xs text-white/40`: `Outside Brazil? $27 USD` (ou inverso).
- Remover o parágrafo "Detectamos seu idioma automaticamente. Você pode trocar PT/EN a qualquer momento." — vira ruído.

### 4. Linha de garantia

Manter `Garantia de 7 dias · Pagamento único · Acesso vitalício`.

### 5. Seção agência (no fim)

Sem mudanças.

## Detecção de idioma/moeda no Hub

Adicionar um hook leve (`useLang`) que lê `navigator.language` + `localStorage('aok_lang')` (mesma chave já usada em `AIOperatorKitSales.tsx`) para decidir se mostra `R$ 147` ou `$27` como preço principal. Sem toggle visível — quem quiser trocar faz isso na página do produto.

## O que NÃO muda

- Página `/produtos/ai-operator-kit` (já tem toggle PT/EN funcionando).
- Stripe / lookup_keys.
- SEO / hreflang / sitemap.
- Rota `/produtos/kit-operador-ia` (segue como 301).

## Resultado esperado

Hub deixa de "explicar que é bilíngue" e passa a **vender o kit**. Idioma e moeda viram detalhe de checkout, não headline.

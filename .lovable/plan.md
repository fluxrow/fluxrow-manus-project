

# Redesign: "Inteligencia Criativa em Cada Entrega"

## Conceito

A secao "Fluxo de Integracao" (linhas 179-263 do `BehindTheScenes.tsx`) sera transformada em um showcase visual completo que comunica: **"Inteligencia Criativa aplicada em tudo o que entregamos"**. O tagline da marca se torna o fio condutor — cada bloco mostra um tipo de entrega com um mini-mockup CSS e a mensagem de que o cliente nao precisa de outro fornecedor.

## Titulo e Copy

- **Titulo**: "Inteligencia Criativa" (destaque com gradiente cyan-purple-pink da marca)
- **Subtitulo**: "em cada entrega"
- **Descricao**: "Da ideia ao resultado. Criativos, trafego, automacao, sistemas — tudo sob o mesmo teto, sem precisar de outro fornecedor."

## 8 Blocos Visuais com Mockups CSS

Cada bloco sera um card com um mini-mockup construido 100% em JSX + Tailwind (sem imagens externas), titulo, descricao curta e tag colorida do pilar.

| # | Titulo | Mockup Visual (CSS puro) | Cor |
|---|--------|--------------------------|-----|
| 1 | **Criativos para Feed e Stories** | Grid 2x2 simulando posts de Instagram com gradientes coloridos, icones de coracao e comentario | Rosa/Pink |
| 2 | **Videos e Reels** | Retangulo 16:9 escuro com botao de play central, barra de timeline com marcadores de corte coloridos | Vermelho |
| 3 | **Trafego Pago** | Mini tabela estilo gerenciador de ads: 3 campanhas com status (bolinha verde), metricas CTR/CPC/ROAS | Verde |
| 4 | **Landing Pages** | Mini browser (3 bolinhas + barra URL) com blocos internos simulando hero, CTA e formulario | Azul |
| 5 | **Automacoes e IA** | 4 nodes circulares conectados por linhas com setas, estilo Make/n8n, com labels (Trigger, AI, Filter, Action) | Ciano |
| 6 | **CRM e Pipeline** | Mini kanban com 3 colunas (Novo, Qualificado, Fechado) e 2 mini cards em cada | Laranja |
| 7 | **Sistemas e SaaS** | Mini dashboard: sidebar fina + area com 3 mini barras de grafico e um numero grande de metrica | Roxo |
| 8 | **Branding e Identidade** | Logo placeholder em 3 aplicacoes: circular, horizontal e em mockup de cartao de visita | Amarelo |

## Layout

- **Desktop**: `grid lg:grid-cols-4 md:grid-cols-2` — 2 linhas de 4 cards
- **Mobile**: `grid grid-cols-1` — cards empilhados verticalmente
- **Cada card**: fundo `bg-white/5`, borda colorida sutil, hover com `scale-[1.02]` e glow
- **Mockup**: ocupa a parte superior do card (~120px de altura), com o titulo e descricao embaixo

## Animacoes

- Entrada staggered com Framer Motion (`delay: index * 0.08`)
- Hover: leve zoom no mockup + intensificacao da borda
- Linha de conexao animada removida (substituida pelos cards)

## Detalhes Tecnicos

**Arquivo editado:** `src/components/agency/BehindTheScenes.tsx`

Alteracoes:
1. **Remover** o componente `IntegrationFlow` atual (linhas 179-263) e o array `flowSteps` (linhas 95-102)
2. **Criar** novo componente `CreativeShowcase` no mesmo arquivo com:
   - Array de dados `showcaseBlocks` (8 itens com titulo, descricao, cor, pilar)
   - 8 sub-componentes de mockup inline (funções JSX simples, nao componentes separados)
   - Grid responsivo com animacao de entrada
3. **Atualizar** a chamada no `BehindTheScenes` (linha 346): trocar `<IntegrationFlow />` por `<CreativeShowcase />`
4. O componente tera um header proprio com "Inteligencia Criativa" usando o gradiente `from-cyan-400 via-purple-400 to-pink-500` (consistente com a marca)

Nenhum arquivo novo sera criado. Tudo dentro de `BehindTheScenes.tsx`.



# Mover botao "Home" para baixo do header

## Problema
Na imagem, o botao "Home" (fixed, top-4, left-4, z-50) fica sobreposto ao logo da Fluxrow no header (fixed, top-0, z-40). Isso acontece porque ambos estao posicionados no canto superior esquerdo.

## Solucao
Alterar o posicionamento do `BackToHomeButton` de `top-4` para `top-16` (64px), colocando-o abaixo do header que tem aproximadamente 52px de altura (py-3 + conteudo).

## Alteracao

**Arquivo:** `src/components/ui/BackToHomeButton.tsx` (linha 25)

Mudar a classe de posicionamento:
- De: `fixed top-4 left-4`
- Para: `fixed top-16 left-4`

Isso posiciona o botao logo abaixo do header em todas as telas, sem sobrepor o logo.

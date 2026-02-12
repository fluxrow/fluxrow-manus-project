
# Mover Contratos para Dentro da Area Protegida

## O que sera feito

As rotas de contratos que hoje estao publicas serao movidas para dentro do grupo `/propostas`, ficando protegidas pelo mesmo PIN. A rota de assinatura do cliente (`/contrato/:cliente/assinar`) tambem sera movida para dentro.

### Rotas atuais (publicas) que serao removidas:
- `/contrato-match-solutions`
- `/contrato-amanda-neves`
- `/contrato-promotrip`
- `/contrato/:cliente/assinar`

### Novas rotas (protegidas por PIN):
- `/propostas/contrato-match-solutions`
- `/propostas/contrato-amanda-neves`
- `/propostas/contrato-promotrip`
- `/propostas/contrato/:cliente/assinar`

## Alteracoes tecnicas

### `src/App.tsx`
- Remover as 4 rotas de contrato publicas (linhas 92-95)
- Adicionar essas mesmas rotas como filhas do grupo `/propostas` (junto com as propostas que ja estao la)

### `src/data/propostas.ts`
- Atualizar as rotas de contrato para o novo caminho (ex: `/contrato-match-solutions` vira `/propostas/contrato-match-solutions`)

### `src/pages/Propostas.tsx`
- Nenhuma alteracao necessaria -- o `<Outlet />` ja renderiza qualquer sub-rota, e a protecao por PIN ja cobre tudo que esta dentro de `/propostas/*`

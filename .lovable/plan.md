

# Proteger Propostas e Definir PIN

## O que sera feito

### 1. Trocar o PIN
O PIN atual esta fixo como `2907` no codigo. Vou trocar para o valor que voce quiser -- me diz qual PIN de 4 digitos voce quer usar, ou posso manter esse mesmo. **Se quiser trocar, e so me dizer o novo PIN.**

### 2. Bloquear acesso direto as propostas
Atualmente qualquer pessoa que digite `/match-solutions`, `/amanda-neves-store`, etc. no navegador consegue ver a proposta sem nenhuma protecao. Vou resolver isso assim:

- **Remover as rotas publicas** das propostas individuais (`/match-solutions`, `/amanda-neves-store`, `/babora-seguros`, `/promotrip`, `/evolua-digital`, `/propostas/comunica`, `/proposta-teresopolis`)
- **Mover todas essas rotas para dentro de um grupo protegido** que so funciona se o usuario tiver autenticado com o PIN via `/propostas`
- As rotas passam a ser algo como `/propostas/match-solutions`, `/propostas/amanda-neves`, etc.
- Quem tentar acessar diretamente sem ter digitado o PIN sera redirecionado para a tela de PIN

**Contratos continuam acessiveis** pelos clientes (para assinar), ja que os links de contrato sao enviados diretamente a eles.

### Detalhes tecnicos

**`src/App.tsx`**:
- Remover as rotas individuais das propostas (linhas 83-89, 99)
- Criar rotas aninhadas dentro de `/propostas/*` que renderizam os componentes de proposta
- Manter rotas de contratos publicas (`/contrato-match-solutions`, `/contrato-amanda-neves`, `/contrato-promotrip`, `/contrato/:cliente/assinar`)

**`src/pages/Propostas.tsx`**:
- Adicionar suporte a sub-rotas usando `<Outlet />` do react-router
- Quando autenticado e acessando `/propostas`, mostra o dashboard
- Quando autenticado e acessando `/propostas/match-solutions`, mostra a proposta correspondente
- Sem autenticacao, qualquer rota `/propostas/*` mostra a tela de PIN

**`src/data/propostas.ts`**:
- Atualizar as rotas de cada proposta para o novo padrao (`/propostas/match-solutions` em vez de `/match-solutions`)


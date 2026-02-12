

# Exigir PIN Sempre ao Entrar na Area de Propostas

## O que sera feito

Atualmente o PIN fica salvo no `sessionStorage`, entao se voce sai para o home e volta para `/propostas`, nao precisa digitar de novo. Vou mudar para que o PIN seja exigido toda vez que voce entra na area de propostas, independente de por onde veio.

## Como funciona

- Trocar `sessionStorage` por um estado React (`useState`) dentro do componente `Propostas.tsx`
- Quando voce navega para qualquer pagina fora de `/propostas/*`, o componente desmonta e o estado e perdido automaticamente
- Ao voltar para `/propostas`, o componente monta de novo e pede o PIN novamente
- Enquanto voce navega entre sub-rotas dentro de `/propostas/*` (ex: de uma proposta para outra), o PIN continua valido porque o componente pai nao desmonta

## Alteracao tecnica

**`src/pages/Propostas.tsx`**:
- Remover `sessionStorage.getItem('propostas_auth')` e `sessionStorage.setItem('propostas_auth', ...)`
- Usar `useState(false)` para controlar se o PIN foi digitado
- Remover qualquer referencia ao `sessionStorage` relacionada a autenticacao do PIN

Apenas 1 arquivo alterado, mudanca simples de ~5 linhas.


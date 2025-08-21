# Client Preview System

## Como usar

O sistema permite criar previews privados de projetos para clientes, acessíveis através de URLs como:
`/preview/nome-do-cliente`

## Adicionando um novo cliente

1. **Criar o componente do cliente** em `src/components/clients/NomeDoCliente.tsx`
2. **Adicionar ao arquivo de configuração** `src/data/clients.ts`:

```typescript
import NovoCliente from '../components/clients/NovoCliente';

// Adicionar ao array clientProjects:
{
  slug: 'novo-cliente', // URL será /preview/novo-cliente
  name: 'Nome do Cliente',
  accessPin: '1234', // PIN opcional para proteção
  component: NovoCliente,
  seoDisabled: true, // Impede indexação
  trackingDisabled: true, // Desabilita tracking
}
```

## Configurações disponíveis

- **slug**: Nome da URL (ex: 'meu-cliente' → `/preview/meu-cliente`)
- **name**: Nome exibido do cliente
- **accessPin**: PIN opcional para proteger o acesso
- **component**: Componente React do projeto
- **seoDisabled**: `true` para adicionar noindex/nofollow
- **trackingDisabled**: `true` para desabilitar FB Pixel/GA

## Segurança

- URLs não são listadas publicamente
- PIN opcional para proteção adicional
- Meta tags noindex/nofollow impedem indexação
- Tracking pode ser desabilitado individualmente

## Exemplo de URL

Para acessar: `https://seudominio.com/preview/sample-client-1`
PIN de exemplo: `1234`


# Correcao das OG Tags - Problemas Identificados

## Diagnostico

O depurador do Facebook revelou que as OG tags servidas pelo site em producao **nao sao** as que definimos no `index.html`. O sistema de publicacao do Lovable esta injetando suas proprias meta tags por cima das nossas.

**Tags no nosso codigo vs. tags servidas em producao:**

| Tag | Nosso codigo | O que o Facebook ve |
|-----|-------------|---------------------|
| og:title | Fluxrow - Inteligencia Criativa | Fluxrow - A Inteligencia por Tras do Crescimento |
| og:image | fluxrow.com/OG_logo_fluxrow.png | Screenshot automatico do Lovable CDN |
| twitter:site | @fluxrow | @lovable_dev |
| fb:app_id | 4078995122388870 | Marcado como invalido |

## Plano de Correcao

### 1. Remover ou corrigir o fb:app_id
O Facebook esta rejeitando o ID `4078995122388870` como invalido. Opcoes:
- **Remover** a tag `fb:app_id` se voce nao tem um app registrado no Facebook Developers
- **Corrigir** com o ID correto caso tenha um app no developers.facebook.com

Recomendacao: remover a tag, pois ela nao e obrigatoria para OG funcionar e esta gerando erro.

### 2. Resolver a sobreposicao de OG tags pelo Lovable
O Lovable injeta meta tags proprias no momento da publicacao. Para resolver isso:
- Acessar as **configuracoes do projeto** no Lovable (Settings > Domains ou Settings geral)
- Verificar se existe uma opcao para **desativar a injecao de OG tags** ou configurar OG tags customizadas
- Caso nao exista, a alternativa e adicionar um script no `index.html` que **remove as tags duplicadas injetadas** e mantem apenas as nossas

### 3. Script de protecao contra sobreposicao
Adicionar um pequeno script inline no `<head>` que:
- Detecta se existem tags OG duplicadas
- Remove as que nao correspondem as nossas definicoes
- Garante que a primeira ocorrencia (a nossa) prevaleca

## Detalhes Tecnicos

**Arquivo alterado:** `index.html`

**Alteracao 1 - Remover fb:app_id invalido (linha 87):**
Remover a linha `<meta property="fb:app_id" content="4078995122388870" />`

**Alteracao 2 - Script de protecao OG:**
Adicionar apos as nossas meta tags um script que remove tags OG duplicadas injetadas pelo sistema de publicacao, mantendo apenas as primeiras (as nossas).

```text
Script inline que:
1. Seleciona todas as tags meta com property og:*
2. Para cada property, mantem apenas a primeira ocorrencia
3. Remove duplicatas injetadas posteriormente
```

**Nota importante:** Apos publicar, sera necessario clicar em "Extrair novamente" no depurador do Facebook (https://developers.facebook.com/tools/debug/) para limpar o cache e ver as tags atualizadas.




## Adicionar botão "Baixar PDF" em todas as propostas

### Abordagem
Criar um componente flutuante reutilizável (`DownloadPdfButton`) que usa `window.print()` com CSS `@media print` para gerar o PDF diretamente do navegador — sem dependência de biblioteca externa.

### Arquivos

**1. Criar `src/components/ui/DownloadPdfButton.tsx`**
- Botão flutuante fixo (canto inferior direito) com ícone de download
- Ao clicar, chama `window.print()` (o navegador oferece "Salvar como PDF")
- Estilo discreto com a paleta neutra (funciona em qualquer proposta)
- Classe `print:hidden` para não aparecer no próprio PDF

**2. Criar regras `@media print` em `src/index.css`**
- Esconder header, footer, botões flutuantes, navegação
- Remover backgrounds decorativos pesados
- Garantir que o conteúdo ocupe a largura total
- Forçar cores de fundo visíveis (`-webkit-print-color-adjust: exact`)

**3. Adicionar `<DownloadPdfButton />` em cada página de proposta:**
- `PropostaBatavo.tsx`
- `PropostaMatchSolutions.tsx`
- `PropostaAmandaNeves.tsx`
- `PropostaBaboraSeguros.tsx`
- `PropostaPromotrip.tsx`
- `PropostaEvoluaDigital.tsx`
- `PropostaComunica.tsx`
- `PropostaTeresopolis.tsx`

Uma linha por arquivo — só importar e renderizar o componente.


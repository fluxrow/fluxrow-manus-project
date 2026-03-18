

## Corrigir geração de PDF — substituir `window.print()` por `html2canvas` + `jsPDF`

### Problema
O `window.print()` corta o conteúdo das propostas porque não captura todo o conteúdo scrollável da página.

### Solução
Substituir por `html2canvas` + `jsPDF`, que renderizam o DOM completo e geram PDFs multi-página.

### Alterações

**1. Instalar dependências**: `jspdf` e `html2canvas`

**2. Reescrever `src/components/ui/DownloadPdfButton.tsx`**:
- Aceitar props `contentId` (ID do elemento a capturar) e `filename` (nome do arquivo)
- Usar `html2canvas` com `scale: 2`, `useCORS: true` para renderizar o conteúdo completo
- Usar `jsPDF` para gerar PDF A4 com suporte multi-página
- Mostrar estado de loading durante a geração

**3. Adicionar `id="proposal-content"` no wrapper principal de cada proposta** (8 arquivos):
- Envolver o conteúdo de cada proposta num `div` com esse ID
- Páginas: PropostaBatavo, PropostaMatchSolutions, PropostaAmandaNeves, PropostaBaboraSeguros, PropostaPromotrip, PropostaEvoluaDigital, PropostaComunica, PropostaTeresopolis

**4. Manter regras `@media print` no CSS** como fallback.


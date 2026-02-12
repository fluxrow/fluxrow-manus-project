
# Padronização dos Botões de WhatsApp

## Objetivo
Substituir todos os números de WhatsApp no projeto pelo número padrão **+55 41 99236-1868** (`5541992361868`).

## Arquivos que precisam de alteração

Os seguintes arquivos contêm números **diferentes** do padrão e precisam ser corrigidos:

| Arquivo | Número Atual | Ação |
|---------|-------------|------|
| `src/pages/PropostaView.tsx` | `5511999999999` | Corrigir |
| `src/pages/PropostaTeresopolis.tsx` | `5511999999999` | Corrigir |
| `src/components/agency/InteractiveBriefing.tsx` | `5547999999999` | Corrigir |
| `src/components/agency/AgencyCTA.tsx` | `5547999999999` | Corrigir |
| `src/components/teresopolis/PlansSection.tsx` | `5511999999999` | Corrigir |
| `src/pages/PropostaPromotrip.tsx` | `5562982181855` | Corrigir |

## Arquivos já com número correto (sem alteração necessária)

- `src/components/agency/EnhancedInteractiveBriefing.tsx` — `5541992361868`
- `src/components/FAQSection.tsx` — `5541992361868`
- `src/pages/PropostaBaboraSeguros.tsx` — `5541992361868`
- `src/pages/PropostaAmandaNeves.tsx` — `5541992361868`
- `src/pages/Contato.tsx` — `5541992361868`
- `src/pages/ApresentacaoEvoluaDigital.tsx` — `5541992361868`
- `src/pages/PropostaEvoluaDigital.tsx` — `5541992361868`
- `src/pages/PropostaMatchSolutions.tsx` — `5541992361868`
- `src/pages/PropostaComunica.tsx` — usa variável, verificar valor

## Total de correções: 6 arquivos

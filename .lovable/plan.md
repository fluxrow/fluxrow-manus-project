
# Adicionar Novos Cards na Seção "O que fazemos"

## Estrutura Atual

Existem 4 cards seguindo este padrão:
- `id`, `imageSrc`, `imageAlt`, `tag`, `title`, `description`
- `icon` (Lucide), `benefit`, `href`
- `fullDescription`, `features[]`, `deliverables[]`

---

## Novos Cards a Adicionar (baseado nas propostas)

### Card 5: Tráfego Pago
| Campo | Valor |
|-------|-------|
| tag | Performance |
| title | Tráfego Pago |
| icon | Target (Lucide) |
| benefit | ROI mensurável |
| description | Campanhas estratégicas em Meta Ads, Google Ads e LinkedIn para atrair leads qualificados. |
| features | Campanhas Meta Ads (Facebook/Instagram), Google Ads (Search, Display, YouTube), LinkedIn Ads para B2B, Remarketing inteligente, Testes A/B contínuos, Otimização de conversões |
| deliverables | Setup completo, Criativos otimizados, Relatório semanal, Calls de performance |

### Card 6: Gestão de Redes Sociais
| Campo | Valor |
|-------|-------|
| tag | Social Media |
| title | Redes Sociais |
| icon | Instagram (Lucide) |
| benefit | Engajamento real |
| description | Gestão completa de Instagram, Facebook e LinkedIn com conteúdo estratégico e crescimento orgânico. |
| features | Planejamento estratégico mensal, Criação de posts e stories, Gestão de comunidade, Análise de métricas, Calendário editorial, Interação com seguidores |
| deliverables | Posts mensais, Stories, Relatório mensal, Suporte contínuo |

### Card 7: Consultoria e Estratégia
| Campo | Valor |
|-------|-------|
| tag | Estratégia |
| title | Consultoria Digital |
| icon | Lightbulb (Lucide) |
| benefit | Direção clara |
| description | Diagnóstico completo e plano estratégico personalizado para acelerar seu crescimento digital. |
| features | Diagnóstico de maturidade digital, Análise de concorrência, Plano de ação detalhado, Definição de KPIs, Mapeamento de jornada do cliente, Priorização de investimentos |
| deliverables | Relatório diagnóstico, Plano estratégico, Roadmap 90 dias, Sessão de mentoria |

### Card 8: Sistemas e Aplicativos
| Campo | Valor |
|-------|-------|
| tag | Produto |
| title | Sistemas Web |
| icon | Layers (Lucide) |
| benefit | Solução sob medida |
| description | Aplicações web personalizadas, dashboards e sistemas internos para otimizar operações. |
| features | Dashboards de BI customizados, Sistemas de gestão interna, Portais de clientes, Integrações com APIs, Painéis administrativos, Relatórios automatizados |
| deliverables | Sistema publicado, Documentação, Treinamento, Suporte técnico |

---

## Imagens Sugeridas (Unsplash)

| Card | URL da Imagem |
|------|---------------|
| Tráfego Pago | `photo-1551288049-bebda4e38f71` (analytics/charts) |
| Redes Sociais | `photo-1611162616305-c69b3fa7fbe0` (social media) |
| Consultoria | `photo-1552664730-d307ca884978` (business meeting) |
| Sistemas Web | `photo-1551434678-e076c223a692` (coding/dashboard) |

---

## Arquivo a Modificar

**`src/components/agency/ServicesGrid.tsx`**

- Importar novos ícones: `Target`, `Instagram`, `Lightbulb`, `Layers`
- Adicionar 4 novos objetos ao array `services`

---

## Resultado

A seção passará de 4 para 8 cards no carousel, cobrindo:
1. Automações e IA
2. Marketing e Conteúdo
3. Websites e Landing Pages
4. Branding e Criativos
5. **Tráfego Pago** (novo)
6. **Redes Sociais** (novo)
7. **Consultoria Digital** (novo)
8. **Sistemas Web** (novo)

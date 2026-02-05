
# Adicionar Efeito WebGL Procedural Ground no Hero

## Visão Geral
Adicionar o componente `ProceduralGroundBackground` como última camada (background) do hero, criando um efeito de terreno topográfico com linhas neon que se movem.

---

## Adaptações de Cores

O componente original tem cores genéricas. Vou adaptar para a paleta do site:

| Original | Adaptado (Paleta Fluxrow) |
|----------|---------------------------|
| `vec3(0.04, 0.03, 0.12)` Deep Space | `vec3(0.04, 0.02, 0.08)` Preto mais profundo |
| `vec3(0.1, 0.3, 0.8)` Electric Blue | `vec3(0.0, 0.8, 0.8)` Cyan-400 |
| `vec3(0.6, 0.2, 1.0)` Neon Purple | `vec3(0.6, 0.2, 0.9)` Purple-500 |

---

## Arquivos a Criar/Modificar

| Arquivo | Ação |
|---------|------|
| `src/components/ui/procedural-ground.tsx` | Criar componente adaptado |
| `src/components/agency/HorizonAgencyHero.tsx` | Adicionar como última camada |

---

## Estrutura Visual

```
┌─────────────────────────────────────────────────────────┐
│  Camada 1 (z-10): Conteúdo (título, stats, CTAs)        │
├─────────────────────────────────────────────────────────┤
│  Camada 2 (z-0): Canvas Three.js (estrelas)             │
├─────────────────────────────────────────────────────────┤
│  Camada 3 (z-[-1]): ProceduralGround (NOVA)             │
│  - Linhas topográficas neon                             │
│  - Efeito de movimento/perspectiva                      │
└─────────────────────────────────────────────────────────┘
```

---

## Implementação do Componente

O componente `ProceduralGroundBackground` usa WebGL puro (não Three.js) com shaders customizados:

- **Vertex Shader**: Posiciona o quad fullscreen
- **Fragment Shader**: 
  - Cria perspectiva de "chão"
  - Gera noise procedural para terreno
  - Desenha linhas topográficas neon
  - Aplica fade na borda superior

---

## Integração no Hero

```tsx
// No HorizonAgencyHero.tsx, adicionar antes do canvas Three.js:

{/* Procedural Ground Background - Última camada */}
<div className="fixed inset-0 z-[-1]">
  <ProceduralGround />
</div>

<canvas ref={canvasRef} className="fixed inset-0 z-0 ..." />
```

---

## Detalhes Técnicos

### Dependências
- Nenhuma nova - usa WebGL nativo do browser

### Performance
- Usa fragment shader otimizado
- Cleanup automático do animation frame
- Canvas resize responsivo

### Shader Cores Adaptadas
```glsl
vec3 baseColor = vec3(0.04, 0.02, 0.08);    // Background escuro
vec3 accentColor = vec3(0.0, 0.85, 0.85);   // Cyan Fluxrow
vec3 neonColor = vec3(0.65, 0.3, 0.95);     // Purple Fluxrow
```

---

## Resultado Esperado
Um efeito de terreno futurista com linhas topográficas em cyan e purple que se movem suavemente, criando profundidade adicional ao hero sem interferir com o Three.js existente.

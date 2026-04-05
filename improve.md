# Plan de optimizacion de performance

---

## Fase 1 - Imagenes (COMPLETADA)

- [x] Hero via Cloudinary CDN con f_auto,q_auto,w_1920
- [x] Logo via Cloudinary CDN con f_auto,q_auto,w_68,h_68
- [x] Avatares testimonios redimensionados a 128x128 con f_auto,q_auto
- [x] Logos empresas con f_auto,q_auto
- [x] Preconnect + preload hero en layout.tsx

**Resultado:** De ~5,830 KiB a ~5 KiB de ahorro pendiente.

---

## Fase 2 - Imagen de Fran (ahorro ~5 KiB)

**Problema:** La imagen de Fran (128x128) sigue siendo grande para su tamano mostrado (42x42).
**Archivo:** `app/components/testimonials/testimonials.config.ts`

**Pasos:**
1. Reducir el tamano de todos los avatares de `w_128,h_128` a `w_84,h_84` (2x de 42px)

---

## Fase 3 - Limpieza de assets locales

**Problema:** `hero.jpeg` (8.2MB) y `logo.png` (627KB) siguen en `public/images/` sin usarse.

**Pasos:**
1. Eliminar `public/images/hero.jpeg`
2. Eliminar `public/images/logo.png`

---

## Fase 4 - Render blocking CSS

**Problema:** 2 CSS chunks bloquean el render (~9 KiB, 160ms).
- `[root-of...]__9e5df8a0._.css` (2.8 KiB, 60ms) - CSS global
- `app_components_4e8c903a._.css` (6.2 KiB, 100ms) - CSS de componentes

**Pasos:**
1. Extraer el CSS critico (above-the-fold) e inlinearlo en el HTML
2. Cargar el resto de CSS de forma asincrona
3. Revisar `globals.css` para eliminar estilos no usados o moverlos a los modulos CSS de cada componente

---

## Fase 5 - Legacy JavaScript (ahorro ~8 KiB)

**Problema:** Next.js incluye polyfills innecesarios para navegadores modernos:
- Array.prototype.at, flat, flatMap
- Object.fromEntries, Object.hasOwn
- String.prototype.trimEnd, trimStart

**Pasos:**
1. En `next.config.ts`, configurar el browserslist target para navegadores modernos
2. Anadir en `package.json`:
   ```json
   "browserslist": ["last 2 Chrome versions", "last 2 Firefox versions", "last 2 Safari versions", "last 2 Edge versions"]
   ```
3. Alternativamente, actualizar Next.js si no esta en la ultima version (las versiones recientes tienen mejor tree-shaking de polyfills)

---

## Fase 6 - Critical path del site.webmanifest

**Problema:** `site.webmanifest` esta en la cadena critica (1,266ms de latencia).

**Pasos:**
1. Verificar que el manifest no bloquea el render (deberia cargarse async por defecto)
2. Si es necesario, mover la referencia al manifest despues del contenido critico

---

## Progreso

- [x] Fase 1: Imagenes Cloudinary + preconnect + preload
- [ ] Fase 2: Ajustar tamano avatares a 84px
- [ ] Fase 3: Eliminar assets locales no usados
- [ ] Fase 4: Optimizar render blocking CSS
- [ ] Fase 5: Eliminar legacy JavaScript polyfills
- [ ] Fase 6: Optimizar critical path del manifest

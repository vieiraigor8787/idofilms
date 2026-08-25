#!/usr/bin/env python3
"""Fix the palestrantes.html carousel for infinite looping."""

filepath = '/Users/igor.cerqueira/palestrantes.html'

with open(filepath, 'r') as f:
    content = f.read()

changes_applied = 0

# =====================================================================
# CHANGE 1: Render with triple clones + anchor to middle
# =====================================================================
old_render = '''      // Renderiza Desktop: 2 linhas
      const row1 = CONFIG.speakers.filter((_, idx) => idx % 2 === 0);
      const row2 = CONFIG.speakers.filter((_, idx) => idx % 2 !== 0);

      if (gridDesktop) {
        gridDesktop.innerHTML = `
        <div class="blipid-blip-row blipid-blip-row--top">
          ${row1.map(renderCardHtml).join("")}
        </div>
        <div class="blipid-blip-row blipid-blip-row--bottom blipid-blip-row--offset">
          ${row2.map(renderCardHtml).join("")}
        </div>
      `;
      }

      // Renderiza Mobile (100% de largura por card)
      if (sliderMobile) {
        sliderMobile.innerHTML = CONFIG.speakers.map(renderCardHtml).join("");
      }'''

new_render = '''      // Renderiza Desktop: 2 linhas (com clones para loop infinito)
      const row1 = CONFIG.speakers.filter((_, idx) => idx % 2 === 0);
      const row2 = CONFIG.speakers.filter((_, idx) => idx % 2 !== 0);

      let originalContentWidth = 0; // largura de 1 volta completa (calculada apos render)

      if (gridDesktop) {
        const originalGridRows = `
        <div class="blipid-blip-row blipid-blip-row--top">
          ${row1.map(renderCardHtml).join("")}
        </div>
        <div class="blipid-blip-row blipid-blip-row--bottom blipid-blip-row--offset">
          ${row2.map(renderCardHtml).join("")}
        </div>
      `;
        // Triplica: ancoramos no meio para loop fluido em ambas as direcoes
        gridDesktop.innerHTML = originalGridRows + originalGridRows + originalGridRows;
        // Calcula a largura de 1 volta apos render
        requestAnimationFrame(() => {
          originalContentWidth = gridDesktop.scrollWidth / 3;
          // Posiciona no segundo terco (meio)
          viewport.scrollLeft = originalContentWidth;
        });
      }

      // Renderiza Mobile (com clones para loop infinito)
      if (sliderMobile) {
        const originalCards = CONFIG.speakers.map(renderCardHtml).join("");
        sliderMobile.innerHTML = originalCards + originalCards + originalCards;
        requestAnimationFrame(() => {
          if (!originalContentWidth) {
            originalContentWidth = sliderMobile.scrollWidth / 3;
          }
          viewport.scrollLeft = originalContentWidth;
        });
      }'''

if old_render in content:
    content = content.replace(old_render, new_render)
    changes_applied += 1
    print("✓ Change 1: Render with triple clones")
else:
    print("✗ Change 1 NOT found")

# =====================================================================
# CHANGE 2: updateProgressBar - use modulo for infinite scroll
# =====================================================================
old_progress = '''      // Atualiza a barra de progresso azul no topo
      const updateProgressBar = () => {
        if (!viewport || !progressTrack || !progressThumb) return;
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        const visibleRatio = Math.min(1, Math.max(0.2, viewport.clientWidth / (viewport.scrollWidth || 1)));

        const thumbWidthPercent = Math.max(25, Math.min(65, visibleRatio * 100));
        progressThumb.style.width = `${thumbWidthPercent}%`;

        if (maxScroll <= 2) {
          progressThumb.style.transform = `translateX(0)`;
          if (prevArrow) prevArrow.disabled = true;
          if (nextArrow) nextArrow.disabled = true;
          return;
        }

        const scrollRatio = Math.min(1, Math.max(0, viewport.scrollLeft / maxScroll));
        const trackWidth = progressTrack.clientWidth;
        const thumbWidthPx = (thumbWidthPercent / 100) * trackWidth;
        const maxTranslate = trackWidth - thumbWidthPx;
        const translateX = scrollRatio * maxTranslate;

        progressThumb.style.transform = `translateX(${translateX}px)`;
        progressTrack.setAttribute("aria-valuenow", String(Math.round(scrollRatio * 100)));

        if (prevArrow) prevArrow.disabled = viewport.scrollLeft <= 4;
        if (nextArrow) nextArrow.disabled = viewport.scrollLeft >= maxScroll - 4;
      };'''

new_progress = '''      // Atualiza a barra de progresso azul no topo (loop infinito - usa modulo)
      const updateProgressBar = () => {
        if (!viewport || !progressTrack || !progressThumb) return;

        // Calcula largura de 1 volta se ainda nao definida
        if (!originalContentWidth && viewport.scrollWidth > 0) {
          originalContentWidth = viewport.scrollWidth / 3;
        }
        const lapWidth = originalContentWidth || (viewport.scrollWidth / 3);
        if (!lapWidth || lapWidth <= 0) return;

        // Posicao efetiva dentro de 1 volta (modulo)
        const effectiveScroll = ((viewport.scrollLeft % lapWidth) + lapWidth) % lapWidth;
        const maxScroll = lapWidth - viewport.clientWidth;

        const visibleRatio = Math.min(1, Math.max(0.2, viewport.clientWidth / (lapWidth || 1)));
        const thumbWidthPercent = Math.max(25, Math.min(65, visibleRatio * 100));
        progressThumb.style.width = `${thumbWidthPercent}%`;

        if (maxScroll <= 2) {
          progressThumb.style.transform = `translateX(0)`;
          return;
        }

        const scrollRatio = Math.min(1, Math.max(0, effectiveScroll / maxScroll));
        const trackWidth = progressTrack.clientWidth;
        const thumbWidthPx = (thumbWidthPercent / 100) * trackWidth;
        const maxTranslate = trackWidth - thumbWidthPx;
        const translateX = scrollRatio * maxTranslate;

        progressThumb.style.transform = `translateX(${translateX}px)`;
        progressTrack.setAttribute("aria-valuenow", String(Math.round(scrollRatio * 100)));

        // Setas sempre habilitadas no loop infinito
        if (prevArrow) prevArrow.disabled = false;
        if (nextArrow) nextArrow.disabled = false;
      };'''

if old_progress in content:
    content = content.replace(old_progress, new_progress)
    changes_applied += 1
    print("✓ Change 2: updateProgressBar with modulo")
else:
    print("✗ Change 2 NOT found")

# =====================================================================
# CHANGE 3: scrollByStep - just scroll, loop handled by listener
# =====================================================================
old_scroll = '''      // Navegação via setas do Header
      const scrollByStep = (direction) => {
        if (!viewport) return;
        const isMobile = window.innerWidth <= 767;
        const cardWidth = isMobile
          ? (sliderMobile?.children[0]?.getBoundingClientRect().width || viewport.clientWidth) + 16
          : (gridDesktop?.querySelector(".blipid-blip-card")?.getBoundingClientRect().width || 490) + 24;

        viewport.scrollBy({
          left: direction * cardWidth,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      };'''

new_scroll = '''      // Navegacao via setas do Header (loop infinito - listener cuida do reset)
      const scrollByStep = (direction) => {
        if (!viewport) return;

        if (!originalContentWidth && viewport.scrollWidth > 0) {
          originalContentWidth = viewport.scrollWidth / 3;
        }
        const lapWidth = originalContentWidth || (viewport.scrollWidth / 3);

        const isMobile = window.innerWidth <= 767;
        const cardWidth = isMobile
          ? (sliderMobile?.children[0]?.getBoundingClientRect().width || viewport.clientWidth) + 16
          : (gridDesktop?.querySelector(".blipid-blip-card")?.getBoundingClientRect().width || 490) + 24;

        viewport.scrollBy({
          left: direction * cardWidth,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      };'''

if old_scroll in content:
    content = content.replace(old_scroll, new_scroll)
    changes_applied += 1
    print("✓ Change 3: scrollByStep")
else:
    print("✗ Change 3 NOT found")

# =====================================================================
# CHANGE 4: autoScroll - remove snapback, keep infinite flow
# =====================================================================
old_auto = '''      const autoScroll = () => {
        if (!viewport) return;

        const isMobile = window.innerWidth <= 767;
        const cardWidth = isMobile
          ? (sliderMobile?.children[0]?.getBoundingClientRect().width || viewport.clientWidth) + 16
          : (gridDesktop?.querySelector(".blipid-blip-card")?.getBoundingClientRect().width || 490) + 24;

        const maxScroll = viewport.scrollWidth - viewport.clientWidth;

        if (viewport.scrollLeft + cardWidth >= maxScroll - 5) {
          viewport.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        } else {
          viewport.scrollBy({
            left: cardWidth,
            behavior: "smooth"
          });
        }
      };'''

new_auto = '''      const autoScroll = () => {
        if (!viewport) return;

        if (!originalContentWidth && viewport.scrollWidth > 0) {
          originalContentWidth = viewport.scrollWidth / 3;
        }
        const lapWidth = originalContentWidth || (viewport.scrollWidth / 3);

        const isMobile = window.innerWidth <= 767;
        const cardWidth = isMobile
          ? (sliderMobile?.children[0]?.getBoundingClientRect().width || viewport.clientWidth) + 16
          : (gridDesktop?.querySelector(".blipid-blip-card")?.getBoundingClientRect().width || 490) + 24;

        // Sempre avanca; o listener ensureInfiniteRange cuida do reset silencioso
        viewport.scrollBy({
          left: cardWidth,
          behavior: "smooth"
        });
      };'''

if old_auto in content:
    content = content.replace(old_auto, new_auto)
    changes_applied += 1
    print("✓ Change 4: autoScroll infinite")
else:
    print("✗ Change 4 NOT found")

# =====================================================================
# CHANGE 5: Progress track click - modulo aware
# =====================================================================
old_track = '''      // Clique no track de progresso para pular para a posição
      if (progressTrack) {
        progressTrack.addEventListener("click", (e) => {
          const rect = progressTrack.getBoundingClientRect();
          const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          const maxScroll = viewport.scrollWidth - viewport.clientWidth;
          viewport.scrollTo({
            left: clickRatio * maxScroll,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
        });
      }'''

new_track = '''      // Clique no track de progresso: pula para posicao dentro da volta atual
      if (progressTrack) {
        progressTrack.addEventListener("click", (e) => {
          if (!originalContentWidth && viewport.scrollWidth > 0) {
            originalContentWidth = viewport.scrollWidth / 3;
          }
          const lapWidth = originalContentWidth || (viewport.scrollWidth / 3);

          const rect = progressTrack.getBoundingClientRect();
          const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          const maxScroll = lapWidth - viewport.clientWidth;

          // Calcula em qual volta estamos e mantem o offset
          const currentLap = Math.round(viewport.scrollLeft / lapWidth);
          const targetInLap = clickRatio * Math.max(0, maxScroll);
          const target = currentLap * lapWidth + targetInLap;

          viewport.scrollTo({
            left: target,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
        });
      }'''

if old_track in content:
    content = content.replace(old_track, new_track)
    changes_applied += 1
    print("✓ Change 5: track click modulo-aware")
else:
    print("✗ Change 5 NOT found")

# =====================================================================
# CHANGE 6: Add scroll listener for infinite loop anchoring (insert BEFORE startAutoplay)
# =====================================================================
old_start = '''      viewport.addEventListener("scroll", updateProgressBar, { passive: true });
      window.addEventListener("resize", updateProgressBar);
      updateProgressBar();'''

new_start = '''      viewport.addEventListener("scroll", updateProgressBar, { passive: true });

      // Corretor de loop infinito: ancore silenciosamente no terco do meio
      const ensureInfiniteRange = () => {
        if (!originalContentWidth && viewport.scrollWidth > 0) {
          originalContentWidth = viewport.scrollWidth / 3;
        }
        const lapWidth = originalContentWidth || (viewport.scrollWidth / 3);
        if (lapWidth <= 0) return;

        const totalWidth = lapWidth * 3;
        // Se saiu para esquerda do primeiro terco, pula para o terceiro
        if (viewport.scrollLeft < lapWidth * 0.5) {
          viewport.scrollLeft += lapWidth;
        }
        // Se passou do segundo terco, volta para o segundo
        if (viewport.scrollLeft > lapWidth * 2.5) {
          viewport.scrollLeft -= lapWidth;
        }
      };
      viewport.addEventListener("scroll", ensureInfiniteRange, { passive: true });

      window.addEventListener("resize", updateProgressBar);
      updateProgressBar();'''

if old_start in content:
    content = content.replace(old_start, new_start)
    changes_applied += 1
    print("✓ Change 6: infinite loop correction listener")
else:
    print("✗ Change 6 NOT found")

# =====================================================================
# Write back
# =====================================================================
with open(filepath, 'w') as f:
    f.write(content)

print(f"\n✓ File saved successfully! ({changes_applied}/6 changes applied)")
print(f"  Final size: {len(content)} bytes")
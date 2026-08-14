"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createLenisEngine } from "@/animations/lenis";
import { computeMetrics } from "@/animations/metrics";
import { createHeroMorph } from "@/animations/heroMorph";
import { createSidebarScale } from "@/animations/sidebar";
import { createThemeSwitcher } from "@/animations/themeSwitcher";
import { createJourneyAnimations } from "@/animations/journey";
import { createScrollSpy } from "@/animations/scrollSpy";
import { playPreloader, type PreloaderHandle } from "@/animations/preloader";
import { MOTION, isDesktopMotionActive, prefersReducedMotion } from "@/animations/config";

type Handle = { destroy: () => void };

export function useAnimationEngine() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    let cancelled = false;
    const lenisEngine = createLenisEngine();
    let desktopHandles: Handle[] = [];
    let journeyHandle: Handle | null = null;
    let scrollSpyHandle: Handle | null = null;
    let preloaderHandle: PreloaderHandle | null = null;

    function teardownDesktopMotion() {
      desktopHandles.forEach((h) => h.destroy());
      desktopHandles = [];
    }

    // Rebuilds the desktop-only systems (hero morph, sidebar scale, theme
    // switcher). Safe to call repeatedly — used both on boot and on
    // resize, and always tears down stale state before rebuilding so we
    // never reuse rects measured at a previous viewport size.
    function setupDesktopMotion() {
      teardownDesktopMotion();
      if (!isDesktopMotionActive()) return;

      const metrics = computeMetrics();
      if (!metrics) return;

      // Sidebar scale must be computed and applied before heroMorph
      // measures the ghost targets' positions — otherwise it caches
      // where they sat pre-scale, and every traveling hero element
      // lands at the wrong (unscaled) spot once the sidebar shrinks.
      const sidebarScale = createSidebarScale();
      const morph = createHeroMorph(metrics);
      const theme = createThemeSwitcher(metrics);
      desktopHandles = [sidebarScale, morph, theme].filter((h): h is Handle => Boolean(h));
    }

    async function boot() {
      if (isDesktopMotionActive()) {
        lenisEngine.freeze();
        preloaderHandle = playPreloader();
        await preloaderHandle.promise;
        if (cancelled) return;
        lenisEngine.unfreeze();

        // Let the preloader's final frame settle before measuring
        // anything — stale rects here would throw off the whole morph.
        await new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
        );
        if (cancelled) return;
      }

      // Make sure any web-font swap has finished before measuring —
      // this matters on mobile too, since Journey's reveal thresholds
      // are percentages of its own (font-dependent) rendered height.
      await document.fonts.ready;
      if (cancelled) return;

      setupDesktopMotion();
      journeyHandle = createJourneyAnimations();
      scrollSpyHandle = createScrollSpy();
      ScrollTrigger.refresh();
    }

    boot();

    let resizeTimer: number | undefined;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        setupDesktopMotion();
        ScrollTrigger.refresh();
      }, MOTION.resizeDebounce);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
      preloaderHandle?.cancel();
      teardownDesktopMotion();
      journeyHandle?.destroy();
      scrollSpyHandle?.destroy();
      lenisEngine.destroy();
    };
  }, []);
}

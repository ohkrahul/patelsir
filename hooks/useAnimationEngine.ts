"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createLenisEngine } from "@/animations/lenis";
import { computeMetrics } from "@/animations/metrics";
import { createHeroMorph } from "@/animations/heroMorph";
import { createSidebarScale } from "@/animations/sidebar";
import { createThemeSwitcher } from "@/animations/themeSwitcher";
import { createJourneyAnimations } from "@/animations/journey";
import { createExplorationsAnimations } from "@/animations/explorations";
import { createCuriosityAnimations } from "@/animations/curiosity";
import { createInterestsAnimations } from "@/animations/interests";
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
    let explorationsHandle: Handle | null = null;
    let curiosityHandle: Handle | null = null;
    let interestsHandle: Handle | null = null;
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

      // Explorations sets its own section height (matching how far its
      // track actually overflows) before metrics is computed — otherwise
      // themeSwitcher would bake in dark-transition boundaries measured
      // against the pre-JS CSS fallback height instead of the real one.
      explorationsHandle = createExplorationsAnimations();
      setupDesktopMotion();
      journeyHandle = createJourneyAnimations();
      curiosityHandle = createCuriosityAnimations();
      interestsHandle = createInterestsAnimations();
      scrollSpyHandle = createScrollSpy();
      ScrollTrigger.refresh();

      // The browser can apply a URL hash before Explorations replaces its
      // fallback height with the measured horizontal-scroll height. That
      // leaves the same scrollY pointing at a later section and skips every
      // animation in between. Reconcile an initial hash only after all
      // section measurements and ScrollTriggers are ready.
      if (window.location.hash) {
        const target = document.querySelector<HTMLElement>(window.location.hash);
        if (target) {
          lenisEngine.lenis.scrollTo(target, {
            immediate: true,
            offset: isDesktopMotionActive() ? 0 : -72,
          });
          ScrollTrigger.update();
        }
      }
    }

    boot();

    let resizeTimer: number | undefined;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        // Refresh first so Explorations' onRefreshInit fixes the section
        // height before setupDesktopMotion reads it via computeMetrics.
        ScrollTrigger.refresh();
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
      explorationsHandle?.destroy();
      curiosityHandle?.destroy();
      interestsHandle?.destroy();
      scrollSpyHandle?.destroy();
      lenisEngine.destroy();
    };
  }, []);
}

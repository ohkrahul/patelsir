import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Metrics } from "./metrics";

type Rect = { left: number; top: number; width: number; fontSize: number };

type BindingDef = {
  id: string;
  range: [number, number];
  zIndex?: number;
};

type MeasuredBinding = BindingDef & {
  sourceEl: HTMLElement;
  ghostEl: HTMLElement;
  from: Rect;
  to: Rect;
};

// Each element settles at a slightly different point in the 0..1 morph
// progress, which is what creates the cascade instead of one synchronized
// jump (spec §19-20).
const BINDING_DEFS: BindingDef[] = [
  { id: "hero-home", range: [0.0, 0.4] },
  { id: "hero-about", range: [0.03, 0.43] },
  { id: "hero-explorations", range: [0.09, 0.49] },
  { id: "hero-interests", range: [0.12, 0.52] },
  { id: "hero-voices", range: [0.15, 0.55] },
  { id: "hero-faq", range: [0.18, 0.58] },
  { id: "hero-stat-14", range: [0.25, 0.7] },
  { id: "hero-stat-gold", range: [0.3, 0.75] },
  // Lower z-index than everything else: at its full size the wordmark's
  // fixed box visually overlaps the nav row and stat cards, and with
  // equal z-index the later-in-DOM element (the wordmark) would win
  // every hit-test over the nav links sitting "in front" of it.
  { id: "hero-wordmark", range: [0.35, 0.9], zIndex: 40 },
];

const SIDEBAR_CHROME_RANGE: [number, number] = [0.55, 1];
// Nav links start migrating at progress 0 and are mostly settled by
// ~0.4-0.6 — tying the leftover hero text's fade-out to chromeT (which
// doesn't even start until 0.55) meant it was still at full opacity
// while nav links were actively stacking up on top of it.
const OUTGOING_TEXT_RANGE: [number, number] = [0.1, 0.45];

function measureRect(el: HTMLElement): Rect {
  const rect = el.getBoundingClientRect();
  const fontSize = parseFloat(getComputedStyle(el).fontSize);
  return { left: rect.left, top: rect.top, width: rect.width, fontSize };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export type HeroMorphHandle = {
  destroy: () => void;
};

export function createHeroMorph(metrics: Metrics): HeroMorphHandle | null {
  // Read pass: gather every source/ghost pair and measure both before
  // writing anything (never interleave read/write).
  const measured: MeasuredBinding[] = [];
  for (const def of BINDING_DEFS) {
    const sourceEl = document.querySelector<HTMLElement>(`[data-anim="${def.id}"]`);
    const ghostEl = document.querySelector<HTMLElement>(`[data-ghost="${def.id}"]`);
    if (sourceEl && ghostEl) {
      measured.push({
        ...def,
        sourceEl,
        ghostEl,
        from: measureRect(sourceEl),
        to: measureRect(ghostEl),
      });
    }
  }
  if (!measured.length) return null;

  const chromeEls = Array.from(
    document.querySelectorAll<HTMLElement>('[data-anim="sidebar-panel"], [data-anim="sidebar-cta"]')
  );
  const sidebarRoot = document.querySelector<HTMLElement>('[data-anim="sidebar-root"]');
  // The root <nav> has no background of its own, but its layout box (the
  // gaps between panels included) still hit-tests — gate it the same way
  // as the panels, just without an opacity tween.
  const interactiveEls = sidebarRoot ? [...chromeEls, sidebarRoot] : chromeEls;
  const portraitEl = document.querySelector<HTMLElement>('[data-anim="hero-portrait"]');
  // The hero's own card backgrounds never move — only the numbers/labels
  // inside two of them are morph-bound. Left alone, heroSticky staying
  // pinned means these backgrounds just sit there, visible, long after
  // their content has flown off to the sidebar. Fade them out as the
  // sidebar chrome fades in, so nothing is left ghosted over Journey.
  const outgoingCards = Array.from(document.querySelectorAll<HTMLElement>('[data-preload="hero-card"]'));

  // Write pass: hide the ghost anchors (they only ever exist to be
  // measured), hide the sidebar chrome, and promote the real hero
  // elements to fixed position at their current (matching) rect so
  // there is no visual jump before the user scrolls at all.
  gsap.set(measured.map((m) => m.ghostEl), { opacity: 0, pointerEvents: "none" });
  // opacity:0 alone still intercepts clicks/hover — without pointerEvents
  // off, the invisible sidebar chrome silently blocks interaction with
  // whatever's underneath it until it visually fades in.
  gsap.set(chromeEls, { opacity: 0 });
  gsap.set(interactiveEls, { pointerEvents: "none" });
  measured.forEach((m) => {
    gsap.set(m.sourceEl, {
      position: "fixed",
      left: m.from.left,
      top: m.from.top,
      width: m.from.width,
      margin: 0,
      fontSize: m.from.fontSize,
      zIndex: m.zIndex ?? 45,
    });
  });

  function applyProgress(progress: number) {
    for (const m of measured) {
      const [start, end] = m.range;
      const t = gsap.utils.clamp(0, 1, (progress - start) / (end - start));
      gsap.set(m.sourceEl, {
        left: lerp(m.from.left, m.to.left, t),
        top: lerp(m.from.top, m.to.top, t),
        width: lerp(m.from.width, m.to.width, t),
        fontSize: lerp(m.from.fontSize, m.to.fontSize, t),
      });
    }

    const [chromeStart, chromeEnd] = SIDEBAR_CHROME_RANGE;
    const chromeT = gsap.utils.clamp(0, 1, (progress - chromeStart) / (chromeEnd - chromeStart));
    gsap.set(chromeEls, { opacity: chromeT });
    gsap.set(interactiveEls, { pointerEvents: chromeT > 0.9 ? "auto" : "none" });

    const [outStart, outEnd] = OUTGOING_TEXT_RANGE;
    const outgoingT = gsap.utils.clamp(0, 1, (progress - outStart) / (outEnd - outStart));
    gsap.set(outgoingCards, {
      opacity: 1 - outgoingT,
      pointerEvents: outgoingT > 0.1 ? "none" : "auto",
    });

    if (portraitEl) {
      const blurT = gsap.utils.clamp(0, 1, progress / 0.3);
      gsap.set(portraitEl, {
        filter: `blur(${blurT * 6}px) brightness(${1 - blurT * 0.45})`,
      });
    }
  }

  applyProgress(0);

  const trigger = ScrollTrigger.create({
    trigger: metrics.heroEl,
    start: "top top",
    end: `+=${metrics.morphEndPx}`,
    scrub: 1,
    onUpdate: (self) => applyProgress(self.progress),
  });

  return {
    destroy: () => {
      trigger.kill();
      gsap.set(
        measured.map((m) => m.sourceEl),
        { clearProps: "position,left,top,width,margin,fontSize,zIndex" }
      );
      gsap.set(measured.map((m) => m.ghostEl), { clearProps: "opacity,pointerEvents" });
      gsap.set(chromeEls, { clearProps: "opacity" });
      gsap.set(interactiveEls, { clearProps: "pointerEvents" });
      gsap.set(outgoingCards, { clearProps: "opacity,pointerEvents" });
      if (portraitEl) gsap.set(portraitEl, { clearProps: "filter" });
    },
  };
}

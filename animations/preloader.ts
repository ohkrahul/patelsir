import gsap from "gsap";

const WORDMARK = '[data-anim="hero-wordmark"], [data-anim="hero-wordmark-secondary"]';
const PORTRAIT = '[data-anim="hero-portrait"]';
const HEADLINE = '[data-preload="headline-line"]';
const NAV = '[data-preload="hero-nav"]';
const CARDS = '[data-preload="hero-card"]';

export type PreloaderHandle = {
  promise: Promise<void>;
  cancel: () => void;
};

export function playPreloader(): PreloaderHandle {
  let tl: gsap.core.Timeline;
  const promise = new Promise<void>((resolve) => {
    gsap.set(WORDMARK, { opacity: 0, yPercent: 25, scale: 0.94 });
    gsap.set(PORTRAIT, { opacity: 0, scale: 0.88, filter: "blur(20px)" });
    gsap.set(HEADLINE, { opacity: 0, scale: 0.9, filter: "blur(10px)" });
    gsap.set(NAV, { yPercent: 100 });
    gsap.set(CARDS, { y: "10%", opacity: 0, scale: 0.6 });

    tl = gsap.timeline({ onComplete: resolve });

    // 0.20–0.90: wordmark settles in (simplified from a 7-letter mask
    // reveal — same slide+fade motion family, no extra markup on an
    // element the scroll-morph also has to grab and move later).
    tl.to(WORDMARK, { opacity: 1, yPercent: 0, scale: 1, duration: 0.7, ease: "power2.out" }, 0.2);
    // 1.30–2.00: portrait materializes.
    tl.to(
      PORTRAIT,
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power2.out" },
      1.3
    );
    // 1.55–2.30: headline lines reveal.
    tl.to(
      HEADLINE,
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.6, stagger: 0.1, ease: "power2.out" },
      1.55
    );
    // 1.80–2.40: nav labels reveal.
    tl.to(NAV, { yPercent: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" }, 1.8);
    // 1.90–3.00: glass cards reveal; timeline ends here (~3s), matching
    // the spec's "release scroll around 3 seconds".
    tl.to(
      CARDS,
      { y: "0%", opacity: 1, scale: 1, duration: 1.1, stagger: 0.1, ease: "expo.out" },
      1.9
    );
    // Even a resolved-to-identity `transform` (translate(0,0) scale(1))
    // establishes a new containing block for any position:fixed
    // descendant (e.g. the stat numbers heroMorph promotes inside these
    // cards) — clear it once the reveal is visually done so descendants
    // stay positioned relative to the viewport, not this card.
    tl.set([WORDMARK, PORTRAIT, HEADLINE, NAV, CARDS], { clearProps: "transform" });
  });

  return {
    promise,
    // Kills the timeline immediately (no more DOM writes) if the effect
    // that started it gets cleaned up before it finishes — otherwise a
    // stale run (e.g. React StrictMode's dev-only double-invoke) keeps
    // mutating the same selector-targeted elements a second, fresh run
    // is also about to measure and animate.
    cancel: () => tl?.kill(),
  };
}

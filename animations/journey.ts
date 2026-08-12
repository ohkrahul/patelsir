import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Scroll offsets (relative to the Journey section's own top, spec §27) at
// which each of the 8 cards enters — deliberately uneven, so cards don't
// all land in lockstep.
const CARD_THRESHOLDS = ["-45%", "-22%", "-4%", "11%", "20%", "36%", "50%", "58%"];

export type JourneyHandle = {
  destroy: () => void;
};

export function createJourneyAnimations(): JourneyHandle | null {
  const journeyEl = document.getElementById("about");
  if (!journeyEl) return null;

  const triggers: ScrollTrigger[] = [];

  const pathLine = document.querySelector<SVGPathElement>('[data-anim="journey-path-line"]');
  if (pathLine) {
    gsap.set(pathLine, { drawSVG: "0%" });
    const drawTween = gsap.to(pathLine, {
      drawSVG: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: journeyEl,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
    if (drawTween.scrollTrigger) triggers.push(drawTween.scrollTrigger);
  }

  const dots = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="journey-path-dot"]'));
  if (dots.length) {
    gsap.set(dots, { scale: 0, opacity: 0 });
    dots.forEach((dot) => {
      const pct = parseFloat(dot.style.top || "0");
      triggers.push(
        ScrollTrigger.create({
          trigger: journeyEl,
          start: `top+=${pct}% center`,
          onEnter: () => gsap.to(dot, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }),
          onLeaveBack: () => gsap.to(dot, { scale: 0, opacity: 0, duration: 0.3, ease: "power1.inOut" }),
        })
      );
    });
  }

  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="journey-card"]'));
  if (cards.length) {
    gsap.set(cards, { y: "10%", opacity: 0, scale: 0.6 });
    cards.forEach((card, i) => {
      const start = CARD_THRESHOLDS[i] ?? "0%";
      triggers.push(
        ScrollTrigger.create({
          trigger: journeyEl,
          start: `${start} top`,
          onEnter: () =>
            gsap.to(card, {
              y: "0%",
              opacity: 1,
              scale: 1,
              duration: 1.1,
              delay: 0.3,
              ease: "expo.out",
              onComplete: () => gsap.set(card, { clearProps: "transform" }),
            }),
          onLeaveBack: () =>
            gsap.to(card, { y: "10%", opacity: 0, scale: 0.6, duration: 0.4, ease: "power1.inOut" }),
        })
      );
    });
  }

  return {
    destroy: () => {
      triggers.forEach((t) => t.kill());
      gsap.set([...dots, ...cards, pathLine].filter(Boolean) as gsap.TweenTarget[], {
        clearProps: "all",
      });
    },
  };
}

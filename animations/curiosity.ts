import gsap from "gsap";

export type CuriosityHandle = {
  destroy: () => void;
};

// Each word starts muted and "paints" in to full black as the section
// scrolls through the middle of the viewport — CSS ships the words already
// fully black (a readable no-JS/reduced-motion fallback); this only dims
// them once JS actually runs, then reveals them progressively.
export function createCuriosityAnimations(): CuriosityHandle | null {
  const section = document.querySelector<HTMLElement>('[data-anim="curiosity-section"]');
  const words = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="curiosity-word"]'));
  if (!section || !words.length) return null;

  gsap.set(words, { color: "rgba(0, 0, 0, 0.25)" });

  const tween = gsap.to(words, {
    color: "rgba(0, 0, 0, 1)",
    stagger: 0.02,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      end: "bottom 55%",
      scrub: 1,
    },
  });

  return {
    destroy: () => {
      tween.scrollTrigger?.kill();
      gsap.set(words, { clearProps: "color" });
    },
  };
}

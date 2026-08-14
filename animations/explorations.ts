import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type ExplorationsHandle = {
  destroy: () => void;
};

export function createExplorationsAnimations(): ExplorationsHandle | null {
  const section = document.querySelector<HTMLElement>('[data-anim="explorations-section"]');
  const sticky = document.querySelector<HTMLElement>('[data-anim="explorations-sticky"]');
  const viewport = document.querySelector<HTMLElement>('[data-anim="explorations-viewport"]');
  const track = document.querySelector<HTMLElement>('[data-anim="explorations-track"]');
  if (!section || !sticky || !viewport || !track) return null;

  const label = document.querySelector<HTMLElement>('[data-anim="explorations-label"]');
  const headingLines = Array.from(
    document.querySelectorAll<HTMLElement>('[data-anim="explorations-heading-line"]')
  );
  const copy = document.querySelector<HTMLElement>('[data-anim="explorations-copy"]');
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="exploration-card"]'));

  const triggers: ScrollTrigger[] = [];

  // Write pass: hidden starting states for everything this module animates.
  // Same values/easing the rest of the site already uses for section
  // entrances (see animations/journey.ts) — kept consistent rather than
  // inventing a second motion language for this one section.
  if (label) gsap.set(label, { opacity: 0, y: 10 });
  if (headingLines.length) gsap.set(headingLines, { yPercent: 100 });
  if (copy) gsap.set(copy, { opacity: 0, y: 10 });
  if (cards.length) gsap.set(cards, { y: "10%", opacity: 0, scale: 0.6 });

  // Intro reveal (label -> heading lines -> copy) fires once the section
  // starts entering, on any viewport — desktop pins right after via CSS
  // sticky, mobile just keeps scrolling normally past it.
  if (label || headingLines.length || copy) {
    const introTl = gsap.timeline({ paused: true });
    if (label) introTl.to(label, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
    if (headingLines.length) {
      introTl.to(
        headingLines,
        { yPercent: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" },
        label ? 0.15 : 0
      );
    }
    if (copy) introTl.to(copy, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0.5);

    const introTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      onEnter: () => introTl.play(),
      onLeaveBack: () => introTl.reverse(),
    });
    triggers.push(introTrigger);
  }

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    // Read pass: how far the track overhangs the viewport's right edge —
    // measured fresh on every refresh (resize, font load, orientation
    // change), never assumed/hardcoded. Called from invalidateOnRefresh
    // functions only, never from a scrub onUpdate.
    const getDistance = () => {
      const trackRect = track.getBoundingClientRect();
      const viewportRect = viewport.getBoundingClientRect();
      return Math.max(0, trackRect.right - viewportRect.right);
    };

    // The section's own CSS height is a fallback (no-JS/pre-hydration);
    // once mounted, it needs to equal exactly one viewport height plus
    // however far the track has to travel, so CSS position:sticky
    // naturally releases the instant the horizontal tween finishes —
    // no separate pin/unpin coordination required.
    function applySectionHeight() {
      section!.style.height = `${window.innerHeight + getDistance()}px`;
    }
    applySectionHeight();

    const workTween = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getDistance()}`,
        scrub: 1,
        invalidateOnRefresh: true,
        onRefreshInit: applySectionHeight,
      },
    });
    if (workTween.scrollTrigger) triggers.push(workTween.scrollTrigger);

    // Card 01 and whatever of card 02 already sits in the viewport reveal
    // together as the section arrives — everything past that only reveals
    // once horizontal scroll actually brings it into view (below).
    const initiallyVisible = cards.slice(0, 2);
    const revealLater = cards.slice(2);

    if (initiallyVisible.length) {
      const revealTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        once: true,
        onEnter: () =>
          gsap.to(initiallyVisible, {
            y: "0%",
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.1,
            onComplete: () => gsap.set(initiallyVisible, { clearProps: "transform" }),
          }),
      });
      triggers.push(revealTrigger);
    }

    revealLater.forEach((card) => {
      const cardTween = gsap.to(card, {
        y: "0%",
        opacity: 1,
        scale: 1,
        duration: 1.1,
        ease: "expo.out",
        onComplete: () => gsap.set(card, { clearProps: "transform" }),
        scrollTrigger: {
          trigger: card,
          containerAnimation: workTween,
          start: "left right",
          once: true,
        },
      });
      if (cardTween.scrollTrigger) triggers.push(cardTween.scrollTrigger);
    });

    return () => {
      section!.style.removeProperty("height");
    };
  });

  mm.add("(max-width: 767px)", () => {
    // No horizontal pin here — cards stack vertically in normal flow, so
    // each just reveals as it scrolls up into view like any other section.
    cards.forEach((card) => {
      const cardTween = gsap.to(card, {
        y: "0%",
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "expo.out",
        onComplete: () => gsap.set(card, { clearProps: "transform" }),
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          once: true,
        },
      });
      if (cardTween.scrollTrigger) triggers.push(cardTween.scrollTrigger);
    });
  });

  return {
    destroy: () => {
      triggers.forEach((t) => t.kill());
      mm.revert();
      gsap.set(
        [label, ...headingLines, copy, ...cards].filter(Boolean) as gsap.TweenTarget[],
        { clearProps: "all" }
      );
    },
  };
}

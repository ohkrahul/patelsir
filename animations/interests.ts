import gsap from "gsap";

export type InterestsHandle = {
  destroy: () => void;
};

// Scroll-scrubbed, not a one-shot timed tween: a fixed-duration reveal
// fired once at a scroll threshold plays out in real time regardless of
// how fast the user is actually scrolling, so on a normal scroll speed it
// can finish (and settle at fully-visible) before the section has scrolled
// far enough to be properly in view — reading as "nothing happened" even
// though it already did. Tying opacity/transform to scroll progress
// instead means the visible state always matches where the user actually
// is, the same fix already applied to Journey's cards.
//
// Note: the smoothing below only works because it's a real tween's own
// scrub — a bare ScrollTrigger.create({ scrub, onUpdate }) with no
// attached animation ignores the scrub value entirely and always reports
// self.progress as the raw, instant scroll position. Scrubbing a proxy
// object's `progress` property is what actually gets the eased "settle a
// moment after you stop scrolling" behavior.
export function createInterestsAnimations(): InterestsHandle | null {
  const section = document.getElementById("interests");
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="interest-card"]'));
  if (!section || !cards.length) return null;

  const pointsByCard = cards.map((card) =>
    Array.from(card.querySelectorAll<HTMLElement>('[data-anim="interest-point"]'))
  );
  const headingLines = Array.from(
    document.querySelectorAll<HTMLElement>('[data-anim="interests-heading-line"]')
  );

  const ease = gsap.parseEase("power2.out");

  if (window.innerWidth < 768) {
    const timelines: gsap.core.Timeline[] = [];

    gsap.set(cards, { y: "5%", opacity: 0, scale: 0.96 });
    pointsByCard.forEach((points) => gsap.set(points, { opacity: 0, y: 6 }));
    gsap.set(headingLines, { x: 30, opacity: 0 });

    if (headingLines.length) {
      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          once: true,
        },
      });
      headingTimeline.to(headingLines, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
      });
      timelines.push(headingTimeline);
    }

    cards.forEach((card, index) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          once: true,
        },
      });
      timeline.to(card, {
        y: "0%",
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => gsap.set(card, { clearProps: "transform" }),
      });
      timeline.to(
        pointsByCard[index],
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.04, ease: "power2.out" },
        0.08
      );
      timelines.push(timeline);
    });

    return {
      destroy: () => {
        timelines.forEach((timeline) => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        });
        gsap.set([...cards, ...pointsByCard.flat(), ...headingLines], { clearProps: "all" });
      },
    };
  }

  gsap.set(cards, { y: "10%", opacity: 0, scale: 0.6 });
  pointsByCard.forEach((points) => {
    if (points.length) gsap.set(points, { opacity: 0, y: 6 });
  });

  // Each card gets its own non-overlapping third of the scroll range —
  // card 1 reveals, then continued scrolling reveals card 2, then card 3,
  // a deliberate step-by-step progression through the section rather than
  // all three cross-fading into view within one short scroll motion.
  const windowWidth = 1 / cards.length;
  const starts = cards.map((_, i) => i * windowWidth);

  function applyReveal(progress: number) {
    cards.forEach((card, i) => {
      const raw = gsap.utils.clamp(0, 1, (progress - starts[i]) / windowWidth);
      const t = ease(raw);
      gsap.set(card, { y: `${10 * (1 - t)}%`, opacity: t, scale: 0.6 + 0.4 * t });

      const points = pointsByCard[i];
      const pointCount = points.length;
      points.forEach((point, pi) => {
        // Each point needs progressively more of the card's own window
        // before it starts revealing, cascading after the card itself.
        const pointStart = pointCount > 1 ? (pi / pointCount) * 0.5 : 0;
        const pointRaw = gsap.utils.clamp(0, 1, (raw - pointStart) / (1 - pointStart || 1));
        const pt = ease(pointRaw);
        gsap.set(point, { opacity: pt, y: 6 * (1 - pt) });
      });
    });
  }

  const proxy = { progress: 0 };
  const tween = gsap.to(proxy, {
    progress: 1,
    ease: "none",
    onUpdate: () => applyReveal(proxy.progress),
    scrollTrigger: {
      trigger: section,
      // Spans nearly the section's whole transit through the viewport —
      // needs to be wide enough that each card's own third of the range
      // is a deliberate scroll step, not a instant blur through all three.
      start: "top 80%",
      end: "bottom 30%",
      // Eases the rest of the way to wherever the current scroll position
      // points over ~0.35s after scrolling stops, instead of only moving
      // while the wheel itself is moving and freezing the instant it isn't.
      scrub: 0.35,
    },
  });

  // Heading lines slide in from the right, in their own scroll window as
  // the section starts entering — settled well before the cards' own
  // step-by-step sequence begins below.
  let headingTween: gsap.core.Tween | null = null;
  if (headingLines.length) {
    gsap.set(headingLines, { x: 60, opacity: 0 });
    const headingWindowWidth = headingLines.length > 1 ? 0.7 : 1;
    const headingStarts = headingLines.map(
      (_, i) => (i / Math.max(1, headingLines.length - 1)) * (1 - headingWindowWidth)
    );

    function applyHeadingReveal(progress: number) {
      headingLines.forEach((line, i) => {
        const raw = gsap.utils.clamp(0, 1, (progress - headingStarts[i]) / headingWindowWidth);
        const t = ease(raw);
        gsap.set(line, { x: 60 * (1 - t), opacity: t });
      });
    }

    const headingProxy = { progress: 0 };
    headingTween = gsap.to(headingProxy, {
      progress: 1,
      ease: "none",
      onUpdate: () => applyHeadingReveal(headingProxy.progress),
      scrollTrigger: {
        trigger: section,
        // Wide enough that it settles once the heading has scrolled up to
        // a comfortable reading position (viewport's vertical middle) —
        // the previous 95%-70% range completed while the section was
        // still barely peeking in from the bottom, so it looked already
        // fully revealed by the time it was actually visible to read.
        start: "top 90%",
        end: "top 50%",
        scrub: 0.35,
      },
    });
  }

  return {
    destroy: () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      headingTween?.scrollTrigger?.kill();
      headingTween?.kill();
      gsap.set([...cards, ...pointsByCard.flat(), ...headingLines], { clearProps: "all" });
    },
  };
}

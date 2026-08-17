import gsap from "gsap";

export type VoicesHandle = {
  destroy: () => void;
};

export function createVoicesAnimations(): VoicesHandle | null {
  const section = document.getElementById("voices");
  const sticky = document.querySelector<HTMLElement>('[data-anim="voices-sticky"]');
  const leftTrack = document.querySelector<HTMLElement>('[data-anim="voices-track-left"]');
  const rightTrack = document.querySelector<HTMLElement>('[data-anim="voices-track-right"]');
  if (!section || !sticky || !leftTrack || !rightTrack) return null;

  const leftCards = Array.from(leftTrack.querySelectorAll<HTMLElement>('[data-anim="voice-card"]'));
  const rightCards = Array.from(rightTrack.querySelectorAll<HTMLElement>('[data-anim="voice-card"]'));
  const leftInners = Array.from(
    leftTrack.querySelectorAll<HTMLElement>('[data-anim="voice-card-inner"]')
  );
  const rightInners = Array.from(
    rightTrack.querySelectorAll<HTMLElement>('[data-anim="voice-card-inner"]')
  );
  const allCards = [...leftCards, ...rightCards];
  const allInners = [...leftInners, ...rightInners];
  if (!allCards.length) return null;

  if (window.innerWidth >= 768) {
    const label = document.querySelector<HTMLElement>('[data-anim="voices-label"]');
    const headingLines = Array.from(
      document.querySelectorAll<HTMLElement>('[data-anim="voices-heading-line"]')
    );

    const reveal = gsap.timeline({
      scrollTrigger: {
        trigger: leftTrack,
        start: "top 92%",
        end: "top 42%",
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });

    if (label) {
      reveal.from(label, { y: 12, opacity: 0, duration: 0.4, ease: "power2.out" });
    }
    reveal.from(
      headingLines,
      { yPercent: 110, duration: 0.65, stagger: 0.09, ease: "power3.out" },
      0.08
    );
    reveal.from(
      leftCards,
      {
        y: 70,
        opacity: 0,
        rotation: (index) => (index - 1) * 2.5,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      },
      0.2
    );
    reveal.from(
      rightCards,
      {
        x: (index) => (index === 0 ? -90 : 90),
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
      },
      0.38
    );

    return {
      destroy: () => {
        reveal.scrollTrigger?.kill();
        reveal.kill();
        gsap.set([label, ...headingLines, ...allCards].filter(Boolean), { clearProps: "all" });
      },
    };
  }

  const distanceFor = (track: HTMLElement) => Math.max(0, track.scrollWidth - sticky.clientWidth);
  const leftDistance = () => distanceFor(leftTrack);
  const rightDistance = () => distanceFor(rightTrack);
  const scrollDistance = () => Math.max(leftDistance(), rightDistance());
  const rotationFor = (distance: number, cards: HTMLElement[]) => {
    const diameter = cards[0]?.offsetWidth || 1;
    return (distance / (Math.PI * diameter)) * 360;
  };
  const applyLayout = () => {
    section.style.height = `${sticky.clientHeight + scrollDistance()}px`;
    gsap.set(rightTrack, { x: -rightDistance() });
  };
  applyLayout();

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 72px",
      end: () => `+=${scrollDistance()}`,
      scrub: 0.45,
      invalidateOnRefresh: true,
      onRefreshInit: applyLayout,
    },
  });

  timeline.to(leftTrack, { x: () => -leftDistance(), ease: "none" }, 0);
  timeline.to(rightTrack, { x: 0, ease: "none" }, 0);

  timeline.to(
    leftCards,
    { rotation: () => -rotationFor(leftDistance(), leftCards), ease: "none" },
    0
  );
  timeline.to(
    leftInners,
    { rotation: () => rotationFor(leftDistance(), leftCards), ease: "none" },
    0
  );
  timeline.to(
    rightCards,
    { rotation: () => rotationFor(rightDistance(), rightCards), ease: "none" },
    0
  );
  timeline.to(
    rightInners,
    { rotation: () => -rotationFor(rightDistance(), rightCards), ease: "none" },
    0
  );

  return {
    destroy: () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
      section.style.removeProperty("height");
      gsap.set([leftTrack, rightTrack, ...allCards, ...allInners], { clearProps: "transform" });
    },
  };
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoothPath } from "@/components/Journey/JourneyPath";

export type JourneyHandle = {
  destroy: () => void;
};

// The curve interpolates exactly through each anchor (Catmull-Rom), so the
// sample nearest an anchor (in raw path coordinates) is effectively exact —
// no residual error worth a proper binary search.
function rawLengthNear(
  path: SVGPathElement,
  target: { x: number; y: number },
  totalLength: number,
  samples = 400
): number {
  let best = 0;
  let bestDist = Infinity;
  for (let s = 0; s <= samples; s++) {
    const len = (s / samples) * totalLength;
    const p = path.getPointAtLength(len);
    const dist = (p.x - target.x) ** 2 + (p.y - target.y) ** 2;
    if (dist < bestDist) {
      bestDist = dist;
      best = len;
    }
  }
  return best;
}

// vector-effect="non-scaling-stroke" (needed so the stroke doesn't render
// as a squashed ellipse under the SVG's non-uniform CSS stretch) means
// stroke-dasharray/-dashoffset are interpreted in rendered screen pixels,
// not raw viewBox units — this is DrawSVGPlugin's own correction formula
// for that case (getScreenCTM's a/b/c/d encode the actual x/y scale).
function uniformPixelScale(path: SVGPathElement): number {
  const ctm = path.getScreenCTM();
  if (!ctm) return 1;
  const scaleX = Math.sqrt(ctm.a * ctm.a + ctm.b * ctm.b);
  const scaleY = Math.sqrt(ctm.d * ctm.d + ctm.c * ctm.c);
  return (scaleX + scaleY) / 2;
}

// Builds a lookup from scroll progress (0..1 through the section, the same
// number ScrollTrigger reports) to how far along the curve to draw. The two
// aren't the same axis: the curve zigzags left/right between cards, so a
// diagonal stretch covers far more arc-length per pixel of vertical scroll
// than a near-vertical one. Driving the draw length directly off scroll
// progress made the line race ahead on the long diagonal stretches and
// visually detach from the cards it's supposed to be connecting. This
// interpolates piecewise between each card's own (scrollProgress,
// arcLengthFraction) pair instead, so the line reaches card i's anchor at
// exactly the scroll progress where card i actually sits.
function buildProgressMap(scrollProgresses: number[], arcFractions: number[]) {
  const xs = [0, ...scrollProgresses, 1];
  const ys = [0, ...arcFractions, 1];
  return (p: number) => {
    for (let i = 0; i < xs.length - 1; i++) {
      if (p <= xs[i + 1] || i === xs.length - 2) {
        const span = xs[i + 1] - xs[i];
        const t = span > 0 ? gsap.utils.clamp(0, 1, (p - xs[i]) / span) : 0;
        return ys[i] + (ys[i + 1] - ys[i]) * t;
      }
    }
    return 1;
  };
}

export function createJourneyAnimations(): JourneyHandle | null {
  const journeyEl = document.getElementById("about");
  if (!journeyEl) return null;

  const triggers: ScrollTrigger[] = [];

  const pathLine = document.querySelector<SVGPathElement>('[data-anim="journey-path-line"]');
  const wrapEl = document.querySelector<HTMLElement>('[data-anim="journey-path-wrap"]');
  const dots = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="journey-path-dot"]'));
  const cardBoxes = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="journey-card-box"]'));
  const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="journey-card"]'));

  // Each card's own scroll-progress fraction (matches ScrollTrigger's
  // self.progress exactly: how far down journeyEl's own height it sits) —
  // used both to trigger its reveal and as an anchor for the draw-length map.
  let scrollProgresses: number[] = [];
  let mapToArcFraction = (p: number) => p;
  // Populated only when the path/dots rebuild below succeeds (desktop with
  // valid rects) — each card's own position as an arc-length fraction along
  // the curve, so its reveal can be driven off the same number the line's
  // draw length is, instead of a separately-tuned scroll-progress window.
  let arcFractions: number[] = [];
  // Total on-screen pixel length of the curve, for converting a 0..1 draw
  // fraction into an actual stroke-dasharray value. Computed once; see
  // uniformPixelScale for why a plain getTotalLength() isn't enough.
  let pathPixelTotal = 0;

  // Each card's scroll-progress fraction only needs the card's own rect and
  // journeyEl's — both valid on any viewport (cards stay visible on mobile;
  // only the connecting SVG is hidden there) — so compute it unconditionally,
  // independent of whether the path/dots below can be rebuilt.
  if (cardBoxes.length) {
    const journeyRect = journeyEl.getBoundingClientRect();
    scrollProgresses = cardBoxes.map((card) => {
      const r = card.getBoundingClientRect();
      return (r.top + r.height / 2 - journeyRect.top) / journeyRect.height;
    });
  }

  // Read pass: the hand-placed milestone points are only an approximation —
  // each dot (and the curve through it) needs to land exactly on the edge
  // of its own card. Re-measure against the real, pre-animation layout
  // (never read after the entrance animation below has scaled/hidden
  // anything) and rebuild the path/dots from actual card rects.
  if (pathLine && wrapEl && dots.length && cardBoxes.length === dots.length) {
    const wrapRect = wrapEl.getBoundingClientRect();
    // .wrap is display:none under the mobile breakpoint, which collapses its
    // rect to 0x0 — dividing by that would poison every anchor with
    // Infinity/NaN and corrupt the path's `d` into invalid syntax. The path
    // and dots are invisible there anyway, so just leave them as the
    // static placeholder and skip the rebuild (card reveals above still work).
    if (wrapRect.width > 0 && wrapRect.height > 0) {
      const anchors = cardBoxes.map((card, i) => {
        const r = card.getBoundingClientRect();
        // JourneyPath's own wrap <div> is .track's first child, ahead of
        // every .row — so row i is actually :nth-child(i+2), flipping the
        // parity against Journey.module.css's :nth-child(odd/even) rule.
        const leftAligned = i % 2 === 1;
        const x = leftAligned ? r.right : r.left;
        const y = r.top + r.height / 2;
        return {
          x: ((x - wrapRect.left) / wrapRect.width) * 100,
          y: ((y - wrapRect.top) / wrapRect.height) * 100,
        };
      });
      pathLine.setAttribute("d", smoothPath(anchors));
      dots.forEach((dot, i) => {
        dot.style.left = `${anchors[i].x}%`;
        dot.style.top = `${anchors[i].y}%`;
      });

      const rawTotal = pathLine.getTotalLength();
      arcFractions = anchors.map((a) => rawLengthNear(pathLine, a, rawTotal) / rawTotal);
      mapToArcFraction = buildProgressMap(scrollProgresses, arcFractions);
      pathPixelTotal = rawTotal * uniformPixelScale(pathLine);
    }
  }

  // Each card's reveal is driven off the same number the line's own draw
  // length is (arc-length fraction along the curve), not off self.progress
  // independently — a separate, merely-tuned scroll-progress window can
  // only ever approximate when the line visually reaches a dot, and either
  // undershoots (card pops in before the line arrives) or overshoots (line
  // arrives, card still invisible) depending on how curvy that stretch is.
  // Keying reveal to arc-length instead makes t hit 1 at exactly the same
  // instant drawnPx reaches that dot's position — no independent timing
  // left to drift out of sync.
  const revealEase = gsap.parseEase("power2.out");
  const hasArcSync = arcFractions.length === scrollProgresses.length && arcFractions.length > 0;
  const arcRamps = hasArcSync
    ? arcFractions.map((frac, i) => {
        const prevFrac = i > 0 ? arcFractions[i - 1] : 0;
        return Math.max(0.01, (frac - prevFrac) * 0.6);
      })
    : [];
  // Mobile fallback (no path to sync to) — the old progress-window approach.
  const revealRamps = scrollProgresses.map((threshold, i) => {
    const prevThreshold = i > 0 ? scrollProgresses[i - 1] : 0;
    return Math.max(0.02, (threshold - prevThreshold) * 0.35);
  });

  if (pathLine) {
    // Manage the dash array directly rather than through DrawSVGPlugin's
    // gsap.set/tween path: with vector-effect="non-scaling-stroke", the
    // plugin re-measures via getBBox()+getTotalLength()+getScreenCTM() on
    // every single render (its "_live" correction for exactly this case),
    // which forces a layout reflow on every scroll tick. Plain style writes
    // here use the pixel total computed once above instead.
    pathLine.style.strokeDasharray = "0px, 999999px";
    pathLine.style.strokeDashoffset = "0px";
    if (dots.length) gsap.set(dots, { scale: 0, opacity: 0 });
    if (cards.length) gsap.set(cards, { y: "10%", opacity: 0, scale: 0.6 });

    const trigger = ScrollTrigger.create({
      trigger: journeyEl,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const currentArc = mapToArcFraction(self.progress);
        const drawnPx = currentArc * pathPixelTotal;
        pathLine.style.strokeDasharray = `${drawnPx}px, 999999px`;
        scrollProgresses.forEach((threshold, i) => {
          let raw: number;
          if (hasArcSync) {
            const ramp = arcRamps[i];
            raw = gsap.utils.clamp(0, 1, (currentArc - (arcFractions[i] - ramp)) / ramp);
          } else {
            const ramp = revealRamps[i];
            raw = gsap.utils.clamp(0, 1, (self.progress - (threshold - ramp)) / ramp);
          }
          const t = revealEase(raw);
          const dot = dots[i];
          const card = cards[i];
          if (dot) gsap.set(dot, { scale: t, opacity: t });
          if (card) {
            if (t >= 1) {
              // Fully settled: drop the inline transform so the .expanded
              // CSS class (click-to-expand) isn't fighting an inline style.
              gsap.set(card, { opacity: 1, clearProps: "transform" });
            } else {
              gsap.set(card, { y: `${10 * (1 - t)}%`, opacity: t, scale: 0.6 + 0.4 * t });
            }
          }
        });
      },
    });
    triggers.push(trigger);
  }

  return {
    destroy: () => {
      triggers.forEach((t) => t.kill());
      if (pathLine) {
        pathLine.style.strokeDasharray = "";
        pathLine.style.strokeDashoffset = "";
      }
      gsap.set([...dots, ...cards].filter(Boolean) as gsap.TweenTarget[], {
        clearProps: "all",
      });
    },
  };
}

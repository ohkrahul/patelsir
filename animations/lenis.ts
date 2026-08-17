import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

export type LenisEngine = {
  lenis: Lenis;
  freeze: () => void;
  unfreeze: () => void;
  destroy: () => void;
};

export function createLenisEngine(): LenisEngine {
  const usesTouch = window.matchMedia("(pointer: coarse)").matches;

  const lenis = new Lenis({
    duration: 0.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // Wheel smoothing alone leaves touch scrolling native while the GSAP
    // sections update on a separate animation frame, which reads as small
    // jumps on mobile. syncTouch keeps both on the same frame loop; a higher
    // lerp than Lenis's default keeps it responsive instead of feeling heavy.
    syncTouch: usesTouch,
    syncTouchLerp: 0.12,
    touchInertiaExponent: 1.5,
    touchMultiplier: 1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const tick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    freeze: () => lenis.stop(),
    unfreeze: () => lenis.start(),
    destroy: () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    },
  };
}

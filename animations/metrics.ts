import { MOTION } from "./config";

export type Metrics = {
  heroEl: HTMLElement;
  heroHeight: number;
  morphEndPx: number;
  explorationsEl: HTMLElement | null;
  darkStart: number;
  darkEnd: number;
};

export function computeMetrics(): Metrics | null {
  const heroEl = document.getElementById("home");
  if (!heroEl) return null;

  const heroHeight = heroEl.offsetHeight;
  const explorationsEl = document.getElementById("explorations");

  let darkStart = 0;
  let darkEnd = 0;
  if (explorationsEl) {
    const rect = explorationsEl.getBoundingClientRect();
    darkStart = rect.top + window.scrollY;
    darkEnd = darkStart + explorationsEl.offsetHeight;
  }

  return {
    heroEl,
    heroHeight,
    morphEndPx: heroHeight * MOTION.heroMorphEndFraction,
    explorationsEl,
    darkStart,
    darkEnd,
  };
}

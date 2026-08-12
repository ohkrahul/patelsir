export const MOTION = {
  sidebarPadding: 40,
  preloaderDelay: 0.2,
  ctaSpeed: 0.728,
  resizeDebounce: 150,
  magneticInitDelay: 300,
  horizontalScrollDelay: 100,
  desktopBreakpoint: 768,
  heroHeight: 2700,
  heroMorphEndFraction: 0.44,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isDesktop(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= MOTION.desktopBreakpoint;
}

export function isDesktopMotionActive(): boolean {
  return isDesktop() && !prefersReducedMotion();
}

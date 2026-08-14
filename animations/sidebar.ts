import gsap from "gsap";
import { MOTION } from "./config";

export type SidebarScaleHandle = {
  destroy: () => void;
};

export function createSidebarScale(): SidebarScaleHandle | null {
  // Scaling this instead of the outer [data-anim="sidebar-root"] frame
  // deliberately keeps `transform` and the frame's `overflow: hidden`
  // off the same element — combined, Chromium can fail to composite
  // backdrop-filter correctly past a certain point in the scaled box,
  // silently dropping the glass background under some of the lower nav
  // links while their text keeps rendering fine.
  const inner = document.querySelector<HTMLElement>('[data-anim="sidebar-scale"]');
  if (!inner) return null;

  function apply() {
    const scale = Math.min(1, (window.innerHeight - MOTION.sidebarPadding) / inner!.scrollHeight);
    gsap.set(inner, { scale, transformOrigin: "top left" });
  }

  apply();

  return {
    destroy: () => {
      gsap.set(inner, { clearProps: "scale,transformOrigin" });
    },
  };
}

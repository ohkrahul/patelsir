import gsap from "gsap";
import { MOTION } from "./config";

export type SidebarScaleHandle = {
  destroy: () => void;
};

export function createSidebarScale(): SidebarScaleHandle | null {
  const sidebar = document.querySelector<HTMLElement>('[data-anim="sidebar-root"]');
  if (!sidebar) return null;

  function apply() {
    const scale = Math.min(1, (window.innerHeight - MOTION.sidebarPadding) / sidebar!.scrollHeight);
    gsap.set(sidebar, { scale, transformOrigin: "top left" });
  }

  apply();

  return {
    destroy: () => {
      gsap.set(sidebar, { clearProps: "scale,transformOrigin" });
    },
  };
}

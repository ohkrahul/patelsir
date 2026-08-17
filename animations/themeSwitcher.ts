import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Metrics } from "./metrics";

const LIGHT = {
  background: "rgba(102, 80, 63, 0.92)",
  borderColor: "rgba(255, 255, 255, 0.2)",
  color: "#f8e8dc",
};

const DARK = {
  background: "rgba(29, 29, 29, 0.6)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  color: "#ffffff",
};

const TRANSITION_BUFFER = 300;

function darknessAt(scrollY: number, darkStart: number, darkEnd: number): number {
  if (scrollY <= darkStart - TRANSITION_BUFFER) return 0;
  if (scrollY >= darkStart && scrollY <= darkEnd) return 1;
  if (scrollY < darkStart) return (scrollY - (darkStart - TRANSITION_BUFFER)) / TRANSITION_BUFFER;
  if (scrollY <= darkEnd + TRANSITION_BUFFER) return 1 - (scrollY - darkEnd) / TRANSITION_BUFFER;
  return 0;
}

export type ThemeSwitcherHandle = {
  destroy: () => void;
};

export function createThemeSwitcher(metrics: Metrics): ThemeSwitcherHandle | null {
  const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-anim="sidebar-panel"]'));
  if (!panels.length || !metrics.explorationsEl) return null;

  function apply() {
    const t = gsap.utils.clamp(0, 1, darknessAt(window.scrollY, metrics.darkStart, metrics.darkEnd));
    const background = gsap.utils.interpolate(LIGHT.background, DARK.background, t);
    const borderColor = gsap.utils.interpolate(LIGHT.borderColor, DARK.borderColor, t);
    const color = gsap.utils.interpolate(LIGHT.color, DARK.color, t);
    panels.forEach((panel) => {
      panel.style.background = background;
      panel.style.borderColor = borderColor;
      panel.style.color = color;
    });
  }

  apply();

  const trigger = ScrollTrigger.create({
    start: metrics.darkStart - TRANSITION_BUFFER,
    end: metrics.darkEnd + TRANSITION_BUFFER,
    scrub: true,
    onUpdate: apply,
    onRefresh: apply,
  });

  return {
    destroy: () => {
      trigger.kill();
      panels.forEach((panel) => {
        panel.style.removeProperty("background");
        panel.style.removeProperty("border-color");
        panel.style.removeProperty("color");
      });
    },
  };
}

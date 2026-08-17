import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NAV_IDS = ["home", "about", "explorations", "interests", "voices", "faq"];

const ACTIVE_COLOR = "#ffff23";
// scrollSpy sets an inline color on each nav link, which overrides
// whatever light/dark theme the sidebar panel underneath switches to (see
// themeSwitcher.ts) — black inactive text is invisible against Explorations'
// dark panel background, so it needs its own dark-aware value here too.
const INACTIVE_COLOR_LIGHT = "#000000";
const INACTIVE_COLOR_DARK = "#a6a6a6"; // matches var(--muted)
const INACTIVE_OPACITY = 0.45;

export type ScrollSpyHandle = {
  destroy: () => void;
};

export function createScrollSpy(): ScrollSpyHandle | null {
  const targets = NAV_IDS.map((id) => ({ id, el: document.getElementById(id) })).filter(
    (t): t is { id: string; el: HTMLElement } => Boolean(t.el)
  );
  if (!targets.length) return null;

  function linksFor(id: string) {
    return document.querySelectorAll<HTMLElement>(`[data-anim="hero-${id}"]`);
  }

  // MobileNav's overlay links use a separate attribute rather than
  // reusing data-anim="hero-*" — heroMorph.ts looks up that attribute with
  // a singular querySelector, so a second matching element (even a
  // display:none one) risks it grabbing the wrong node on desktop.
  function mobileLinksFor(id: string) {
    return document.querySelectorAll<HTMLElement>(`[data-mobile-nav="${id}"]`);
  }

  const allLinks = NAV_IDS.flatMap((id) => [...linksFor(id), ...mobileLinksFor(id)]);
  let current: string | null = null;

  function update() {
    // The last section can be short enough that its top never reaches
    // the look-ahead probe before scroll runs out of room — e.g. FAQ
    // sitting in the final ~900px of the page. Treat "scrolled to the
    // bottom" as its own case rather than relying on the probe for it.
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const atBottom = window.scrollY >= maxScroll - 2;

    let active = targets[0].id;
    if (atBottom) {
      active = targets[targets.length - 1].id;
    } else {
      const probe = window.scrollY + window.innerHeight * 0.3;
      for (const t of targets) {
        const top = t.el.getBoundingClientRect().top + window.scrollY;
        if (probe >= top) active = t.id;
      }
    }
    if (active === current) return;
    current = active;
    // Explorations is the one dark-themed section right now (see
    // metrics.ts/themeSwitcher.ts) — inactive links need the light-gray
    // reading while it's active, same as everywhere else on the sidebar.
    const inactiveColor = active === "explorations" ? INACTIVE_COLOR_DARK : INACTIVE_COLOR_LIGHT;
    NAV_IDS.forEach((id) => {
      const isActive = id === active;
      gsap.to(linksFor(id), {
        opacity: isActive ? 1 : INACTIVE_OPACITY,
        color: isActive ? ACTIVE_COLOR : inactiveColor,
        duration: 0.3,
      });
      // MobileNav's overlay always sits on the sand background (never
      // Explorations' dark panel), and its inactive rows read as solid
      // black rather than dimmed — no opacity/dark-section handling needed.
      gsap.to(mobileLinksFor(id), {
        color: isActive ? ACTIVE_COLOR : INACTIVE_COLOR_LIGHT,
        duration: 0.3,
      });
    });
  }

  update();
  const trigger = ScrollTrigger.create({ start: 0, end: "max", onUpdate: update, onRefresh: update });

  return {
    destroy: () => {
      trigger.kill();
      gsap.set(allLinks, { clearProps: "opacity,color" });
    },
  };
}

"use client";

import { useLayoutEffect, useRef } from "react";

// Leaving zero margin risks the final glyph's antialiasing/overhang getting
// clipped right at the container edge — fitting to slightly under 100% of
// the available width keeps a hair of breathing room on both sides.
const FIT_FRACTION = 0.956;
const PROBE_FONT_SIZE = 100;

// Fits a single line of text exactly to its container's width by measuring
// rendered text width at a fixed probe size and solving for the font-size
// that scales it to fill the container — the vw-based clamp() this project
// uses everywhere else can't do this on its own because it has no idea how
// wide the actual text run is (SHAURYA and NESH aren't the same length).
// Refits only on mount, once fonts finish swapping in, and on resize — never
// per animation frame — so the scroll-driven hero morph (which reads this
// element's rect once at boot) always measures the final, settled size.
export function useAutoFitWordmark<
  ContainerEl extends HTMLElement = HTMLDivElement,
  TextEl extends HTMLElement = HTMLHeadingElement,
>() {
  const containerRef = useRef<ContainerEl>(null);
  const textRef = useRef<TextEl>(null);

  useLayoutEffect(() => {
    function fit() {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;

      text.style.fontSize = `${PROBE_FONT_SIZE}px`;
      const availableWidth = container.clientWidth;
      const renderedWidth = text.scrollWidth;
      if (!renderedWidth || !availableWidth) return;

      text.style.fontSize = `${PROBE_FONT_SIZE * ((availableWidth * FIT_FRACTION) / renderedWidth)}px`;
    }

    fit();
    const observer = new ResizeObserver(fit);
    if (containerRef.current) observer.observe(containerRef.current);
    document.fonts.ready.then(fit);

    return () => observer.disconnect();
  }, []);

  return { containerRef, textRef };
}

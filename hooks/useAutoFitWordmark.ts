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
  InnerEl extends HTMLElement = HTMLDivElement,
  TextEl extends HTMLElement = HTMLHeadingElement,
>() {
  const containerRef = useRef<ContainerEl>(null);
  const innerRef = useRef<InnerEl>(null);
  const textRef = useRef<TextEl>(null);

  useLayoutEffect(() => {
    function fit() {
      const container = containerRef.current;
      const text = textRef.current;
      if (!container || !text) return;

      // heroMorph.ts promotes this element to position:fixed the instant
      // the page boots (well before any scrolling) and takes over its
      // width/fontSize for its own FLIP interpolation, pinning width via
      // inline style. An inline style always beats the CSS width:max-content
      // rule below, so scrollWidth would stop reflecting the text's true
      // content width and start reflecting that pinned value instead —
      // refitting after that point reads the wrong number and corrupts the
      // font-size. Once heroMorph has claimed the element, leave it alone.
      if (getComputedStyle(text).position === "fixed") return;

      text.style.fontSize = `${PROBE_FONT_SIZE}px`;
      const availableWidth = container.clientWidth;
      const renderedWidth = text.scrollWidth;
      if (!renderedWidth || !availableWidth) return;

      const targetWidth = availableWidth * FIT_FRACTION;
      text.style.fontSize = `${PROBE_FONT_SIZE * (targetWidth / renderedWidth)}px`;

      // The wrapper around the fitted text normally shrink-wraps to it
      // (inline-block sized by in-flow content) so a sibling caption can
      // hang off its corner via right:0 — but heroMorph.ts later promotes
      // the text element to position:fixed once scrolling starts, pulling
      // it out of flow entirely. Left alone, the wrapper would then
      // collapse to whatever's left (the caption's own tiny width),
      // wrecking that caption's positioning. Pinning an explicit width
      // here keeps the wrapper's size stable regardless of what happens
      // to the text element's positioning later.
      if (innerRef.current) innerRef.current.style.width = `${targetWidth}px`;
    }

    fit();
    const observer = new ResizeObserver(fit);
    if (containerRef.current) observer.observe(containerRef.current);
    document.fonts.ready.then(fit);

    return () => observer.disconnect();
  }, []);

  return { containerRef, innerRef, textRef };
}

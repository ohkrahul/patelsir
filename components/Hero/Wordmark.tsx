"use client";

import { useAutoFitWordmark } from "@/hooks/useAutoFitWordmark";

// Matches the shape a CSS module import actually has (a plain string-keyed
// map) rather than naming specific keys — DesktopHero/MobileHero's own
// generated module types are index signatures, which don't structurally
// satisfy a type requiring named properties even when those keys exist.
type WordmarkStyles = { readonly [key: string]: string };

// Shared between DesktopHero and MobileHero because heroMorph.ts looks up
// data-anim="hero-wordmark" with a singular querySelector — only one
// instance may ever carry that attribute, so which one does has to be an
// explicit prop, not left to two independent copies to sort out. It never
// runs on mobile (isDesktopMotionActive() gates it off), so MobileHero
// passes morphBound={false} and skips the attributes entirely.
export default function Wordmark({
  styles,
  morphBound,
}: {
  styles: WordmarkStyles;
  morphBound: boolean;
}) {
  const { containerRef, innerRef, textRef } = useAutoFitWordmark<
    HTMLDivElement,
    HTMLDivElement,
    HTMLHeadingElement
  >();

  return (
    <div ref={containerRef} className={styles.heroWordmark}>
      <div ref={innerRef} className={styles.heroWordmarkInner}>
        <h1
          ref={textRef}
          className={styles.wordmarkShaurya}
          data-anim={morphBound ? "hero-wordmark" : undefined}
        >
          SHAURYA
        </h1>
        <span
          className={styles.wordmark}
          data-anim={morphBound ? "hero-wordmark-secondary" : undefined}
        >
          PATEL
        </span>
      </div>
    </div>
  );
}

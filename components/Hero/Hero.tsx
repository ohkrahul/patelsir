"use client";

import HoverText from "@/components/shared/HoverText";
import { useAutoFitWordmark } from "@/hooks/useAutoFitWordmark";
import styles from "./Hero.module.css";

const LEFT_NAV = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
];

const RIGHT_NAV = [
  { label: "EXPLORATIONS", href: "#explorations" },
  { label: "INTERESTS", href: "#interests" },
  { label: "VOICES", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

const TRAITS = ["CURIOUS", "ANALYTICAL", "CREATIVE", "EXPLORATORY", "AMBITIOUS"];

export default function Hero() {
  const { containerRef, innerRef, textRef } = useAutoFitWordmark<
    HTMLDivElement,
    HTMLDivElement,
    HTMLHeadingElement
  >();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroSticky}>
        <div className={styles.navRow}>
          <ul className={styles.navList}>
            {LEFT_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-anim={`hero-${item.href.slice(1)}`}
                  data-preload="hero-nav"
                >
                  <HoverText text={item.label} />
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.navList}>
            {RIGHT_NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-anim={`hero-${item.href.slice(1)}`}
                  data-preload="hero-nav"
                >
                  <HoverText text={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.composition}>
          <div ref={containerRef} className={styles.heroWordmark}>
            <div ref={innerRef} className={styles.heroWordmarkInner}>
              <h1 ref={textRef} className={styles.wordmarkShaurya} data-anim="hero-wordmark">
                SHAURYA
              </h1>
              <span className={styles.wordmark} data-anim="hero-wordmark-secondary">
                PATEL
              </span>
            </div>
          </div>
          <div className={styles.portraitWrap} data-anim="hero-portrait-wrap">
            <img
              src="/shaurya/portrait.png"
              alt="Shaurya Patel"
              width={558}
              height={447}
              data-anim="hero-portrait"
            />
          </div>
        </div>

        <div className={styles.statementRow}>
          <p className={styles.sideCopy} data-preload="hero-card">
            14 YEARS OLD.
            <br />
            STILL EXPLORING.
          </p>
          <div className={styles.headline}>
            <h2 data-preload="headline-line">CURIOUS BY NATURE.</h2>
            <h2 data-preload="headline-line">BUILDING BY CHOICE.</h2>
          </div>
          <p className={styles.sideCopy} data-preload="hero-card">
            Exploring science, AI, healthcare, research and music.
          </p>
        </div>

        
      </div>
    </section>
  );
}

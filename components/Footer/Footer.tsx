"use client";

import { useRef } from "react";
import FAQ from "./FAQ";
import ImageTrail from "./ImageTrail";
import styles from "./Footer.module.css";

export default function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);

  return (
    <footer className={styles.footer}>
      <ImageTrail targetRef={wordmarkRef} />
      <div ref={wordmarkRef} className={styles.wordmark}>
        <img src="/hero/wordmark.png" alt="Shaurya Patel" />
      </div>
      <div className={styles.copyRow}>
        <p className={styles.copy}>
          I&apos;M 14.
          <br />
          THERE IS A LOT I DON&apos;T KNOW YET.
          <br />
          AND I DON&apos;T THINK I NEED MY ENTIRE FUTURE FIGURED OUT.
        </p>
        <p className={styles.manifesto}>
          <span>KEEP ASKING QUESTIONS.</span>
          <span>KEEP LEARNING.</span>
          <span>KEEP EXPERIMENTING.</span>
          <span>KEEP PLAYING.</span>
          <span>KEEP BUILDING.</span>
        </p>
        <p className={styles.finalLine}>AND SEE WHERE IT TAKES ME.</p>
        <p className={styles.tagline}>Ahmedabad → wherever curiosity leads next.</p>
      </div>
      <FAQ />
    </footer>
  );
}

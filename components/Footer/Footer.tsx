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
          I&apos;M STILL ASKING QUESTIONS.
        </p>
        <p className={styles.tagline}>Ahmedabad → wherever curiosity leads next.</p>
      </div>
      <FAQ />
    </footer>
  );
}

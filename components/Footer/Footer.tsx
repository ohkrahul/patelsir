"use client";

import { useRef } from "react";
import FAQ from "./FAQ";
import ImageTrail from "./ImageTrail";
import styles from "./Footer.module.css";

export default function Footer() {
  const wordmarkRef = useRef<HTMLHeadingElement>(null);

  return (
    <footer className={styles.footer}>
      <ImageTrail targetRef={wordmarkRef} />
      <h2 ref={wordmarkRef} className={styles.wordmark}>
        PATEL
      </h2>
      <div className={styles.copyRow}>
        <p className={styles.copy}>
          14 YEARS IN.
          <br />
          STILL EXPLORING.
        </p>
        <p className={styles.tagline}>Ahmedabad → wherever curiosity leads next.</p>
      </div>
      <FAQ />
    </footer>
  );
}

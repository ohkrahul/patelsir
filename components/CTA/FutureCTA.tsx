import styles from "./FutureCTA.module.css";

export default function FutureCTA() {
  return (
    <section id="whats-next" className={styles.cta}>
      <h2 className={styles.heading}>WHAT&apos;S NEXT?</h2>
      <h2 className={styles.secondary}>STILL EXPLORING.</h2>
      <p className={styles.copy}>
        The goal isn&apos;t to choose one path too early. It&apos;s to keep
        learning, building, competing, experimenting and noticing which
        questions become impossible to ignore.
      </p>
      <a href="#about" className={styles.button}>
        KEEP EXPLORING →
      </a>
    </section>
  );
}

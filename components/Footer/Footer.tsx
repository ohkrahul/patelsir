import FAQ from "./FAQ";
import ImageTrail from "./ImageTrail";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ImageTrail />
      <h2 className={styles.wordmark}>PATEL</h2>
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

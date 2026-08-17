import Wordmark from "./Wordmark";
import MobileIntro from "./MobileIntro";
import styles from "./MobileHero.module.css";

export default function MobileHero() {
  return (
    <div className={styles.wrap}>
      <div className={styles.composition}>
        <Wordmark styles={styles} morphBound={false} />
        <div className={styles.portraitWrap}>
          <img src="/shaurya/portrait.png" alt="Shaurya Patel" width={558} height={447} />
        </div>
      </div>

      <div className={styles.statementRow}>
        <MobileIntro />
        <p className={styles.sideCopy}>
          CURIOUS BY NATURE.
          <br />
          BUILDING BY CHOICE.
        </p>
        <p className={styles.sideCopy}>Exploring science, AI, healthcare, research and music.</p>
      </div>
    </div>
  );
}

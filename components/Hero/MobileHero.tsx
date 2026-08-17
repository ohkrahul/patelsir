import styles from "./MobileHero.module.css";

export default function MobileHero() {
  return (
    <div className={styles.wrap}>
      <div className={styles.composition}>
        <img
          src="/hero/wordmark.png"
          alt="Shaurya Patel"
          className={styles.wordmarkImg}
        />
        <div className={styles.portraitWrap}>
          <img
            src="/hero/character1.png"
            alt="Shaurya Patel"
            width={2752}
            height={1536}
          />
        </div>
      </div>

      <div className={styles.statementRow}>
        <img
          src="/hero/tagline.png"
          alt="Curious by nature. Building by choice."
          className={styles.taglineImg}
        />
        <img
          src="/hero/explore-text.png"
          alt="Exploring science, AI, healthcare, research and music."
          className={styles.exploreImg}
        />
      </div>
    </div>
  );
}

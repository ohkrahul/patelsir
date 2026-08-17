import styles from "./Curiosity.module.css";

const CHIPS = ["AI", "HEALTHCARE", "LIFE SCIENCES", "RESEARCH", "MUSIC"];
const STATEMENT =
  "Some of my most valuable learning has happened outside a classroom. Competitions have taught me to present and defend an idea, working with teams has taught me to listen, and music has reminded me that learning doesn't always need a measurable outcome.";

export default function Curiosity() {
  const words = STATEMENT.split(" ");
  return (
    <section id="curiosity" className={styles.curiosity} data-anim="curiosity-section">
      <span className="eyebrow">CURIOSITY OVERVIEW</span>
      <h2 className={styles.heading}>
        <span data-anim="curiosity-word">WHAT</span>
        <br />
        <span className={styles.waterWord}>I EXPLORE?</span>
      </h2>
      <p className={styles.statement}>
        {words.map((word, i) => (
          <span key={i} data-anim="curiosity-word">
            {word}{" "}
          </span>
        ))}
        {CHIPS.map((chip) => (
          <span key={chip} className={styles.chip}>
            {chip}
          </span>
        ))}
      </p>
    </section>
  );
}

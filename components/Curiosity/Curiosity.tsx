import styles from "./Curiosity.module.css";

const CHIPS = ["AI", "HEALTH", "SCIENCE", "MUSIC"];
const STATEMENT =
  "Science, technology and creativity are different ways of asking the same thing: what is possible when we understand a problem deeply enough to imagine something better?";

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

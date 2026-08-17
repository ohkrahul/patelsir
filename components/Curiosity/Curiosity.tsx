import styles from "./Curiosity.module.css";

const CHIPS = ["AI", "HEALTHCARE", "LIFE SCIENCES", "RESEARCH", "MUSIC"];
const STATEMENT =
  "I'm interested in exploring the world beyond textbooks and classrooms through competitions, research, conversations, new experiences and following a question far enough to see where it leads.";

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

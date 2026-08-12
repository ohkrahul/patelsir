import styles from "./Curiosity.module.css";

const CHIPS = ["AI", "HEALTH", "SCIENCE", "MUSIC"];

export default function Curiosity() {
  return (
    <section id="curiosity" className={styles.curiosity}>
      <span className="eyebrow">CURIOSITY OVERVIEW</span>
      <h2 className={styles.heading}>
        WHAT
        <br />
        I EXPLORE?
      </h2>
      <p className={styles.statement}>
        Science, technology and creativity are different ways of asking the
        same thing: what is possible when we understand a problem deeply
        enough to imagine something better?{" "}
        {CHIPS.map((chip) => (
          <span key={chip} className={styles.chip}>
            {chip}
          </span>
        ))}
      </p>
    </section>
  );
}

import { explorationCards } from "@/data/explorations";
import ExplorationCard from "./ExplorationCard";
import styles from "./Explorations.module.css";

export default function Explorations() {
  return (
    <section id="explorations" className={styles.explorations}>
      <div className={styles.header}>
        <span className={`eyebrow ${styles.eyebrow}`}>SELECTED EXPLORATIONS</span>
        <h2 className={styles.heading}>
          QUESTIONS
          <br />
          TURNED INTO THINGS.
        </h2>
        <p className={styles.intro}>
          A growing collection of projects, competitions, ideas and creative
          interests—each one an excuse to learn something new.
        </p>
      </div>

      <div className={styles.grid}>
        {explorationCards.map((card) => (
          <ExplorationCard
            key={card.id}
            card={card}
            anchorId={card.id === "earlydetect" ? "earlydetect" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

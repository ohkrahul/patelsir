import { explorationCards } from "@/data/explorations";
import ExplorationCard from "./ExplorationCard";
import styles from "./Explorations.module.css";

const HEADING_LINES = ["QUESTIONS", "TURNED INTO", "THINGS."];

export default function Explorations() {
  return (
    <section id="explorations" className={styles.explorations} data-anim="explorations-section">
      <div className={styles.sticky} data-anim="explorations-sticky">
        <div className={styles.intro}>
          <span className={styles.label} data-anim="explorations-label">
            SELECTED EXPLORATIONS
          </span>
          <h2 className={styles.heading}>
            {HEADING_LINES.map((line) => (
              <span key={line} className={styles.headingLineMask}>
                <span className={styles.headingLineInner} data-anim="explorations-heading-line">
                  {line}
                </span>
              </span>
            ))}
          </h2>
          <p className={styles.copy} data-anim="explorations-copy">
            A growing collection of projects, competitions, ideas and creative
            interests—each one an excuse to learn something new.
          </p>
        </div>

        <div className={styles.viewport} data-anim="explorations-viewport">
          <div className={styles.track} data-anim="explorations-track">
            {explorationCards.map((card) => (
              <ExplorationCard
                key={card.id}
                card={card}
                anchorId={card.id === "earlydetect" ? "earlydetect" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

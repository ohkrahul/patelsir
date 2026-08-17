import { explorationCards } from "@/data/explorations";
import ExplorationCard from "./ExplorationCard";
import styles from "./Explorations.module.css";

const HEADING_LINES = ["A QUESTION", "TURNED INTO", "RESEARCH."];

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
            The first idea isn&apos;t always the best one. I&apos;m learning to question
            my assumptions, look for evidence, listen to different expertise
            and let the project change as I learn more.
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

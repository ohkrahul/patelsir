import type { JourneyCard as JourneyCardData } from "@/data/journey";
import styles from "./JourneyCard.module.css";

type Props = {
  card: JourneyCardData;
  index: number;
  total: number;
  expanded: boolean;
  onToggle: () => void;
};

export default function JourneyCard({ card, index, total, expanded, onToggle }: Props) {
  return (
    <div className={styles.row} data-anim="journey-card">
      <article className={`${styles.card} ${expanded ? styles.expanded : ""}`}>
        {card.small && <span className={styles.small}>{card.small}</span>}
        {card.tag && <span className={styles.tag}>{card.tag}</span>}
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.copy}>{card.copy}</p>
        {card.stat && (
          <div className={styles.stat}>
            <div className={styles.statValue}>{card.stat.value}</div>
            <div className={styles.statLabel}>{card.stat.label}</div>
          </div>
        )}
        <div className={styles.detailWrap}>
          <div className={styles.detailInner}>
            <span className={styles.step}>
              STEP {index + 1} OF {total}
            </span>
          </div>
        </div>
        <button
          type="button"
          className={styles.readMore}
          onClick={onToggle}
          aria-expanded={expanded}
        >
          {expanded ? "CLOSE" : "READ MORE"}
        </button>
      </article>
    </div>
  );
}

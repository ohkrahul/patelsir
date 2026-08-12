import type { ExplorationCard as ExplorationCardData } from "@/data/explorations";
import PlaceholderMedia from "@/components/shared/PlaceholderMedia";
import styles from "./ExplorationCard.module.css";

export default function ExplorationCard({
  card,
  anchorId,
}: {
  card: ExplorationCardData;
  anchorId?: string;
}) {
  return (
    <article id={anchorId} className={styles.card}>
      <div className={styles.top}>
        <span className={styles.number}>{card.number}</span>
        <div className={styles.tags}>
          {card.tags.map((tag) => (
            <span
              key={tag}
              className={`${styles.tag} ${card.status ? styles.statusTag : ""}`}
            >
              {card.status === "in-progress" && tag === "COMING SOON" ? "IN PROGRESS…" : tag}
            </span>
          ))}
        </div>
      </div>
      <PlaceholderMedia label={card.title} tone="sand" aspectRatio="16 / 10" />
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.copy}>{card.copy}</p>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </article>
  );
}

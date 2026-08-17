import type { ExplorationCard as ExplorationCardData } from "@/data/explorations";
import Image from "next/image";
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
    <article id={anchorId} className={styles.card} data-anim="exploration-card">
      <div className={styles.media}>
        {card.id === "six-strings" ? (
          <Image
            src="/footer/a.jpeg"
            alt="Shaurya Patel with his guitar"
            fill
            sizes="(max-width: 767px) 100vw, 440px"
            className={`${styles.mediaFill} ${styles.photoFill}`}
          />
        ) : (
          <PlaceholderMedia
            label={card.title}
            tone="dark"
            className={styles.mediaFill}
          />
        )}
        <div className={styles.mediaOverlay}>
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
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{card.title}</h3>
        <p className={styles.copy}>{card.copy}</p>
        <div className={styles.arrowRow}>
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}

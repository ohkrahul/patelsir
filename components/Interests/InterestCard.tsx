import type { InterestCard as InterestCardData } from "@/data/interests";
import styles from "./InterestCard.module.css";

export default function InterestCard({ card }: { card: InterestCardData }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{card.title}</h3>
      <ul className={styles.points}>
        {card.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className={styles.footer}>{card.footer}</p>
    </article>
  );
}

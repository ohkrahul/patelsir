import { interestCards } from "@/data/interests";
import InterestCard from "./InterestCard";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section id="interests" className={styles.interests}>
      <div className={styles.header}>
        <span className="eyebrow">CURRENT INTERESTS</span>
        <h2 className={styles.heading}>
          <span className={styles.headingLine} data-anim="interests-heading-line">
            WHERE CURIOSITY
          </span>
          <br />
          <span className={styles.headingLine} data-anim="interests-heading-line">
            IS LEADING.
          </span>
        </h2>
        <p className={styles.intro}>
          These are not fixed career labels. They&apos;re simply the areas
          Shaurya keeps returning to right now.
        </p>
      </div>

      <div className={styles.grid}>
        {interestCards.map((card) => (
          <InterestCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

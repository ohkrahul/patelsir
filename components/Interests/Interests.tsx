import { interestCards } from "@/data/interests";
import InterestCard from "./InterestCard";
import styles from "./Interests.module.css";

export default function Interests() {
  return (
    <section id="interests" className={styles.interests}>
      <div className={styles.sticky} data-anim="interests-sticky">
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
            I don&apos;t want to define myself by one career or one subject at 14.
            These are the questions and interests I keep returning to right now.
          </p>
        </div>

        <div className={styles.grid} data-anim="interests-track">
          {interestCards.map((card) => (
            <InterestCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

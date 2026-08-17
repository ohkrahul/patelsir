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
          I&apos;m interested in a lot of things, and I don&apos;t think I need to
          choose just one yet. These are the questions I keep returning to.
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

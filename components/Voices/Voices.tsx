import { voices } from "@/data/voices";
import VoiceCard from "./VoiceCard";
import styles from "./Voices.module.css";

export default function Voices() {
  const leftRow = voices.filter((_, index) => index % 2 === 0);
  const rightRow = voices.filter((_, index) => index % 2 === 1);

  return (
    <section id="voices" className={styles.voices}>
      <div className={styles.sticky} data-anim="voices-sticky">
        <div className={styles.header}>
          <span className="eyebrow" data-anim="voices-label">MEDIA &amp; MOMENTS</span>
          <h2 className={styles.heading}>
            <span className={styles.headingMask}>
              <span className={styles.headingLine} data-anim="voices-heading-line">MY JOURNEY</span>
            </span>
            <br />
            <span className={styles.headingMask}>
              <span className={styles.headingLine} data-anim="voices-heading-line">IN THE NEWS.</span>
            </span>
          </h2>
        </div>

        <div className={styles.rails}>
          <div className={styles.grid} data-anim="voices-track-left">
            {leftRow.map((voice) => (
              <VoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
          <div className={styles.grid} data-anim="voices-track-right">
            {rightRow.map((voice) => (
              <VoiceCard key={voice.id} voice={voice} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

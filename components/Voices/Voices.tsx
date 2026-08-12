import { voices } from "@/data/voices";
import VoiceCard from "./VoiceCard";
import styles from "./Voices.module.css";

export default function Voices() {
  return (
    <section id="voices" className={styles.voices}>
      <div className={styles.header}>
        <span className="eyebrow">VOICES</span>
        <h2 className={styles.heading}>
          ALONG
          <br />
          THE WAY.
        </h2>
      </div>

      <div className={styles.grid}>
        {voices.map((voice) => (
          <VoiceCard key={voice.id} voice={voice} />
        ))}
      </div>
    </section>
  );
}

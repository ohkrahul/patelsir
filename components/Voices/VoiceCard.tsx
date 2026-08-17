import type { Voice } from "@/data/voices";
import styles from "./VoiceCard.module.css";

export default function VoiceCard({ voice }: { voice: Voice }) {
  return (
    <article className={styles.card}>
      <p className={`${styles.quote} ${voice.isPlaceholder ? styles.placeholder : ""}`}>
        {voice.quote}
      </p>
      <div>
        <div className={styles.name}>{voice.name}</div>
        <div className={styles.role}>{voice.roleLabel}</div>
      </div>
    </article>
  );
}

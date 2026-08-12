import styles from "./ImageTrail.module.css";

// Static container for now — the cursor-follow image trail behavior
// (spec §66) is wired up in a later, motion-focused checkpoint.
export default function ImageTrail() {
  return <div className={styles.trail} aria-hidden="true" />;
}

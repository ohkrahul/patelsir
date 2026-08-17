import styles from "./MobileIntro.module.css";

// Mobile-only — no desktop equivalent, and unlike the wordmark/nav links
// above it in Hero.tsx, nothing here is wired into heroMorph.ts's FLIP
// system, so it's safe to live in its own file without risking a second
// element competing for a data-anim heroMorph looks up with a singular
// querySelector.
export default function MobileIntro() {
  return (
    <div className={styles.wrap}>
      <div className={styles.intro}>
        14 YEARS OLD.
        <br />
        STILL EXPLORING.
      </div>
      <hr className={styles.divider} />
    </div>
  );
}

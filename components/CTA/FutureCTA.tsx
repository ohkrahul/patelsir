import styles from "./FutureCTA.module.css";

export default function FutureCTA() {
  return (
    <section id="whats-next" className={styles.cta}>
      <h2 className={styles.heading}>LET&apos;S CONNECT.</h2>
      <h2 className={styles.secondary}>GET IN TOUCH.</h2>
      <p className={styles.copy}>
        If you&apos;d like to know more about my research, projects or journey,
        I&apos;d love to hear from you. For media, academic collaborations,
        research conversations or other enquiries, please use the
        guardian-managed contact below.
      </p>
      <span className={styles.button}>EMAIL COMING SOON</span>
    </section>
  );
}

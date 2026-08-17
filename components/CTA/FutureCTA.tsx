import styles from "./FutureCTA.module.css";

export default function FutureCTA() {
  return (
    <section id="whats-next" className={styles.cta}>
      <h2 className={styles.heading}>LET&apos;S CONNECT.</h2>
      <h2 className={styles.secondary}>GET IN TOUCH.</h2>
      <p className={styles.copy}>
        Interested in Shaurya&apos;s research, projects or journey? For media,
        academic collaborations, research conversations or other professional
        enquiries, please get in touch through a parent or guardian.
      </p>
      <span className={styles.button}>GUARDIAN-MANAGED EMAIL COMING SOON</span>
    </section>
  );
}

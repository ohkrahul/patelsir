import { faqItems } from "@/data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <div id="faq" className={styles.faq}>
      {faqItems.map((item) => (
        <details key={item.id} className={styles.item}>
          <summary className={styles.summary}>
            {item.question}
            <span className={styles.plus} aria-hidden="true">
              +
            </span>
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

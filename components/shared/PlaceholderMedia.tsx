import styles from "./PlaceholderMedia.module.css";

type PlaceholderMediaProps = {
  label: string;
  tone?: "sand" | "dark" | "yellow";
  aspectRatio?: string;
  className?: string;
};

export default function PlaceholderMedia({
  label,
  tone = "sand",
  aspectRatio = "4 / 3",
  className,
}: PlaceholderMediaProps) {
  return (
    <div
      role="img"
      aria-label={`${label} — image coming soon`}
      className={`${styles.placeholder} ${styles[tone]} ${className ?? ""}`}
      style={{ aspectRatio }}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
}

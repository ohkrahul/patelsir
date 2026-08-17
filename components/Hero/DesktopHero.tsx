import HoverText from "@/components/shared/HoverText";
import styles from "./DesktopHero.module.css";

const LEFT_NAV = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPLORATIONS", href: "#explorations" },
];

const RIGHT_NAV = [
  { label: "INTERESTS", href: "#interests" },
  { label: "MEDIA", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

export default function DesktopHero() {
  return (
    <div className={styles.heroSticky}>
      <div className={styles.navRow}>
        <ul className={styles.navList}>
          {LEFT_NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-anim={`hero-${item.href.slice(1)}`}
                data-preload="hero-nav"
              >
                <HoverText text={item.label} />
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.navList}>
          {RIGHT_NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                data-anim={`hero-${item.href.slice(1)}`}
                data-preload="hero-nav"
              >
                <HoverText text={item.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.composition}>
        <img
          src="/hero/wordmark.png"
          alt="Shaurya Patel"
          className={styles.wordmarkImg}
          data-anim="hero-wordmark"
        />
        <div className={styles.portraitWrap} data-anim="hero-portrait-wrap">
          <img
            src="/hero/character1.png"
            alt="Shaurya Patel"
            width={2432}
            height={1635}
            data-anim="hero-portrait"
          />
        </div>
      </div>

      <div className={styles.statementRow}>
        <img
          src="/hero/tagline.png"
          alt="Curious by nature. Building by choice."
          className={styles.taglineImg}
          data-preload="hero-card"
        />
        <img
          src="/hero/explore-text.png"
          alt="Exploring science, AI, healthcare, research and music."
          className={styles.exploreImg}
          data-preload="hero-card"
        />
      </div>
    </div>
  );
}

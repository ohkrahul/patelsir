import HoverText from "@/components/shared/HoverText";
import styles from "./Hero.module.css";

const LEFT_NAV = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EARLYDETECT", href: "#earlydetect" },
];

const RIGHT_NAV = [
  { label: "EXPLORATIONS", href: "#explorations" },
  { label: "INTERESTS", href: "#interests" },
  { label: "VOICES", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

const TRAITS = ["CURIOUS", "ANALYTICAL", "CREATIVE", "EXPLORATORY", "AMBITIOUS"];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
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
          <h1 className={styles.wordmark} data-anim="hero-wordmark">
            PATEL
          </h1>
          <div className={styles.portraitWrap} data-anim="hero-portrait-wrap">
            <img
              src="/shaurya/portrait.png"
              alt="Shaurya Patel"
              width={558}
              height={447}
              data-anim="hero-portrait"
            />
          </div>
        </div>

        <div className={styles.statementRow}>
          <p className={styles.sideCopy}>
            14 YEARS OLD.
            <br />
            STILL EXPLORING.
          </p>
          <div className={styles.headline}>
            <h2 data-preload="headline-line">CURIOUS BY NATURE.</h2>
            <h2 data-preload="headline-line">BUILDING BY CHOICE.</h2>
          </div>
          <p className={styles.sideCopy}>
            Exploring science, AI, healthcare, research and music.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card} data-anim="hero-card-14" data-preload="hero-card">
            <div className={styles.statValue} data-anim="hero-stat-14">
              14
            </div>
            <div className={styles.statLabel}>Years Old</div>
          </div>
          <div className={styles.card} data-anim="hero-card-gold" data-preload="hero-card">
            <div className={styles.statValue} data-anim="hero-stat-gold">
              GOLD
            </div>
            <div className={styles.statLabel}>IRIS National Fair 2025–26</div>
          </div>
          <div className={`${styles.card} ${styles.traits}`} data-preload="hero-card">
            {TRAITS.map((trait) => (
              <span key={trait} className={styles.trait}>
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

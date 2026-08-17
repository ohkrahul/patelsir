import HoverText from "@/components/shared/HoverText";
import styles from "./DesktopSidebar.module.css";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPLORATIONS", href: "#explorations" },
  { label: "INTERESTS", href: "#interests" },
  { label: "MEDIA", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

export default function DesktopSidebar() {
  return (
    <nav className={styles.sidebar} data-anim="sidebar-root" aria-label="Primary">
      <div className={styles.sidebarInner} data-anim="sidebar-scale">
        <div className={`${styles.panel} ${styles.logo}`} data-anim="sidebar-panel">
          <span data-ghost="hero-wordmark">SHAURYA</span>
        </div>



        <div
          className={`${styles.panel} ${styles.identity}`}
          data-anim="sidebar-panel"
        >
          <span className={styles.identityLabel}>Profile</span>
          <span className={styles.identityMuted}>Ahmedabad, India</span>
          <span className={styles.identityMuted}>Class X · Adani International School</span>
          <span className={styles.identityMuted}>Student · Researcher · Guitarist</span>
        </div>

        <div className={`${styles.panel} ${styles.stats}`} data-anim="sidebar-panel">
          <div className={styles.stat}>
            <div className={styles.statValue} data-ghost="hero-stat-14">
              14
            </div>
            <div className={styles.statText}>
              <strong>Years old</strong>
              <span>Class X student</span>
            </div>
          </div>
          <div className={styles.stat}>
            <div className={`${styles.statValue} ${styles.gold}`} data-ghost="hero-stat-gold">
              2×
            </div>
            <div className={styles.statText}>
              <strong>IRIS Golds</strong>
              <span>Two consecutive years</span>
            </div>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.nav}`} data-anim="sidebar-panel">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              data-ghost={`hero-${item.href.slice(1)}`}
            >
              <HoverText text={item.label} />
            </a>
          ))}
        </div>

        <div className={`${styles.panel} ${styles.ticker}`} data-anim="sidebar-panel">
          Life Sciences · Healthcare · AI · Guitar
        </div>

        <a href="#whats-next" className={styles.cta} data-anim="sidebar-cta">
          Connect With Me →
        </a>
      </div>
    </nav>
  );
}

import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <DesktopHero />
      <MobileHero />
    </section>
  );
}

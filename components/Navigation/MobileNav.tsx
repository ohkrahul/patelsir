"use client";

import { useState } from "react";
import styles from "./MobileNav.module.css";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EARLYDETECT", href: "#earlydetect" },
  { label: "EXPLORATIONS", href: "#explorations" },
  { label: "INTERESTS", href: "#interests" },
  { label: "VOICES", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <a href="#home" className={styles.logo}>
          PATEL
        </a>
        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-menu"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles.overlayLink}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}

"use client";

import { useState } from "react";
import styles from "./MobileNav.module.css";

const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPLORATIONS", href: "#explorations" },
  { label: "INTERESTS", href: "#interests" },
  { label: "MEDIA", href: "#voices" },
  { label: "FAQ", href: "#faq" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.04 1 2.48 1s2.5 1.12 2.5 2.5zM.22 8.24h4.5V23H.22V8.24zM8.5 8.24h4.31v2.01h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.99c0-1.67-.03-3.81-2.32-3.81-2.33 0-2.69 1.82-2.69 3.69V23H8.5V8.24z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    ),
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <a href="#home" className={styles.logo} aria-label="Shaurya Patel — home">
          <img src="/hero/6.png" alt="Shaurya Patel" />
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
        <ul className={styles.overlayList}>
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.overlayLink}
                data-mobile-nav={item.href.slice(1)}
                onClick={() => setOpen(false)}
              >
                <span className={styles.overlayNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.overlayLabel}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.overlaySocial}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className={styles.socialIcon}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

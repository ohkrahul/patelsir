"use client";

import { useState } from "react";
import { journeyCards } from "@/data/journey";
import JourneyCard from "./JourneyCard";
import JourneyPath from "./JourneyPath";
import styles from "./Journey.module.css";

export default function Journey() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="about" className={styles.journey}>
      <div className={styles.header}>
        <span className="eyebrow">
          CURIOSITY CAME FIRST.
          <br />
          THE JOURNEY CONTINUES.
        </span>
        <h2 className={styles.heading}>
          WHO IS SHAURYA? (&amp;)
          <br />
          THE JOURNEY SO FAR
        </h2>
        <p className={styles.intro}>
          I don&apos;t think I&apos;ve figured that out yet—and at 14, I don&apos;t think
          I&apos;m supposed to. I&apos;m a student and researcher who enjoys following
          questions wherever they lead, from life sciences and healthcare to
          artificial intelligence, technology and music.
        </p>
      </div>

      <div
        className={styles.track}
        onClick={(event) => {
          if (!(event.target as HTMLElement).closest('[data-anim="journey-card"]')) {
            setExpandedId(null);
          }
        }}
      >
        <JourneyPath />
        {journeyCards.map((card, index) => (
          <JourneyCard
            key={card.id}
            card={card}
            index={index}
            total={journeyCards.length}
            expanded={expandedId === card.id}
            onToggle={() =>
              setExpandedId((current) => (current === card.id ? null : card.id))
            }
          />
        ))}
      </div>
    </section>
  );
}

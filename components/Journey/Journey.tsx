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
          START CURIOUS.
          <br />
          KEEP EXPLORING.
        </span>
        <h2 className={styles.heading}>
          ABOUT ME (&amp;)
          <br />
          THE JOURNEY SO FAR
        </h2>
        <p className={styles.intro}>
          I&apos;m 14, so I&apos;m not supposed to have everything figured out yet.
          That&apos;s what makes this interesting. I&apos;m exploring science, AI,
          healthcare, research, technology and music by following the
          questions that keep pulling me back.
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

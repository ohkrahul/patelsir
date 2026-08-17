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
      <div className={styles.homeIntro}>
        <div className={styles.homeIntroLead}>
          <span className="eyebrow">HI, I&apos;M SHAURYA.</span>
          <h2 className={styles.homeIntroHeading}>
            <span className={styles.homeIntroLine}>I HAVE</span>
            <span className={styles.homeIntroCursive}>Questions.</span>
            <span className={styles.homeIntroAnswer}>
              I&apos;M LEARNING HOW TO FIND THE ANSWERS.
            </span>
          </h2>
        </div>
        <div className={styles.homeIntroCopy}>
          <p>
            I&apos;m <mark className={styles.textHighlight}>14, a Class X student</mark> at Adani International School,
            Ahmedabad, and I&apos;m curious about how things work—especially when
            <mark className={styles.textHighlight}>science, technology and healthcare</mark> come together.
          </p>
          <p>
            I&apos;m interested in life sciences, scientific research and
            technology. I&apos;ve been learning what happens when a question becomes
            a <mark className={styles.textHighlight}>research problem</mark>, an idea becomes a project and a project gets
            tested on a <mark className={styles.textHighlight}>national stage</mark>.
          </p>
          <p>
            Outside academics, I love <mark className={styles.textHighlight}>playing guitar</mark>. I&apos;m still figuring out
            where these interests will take me. For now, I&apos;m <mark className={styles.textHighlight}>enjoying the journey</mark>.
          </p>
          <a href="#journey-story" className={styles.homeIntroLink}>
            EXPLORE MY JOURNEY →
          </a>
        </div>
      </div>

      <div id="journey-story" className={styles.header}>
        <span className="eyebrow">ABOUT ME · STILL FIGURING IT OUT.</span>
        <h2 className={styles.heading}>SO, WHO AM I?</h2>
        <p className={styles.intro}>
          I&apos;m still figuring that out. I&apos;m a student, researcher and someone
          who enjoys following a question until I understand it a little better.
        </p>
      </div>

      <div className={styles.aboutDetails}>
        <div className={styles.aboutNarrative}>
          <p>
            My interests currently lie at the intersection of life sciences,
            healthcare, technology and scientific innovation.
          </p>
          <p>
            My research journey has taught me that finding an answer isn&apos;t
            always the most important part. <mark className={styles.textHighlight}>Sometimes,
            asking the right question is.</mark>
          </p>
          <p>
            I&apos;ve learned to look at a problem from different perspectives,
            understand the science behind it, work with data, listen to people
            with different areas of expertise and be willing to change my
            thinking when the evidence tells me to.
          </p>
          <p className={styles.musicNote}>
            <span>And then there&apos;s music.</span>
            When I&apos;m not researching or studying, I love playing the guitar. It
            gives me a completely different way to think and express myself.
          </p>
        </div>

      </div>

      <section className={styles.outsideClassroom} aria-labelledby="outside-classroom-title">
        <div className={styles.outsideHeading}>
          <span className="eyebrow">LEARNING BEYOND LESSONS</span>
          <h3 id="outside-classroom-title">
            OUTSIDE THE
            <br />
            CLASSROOM.
          </h3>
          <p>Some of my most valuable learning has happened outside a classroom.</p>
        </div>
        <ol className={styles.outsideLessons}>
          <li>
            <span>01</span>
            <p>Research competitions have taught me how to present and defend an idea.</p>
          </li>
          <li>
            <span>02</span>
            <p>Working with different teams has taught me to listen.</p>
          </li>
          <li>
            <span>03</span>
            <p>Travelling for competitions has exposed me to people and ideas I wouldn&apos;t otherwise have encountered.</p>
          </li>
          <li>
            <span>04</span>
            <p>Playing music has reminded me that learning doesn&apos;t always have to have a measurable outcome.</p>
          </li>
        </ol>
      </section>

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

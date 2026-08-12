# SHAURYA PATEL — NEXT.JS PORTFOLIO BUILD SPECIFICATION

## PRIMARY OBJECTIVE

Build a premium single-page personal portfolio website for:

**Shaurya Patel**

The visual language, color system, page geometry, smooth scrolling philosophy, sidebar behavior and animation choreography must be extremely close to the reference website:

**https://heynesh.com/**

However:

* Do NOT use NESH/Nenad branding.
* Do NOT use the original person's photographs.
* Do NOT use original project assets.
* Do NOT copy original written content.
* Do NOT copy or redistribute commercial font files.
* Rebuild the experience from scratch in Next.js.
* All identity, content and imagery must belong to Shaurya.
* Preserve the motion grammar, layout philosophy, colors and animation timings.
* Do not simplify the animations.
* Do not replace GSAP interactions with generic Framer Motion fade-ins.
* Do not redesign the page into a conventional portfolio.

The website should feel like the same creative/motion universe as HeyNesh, but the story must be completely about a 14-year-old student, researcher and explorer.

---

# 1. PERSON PROFILE

Use the following information throughout the website.

Name:

**Shaurya Patel**

Age:

**14**

School:

**Adani International School, Ahmedabad**

Core interests:

* Science
* Artificial Intelligence
* Technology
* Healthcare
* Research
* Entrepreneurship
* Innovation
* Guitar
* Music

Featured project:

**EarlyDetect-AI**

Recognition:

**Gold Medal recognition at IRIS National Fair 2025–26**

Positioning:

Shaurya is not being presented as an established professional or AI expert.

Present him as:

**A curious student exploring science, AI, healthcare, technology, creativity and meaningful problem-solving.**

The tone should communicate:

* curiosity
* potential
* experimentation
* intelligence
* youthful confidence
* exploration
* creativity
* ambition

Avoid:

* corporate consultant language
* calling him an AI expert
* excessive university-admissions language
* making him sound like a founder with 20 years of experience
* claiming EarlyDetect-AI is a clinically validated medical product

---

# 2. TECH STACK

Build using:

```text
Next.js App Router
TypeScript
React
GSAP
GSAP ScrollTrigger
GSAP Flip
GSAP SplitText where available
Lenis
Swiper
CSS Modules or global SCSS/CSS
```

Tailwind may be used for basic utilities if already installed, but:

**Do not build the motion system in Tailwind classes.**

Keep the important animation geometry in dedicated CSS and TypeScript animation modules.

Do NOT use Framer Motion for the core animations.

GSAP must control:

* preloader
* hero entrance
* hero → sidebar transformation
* scroll-bound typography
* journey cards
* horizontal work section
* theme switching
* CTA sequence
* button hovers
* image trail
* custom cursor
* number animation
* magnetic elements

---

# 3. RECOMMENDED FILE STRUCTURE

Create:

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  Preloader/
    Preloader.tsx

  Navigation/
    DesktopSidebar.tsx
    MobileNav.tsx

  Hero/
    Hero.tsx
    HeroWordmark.tsx
    HeroPortrait.tsx
    HeroStats.tsx
    HeroNavigation.tsx
    HeroGhostTargets.tsx

  Journey/
    Journey.tsx
    JourneyCard.tsx
    JourneyPath.tsx

  Explorations/
    Explorations.tsx
    ExplorationCard.tsx

  Curiosity/
    Curiosity.tsx

  Interests/
    Interests.tsx
    InterestCard.tsx

  CTA/
    FutureCTA.tsx

  Voices/
    Voices.tsx

  Footer/
    Footer.tsx
    FAQ.tsx
    ImageTrail.tsx

animations/
  config.ts
  lenis.ts
  preloader.ts
  sidebar.ts
  heroMorph.ts
  heroPortrait.ts
  textReveal.ts
  journey.ts
  horizontalScroll.ts
  themeSwitcher.ts
  numbers.ts
  cards.ts
  cta.ts
  swiper.ts
  imageTrail.ts
  buttonHover.ts
  magnetic.ts
  resize.ts

hooks/
  useAnimationEngine.ts

data/
  journey.ts
  explorations.ts
  interests.ts
  voices.ts
  faq.ts

public/
  shaurya/
    portrait.webp
    portrait-mobile.webp

    earlydetect/
      hero.webp
      interface.webp
      research.webp

    iris/
      fair.webp
      medal.webp
      presentation.webp

    music/
      guitar.webp

    trail/
      01.webp
      02.webp
      ...
```

---

# 4. EXACT COLOR SYSTEM

Do not invent a new palette.

Use:

```css
:root {
  --sand: #d5cfbe;

  --yellow: #ffff23;

  --black: #000000;
  --white: #ffffff;

  --card: #e0dfc5;

  --card-glass:
    rgba(223, 222, 206, 0.8);

  --hero-glass:
    rgba(194, 184, 172, 0.3);

  --dark-surface:
    #222222;

  --muted:
    #a6a6a6;

  --nav-item-light:
    #ebeada;

  --nav-item-dark:
    rgba(57, 57, 57, 0.9);

  --panel-dark:
    rgba(29, 29, 29, 0.6);

  --panel-dark-strong:
    rgba(29, 29, 29, 0.9);

  --light-border:
    rgba(255, 255, 255, 0.2);

  --dark-border:
    rgba(255, 255, 255, 0.1);
}
```

Body:

```css
body {
  background: #d5cfbe;
  color: #000;
  overflow: clip;
  line-height: 1.6;
}
```

Yellow must remain rare.

Use yellow primarily for:

* wordmark accents
* key buttons
* active navigation
* small tags
* milestone points
* selected highlights
* CTA
* microinteraction confirmation

Do NOT fill entire sections with yellow.

---

# 5. GLASS CARD SYSTEM

Hero glass cards:

```css
background: rgba(194, 184, 172, 0.3);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);

border:
  1px solid rgba(255,255,255,0.2);

border-radius:
  0.475em;
```

Light sidebar panels:

```css
background:
  rgba(223,222,206,0.8);

border:
  1px solid rgba(255,255,255,0.2);

backdrop-filter:
  blur(20px);
```

Dark sidebar panels:

```css
background:
  rgba(29,29,29,0.6);

border:
  1px solid rgba(255,255,255,0.10);
```

Do not exaggerate glassmorphism.

No glowing borders.

No neon gradients.

No blue AI gradients.

---

# 6. TYPOGRAPHY

Do NOT copy commercial font files from the reference.

Closest free development combination:

Display:

**Archivo / Archivo Expanded**

Body:

**Switzer**

If proper licenses are purchased later, the typography may be switched closer to the reference.

Root typography:

```css
body {
  font-size:
    clamp(
      0.75rem,
      1.18vw,
      1.5rem
    );
}
```

Mobile <=479:

```css
body {
  font-size:
    clamp(
      0.91rem,
      4.53vw,
      2.17rem
    );
}
```

Most sizes should use `em`.

Do NOT hardcode everything in px.

Approximate desktop sizes at 1440px:

```text
Hero headline:
4.49em

Normal section H2:
4em

Huge display:
6.475em

Large wordmark:
4.7em+

Card headline:
1.4–1.65em

Body:
1em

Nav:
1.059em

Labels:
0.822em
```

Use tight display line-height:

```text
0.95–1.03
```

Body:

```text
1.55–1.65
```

---

# 7. DESKTOP MASTER GEOMETRY

Desktop reference viewport:

```text
1440 × 900
```

Use this as the primary visual QA viewport.

Overall target page height:

```text
approximately 13,860px
```

Main desktop sidebar:

```text
left:
20px

top:
18px

width:
~267px

height:
viewport
```

Main content:

```text
left:
~302px

width:
~1118px
```

Normal content container:

```css
width:
77.64vw;
```

Hero container:

```text
approximately 1340px wide
x ≈ 50px
```

---

# 8. MASTER SECTION SCROLL MAP

At 1440 × 900 design around approximately this document geometry:

```text
0
│
│ HERO
│ height: 2700
│
├──────── About begins OVER hero at ~1530
│
│ JOURNEY
│ y: ~1530
│ ending: ~4650
│
├────────
│ EXPLORATIONS / PROJECTS
│ y: ~4650
│ height: ~3600
│ dark
│
├────────
│ CURIOSITY / WHAT I EXPLORE
│ y: ~8250
│ height: ~1240
│
├────────
│ CURRENT FRONTIERS
│ y: ~9490
│ height: ~1234
│
├────────
│ WHAT'S NEXT CTA
│ y: ~10724
│ height: ~1056
│
├────────
│ VOICES
│ y: ~11780
│ height: ~847
│
├────────
│ FOOTER / FAQ
│ y: ~12627
│ height: ~1235
│
└──────── approximately 13860
```

Do not treat each section as an isolated 100vh panel.

The HERO and JOURNEY intentionally overlap.

---

# 9. GLOBAL LENIS CONFIGURATION

Use one scrolling clock.

Set Lenis approximately:

```ts
const lenis = new Lenis({
  duration: 0.4,

  easing: (t: number) =>
    Math.min(
      1,
      1.001 - Math.pow(2, -10 * t)
    ),

  smoothWheel: true,
});
```

Wire it:

```ts
lenis.on(
  "scroll",
  ScrollTrigger.update
);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
```

Do NOT use two independent RAF loops.

Scrolling must feel:

* responsive
* controlled
* premium
* snappy

NOT:

* floating
* delayed
* excessively buttery
* disconnected from mouse movement

---

# 10. GLOBAL GSAP CONFIG

Create:

```ts
export const MOTION = {
  sidebarPadding: 40,

  preloaderDelay: 0.2,

  ctaSpeed: 0.728,

  resizeDebounce: 150,

  magneticInitDelay: 300,

  horizontalScrollDelay: 100,
};
```

Core eases:

```text
power1.inOut
power2.out
power3.out
expo.out
back.out(1.7)
back.out(2)
none
```

Avoid:

```text
elastic
bounce
spring
```

for the main interface.

---

# 11. INITIAL PAGE LOAD

## Scroll position

Always begin at:

```text
scrollY = 0
```

Set:

```ts
history.scrollRestoration = "manual";
```

On boot:

```ts
window.scrollTo(0, 0);
```

Then wait for layout using a double RAF before measuring:

```ts
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    initializeAnimations();
  });
});
```

---

# 12. PRELOADER

## Desktop >=768 only

Freeze Lenis while preloader plays.

Preloader contains giant:

# SHAURYA®

Use SVG letters or individually masked wordmark fragments.

The preloader should feel identical in principle to reference.

### Initial position

Wordmark begins displaced horizontally toward the right side while vertically centered.

Individual wordmark groups begin:

```text
yPercent: 110
```

inside clipped wrappers.

---

## PRELOADER TIMELINE

### 0.00–0.20

Sand screen only:

```text
#d5cfbe
```

No UI visible.

---

### 0.20–0.90

Reveal letters of:

```text
SHAURYA
```

one after another.

Masked vertical reveal:

```ts
from:
yPercent: 110

to:
yPercent: 0
```

Use approximately:

```text
duration 0.4–0.5
small stagger
power2.out
```

Because SHAURYA has seven letters instead of four, reduce the stagger so the overall reveal remains quick.

Do NOT make a seven-letter preloader excessively long.

---

### 0.90–1.40

Whole SHAURYA wordmark settles into hero position.

Scale/translate smoothly.

Do not fade between separate logos.

The wordmark should feel like one physical object.

---

### 1.30–2.00

Shaurya portrait reveals.

Initial:

```ts
{
  opacity: 0,
  scale: 0.88,
  filter: "blur(20px)"
}
```

Final:

```ts
{
  opacity: 1,
  scale: 1,
  filter: "blur(0px)"
}
```

Approx:

```text
duration:
1.1

ease:
power2.out
```

---

### 1.55–2.30

Hero main headline reveals line-by-line.

Initial:

```text
opacity 0
scale .9
blur 10px
```

Final:

```text
opacity 1
scale 1
blur 0
```

Line stagger:

```text
~0.1
```

---

### 1.80–2.40

Hero nav labels reveal from masks:

```text
yPercent:
100 → 0

duration:
0.4

ease:
power2.out
```

---

### 1.90–2.80

Glass cards reveal.

Use:

```ts
from: {
  y: "10%",
  opacity: 0,
  scale: 0.6,
}

to: {
  y: "0%",
  opacity: 1,
  scale: 1,
  duration: 1.1,
  ease: "expo.out",
}
```

Stagger the cards.

---

### Around 3 seconds

Release scroll.

Call:

```ts
lenis.start();
```

---

# 13. HERO CONTENT

Hero height:

```css
min-height: 2700px;
```

Inside:

```css
.heroSticky {
  height: 100vh;
  position: sticky;
  top: 0;
}
```

---

# 14. HERO VISUAL COMPOSITION

The hero needs five primary visual systems.

## A. Giant wordmark

Huge:

# SHAURYA®

Across the upper/central screen.

Black or yellow depending on exact layer treatment.

Portrait may overlap parts of letters.

---

## B. Hero portrait

Use:

```text
/public/shaurya/portrait.webp
```

Temporary placeholder until final image exists.

Portrait should be editorial, cut out cleanly and not placed inside a conventional square profile card.

---

## C. Main statement

Use:

# CURIOUS

# BY NATURE.

# BUILDING

# BY CHOICE.

or equivalent line wrapping depending on composition.

Do NOT use:

"Full Stack Developer"

"AI Expert"

etc.

---

## D. Small left copy

Use:

```text
14 YEARS OLD.
STILL EXPLORING.
```

---

## E. Small right copy

Use:

```text
Exploring science,
AI, healthcare,
research and music.
```

---

# 15. HERO CARDS

Create three glass cards.

### Card 1

```text
14
YEARS OLD
```

Use odometer-style number reveal if appropriate.

---

### Card 2

```text
GOLD
IRIS NATIONAL FAIR
2025–26
```

---

### Card 3

Traits:

```text
CURIOUS
ANALYTICAL
CREATIVE
EXPLORATORY
AMBITIOUS
```

Do not overload card.

---

# 16. HERO NAVIGATION BEFORE SCROLL

Hero navigation should visually sit inside hero as horizontal text.

Use:

```text
HOME
ABOUT
EARLYDETECT
EXPLORATIONS
INTERESTS
VOICES
FAQ
```

Split visually around central composition.

Example:

Left:

```text
HOME
ABOUT
EARLYDETECT
```

Right:

```text
EXPLORATIONS
INTERESTS
VOICES
FAQ
```

Each item must have an invisible sidebar destination.

---

# 17. THE MOST IMPORTANT ANIMATION: HERO → SIDEBAR

THIS IS THE SIGNATURE EFFECT.

Do not fake it with:

```text
hero fades out
sidebar fades in
```

Wrong.

Instead:

The same visual objects must appear to physically transform into sidebar objects.

Use FLIP-style geometry.

---

# 18. HERO GHOST TARGET SYSTEM

Create invisible sidebar target elements.

Source objects:

```text
hero SHAURYA logo
hero navigation labels
hero stats backgrounds
hero profile / identity elements
```

Target objects:

```text
sidebar logo
sidebar nav buttons
sidebar stats
sidebar profile destination
```

Use:

```ts
getBoundingClientRect()
```

to measure all source and target rectangles.

CRITICAL:

Phase 1:

```text
READ ALL DOM RECTANGLES
```

Phase 2:

```text
WRITE ALL TRANSFORMS
```

Never alternate:

```text
read
write
read
write
```

---

# 19. HERO MORPH SCROLL RANGE

On desktop:

Main morph:

```text
trigger:
.hero

start:
top top

end:
44% top

scrub:
1
```

Since hero is around 2700px:

```text
44% ≈ 1188px
```

Registered mark / final logo details may continue toward:

```text
50% ≈ 1350px
```

---

# 20. HERO SCROLL: EXACT USER EXPERIENCE

## SCROLL Y = 0

User sees complete hero.

Nothing looks like a conventional sidebar yet.

Large SHAURYA.

Portrait.

Headline.

Navigation across hero.

Cards.

---

## SCROLL Y ≈ 0–200

Start moving subtle nav components.

Do not move everything together.

Different nav items need slightly different starts.

Create cascade.

First visible change:

horizontal hero navigation begins separating.

---

## SCROLL Y ≈ 200–450

First navigation links start travelling toward left sidebar.

While moving:

* interpolate x
* interpolate y
* interpolate font size

For text:

**animate font-size rather than scale whenever possible.**

This keeps typography sharp.

---

## SCROLL Y ≈ 350–650

Hero stats cards begin moving toward compact sidebar positions.

Interpolate:

* X
* Y
* width
* height
* background
* border
* radius

Maintain circular-looking radii even under non-uniform scaling.

---

## SCROLL Y ≈ 450–900

Large SHAURYA wordmark begins clearly shrinking/moving into sidebar logo destination.

The motion should look physically continuous.

No opacity crossfade.

No duplicate logo appearing.

---

## SCROLL Y ≈ 600–1000

Hero navigation is now assembling vertically.

Individual links reach their destinations at slightly different scroll positions.

Sidebar begins to look complete.

---

## SCROLL Y ≈ 900–1188

Major transform finishes.

Large hero objects now exist visually in compact sidebar form.

Main logo reaches destination around hero 44% progress.

---

## SCROLL Y ≈ 1188–1350

Final registered mark and minor elements settle.

This should be subtle.

---

## SCROLL Y ≈ 1350–1530

Sidebar is fully assembled.

Hero still remains sticky in background.

Journey starts entering over it.

This overlap is critical.

---

# 21. SIDEBAR

Desktop sidebar:

```text
position:
fixed

left:
20px

top:
18px

width:
~267px

height:
viewport

z-index:
high
```

Content stack:

```text
SHAURYA® logo

small identity card

stats

navigation

small interest/status ticker

CTA
```

Do NOT put a personal email publicly by default because Shaurya is a minor.

Replace reference email functionality with:

```text
PROFILE
Ahmedabad, India
Student / Explorer
```

or a guardian-managed contact link only if later supplied.

---

# 22. SIDEBAR AUTO SCALE

On desktop calculate:

```ts
const scale = Math.min(
  1,
  (window.innerHeight - 40) /
  sidebar.scrollHeight
);
```

Then:

```ts
gsap.set(sidebar, {
  scale,
  transformOrigin:
    "top left",
});
```

Counter-scale critical children if needed:

```text
portrait
button labels
```

using:

```ts
1 / scale
```

This ensures sidebar fits smaller laptop heights.

---

# 23. HERO PORTRAIT ON SCROLL

The portrait should not simply vanish.

As user transitions from hero toward Journey:

apply subtle scroll-linked:

```text
blur
opacity
position
```

If sticky/transform parents create clipping issues:

reparent portrait into a fixed body-level layer while preserving the current rectangle.

Process:

```text
measure current rect
↓
reparent
↓
position fixed
↓
preserve exact geometry
↓
continue animation
```

When reverse-scrolling:

put it back cleanly.

No jumping.

---

# 24. SECTION 2 — JOURNEY

Journey starts around:

```text
document y:
1530
```

while hero technically continues.

Journey ends around:

```text
4650
```

Background:

```text
#d5cfbe
```

---

# 25. JOURNEY HEADER

Small label:

```text
START CURIOUS.
KEEP EXPLORING.
```

Main heading:

# ABOUT ME (&)

# THE JOURNEY SO FAR

Intro:

> I'm 14, so I'm not supposed to have everything figured out yet. That's what makes this interesting. I'm exploring science, AI, healthcare, research, technology and music by following the questions that keep pulling me back.

Animate label/headline using masked line reveal:

```ts
from: {
  yPercent: 100
}

to: {
  yPercent: 0,
  duration: 0.6,
  stagger: 0.1,
  delay: 0.3,
  ease: "power2.out"
}
```

Each line must have overflow-hidden mask.

---

# 26. JOURNEY PATH

Create curved SVG path running through section.

Use dark thin line.

Yellow circles for milestone points.

On scroll:

draw/reveal path progressively.

Use DrawSVGPlugin if available.

If not available:

animate:

```text
stroke-dasharray
stroke-dashoffset
```

Do not use a simple vertical straight timeline on desktop.

Cards should alternate around the curve.

---

# 27. JOURNEY CARD ANIMATION

Default card reveal:

```ts
from: {
  y: "10%",
  opacity: 0,
  scale: 0.6
}

to: {
  y: "0%",
  opacity: 1,
  scale: 1,
  duration: 1.1,
  delay: 0.3,
  ease: "expo.out"
}
```

Cards appear at intentionally different scroll thresholds.

Use approximately:

```text
Card 1:
-45% top

Card 2:
-22% top

Card 3:
-4% top

Card 4:
11% top

Card 5:
20% top

Card 6:
36% top

Card 7:
50% top

Card 8:
58% top
```

---

# 28. JOURNEY CONTENT

## CARD 1 — CURIOSITY

Small:

```text
THE BEGINNING
```

Title:

**Always Asking Why**

Copy:

> Curiosity began with wanting to understand how things work—and slowly became wanting to understand how they could work better.

---

## CARD 2 — SCIENCE

Title:

**Looking Closer**

Copy:

> Science became a way to turn questions into experiments, evidence and better questions.

---

## CARD 3 — AI

Title:

**Discovering AI**

Copy:

> Artificial intelligence opened another possibility: machines that can recognise patterns, learn from information and contribute to solving meaningful problems.

---

## CARD 4 — HEALTHCARE

Title:

**Technology × Healthcare**

Copy:

> Early exposure to conversations around healthcare and pharmaceuticals made Shaurya curious about how technology might contribute to better health outcomes.

---

## CARD 5 — EARLYDETECT-AI

Title:

**Turning Curiosity Into a Project**

Copy:

> EarlyDetect-AI began as an exploration of whether artificial intelligence could potentially help identify health-risk patterns earlier.

Add yellow:

```text
FEATURED PROJECT
```

---

## CARD 6 — IRIS

Title:

**IRIS National Fair 2025–26**

Large small stat:

```text
GOLD
```

Copy:

> Presenting the project nationally became an opportunity to research, explain, answer questions and improve the idea through feedback.

---

## CARD 7 — MUSIC

Title:

**Beyond the Screen**

Copy:

> Playing guitar offers a different way to think—less about finding the correct answer and more about rhythm, expression and creativity.

---

## CARD 8 — NOW

Title:

**Still Exploring**

Copy:

> More ideas, competitions, experiments and experiences are ahead. The objective isn't to have the final answer yet. It's to keep finding questions worth pursuing.

---

# 29. JOURNEY CARD INTERACTION

Each card may have:

```text
READ MORE
```

On desktop click:

expand into an elevated detail state.

Rules:

Only one expanded card at a time.

Raise its z-index.

Close previous active card automatically.

Expansion should feel like the card unfolds rather than opening a generic modal.

---

# 30. DARK TRANSITION INTO EXPLORATIONS

At approximately:

```text
y = 4650
```

enter dark section.

Background:

```text
#222222
```

Text:

```text
#ffffff
```

Yellow remains:

```text
#ffff23
```

The sidebar should NOT globally switch instantly.

Instead:

individual sidebar panels switch based on their overlap with the dark section.

Use ScrollTrigger theme switching.

---

# 31. SIDEBAR DARK VALUES

Dark:

```css
.navPanel {
  background:
    rgba(29,29,29,.60);

  border:
    1px solid
    rgba(255,255,255,.10);

  color:
    rgba(255,255,255,.90);
}
```

Nav item:

```css
background:
rgba(57,57,57,.90);
```

Strong top panel:

```css
background:
rgba(29,29,29,.90);
```

When leaving dark section, interpolate back to light styles.

No abrupt class switch.

---

# 32. SECTION 3 — EXPLORATIONS

Equivalent to reference Work section.

Start:

```text
4650
```

Height:

```text
3600px
```

Desktop:

**PIN THE SECTION.**

Vertical scrolling must move project cards horizontally.

---

# 33. EXPLORATIONS INTRO

Label:

```text
SELECTED EXPLORATIONS
```

Heading:

# QUESTIONS

# TURNED INTO THINGS.

Intro:

> A growing collection of projects, competitions, ideas and creative interests—each one an excuse to learn something new.

---

# 34. HORIZONTAL SCROLL ARCHITECTURE

Structure:

```text
<section class="explorations">
  <div class="explorationsSticky">
    <div class="horizontalTrack">

      card
      card
      card
      ...

    </div>
  </div>
</section>
```

Desktop:

```css
.explorationsSticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}
```

Use ScrollTrigger with pin/sticky support.

Scroll distance:

```ts
sectionHeight -
window.innerHeight
```

At 3600px section and 900px viewport:

```text
~2700px vertical travel
```

---

# 35. HORIZONTAL MOVEMENT

Calculate:

```ts
const distance =
  track.scrollWidth -
  availableViewportWidth;
```

Animate:

```ts
gsap.to(track, {
  x: -distance,
  ease: "none",

  scrollTrigger: {
    trigger: section,

    start: "top top",

    end: () =>
      `+=${section.offsetHeight -
      window.innerHeight}`,

    scrub: 1,

    invalidateOnRefresh: true,
  },
});
```

Do not use duration.

Scroll progress controls everything.

---

# 36. EXPLORATION CARDS

Use six large cards.

Each card:

```text
01 number

category tags

large media

title

one-line explanation

yellow arrow button
```

Initial reveal:

```ts
{
  y: "10%",
  opacity: 0,
  scale: 0.6
}
```

Final:

```ts
{
  y: 0,
  opacity: 1,
  scale: 1,
  duration: 1.1,
  ease: "expo.out"
}
```

Cards initially visible should stagger.

Cards outside viewport reveal individually as horizontal movement brings them in.

---

# 37. CARD 01

# EARLYDETECT-AI

Tags:

```text
AI
HEALTHCARE
RESEARCH
```

Hero question:

> Can AI potentially help identify health risks earlier?

Use strongest imagery here.

---

# 38. CARD 02

# IRIS NATIONAL FAIR

Tags:

```text
RESEARCH
PRESENTATION
GOLD
```

Copy:

> EarlyDetect-AI presented at IRIS National Fair 2025–26, receiving Gold Medal recognition at the national level.

---

# 39. CARD 03

# THE RESEARCH PROCESS

Tags:

```text
QUESTIONS
EVIDENCE
ITERATION
```

Copy:

> Learning how an idea changes when it meets research, feedback and difficult questions.

---

# 40. CARD 04

# AI EXPERIMENTS

Tags:

```text
AI
DATA
TECHNOLOGY
```

Copy:

> Small experiments exploring what machines can recognise, predict and help us understand.

Use placeholder imagery until actual projects exist.

---

# 41. CARD 05

# SIX STRINGS

Tags:

```text
GUITAR
MUSIC
CREATIVITY
```

Copy:

> A completely different kind of pattern recognition.

Use guitar image/video.

---

# 42. CARD 06

# NEXT EXPERIMENT

Tags:

```text
COMING SOON
```

Visual may intentionally feel unfinished.

Copy:

> This space is supposed to change.

Yellow:

```text
IN PROGRESS…
```

This reinforces young/exploratory identity.

---

# 43. EXPLORATION CARD HOVER

Desktop hover:

* subtle media expansion
* floating foreground object may shift slightly
* card internal padding can interpolate
* arrow slides
* button label rolls

Do not scale the whole card dramatically.

Premium restraint.

---

# 44. DARK SECTION EXIT

At horizontal section exit:

sidebar transitions back:

```text
dark glass
→
light glass
```

Main background becomes:

```text
#d5cfbe
```

Keep the transition smooth and scroll-controlled.

---

# 45. SECTION 4 — WHAT I EXPLORE

Start approximately:

```text
8250
```

Height:

```text
1240
```

Background:

```text
#d5cfbe
```

---

# 46. GIANT HEADING

Use:

# WHAT

# I EXPLORE?

Approximately:

```text
6.475em
```

Very large.

Black.

Do not shrink it simply because the word is long.

Adjust letter-spacing/layout first.

---

# 47. SMALL LABEL

```text
CURIOSITY OVERVIEW
```

---

# 48. SCROLL-PAINTED STATEMENT

Use:

> Science, technology and creativity are different ways of asking the same thing: what is possible when we understand a problem deeply enough to imagine something better?

Split into characters while preserving special inline chips.

Initial character:

```ts
{
  color: "#e0dfc5",
  opacity: 0.1,
  y: 5
}
```

Final:

```ts
{
  color: "#000000",
  opacity: 1,
  y: 0
}
```

ScrollTrigger:

```text
start:
top 92%

end:
top 25%

scrub:
1
```

Animation:

```text
duration .5
stagger .1
power1.out
```

Although duration/stagger exist, scroll scrub determines perceived pacing.

---

# 49. INLINE YELLOW CHIPS

Inside the painted text embed yellow icon pills representing:

```text
AI
+
HEALTH
+
SCIENCE
+
MUSIC
```

Do NOT split these chips character-by-character.

SplitText implementation must preserve:

```text
images
icons
chips
br
special spans
```

---

# 50. SECTION 5 — CURRENT FRONTIERS

Start:

```text
9490
```

Approx height:

```text
1234
```

Keep same calm sand background.

Label:

```text
CURRENT INTERESTS
```

Heading:

# WHERE CURIOSITY

# IS LEADING.

Intro:

> These are not fixed career labels. They're simply the areas Shaurya keeps returning to right now.

---

# 51. THREE LARGE CARDS

Preserve the reference's three-card structure.

## CARD 1

# SCIENCE × HEALTH

Small points:

```text
Biology
Healthcare innovation
Research
Prevention
Human problems
```

Footer:

> Understanding the problem before trying to solve it.

---

## CARD 2

# AI × TECHNOLOGY

Points:

```text
Artificial intelligence
Data
Pattern recognition
Digital tools
Experimentation
```

Footer:

> Exploring what computation can reveal.

---

## CARD 3

# MUSIC × IDEAS

Points:

```text
Guitar
Creativity
Expression
Entrepreneurship
Leadership
```

Footer:

> Not every useful idea begins with a dataset.

---

# 52. CARD ENTRY ANIMATION

Use clipping:

```ts
from: {
  clipPath:
    "inset(100% 0% 0% 0%)"
}

to: {
  clipPath:
    "inset(0% 0% 0% 0%)",

  duration:
    1.5,

  delay:
    0.2,

  ease:
    "expo.out"
}
```

Internal content may then reveal.

---

# 53. INTEREST CARD HOVER

When hovering:

expand internal content using:

```text
grid-template-rows:
0fr → 1fr
```

Approximately:

```text
duration:
.65

ease:
power2.out
```

Individual keywords:

```text
opacity 0 → 1
```

with:

```text
duration:
.6

stagger:
.1
```

Reverse stagger when closing.

---

# 54. SECTION 6 — WHAT'S NEXT CTA

Start approximately:

```text
10724
```

Height:

```text
1056
```

Main solid headline:

# WHAT'S NEXT?

Secondary faded/gradient headline:

# STILL EXPLORING.

Copy:

> The goal isn't to choose one path too early. It's to keep learning, building, competing, experimenting and noticing which questions become impossible to ignore.

---

# 55. CTA MINI CONVERSATION

Create a staged chat animation.

Trigger approximately:

```text
CTA enters near
90% viewport
```

Run once.

Use global:

```text
ctaSpeed:
0.728
```

---

# 56. CTA ANIMATION STEP 1

Show avatar/indicator.

Bubble initial:

```text
scale 0
opacity 0
transform-origin:
bottom left
```

Animate to normal using back/power ease.

---

# 57. CTA TYPING DOTS

Three dots.

Each:

```text
y:
0 → -6 → 0

opacity:
.6 → 1 → .6
```

Loop while "typing".

Stagger them.

---

# 58. CTA MESSAGE 1

Typing completes.

Reveal:

> What's next?

Bubble row expands:

```text
grid-template-rows:
0fr → 1fr
```

Text:

```text
opacity:
0 → 1

blur:
4px → 0px
```

---

# 59. CTA TYPING 2

Move typing indicator toward response position.

Play dots briefly.

---

# 60. CTA MESSAGE 2

Reveal:

> Probably something I haven't discovered yet.

Then:

> That's the point.

---

# 61. CTA FINAL BUTTON

Yellow button:

```text
KEEP EXPLORING →
```

or:

```text
SEE THE JOURNEY →
```

Do not use:

```text
HIRE ME
BOOK A CALL
```

for Shaurya.

---

# 62. SECTION 7 — VOICES

Start:

```text
11780
```

Height:

```text
~847
```

Label:

```text
VOICES
```

Heading:

# ALONG

# THE WAY.

Use genuine quotes only.

Potential people:

```text
teacher
project mentor
research mentor
school faculty
competition mentor/judge
```

If real quotations are unavailable:

use clearly labelled placeholder content during development.

Do NOT fabricate final testimonials.

---

# 63. SWIPER

Use:

```ts
{
  slidesPerView: 1,
  spaceBetween: 14,
  speed: 500,
  resistanceRatio: 0.85,
  loop: false
}
```

Include custom pagination/progress.

---

# 64. CUSTOM DRAG CURSOR

When mouse enters testimonial slider:

show fixed circular/rounded drag indicator.

Indicator follows pointer.

If mouse moves left:

```text
left arrow:
scale 1.5

right arrow:
scale .8
```

If right:

```text
right arrow:
scale 1.5

left arrow:
scale .8
```

Use:

```text
duration:
.2

ease:
back.out(2)
```

On mouse leave:

```text
opacity:
0

scale:
.8

duration:
.3
```

---

# 65. FOOTER

Start:

```text
12627
```

Approx height:

```text
1235
```

Sand background.

The footer's primary visual:

# SHAURYA®

Massive wordmark.

Almost full content width.

Use SVG or text converted to structured paths if necessary.

---

# 66. FOOTER IMAGE TRAIL

Desktop only.

When mouse moves over huge SHAURYA wordmark:

images should appear behind/around cursor.

Use Shaurya-specific images:

```text
science project
IRIS fair
EarlyDetect
guitar
notebook
presentation
experiment
books
creative moments
```

Suggested behavior:

```text
minimum cursor distance:
~30px

max simultaneous images:
20

image size:
~200 × 280

rotation:
random up to ±30deg

fade delay:
~100ms

cleanup interval:
~50ms

opacity transition:
~300ms
```

Use FIFO cleanup.

Images should not permanently remain.

---

# 67. FINAL FOOTER COPY

Use:

# 14 YEARS IN.

# STILL EXPLORING.

Smaller:

> Ahmedabad → wherever curiosity leads next.

---

# 68. FAQ

Two-column desktop accordion.

Approximately 8 questions.

Suggested questions:

```text
What is EarlyDetect-AI?

What was Shaurya's role in the project?

What did he learn at IRIS?

What areas of science interest him?

How is AI part of his interests?

Why healthcare?

Why is music part of the website?

What's next?
```

Accordion:

closed compact.

Open content expands through:

```text
grid-template-rows:
0fr → 1fr
```

Plus icon rotates 90 degrees.

---

# 69. BUTTON HOVER — USE EVERYWHERE

Do not use basic:

```css
transform:
translateY(-2px)
```

Use duplicate text mask.

Button markup:

```html
<span class="labelMask">
  <span class="labelOriginal">
    EXPLORE
  </span>

  <span class="labelClone">
    EXPLORE
  </span>
</span>
```

Initial:

```text
original:
y = 0

clone:
y = textHeight
```

Hover:

```text
original:
y = -textHeight

clone:
y = 0
```

Approx:

```text
duration:
.5

stagger:
.05

ease:
power2.out
```

On next/reverse hover make it return smoothly.

---

# 70. MAGNETIC ELEMENTS

Use lightly on:

```text
yellow arrow buttons
small circular icons
CTA
```

Magnetic movement should be subtle.

Do not make navigation chase the cursor aggressively.

---

# 71. NUMBER ODOMETER

For numeric stats such as:

```text
14
```

or year digits:

build digit masks.

Digit track contains:

```text
0
1
2
3
4
5
6
7
8
9
```

Initial:

```text
track y:
digitHeight × 9
```

Animate toward final digit:

```text
y:
-finalDigit × digitHeight
```

Use:

```text
duration:
1.2

ease:
power3.out

digit stagger:
.06
```

Static characters remain static.

---

# 72. RESPONSIVE STRATEGY

Main behavioral breakpoint:

```text
768px
```

At:

```text
>=768px
```

Enable:

* desktop sidebar
* hero ghost/FLIP transformation
* sidebar scaling
* pinned horizontal Explorations
* desktop image trail
* desktop-specific magnetic animations
* advanced card interactions

At:

```text
<768px
```

DISABLE:

* hero-to-sidebar FLIP
* desktop sidebar
* pinned horizontal scroll
* sidebar auto-scale
* desktop-only image trail if performance poor

Do not attempt to cram desktop choreography onto phones.

---

# 73. MOBILE HEADER

Fixed top bar.

Left:

yellow:

```text
SHAURYA®
```

Middle/right:

small yellow utility pill if needed.

Right:

grid/hamburger button.

Do not build giant desktop sidebar on mobile.

---

# 74. MOBILE MENU

Full-screen overlay.

Reveal using:

```css
clip-path:
inset(0 0 100% 0);
```

Open:

```css
clip-path:
inset(0);
```

Animate:

```text
duration:
.8

ease:
power2.out
```

Hamburger lines separate/transform during opening.

---

# 75. MOBILE HERO

Preserve visual spirit:

```text
wordmark behind portrait

portrait central

small stat card left

small recognition card right

headline below/around

tagline
```

But no hero-to-sidebar transformation.

Use simple reveal choreography.

---

# 76. MOBILE JOURNEY

Timeline becomes one column.

Path becomes vertical line along left side.

Cards occupy most width.

Keep scroll reveal.

---

# 77. MOBILE EXPLORATIONS

No horizontal pin.

Cards stack vertically.

Dark background remains.

Each card reveals as it enters viewport.

---

# 78. MOBILE INTEREST CARDS

On tap:

create expanded focused state.

Option:

clone selected card into overlay.

Backdrop:

```text
rgba(0,0,0,.8)
```

Animate selected card toward center:

```text
duration:
.5

ease:
power3.out
```

Tap outside / close to return.

---

# 79. INITIAL HIDDEN STATES

Use CSS initial hidden states for animation elements but prevent blank site if JavaScript fails.

For example:

```css
.js .animatedEntrance {
  opacity: 0;
}
```

Without `.js`, content stays visible.

Add reduced-motion support.

Do not inherit the reference weakness where broken JS leaves a blank page.

---

# 80. REDUCED MOTION

Implement:

```css
@media (
  prefers-reduced-motion:
  reduce
) {
  /* reduce expensive motion */
}
```

If reduced motion is enabled:

* disable Lenis smooth interpolation
* remove long FLIP scrubs
* no image trail
* no magnetic cursor
* project section becomes standard layout
* content remains fully visible

---

# 81. ANIMATION ENGINE ARCHITECTURE

Each motion module should expose:

```ts
init()
destroy()
```

Example:

```ts
export const HeroMorph = {
  init() {},
  destroy() {},
};
```

Main engine initializes in strict order:

```text
1. Lenis
2. Sidebar measurements
3. Hero/Ghost measurements
4. Generic text/style animations
5. Journey
6. Horizontal scroll
7. Theme switcher
8. Card interactions
9. CTA
10. Swiper
11. Image trail
12. Button hovers
13. Magnetic elements
14. ScrollTrigger.refresh()
```

Order matters.

---

# 82. RESIZE HANDLER

Debounce:

```text
150ms
```

On desktop resize:

```text
destroy relevant ScrollTriggers

recalculate sidebar scale

wait one RAF

measure hero/ghost targets again

rebuild horizontal distances

ScrollTrigger.refresh()
```

Do not reuse stale `getBoundingClientRect()` values.

---

# 83. PERFORMANCE REQUIREMENTS

Always prefer:

```text
transform
opacity
clip-path
```

over layout-heavy properties when possible.

But animate font-size for hero nav text where visual sharpness matters.

Do not repeatedly call:

```ts
getBoundingClientRect()
```

inside every ScrollTrigger update.

Measure once.

Cache.

Recompute on refresh/resize.

Use:

```text
will-change
```

only on elements that actually need it.

Avoid applying it globally.

---

# 84. IMAGE PERFORMANCE

Use Next/Image for standard section images where it does not conflict with animation.

Use standard positioned `<img>` where direct GSAP transform control is easier.

AVIF/WebP preferred.

Preload:

* hero portrait
* first important media
* wordmark assets

Lazy load later gallery images.

---

# 85. DESKTOP SCROLL EXPERIENCE — COMPLETE SEQUENCE

The final experience should feel like this:

```text
PAGE LOAD

sand screen
↓
SHAURYA letters assemble
↓
portrait materialises
↓
hero headline appears
↓
navigation appears
↓
stats cards assemble

SCROLL STARTS
↓
hero nav physically moves left
↓
hero cards shrink/morph into sidebar
↓
SHAURYA wordmark moves into sidebar
↓
sidebar assembles itself
↓
journey starts appearing over sticky hero
↓
hero finally releases

JOURNEY
↓
headline reveals
↓
curved path draws
↓
curiosity card
↓
science card
↓
AI card
↓
healthcare card
↓
EarlyDetect card
↓
IRIS GOLD
↓
music
↓
still exploring

DARK TRANSITION
↓
sidebar physically adopts dark treatment

EXPLORATIONS
↓
vertical scrolling stops producing normal vertical movement
↓
camera travels horizontally
↓
EarlyDetect
↓
IRIS
↓
research
↓
AI experiments
↓
music
↓
next experiment

EXIT WORK
↓
dark → sand
↓
sidebar dark → light

WHAT I EXPLORE
↓
huge typography
↓
sentence progressively paints itself black character-by-character

CURRENT FRONTIERS
↓
three large interest cards
↓
cards unfold on interaction

WHAT'S NEXT
↓
chat bubble appears
↓
typing dots
↓
"What's next?"
↓
typing dots
↓
"Probably something I haven't discovered yet."
↓
yellow CTA

VOICES
↓
testimonial slider
↓
custom directional drag cursor

FOOTER
↓
massive SHAURYA®
↓
cursor produces project/music/research image trail
↓
FAQ
↓
"14 YEARS IN. STILL EXPLORING."
```

---

# 86. VERY IMPORTANT MOTION RULES

Do NOT create every entrance like:

```ts
gsap.from(element, {
  y: 40,
  opacity: 0
});
```

That will destroy the design language.

Limit the website to consistent animation families:

### FAMILY 1

Masked line reveal.

```text
yPercent:
100 → 0
```

### FAMILY 2

Card reveal.

```text
y 10%
opacity 0
scale .6
↓
normal
```

### FAMILY 3

Clip reveal.

```text
clip-path bottom closed
↓
open
```

### FAMILY 4

Scroll scrub.

```text
progress directly tied to scroll
```

### FAMILY 5

Physical FLIP handoff.

```text
hero object
↓
sidebar object
```

### FAMILY 6

Duplicate-text button roll.

Use these repeatedly.

Consistency is more important than adding additional animation styles.

---

# 87. NO RANDOM PARALLAX

Do not add generic parallax to every image.

Use depth only where composition requires it.

The hero morph is already the dominant motion.

---

# 88. NO GRADIENT-AI AESTHETIC

Never introduce:

```text
blue gradients
purple gradients
cyberpunk
glowing circuit lines
3D AI brains
floating particles
holograms
glass neon
```

The visual tension comes from:

```text
warm sand
+
black typography
+
acid yellow
+
clean photography
+
highly technical motion
```

---

# 89. PERSONALITY THROUGH COPY

Keep copy concise.

Avoid long paragraphs.

Every section should feel editorial.

Examples:

```text
CURIOUS BY NATURE.
BUILDING BY CHOICE.
```

```text
I'M 14.
I DON'T HAVE IT
ALL FIGURED OUT.
GOOD.
```

```text
QUESTIONS
TURNED INTO
THINGS.
```

```text
WHAT
I EXPLORE?
```

```text
SOME QUESTIONS
DON'T NEED DATA.

THEY NEED
SIX STRINGS.
```

```text
WHAT'S NEXT?

STILL EXPLORING.
```

```text
14 YEARS IN.
STILL EXPLORING.
```

---

# 90. MUSIC MOMENT

Although it belongs in the horizontal Explorations system, also create a strong visual subsection/card moment around music.

Use phrase:

# SOME QUESTIONS

# DON'T NEED DATA.

Then:

# THEY NEED

# SIX STRINGS.

Use guitar media prominently.

This is important so the website does not feel artificially engineered only around AI/university goals.

---

# 91. HIGHER EDUCATION CONTENT

Do not make Ivy League the hero message.

If mentioned at all, include under "What's Next" or FAQ.

Use:

> Shaurya hopes to eventually study at one of the world's leading universities, but the current focus is much simpler: learning deeply, building meaningful projects and discovering what fields he genuinely wants to pursue.

Avoid university logos.

Avoid Harvard/Yale/etc logo walls.

---

# 92. FAMILY BACKGROUND

Do not create a "family legacy" brag section.

If included:

small paragraph only:

> Growing up around conversations involving healthcare, pharmaceuticals, entrepreneurship and business has provided early exposure to how ideas become organisations and solutions. The journey now is about discovering which questions Shaurya wants to pursue for himself.

Then move back to Shaurya.

---

# 93. MINOR PRIVACY

Shaurya is 14.

Do not display:

* personal phone number
* personal email
* home address
* precise routine
* daily location
* personal calendar
* unnecessary family personal information

Use guardian-managed contact later if required.

---

# 94. ACCESSIBILITY

Despite complex animation:

* semantic sections
* real buttons
* keyboard navigation
* visible focus states
* image alt text
* proper heading hierarchy
* motion reduction
* adequate contrast
* no interactions that work only by mouse hover
* cards expandable through keyboard

---

# 95. DESKTOP QA TARGETS

Test at:

```text
1440 × 900
1920 × 1080
1366 × 768
1024 × 768
```

Mobile:

```text
430
390
375
360
```

Primary fidelity check:

```text
1440 × 900
```

---

# 96. VISUAL QA PROCESS

After every major section is implemented:

capture screenshots at fixed scroll positions.

For desktop approximately:

```text
0
500
1000
1500
2000
2700
3600
4650
5200
6000
7000
8250
9000
9490
10724
11780
12627
bottom
```

Compare:

* element positions
* line wrapping
* sidebar width
* hero morph continuity
* work card travel
* theme switch timing
* typography scale

Do NOT judge only by opening the homepage at scroll 0.

The quality is primarily in intermediate scroll states.

---

# 97. REVERSE SCROLL QA

Test:

```text
top
↓
middle
↓
bottom
↓
back to top
```

Hero morph must reverse correctly.

Cards cannot remain stuck in completed state if their animation is supposed to reverse.

Sidebar cannot retain dark colors after leaving dark section.

Portrait cannot jump when reversing.

Horizontal scroll cannot snap.

---

# 98. REFRESH QA

Test browser refresh at:

```text
top
middle
bottom
```

Current implementation may intentionally reset to top for cinematic entrance.

If doing so:

set manual scroll restoration consistently.

No broken ghost geometry after refresh.

---

# 99. IMPLEMENTATION PHASES

Do not attempt all animations in one file immediately.

Build in this order.

## PHASE 1

Create:

* Next.js project
* page sections
* exact colors
* typography
* desktop layout
* mobile layout
* no advanced motion

Ensure geometry is correct.

---

## PHASE 2

Add:

* Lenis
* GSAP setup
* global engine architecture
* simple section reveals

---

## PHASE 3

Build preloader completely.

Do not continue until the preloader feels polished.

---

## PHASE 4

Build desktop sidebar static target state.

Ensure exact geometry before morph.

---

## PHASE 5

Build hero ghost destination system.

Measure all rectangles.

Implement hero → sidebar FLIP.

This is the most important phase.

Do not move on until:

```text
scroll down works
scroll up works
resize works
1440 works
1366 works
```

---

## PHASE 6

Build Journey:

* curved SVG
* path reveal
* staggered cards
* expanded states

---

## PHASE 7

Build dark horizontal Explorations:

* theme switch
* sticky section
* track movement
* card reveals
* card hover

---

## PHASE 8

Build character-painted What I Explore section.

---

## PHASE 9

Build Current Frontiers cards and expandable interactions.

---

## PHASE 10

Build animated chat CTA.

---

## PHASE 11

Build Swiper and custom drag cursor.

---

## PHASE 12

Build giant footer wordmark and image trail.

---

## PHASE 13

Build mobile choreography.

Do not merely add responsive CSS after desktop.

Actually disable incompatible animation modules.

---

## PHASE 14

Accessibility, reduced motion and performance.

---

## PHASE 15

Run visual screenshot verification at all important scroll positions.

---

# 100. IMPORTANT INSTRUCTION FOR CLAUDE

Do not respond to this specification with only:

* suggestions
* sample code
* pseudo-code
* an implementation plan

Actually modify/build the application.

Before coding:

inspect the existing repository.

Preserve any valid project configuration.

Then implement incrementally.

After each major phase:

run the application/build/lint where available and fix errors.

Do not remove animations because they are difficult.

Do not substitute the hero transformation with a fade.

Do not substitute horizontal scrolling with a carousel on desktop.

Do not use a generic sticky navbar.

Do not create a new palette.

Do not make the site dark overall.

Do not add additional unnecessary sections.

The website must remain a single cohesive scroll narrative.

---

# FINAL QUALITY BAR

The finished experience should make someone who knows HeyNesh immediately recognise the same:

```text
design grammar
color relationship
motion restraint
hero transformation philosophy
sidebar behavior
dark horizontal chapter
giant typography
microinteraction quality
smooth-scroll pacing
editorial composition
```

while immediately recognising that:

```text
the person
story
project
photography
identity
content
interests
achievements
```

belong entirely to:

# SHAURYA PATEL

The goal is not to make "a portfolio inspired by HeyNesh."

The goal is to reproduce the **same level and style of interaction choreography** in a completely new Shaurya identity using Next.js.

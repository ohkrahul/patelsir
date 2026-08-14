"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { isDesktopMotionActive } from "@/animations/config";
import styles from "./ImageTrail.module.css";

const IMAGES = ["/footer/a.jpeg", "/footer/b.jpeg", "/footer/c.jpeg"];
const MIN_DISTANCE = 30;
const MAX_IMAGES = 20;
const HOLD_MS = 100;
const FADE_MS = 300;

type TrailImage = {
  id: number;
  x: number;
  y: number;
  rotate: number;
  src: string;
  fading: boolean;
};

type Box = { left: number; top: number; width: number; height: number };

export default function ImageTrail({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const [images, setImages] = useState<TrailImage[]>([]);
  const [box, setBox] = useState<Box | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);
  const nextId = useRef(0);
  const nextImage = useRef(0);

  // The trail's own box is pinned to the wordmark's rendered rect (not the
  // whole footer) so spawned images clip to overflow:hidden and only ever
  // appear inside the text, never spilling into the surrounding whitespace.
  useEffect(() => {
    function syncBox() {
      const target = targetRef.current;
      const footer = containerRef.current?.parentElement;
      if (!target || !footer) return;
      const targetRect = target.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      setBox({
        left: targetRect.left - footerRect.left,
        top: targetRect.top - footerRect.top,
        width: targetRect.width,
        height: targetRect.height,
      });
    }
    syncBox();
    // Web font swap-in reflows the wordmark after this first, pre-font
    // measurement — re-sync once it settles so the clip box isn't left
    // pinned to the smaller fallback-font size for the rest of the visit.
    document.fonts.ready.then(syncBox);
    window.addEventListener("resize", syncBox);
    return () => window.removeEventListener("resize", syncBox);
  }, [targetRef]);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!isDesktopMotionActive()) return;

      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;
      const withinTarget = x >= 0 && x <= containerRect.width && y >= 0 && y <= containerRect.height;
      if (!withinTarget) return;

      const last = lastPoint.current;
      if (last && Math.hypot(x - last.x, y - last.y) < MIN_DISTANCE) return;
      lastPoint.current = { x, y };

      const id = nextId.current++;
      const src = IMAGES[nextImage.current % IMAGES.length];
      nextImage.current++;
      const rotate = Math.random() * 60 - 30;

      setImages((prev) => {
        const next = [...prev, { id, x, y, rotate, src, fading: false }];
        return next.length > MAX_IMAGES ? next.slice(next.length - MAX_IMAGES) : next;
      });

      window.setTimeout(() => {
        setImages((prev) => prev.map((img) => (img.id === id ? { ...img, fading: true } : img)));
        window.setTimeout(() => {
          setImages((prev) => prev.filter((img) => img.id !== id));
        }, FADE_MS);
      }, HOLD_MS);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.trail}
      style={box ?? undefined}
      aria-hidden="true"
    >
      {images.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt=""
          className={styles.trailImage}
          style={{
            left: img.x,
            top: img.y,
            transform: `translate(-50%, -50%) rotate(${img.rotate}deg)`,
            opacity: img.fading ? 0 : 1,
          }}
        />
      ))}
    </div>
  );
}

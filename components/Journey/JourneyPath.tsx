import styles from "./JourneyPath.module.css";

const POINT_COUNT = 8;
const VIEW_HEIGHT = 800;

const points = Array.from({ length: POINT_COUNT }, (_, i) => ({
  x: i % 2 === 0 ? 35 : 65,
  y: ((i + 0.5) / POINT_COUNT) * VIEW_HEIGHT,
}));

// Catmull-Rom to cubic-bezier, so the line runs as one smooth curve
// through the milestones instead of a sharp zigzag.
function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return "";
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

const pathData = smoothPath(points);

export default function JourneyPath() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.line}
        viewBox={`0 0 100 ${VIEW_HEIGHT}`}
        preserveAspectRatio="none"
      >
        <path
          data-anim="journey-path-line"
          d={pathData}
          fill="none"
          stroke="var(--black)"
          strokeWidth={0.4}
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {points.map((p, i) => (
        <span
          key={i}
          data-anim="journey-path-dot"
          className={styles.dot}
          style={{ left: `${p.x}%`, top: `${(p.y / VIEW_HEIGHT) * 100}%` }}
        />
      ))}
    </div>
  );
}

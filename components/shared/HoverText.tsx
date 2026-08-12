export default function HoverText({ text }: { text: string }) {
  return (
    <span className="hoverMask">
      <span className="hoverStack">
        <span>{text}</span>
        <span>{text}</span>
      </span>
    </span>
  );
}

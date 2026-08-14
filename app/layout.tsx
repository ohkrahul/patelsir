import type { Metadata } from "next";
import { archivo, switzer } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya Patel",
  description:
    "Shaurya Patel — 14, student at Adani International School, Ahmedabad. Exploring science, AI, healthcare, research and music.",
};

const bootScript = `
history.scrollRestoration = "manual";
window.scrollTo(0, 0);
document.body.classList.add("js");
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${switzer.variable}`}
    >
      <body suppressHydrationWarning>
        {/* document.body doesn't exist yet while this runs from <head> —
            it has to be the first thing inside <body> instead. React
            always flags a mismatch on a hydration-managed node when an
            inline script mutates it pre-hydration, even for an attribute
            the JSX never sets — suppressHydrationWarning is the standard
            escape hatch for exactly this pattern. */}
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <div id="fixed-layer" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

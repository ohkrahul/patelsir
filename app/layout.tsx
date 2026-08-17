import type { Metadata } from "next";
import { archivo, caveat, switzer } from "./fonts";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya Patel",
  description:
    "Shaurya Patel — Class X student, researcher, innovator and guitarist from Ahmedabad, exploring life sciences, healthcare and artificial intelligence.",
};

const bootScript = `
history.scrollRestoration = "manual";
if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
document.body.classList.add("js");
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${switzer.variable} ${caveat.variable}`}
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

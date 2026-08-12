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
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${switzer.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <div id="fixed-layer" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

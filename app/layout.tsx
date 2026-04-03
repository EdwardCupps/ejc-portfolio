import type { Metadata } from "next";
import { DM_Serif_Display, Jost } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Edward Cupps — Product & UX Leadership Portfolio",
  description:
    "Senior product and UX leader building strong, disciplined teams that ship and learn quickly — at the intersection of design, product, and engineering in B2B SaaS.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${jost.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

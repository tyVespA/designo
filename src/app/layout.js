import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "Designo",
  description: "Award-winning custom designs and digital branding solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable}`}>{children}</body>
    </html>
  );
}

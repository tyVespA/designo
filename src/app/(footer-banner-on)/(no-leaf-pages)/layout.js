import { Jost } from "next/font/google";
import Image from "next/image";
import styles from "./layout.module.css";
import "../../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

// export const viewport = {
//   initialScale: 1,
//   width: "device-width",
// };

export const metadata = {
  title: "Designo",
  description: "Award-winning custom designs and digital branding solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.variable} max-width ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

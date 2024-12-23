import { Jost } from "next/font/google";
import Image from "next/image";
// import Head from "next/head";
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
      {/* <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossorigin=""
          async
        ></script>
      </Head> */}
      <body className={`${jost.variable} max-width ${styles.body}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

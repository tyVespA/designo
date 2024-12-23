import styles from "./page.module.css";
import HeroBanner from "@/app/(footer-banner-on)/(one-leaf-pages)/components/HeroBanner";
import DesignLinksSection from "../components/DesignLinksSection";

export default function page() {
  return (
    <div>
      <HeroBanner title="Web Design">
        Creiamo siti web che funzionano come potenti strumenti di marketing e
        che offrono esperienze di brand memorabili.
      </HeroBanner>
      <DesignLinksSection />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Button from "./components/Button";
import LinkCard from "./components/LinkCard";

import bg_pattern_hero_desktop from "../../public/home/desktop/bg-pattern-hero-home.svg";
import image_hero_phone_desktop from "../../public/home/desktop/image-hero-phone.png";
import image_web_design_desktop from "../../public/home/desktop/image-web-design-large.jpg";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>
            Design su misura pluripremiati e soluzioni di branding digitale
          </h1>
          <p>
            Con oltre 10 anni di esperienza nel settore, siamo esperti nella
            creazione di siti web completamente responsive, design di app e
            brand experience coinvolgenti. Scopri di più sui nostri servizi.
          </p>
          <Button theme="light">Scopri di più</Button>
        </div>
        <div>
          <Image
            src={image_hero_phone_desktop}
            alt="cellulare"
            className={styles.phoneMockup}
          />
          <Image
            src={bg_pattern_hero_desktop}
            alt=""
            aria-hidden
            className={styles.bgPattern}
          />
        </div>
      </section>

      <section className={styles.linksCardsSection}>
        <div className={styles.item1}>
          <LinkCard
            href="/"
            title="Web design"
            imageSrc={image_web_design_desktop}
            alt="alt"
          />
        </div>
        <LinkCard
          href="/"
          title="App design"
          imageSrc={image_web_design_desktop}
          alt="alt"
        />
        <LinkCard
          href="/"
          title="Graphic design"
          imageSrc={image_web_design_desktop}
          alt="alt"
        />
      </section>
    </>
  );
}

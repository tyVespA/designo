import styles from "./Banner.module.css";
import Image from "next/image";

import image_about_hero_desktop from "../../../../../../public/about/desktop/image-about-hero.jpg";
import bg_pattern_hero_desktop from "../../../../../../public/about/desktop/bg-pattern-hero-about-desktop.svg";
import bg_pattern_hero_mobile from "../../../../../../public/about/mobile/bg-pattern-hero-about-mobile.svg";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.textContainer}>
        <Image
          src={bg_pattern_hero_desktop}
          alt=""
          className={styles.bg_pattern_hero_desktop}
        />
        <h1>Chi Siamo</h1>
        <p>
          Fondata nel 2010, siamo un'agenzia creativa che produce risultati
          duraturi per i nostri clienti. Abbiamo collaborato con numerose
          startup, aziende e organizzazioni non profit per realizzare design che
          fanno davvero la differenza. Siamo sempre pronti a creare brand,
          prodotti ed esperienze digitali che connettano con il pubblico dei
          nostri clienti.
        </p>
      </div>
      <Image src={image_about_hero_desktop} alt="un team che collabora" />
    </div>
  );
}

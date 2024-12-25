import styles from "./Banner.module.css";
import Image from "next/image";

import image_about_hero_desktop from "../../../../../../public/about/desktop/image-about-hero.jpg";
import image_about_hero_tablet from "../../../../../../public/about/tablet/image-about-hero.jpg";
import image_about_hero_mobile from "../../../../../../public/about/mobile/image-about-hero.jpg";

import bg_pattern_hero_desktop from "../../../../../../public/about/desktop/bg-pattern-hero-about-desktop.svg";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.textContainer}>
        <Image
          src={bg_pattern_hero_desktop}
          alt=""
          className={styles.bg_pattern_hero_desktop}
          priority={true}
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
      <div className={styles.pictureContainer}>
        <picture>
          <source
            srcSet={image_about_hero_desktop.src}
            media="(min-width: 1190px)"
          />
          <source
            srcSet={image_about_hero_tablet.src}
            media="(min-width: 400px)"
          />
          <source
            srcSet={image_about_hero_mobile.src}
            media="(max-width: 400px)"
          />
          <Image
            src={image_about_hero_desktop}
            alt="Un team che collabora"
            className={styles.heroImage}
          />
        </picture>
      </div>
    </div>
  );
}

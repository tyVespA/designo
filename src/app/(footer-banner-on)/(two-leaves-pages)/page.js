import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Button from "../../components/Button";
import LinkCard from "../../components/LinkCard";
import FeatureCard from "../../components/FeatureCard";

// hero section
import bg_pattern_hero_desktop from "../../../../public/home/desktop/bg-pattern-hero-home.svg";
import image_hero_phone_desktop from "../../../../public/home/desktop/image-hero-phone.png";
// link cards section
import image_web_design_desktop from "../../../../public/home/desktop/image-web-design-large.jpg";
import image_web_design_tablet from "../../../../public/home/tablet/image-web-design.jpg";
import image_web_design_mobile from "../../../../public/home/mobile/image-web-design.jpg";
import image_app_design_desktop from "../../../../public/home/desktop/image-app-design.jpg";
import image_app_design_tablet from "../../../../public/home/tablet/image-app-design.jpg";
import image_app_design_mobile from "../../../../public/home/mobile/image-app-design.jpg";
import image_graphic_design_desktop from "../../../../public/home/desktop/image-graphic-design.jpg";
import image_graphic_design_tablet from "../../../../public/home/tablet/image-graphic-design.jpg";
import image_graphic_design_mobile from "../../../../public/home/mobile/image-graphic-design.jpg";
// features section
import illustration_passionate from "../../../../public/home/desktop/illustration-passionate.svg";
import illustration_resourceful from "../../../../public/home/desktop/illustration-resourceful.svg";
import illustration_friendly from "../../../../public/home/desktop/illustration-friendly.svg";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.text}>
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
        <div className={styles.imagesContainer}>
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

      {/* use picture inside component to change images (?) */}

      <section className={styles.linksCardsSection}>
        <div className={styles.item1}>
          <LinkCard
            href="/web-design"
            title="Web design"
            imageSrc={image_web_design_desktop}
            alt="un laptop"
          />
        </div>
        <LinkCard
          href="/app-design"
          title="App design"
          imageSrc={image_app_design_desktop}
          alt="uno smartphone"
        />
        <LinkCard
          href="/graphic-design"
          title="Graphic design"
          imageSrc={image_graphic_design_desktop}
          alt=""
        />
      </section>

      <section className={styles.featuresSection}>
        <FeatureCard
          imageSrc={illustration_passionate}
          alt="persona che disegna"
          title={"Appassionati"}
        >
          Ogni progetto inizia con una ricerca approfondita del brand per
          garantire la creazione di prodotti che abbiano uno scopo. Uniamo arte,
          design e tecnologia per dare vita a soluzioni innovative e
          coinvolgenti.
        </FeatureCard>
        <FeatureCard
          imageSrc={illustration_resourceful}
          alt="persona che disegna"
          title={"Versatili"}
        >
          Tutto ciò che facciamo ha un obiettivo strategico. Adottiamo un
          approccio agile in ogni progetto e diamo valore alla collaborazione
          con i clienti. Questo ci permette di garantire risultati eccellenti
          che soddisfano le loro esigenze.
        </FeatureCard>
        <FeatureCard
          imageSrc={illustration_friendly}
          alt="persone che sorridono"
          title={"Amichevoli"}
        >
          Siamo un team entusiasta che mette le persone al primo posto. Il
          nostro successo dipende dai clienti, e ci impegniamo a offrire loro la
          migliore esperienza possibile.
        </FeatureCard>
      </section>
    </>
  );
}

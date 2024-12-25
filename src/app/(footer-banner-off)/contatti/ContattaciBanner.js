import styles from "./ContattaciBanner.module.css";
import ContattaciForm from "./ContattaciForm";
import Image from "next/image";

import bg_pattern_hero_desktop from "../../../../public/contact/desktop/bg-pattern-hero-desktop.svg";
import bg_pattern_hero_mobile from "../../../../public/contact/mobile/bg-pattern-hero-contact-mobile.svg";

export default function ContattaciBanner() {
  return (
    <section className={styles.contattaciContainer}>
      <Image
        src={bg_pattern_hero_desktop}
        alt=""
        className={styles.bg_pattern_hero_desktop}
        priority
      />
      <Image
        src={bg_pattern_hero_mobile}
        alt=""
        className={styles.bg_pattern_hero_mobile}
        priority
      />
      <div className={styles.textSection}>
        <h1>Contattaci</h1>
        <p>
          Pronto a portare il tuo progetto al livello successivo? Parliamo della
          tua idea e scopriamo come possiamo aiutare la tua attività a crescere.
          Se stai cercando esperienze digitali uniche e in sintonia con i tuoi
          utenti, contattaci!
        </p>
      </div>
      <div className={styles.formSection}>
        <ContattaciForm />
      </div>
    </section>
  );
}

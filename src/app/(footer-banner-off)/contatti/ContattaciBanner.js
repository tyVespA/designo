import styles from "./ContattaciBanner.module.css";
import Image from "next/image";

import bg_pattern_hero_deskop from "../../../../public/contact/desktop/bg-pattern-hero-desktop.svg";

export default function ContattaciBanner() {
  return (
    <section className={styles.contattaciContainer}>
      <Image
        src={bg_pattern_hero_deskop}
        alt=""
        className={styles.bg_pattern_hero_deskop}
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
      <div className={styles.formSection}>form</div>
    </section>
  );
}

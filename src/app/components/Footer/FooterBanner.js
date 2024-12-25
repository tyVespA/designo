import Image from "next/image";
import Link from "next/link";
import styles from "./FooterBanner.module.css";
import Button from "../Button";
import bg_pattern from "../../../../public/shared/desktop/bg-pattern-call-to-action.svg";

export default function FooterBanner() {
  return (
    <div className={styles.footerBannerContainer}>
      <div className={styles.footerBanner}>
        <div className={styles.bgContainer}>
          <Image src={bg_pattern} alt="" />
        </div>
        <div className={styles.text}>
          <h2>Parliamo del tuo progetto</h2>
          <p>
            Pronto a portare il tuo progetto al livello successivo? Contattaci
            oggi stesso e scopri come la nostra esperienza può aiutare la tua
            attività a crescere.
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/contatti">
            <Button theme="light">Contattaci</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

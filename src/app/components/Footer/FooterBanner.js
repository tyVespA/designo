import styles from "./FooterBanner.module.css";
import Button from "../Button";

export default function FooterBanner() {
  return (
    <div className={styles.footerBannerContainer}>
      <div className={styles.text}>
        <h2>Parliamo del tuo progetto</h2>
        <p>
          Pronto a portare il tuo progetto al livello successivo? Contattaci
          oggi stesso e scopri come la nostra esperienza può aiutare la tua
          attività a crescere.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button theme="light">Contattaci</Button>
      </div>
    </div>
  );
}

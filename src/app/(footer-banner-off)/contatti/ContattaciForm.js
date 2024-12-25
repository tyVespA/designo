import styles from "./ContattaciForm.module.css";
import Button from "@/app/components/Button";

export default function ContattaciForm() {
  return (
    <>
      <form className={styles.form}>
        <input type="text" id="name" name="name" required placeholder="Name" />
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email Address"
        />
        <input type="phone" id="phone" name="phone" placeholder="Phone" />
        <textarea
          id="message"
          name="message"
          required
          placeholder="Il tuo messaggio"
          rows={4}
        />
        <div className={styles.buttonContainer}>
          <Button theme="light">Invia</Button>
        </div>
      </form>
    </>
  );
}

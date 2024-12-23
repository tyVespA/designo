import styles from "./LinkCardsSection.module.css";
import LinkCard from "./LinkCard";

export default function LinkCardsSection({ title1, title2 }) {
  return (
    <section className={styles.linksCardsSection}>
      <LinkCard title={title1}></LinkCard>
      <LinkCard title={title2}></LinkCard>
    </section>
  );
}

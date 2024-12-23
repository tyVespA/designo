import styles from "./DesignLinksSection.module.css";
import DesignLinkCard from "./DesignLinkCard";

export default function DesignLinksSection() {
  return (
    <section className={styles.designLinksSection}>
      <DesignLinkCard title="test">test</DesignLinkCard>
    </section>
  );
}

import styles from "./DesignLinksSection.module.css";
import DesignLinkCard from "./DesignLinkCard";

export default function DesignLinksSection({ examplesData }) {
  return (
    <section className={styles.designLinksSection}>
      {examplesData.map((example, index) => (
        <DesignLinkCard
          key={index}
          imgName={example.imgName}
          alt={example.alt}
          title={example.title}
          text={example.text}
        ></DesignLinkCard>
      ))}
    </section>
  );
}

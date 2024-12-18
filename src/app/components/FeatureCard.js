import styles from "./FeatureCard.module.css";
import Image from "next/image";

export default function FeatureCard({ imageSrc, alt, title, children }) {
  return (
    <div className={styles.featureCardContainer}>
      <Image src={imageSrc} alt={alt} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

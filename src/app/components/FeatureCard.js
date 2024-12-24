import styles from "./FeatureCard.module.css";
import Image from "next/image";

import bg_pattern_small_circle from "../../../public/shared/desktop/bg-pattern-small-circle.svg";

export default function FeatureCard({
  imageSrc,
  alt,
  title,
  bgRotation,
  children,
}) {
  return (
    <div className={styles.featureCardContainer}>
      <Image
        src={bg_pattern_small_circle}
        alt=""
        className={styles.bgImage}
        style={{ transform: `rotate(${bgRotation}deg)` }}
      />
      <Image src={imageSrc} alt={alt} className={styles.icon} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

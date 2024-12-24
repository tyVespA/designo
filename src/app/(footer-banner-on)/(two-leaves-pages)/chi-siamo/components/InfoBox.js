import styles from "./InfoBox.module.css";
import Image from "next/image";

import bg_pattern_three_circle from "../../../../../../public/shared/desktop/bg-pattern-three-circles.svg";

export default function InfoBox({
  imgName,
  alt,
  title,
  children,
  reverse = "no",
}) {
  return (
    <div
      className={`${styles.infoBoxContainer} ${
        reverse === "yes" ? styles.reverse : ""
      }`}
    >
      <Image src={bg_pattern_three_circle} alt="" className={styles.bgImage} />
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <Image src={imgName} alt={alt} className={styles.image} />
    </div>
  );
}

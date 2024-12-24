import styles from "./InfoBox.module.css";
import Image from "next/image";

import bg_pattern_three_circle from "../../../../../../public/shared/desktop/bg-pattern-three-circles.svg";

export default function InfoBox({
  imgDesktop,
  imgTablet,
  imgMobile,
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
      <div className={styles.pictureContainer}>
        <picture>
          <source media="(min-width: 1095px)" srcSet={imgDesktop.src} />
          <source media="(min-width: 500px)" srcSet={imgTablet.src} />
          <source media="(max-width: 500px)" srcSet={imgMobile.src} />
          <img src={imgDesktop.src} alt={alt} className={styles.image} />
        </picture>
      </div>
    </div>
  );
}

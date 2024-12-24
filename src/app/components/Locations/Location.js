import styles from "./Location.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

import bg_pattern_small_circle from "../../../../public/shared/desktop/bg-pattern-small-circle.svg";

export default function Location({ imgName, alt, bgRotation, title, href }) {
  return (
    <div className={styles.locationContainer}>
      <div className={styles.imgContainer}>
        <Image
          src={bg_pattern_small_circle}
          alt=""
          style={{ transform: `rotate(${bgRotation}deg)` }}
          className={styles.bg_pattern_small_circle}
        />
        <Image src={imgName} alt={alt} />
      </div>
      <h3>{title}</h3>
      <Link href={href}>
        <Button theme="dark">Vedi posizione</Button>
      </Link>
    </div>
  );
}

import styles from "./LinkCard.module.css";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../../public/arrow.svg";

export default function LinkCard({ href, title, imageSrc, alt }) {
  return (
    <Link href={href} className={styles.linkCard}>
      <h2>{title}</h2>
      <div className={styles.h3}>
        <h3>Guarda i progetti</h3>
        <Image src={arrow} alt="" />
      </div>
      <Image src={imageSrc} alt={alt} className={styles.backgroundImage} />
    </Link>
  );
}

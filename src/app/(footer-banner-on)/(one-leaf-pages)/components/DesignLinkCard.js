import Image from "next/image";
import Link from "next/link";
import styles from "./DesignLinkCard.module.css";

export default function DesignLinkCard({ imgName, alt, title, text }) {
  return (
    <Link href="#" className={styles.designLinkCardContainer}>
      <Image src={imgName} alt={alt} className={styles.image} />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Link>
  );
}

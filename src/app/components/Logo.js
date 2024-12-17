import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

import designo_dark from "../../../public/designo-dark.svg";
import oval from "../../../public/oval.png";

export default function Logo() {
  return (
    <Link href="/" className={styles.logoContainer}>
      <Image src={oval} alt="logo" height={24} className={styles.oval} />
      <Image
        src={designo_dark}
        alt="logo"
        height={24}
        className={styles.text}
      />
    </Link>
  );
}

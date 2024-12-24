import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

import designo_dark from "../../../public/designo-dark.svg";
// import designo_light f
import oval from "../../../public/oval.png";

export default function Logo({ src }) {
  return (
    <Link href="/" className={styles.logoContainer}>
      <Image src={oval} alt="logo" height={24} className={styles.oval} />
      <Image
        src={src}
        alt="logo"
        height={24}
        width={167}
        className={styles.text}
        priority={true}
      />
    </Link>
  );
}

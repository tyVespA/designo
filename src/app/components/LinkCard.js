import styles from "./LinkCard.module.css";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../../public/arrow.svg";

import web_design from "../../../public/home/desktop/image-web-design-large.jpg";
import app_design from "../../../public/home/desktop/image-app-design.jpg";
import graphic_design from "../../../public/home/desktop/image-graphic-design.jpg";

export default function LinkCard({ title }) {
  function getVariables(title) {
    title = title.toLowerCase();
    let href, imageSrc, alt;

    switch (title) {
      case "app design":
        href = "/app-design";
        imageSrc = app_design;
        alt = "App Design";
        break;
      case "graphic design":
        href = "/graphic-design";
        imageSrc = graphic_design;
        alt = "Graphic Design";
        break;
      case "web design":
        href = "/web-design";
        imageSrc = web_design;
        alt = "Web Design on a Laptop";
        break;
      default:
        href = "/";
        imageSrc = null;
        alt = "Default description";
    }

    return { href, imageSrc, alt };
  }

  const { href, imageSrc, alt } = getVariables(title);

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

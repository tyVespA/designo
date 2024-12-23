import Image from "next/image";
import styles from "./HeroBanner.module.css";

import bg_web from "../../../../../public/web-design/desktop/bg-pattern-intro-web.svg";
import bg_app from "../../../../../public/app-design/desktop/bg-pattern-intro-app.svg";
import bg_graphic from "../../../../../public/graphic-design/desktop/bg-pattern-intro-graphic.svg";

export default function HeroBanner({ title, children }) {
  let titleCheck = title.toLowerCase();
  let bgImage;
  switch (titleCheck) {
    case "web design":
      bgImage = bg_web;
      break;
    case "app design":
      bgImage = bg_app;
      break;
    case "graphic design":
      bgImage = bg_graphic;
      break;
  }
  return (
    <section className={styles.heroBannerContainer}>
      <Image src={bgImage} alt="" className={styles.bgImage} />
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}

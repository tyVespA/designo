"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./page.module.css";

import bg_two_circles from "../../../../../public/shared/desktop/bg-pattern-two-circles.svg";

const Map1 = dynamic(() => import("../../../components/Maps/Map1"), {
  ssr: false,
});
const Map2 = dynamic(() => import("../../../components/Maps/Map2"), {
  ssr: false,
});

export default function page() {
  return (
    <section className={styles.locationsContainer}>
      <div className={styles.locationContainer} id="canada">
        <div className={styles.textContainer}>
          <Image src={bg_two_circles} alt="" className={styles.bg_image} />
          <h2>Milano</h2>
          <div className={styles.addresses}>
            <div className={styles.text1}>
              <p>Designo Central Office</p>
              <p className={styles.text400}>3886 Wellington Street</p>
              <p className={styles.text400}>Toronto, Ontario M9C 3J5</p>
              <a
                href="https://www.google.com/maps/place/43%C2%B042'50.1%22N+11%C2%B019'44.8%22E/@43.7139078,11.3265267,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.713904!4d11.329107?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className={styles.googleLink}
              >
                Apri con Google Maps →
              </a>
            </div>
            <div className={styles.text2}>
              <p>Contatti (Central Office)</p>
              <p className={styles.text400}>P : +1 253-863-8967</p>
              <p className={styles.text400}>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <Map1 />
        </div>
      </div>

      <div
        className={`${styles.locationContainer} ${styles.reverse}`}
        id="australia"
      >
        <div className={styles.textContainer}>
          <Image src={bg_two_circles} alt="" className={styles.bg_image} />
          <h2>Firenze</h2>
          <div className={styles.addresses}>
            <div className={styles.text1}>
              <p>Designo Central Office</p>
              <p className={styles.text400}>3886 Wellington Street</p>
              <p className={styles.text400}>Toronto, Ontario M9C 3J5</p>
              <a
                href="https://www.google.com/maps/place/43%C2%B042'50.1%22N+11%C2%B019'44.8%22E/@43.7139078,11.3265267,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.713904!4d11.329107?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className={styles.googleLink}
              >
                Apri con Google Maps →
              </a>
            </div>
            <div className={styles.text2}>
              <p>Contatti (Central Office)</p>
              <p className={styles.text400}>P : +1 253-863-8967</p>
              <p className={styles.text400}>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <Map2 />
        </div>
      </div>

      <div className={styles.locationContainer} id="regno-unito">
        <div className={styles.textContainer}>
          <Image src={bg_two_circles} alt="" className={styles.bg_image} />
          <h2>Roma</h2>
          <div className={styles.addresses}>
            <div className={styles.text1}>
              <p>Designo Central Office</p>
              <p className={styles.text400}>3886 Wellington Street</p>
              <p className={styles.text400}>Toronto, Ontario M9C 3J5</p>
              <a
                href="https://www.google.com/maps/place/43%C2%B042'50.1%22N+11%C2%B019'44.8%22E/@43.7139078,11.3265267,17z/data=!3m1!4b1!4m4!3m3!8m2!3d43.713904!4d11.329107?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className={styles.googleLink}
              >
                Apri con Google Maps →
              </a>
            </div>
            <div className={styles.text2}>
              <p>Contatti (Central Office)</p>
              <p className={styles.text400}>P : +1 253-863-8967</p>
              <p className={styles.text400}>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <Map1 />
        </div>
      </div>
    </section>
  );
}

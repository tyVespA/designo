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
const Map3 = dynamic(() => import("../../../components/Maps/Map3"), {
  ssr: false,
});

export default function page() {
  return (
    <section className={styles.locationsContainer}>
      <div className={styles.locationContainer} id="milano">
        <div className={styles.textContainer}>
          <Image src={bg_two_circles} alt="" className={styles.bg_image} />
          <h2>Milano</h2>
          <div className={styles.addresses}>
            <div className={styles.text1}>
              <p>Designo Central Office</p>
              <p className={styles.text400}>Piazza Gae Aulenti, 3</p>
              <p className={styles.text400}>Milano, 20154</p>
              <a
                href="https://www.google.com/maps/dir//20154+Milan,+Metropolitan+City+of+Milan/@45.4834776,9.1070156,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4786c1332e2023bd:0x6f8053a2a9184222!2m2!1d9.1894162!2d45.4835072?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className={styles.googleLink}
              >
                Apri con Google Maps →
              </a>
            </div>
            <div className={styles.text2}>
              <p>Contatti (Central Office)</p>
              <p className={styles.text400}>02 3863 8967</p>
              <p className={styles.text400}>contact@designo.it</p>
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
          <h2>Australia</h2>
          <div className={styles.addresses}>
            <div className={styles.text1}>
              <p>Designo AU Office</p>
              <p className={styles.text400}>19 Balonne Street</p>
              <p className={styles.text400}>New South Wales 2443</p>
              <a
                href="https://www.google.com/maps/dir//43.7139167,11.3291111/@43.7139167,11.3291111,17z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className={styles.googleLink}
              >
                Apri con Google Maps →
              </a>
            </div>
            <div className={styles.text2}>
              <p>Contatti</p>
              <p className={styles.text400}>+1 253-863-8967</p>
              <p className={styles.text400}>contact@designo.au</p>
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
          <h2>Regno Unito</h2>
          <div className={styles.addresses}>
            <div className={styles.text1}>
              <p>Designo UK Office</p>
              <p className={styles.text400}>Bridge St, London</p>
              <p className={styles.text400}>SW1A 2JR, United Kingdom</p>
              <a
                href="https://www.google.com/maps/dir//43.7139167,11.3291111/@43.7139167,11.3291111,17z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className={styles.googleLink}
              >
                Apri con Google Maps →
              </a>
            </div>
            <div className={styles.text2}>
              <p>Contatti</p>
              <p className={styles.text400}>078 3115 1400</p>
              <p className={styles.text400}>contact@designo.uk</p>
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <Map3 />
        </div>
      </div>
    </section>
  );
}

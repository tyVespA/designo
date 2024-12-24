import styles from "./LocationsSection.module.css";
import Location from "./Location";

import illustration_canada from "../../../../public/shared/desktop/illustration-canada.svg";
import illustration_australia from "../../../../public/shared/desktop/illustration-australia.svg";
import illustration_united_kingdom from "../../../../public/shared/desktop/illustration-united-kingdom.svg";

export default function LocationsSection() {
  return (
    <section className={styles.locationsSection}>
      <Location
        imgName={illustration_canada}
        title="Canada"
        alt="illustrazione canada"
        bgRotation={90}
        href={"/dove-siamo#canada"}
      />
      <Location
        imgName={illustration_australia}
        title="Australia"
        alt="illustrazione Australia"
        bgRotation={0}
        href={"/dove-siamo#australia"}
      />
      <Location
        imgName={illustration_united_kingdom}
        title="Regno Unito"
        alt="illustrazione Regno Unito"
        bgRotation={270}
        href={"/dove-siamo#regno-unito"}
      />
    </section>
  );
}

import styles from "./page.module.css";

import ContattaciBanner from "./ContattaciBanner";
import LocationsSection from "@/app/components/Locations/LocationsSection";

export default function page() {
  return (
    <div>
      <ContattaciBanner></ContattaciBanner>
      <section className={styles.contactUsContainer}></section>
      <LocationsSection />
    </div>
  );
}

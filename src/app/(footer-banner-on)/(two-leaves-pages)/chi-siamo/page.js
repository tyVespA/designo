import styles from "./page.module.css";

import Banner from "./components/Banner";
import InfoBox from "./components/InfoBox";
import LocationsSection from "@/app/components/Locations/LocationsSection";

import image_world_class from "../../../../../public/about/desktop/image-world-class-talent.jpg";
import image_real_deal from "../../../../../public/about/desktop/image-real-deal.jpg";

export default function page() {
  return (
    <>
      <section>
        <Banner />
      </section>
      <section>
        <InfoBox
          title="Talento di livello mondiale"
          imgName={image_world_class}
          alt="donna che osserva un progetto"
          reverse="yes"
        >
          Siamo un team di strateghi, risolutori di problemi e smanettoni. Ogni
          design è attentamente sviluppato, dal concept al lancio, per garantire
          il successo nel mercato di riferimento. Aggiorniamo costantemente le
          nostre competenze su una vasta gamma di piattaforme. <br /> <br /> Il
          nostro team è multidisciplinare e non ci concentriamo solo sulla
          forma: anche il contenuto e il significato sono fondamentali.
          Attribuiamo grande importanza alla cura artigianale, al servizio e
          alla consegna puntuale. I nostri clienti sono sempre rimasti colpiti
          dai risultati di alta qualità che racchiudono la storia e la missione
          del loro brand.
        </InfoBox>
      </section>
      <LocationsSection />
      <section>
        <InfoBox
          title="Il meglio del settore"
          imgName={image_real_deal}
          alt="donna che osserva un progetto"
        >
          Come partner strategici delle attività dei nostri clienti, siamo
          pronti ad affrontare qualsiasi sfida come se fosse nostra. Risolvere
          problemi concreti richiede empatia e collaborazione, e ci impegniamo
          per portare una prospettiva fresca ad ogni opportunità. Rendiamo il
          design e la tecnologia più accessibili e offriamo strumenti per
          misurare il successo. <br /> <br />
          Raccontiamo storie visive in accattivante e coinvolgente. Unendo
          strategie aziendali e di marketing, ispiriamo il pubblico all'azione e
          otteniamo risultati concreti.
        </InfoBox>
      </section>
    </>
  );
}

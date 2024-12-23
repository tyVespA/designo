import HeroBanner from "../components/HeroBanner";
import DesignLinksSection from "../components/DesignLinksSection";
import LinkCardsSection from "@/app/components/LinkCardsSection";

import image_airfilter from "../../../../../public/app-design/desktop/image-airfilter.jpg";
import image_eyecam from "../../../../../public/app-design/desktop/image-eyecam.jpg";
import image_faceit from "../../../../../public/app-design/desktop/image-faceit.jpg";
import image_todo from "../../../../../public/app-design/desktop/image-todo.jpg";
import image_loopstudios from "../../../../../public/app-design/desktop/image-loopstudios.jpg";

export default function page() {
  const examplesData = [
    {
      imgName: image_airfilter,
      alt: "app per filtri d'aria",
      title: "Airfilter",
      text: "Risolvi il problema della scarsa qualità dell'aria indoor filtrando l'aria",
    },
    {
      imgName: image_eyecam,
      alt: "app per modifica foto e video",
      title: "Eyecam",
      text: "Un prodotto che ti permette di modificare le tue foto e video preferiti in qualsiasi momento",
    },
    {
      imgName: image_faceit,
      alt: "app per incontrare superstars",
      title: "Faceit",
      text: "Incontra la tua internet superstar preferita con l'app Faceit",
    },
    {
      imgName: image_todo,
      alt: "app per liste di cose da fare",
      title: "Todo",
      text: "Un'app per le to-do list con sincronizzazione cloud con modalità chiara e scura",
    },
    {
      imgName: image_loopstudios,
      alt: "app VR",
      title: "Loopstudios",
      text: "Un'app per esperienze in VR creata per Loopstudios",
    },
  ];
  return (
    <div>
      <HeroBanner title="App Design">
        I nostri design per dispositivi mobile offrono soluzioni digitali
        intuitive, direttamente a portata di mano dei tuoi clienti.
      </HeroBanner>

      <DesignLinksSection examplesData={examplesData} />

      <LinkCardsSection title1="web design" title2="graphic design" />
    </div>
  );
}

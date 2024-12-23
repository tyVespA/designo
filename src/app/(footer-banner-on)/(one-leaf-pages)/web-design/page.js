import styles from "./page.module.css";
import HeroBanner from "@/app/(footer-banner-on)/(one-leaf-pages)/components/HeroBanner";
import DesignLinksSection from "../components/DesignLinksSection";
import LinkCardsSection from "@/app/components/LinkCardsSection";

import image_express from "../../../../../public/web-design/desktop/image-express.jpg";
import image_transfer from "../../../../../public/web-design/desktop/image-transfer.jpg";
import image_photon from "../../../../../public/web-design/desktop/image-photon.jpg";
import image_builder from "../../../../../public/web-design/desktop/image-builder.jpg";
import image_blogr from "../../../../../public/web-design/desktop/image-blogr.jpg";
import image_camp from "../../../../../public/web-design/desktop/image-camp.jpg";

import app_design from "../../../../../public/home/desktop/image-app-design.jpg";

export default function page() {
  const examplesData = [
    {
      imgName: image_express,
      alt: "sito per trasporti",
      title: "Express",
      text: "Un sito di spedizioni multi-corriere per aziende ecommerce",
    },
    {
      imgName: image_transfer,
      alt: "sito per trasferimenti di denaro",
      title: "Transfer",
      text: "Sito per trasferimenti di denaro a basso costo e invio di soldi in pochi secondi",
    },
    {
      imgName: image_photon,
      alt: "sito per lettore musicale",
      title: "Photon",
      text: "Un lettore musicale all'avanguardia con audio ad alta risoluzione ed effetti DSP",
    },
    {
      imgName: image_builder,
      alt: "sito per ricerca di professionisti",
      title: "Builder",
      text: "Connette gli utenti con professionisti locali in base alla loro posizione",
    },
    {
      imgName: image_blogr,
      alt: "sito per creatore di blog",
      title: "Blogr",
      text: "Blogr è una piattaforma per creare blog o pubblicazioni online",
    },
    {
      imgName: image_camp,
      alt: "sito per formazione",
      title: "Camp",
      text: "Ricevi formazione esperta in coding, data analisi, design e marketing digitale",
    },
  ];
  return (
    <div>
      <HeroBanner title="Web Design">
        Creiamo siti web che funzionano come potenti strumenti di marketing e
        che offrono esperienze di brand memorabili.
      </HeroBanner>

      <DesignLinksSection examplesData={examplesData} />

      <LinkCardsSection title1="app design" title2="graphic design" />
    </div>
  );
}

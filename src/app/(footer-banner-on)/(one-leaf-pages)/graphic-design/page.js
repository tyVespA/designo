import HeroBanner from "../components/HeroBanner";
import DesignLinksSection from "../components/DesignLinksSection";
import LinkCardsSection from "@/app/components/LinkCardsSection";

import image_change from "../../../../../public/graphic-design/desktop/image-change.jpg";
import image_boxed_water from "../../../../../public/graphic-design/desktop/image-boxed-water.jpg";
import image_science from "../../../../../public/graphic-design/desktop/image-science.jpg";

export default function page() {
  const examplesData = [
    {
      imgName: image_change,
      alt: "libro di Tim Brown",
      title: "Tim Brown",
      text: "Una copertina di libro progettata per il nuovo rilascio di Tim Brown, 'Change'",
    },
    {
      imgName: image_boxed_water,
      alt: "Packaging per acqua",
      title: "Acqua in scatola",
      text: "Un concetto di packaging creato per Boxed Water",
    },
    {
      imgName: image_science,
      alt: "sito per scienza",
      title: "Scienza!",
      text: "Un poster realizzato in collaborazione con il Federal Art Project",
    },
  ];

  return (
    <div>
      <HeroBanner title="Graphic Design">
        Realizziamo materiali di branding accattivanti, progettati su misura per
        raggiungere i tuoi obiettivi aziendali.
      </HeroBanner>

      <DesignLinksSection examplesData={examplesData} />

      <LinkCardsSection title1="app design" title2="web design" />
    </div>
  );
}

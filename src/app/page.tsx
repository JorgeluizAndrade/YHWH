import AboutJesus from "@/components/AboutJesus";
import CardWordJesus from "@/components/CardWordJesus";
import Footer from "@/components/Footer";
import { GlobeDemo } from "@/components/Goble";
import Home from "@/components/Home";
import { LetterToJesus } from "@/components/LetterToJesus";
import ModalText from "@/components/ModalText";
import { TypewriterEffectSmoothDemo } from "../components/TypewriterEffectSmooth";
import { FlipWordsDemo } from "@/components/FlipWords";

export default function Main() {
  return (
    <div>
        <GlobeDemo />
        <Home />
        <ModalText />
        <CardWordJesus />
        <FlipWordsDemo />
        <LetterToJesus />
        <AboutJesus />
        <Footer />
    </div>
  );
}

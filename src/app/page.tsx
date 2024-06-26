import AboutJesus from "@/components/AboutJesus";
import CardWordJesus from "@/components/CardWordJesus";
import Footer from "@/components/Footer";
import { GlobeDemo } from "@/components/Goble";
import Home from "@/components/Home";
import { LetterToJesus } from "@/components/LetterToJesus";
import ModalText from "@/components/ModalText";

export default function Main() {
  return (
    <div>
        <GlobeDemo />
        <Home />
        <ModalText />
        <CardWordJesus />
        <LetterToJesus />
        <AboutJesus />
        <Footer />
    </div>
  );
}

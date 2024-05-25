import AboutJesus from "@/components/AboutJesus";
import CardWordJesus from "@/components/CardWordJesus";
import { GlobeDemo } from "@/components/Goble";
import Home from "@/components/Home";
import ModalText from "@/components/ModalText";

export default function Main() {
  return (
    <div>
        <GlobeDemo />
        <Home />
        <ModalText />
        <CardWordJesus />
        <AboutJesus />
    </div>
  );
}

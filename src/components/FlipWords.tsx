import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Caminho", "Verdade", "Vida", "Princípio", "Fim"];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Jesus é 
        <FlipWords words={words} /> <br />
        E não há outro igual.
      </div>
    </div>
  );
}

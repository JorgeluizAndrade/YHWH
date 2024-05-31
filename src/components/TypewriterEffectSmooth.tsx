"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Escreva",
    },
    {
      text: "uma",
    },
    {
      text: "carta",
    },
    {
      text: "linda",
    },
    {
        text: "para",
      },
    {
      text: "Jesus Cristo.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        A intimidade é essencial para a comunhão com Cristo❤️‍🔥 
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

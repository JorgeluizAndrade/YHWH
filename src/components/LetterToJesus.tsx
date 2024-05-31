"use client";

import React from "react";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmooth";
import { Button, CardFooter, Textarea } from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { toast } from 'react-toastify';
import { useClipboard } from "@/utils/useClipboard";

type Props = {};

export function LetterToJesus({}: Props) {
  const copyToClipboard = useClipboard();
  const textAreaRef = React.useRef(null);


   const handleCopyClick = () => {
    if (textAreaRef.current) {
      copyToClipboard(textAreaRef.current);
      }
      toast.info('✨Carta copiada!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="flex flex-col items-center mt-9 justify-center h-screen text-center">
      <TypewriterEffectSmoothDemo />
      <div className="flex justify-center items-center mt-6 w-full">
        <Card className="max-w-[600px] w-full">
          <CardBody>
            <div className="w-full">
              <Textarea
              ref={textAreaRef}
                variant="underlined"
                label="Carta"
                labelPlacement="outside"
                placeholder="Escreva a carta aqui!"
                className="w-full h-[500px]"
              />
            </div>
          </CardBody>
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-small text-black/80">
              Copie para por nas suas anotações.
            </p>
            <Button
              disableRipple
              className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/50 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="lg"
              onPress={handleConfetti}
              onClick={handleCopyClick}
            >
              Copiar!
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

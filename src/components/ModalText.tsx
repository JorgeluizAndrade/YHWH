"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

type Props = {};

export default function ModalText({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="text-center pt-10 px-4 sm:px-6 lg:px-8">
      <Button color="primary" variant="shadow" onPress={onOpen}>
        O que Jesus fala para você!
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center" // Changed from "bottom-center" to "center" for better mobile display
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        size="2xl"
        className="" // Added a custom class for responsive styles
      >
        <ModalContent className="px-4 sm:px-6 lg:px-8">
          {(onClose: () => void) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Leia 2 Timóteo 2:22-26
              </ModalHeader>
              <ModalBody>
                <p className="pt-5">
                  "Eu quis te salvar, mas você não deu ouvido
                  <br />
                  Morri pra te libertar e tu foste refém do prazer
                  <br />
                  Mandei profeta te avisar, mas adiantou de que!?
                  <br />
                  Quantas chances Eu dei, mas você não quis saber?"
                  <br />- WJ, Minha Última Poesia
                </p>
                <p>
                  Meus amados, arrependam-se dos seus pecados e vivam para
                  Jesus Cristo! Quanto mais você O rejeita e ignora, mais se
                  cumpre esta palavra:
                  - Quantas vezes eu quis reunir os teus filhos, como a galinha
                  ajunta os seus pintinhos debaixo das asas, e vós não
                  quisestes! Eis que a vossa casa vos ficará deserta.
                  Declaro-vos, pois, que, desde agora, já não me vereis, até que
                  venhais a dizer: "Bendito o que vem em nome do Senhor!"
                  (Mateus 23:37-38). Apenas vá para Ele, e deixe o rio de
                  vida fluir em ti.
                  E sempre lembre que o salário do pecado é a morte, mas o
                  dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso
                  Senhor(Romanos 6 23). Jesus te ama!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

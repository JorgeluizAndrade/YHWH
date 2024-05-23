"use client"

import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";



type Props = {}

export default function ModalText({}: Props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className='text-center pt-10'>
         <Button color="primary"  variant="shadow" onPress={onOpen}>O que Jesus fala para você! </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true} size='5xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Leia 2 Timóteo 2:22-26</ModalHeader>
              <ModalBody>
                <p> 
                Imagine Jesus na sua frente no último momento da sua vida dizendo: 
                </p>
                <p className="padding">
              "Eu quis te salvar, mas você não deu ouvido<br/>
              Morri pra te libertar e tu foste refém do prazer<br/>
              Mandei profeta te avisar, mas adiantou de que!?<br/>
              Quantas chances Eu dei, mas você não quis saber?"<br/>
              - WJ, Minha Última Poesia
                 </p>
                <p>
                Meus amados, arrependam-se dos seus pecados e vivam para Jesus Cristo! Quanto mais você O rejeita e ignora, mais se cumpre esta palavra:<br/>
            - Quantas vezes eu quis reunir os teus filhos, como a galinha ajunta os seus pintinhos debaixo das asas, e vós não quisestes! 
             Eis que a vossa casa vos ficará deserta.
             Declaro-vos, pois, que, desde agora, já não me vereis, até que venhais a dizer:
            "Bendito o que vem em nome do Senhor!" (Mateus 23:37-38). <br/> No final de tudo, não adiantará dizer: "Mas Senhor meu Deus, eu NÃO tive chances." Recomendo que leia novamente a poesia acima.
            Faça a vontade do Senhor, arrependa-se, siga-O e deleite-se nas leis do nosso Deus. Jesus te ama e quer você com Ele! Apenas vá, e deixe o rio de vida fluir em ti.<br/>
            E sempre lembre que o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor (Romanos 6 23).
            Jesus te ama!
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
  )
}
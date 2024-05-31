'use client';

import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

import { motion } from "framer-motion";


type Props = {};

function AboutJesus({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    className="flex justify-center items-center min-h-screen mt-10 pt-10 px-4">
    <div className="max-w-md w-full mt-10 text-center">
      <h2 className="text-3xl mt-4 italic text-center font-medium capitalize mb-8">
        YHWH(יהוה)
      </h2>
      <p className="mb-3">
        YHWH, na tradução do hebraico para português significa: “Ele é” ou
        “Ele é Aquele que é”. E esse é Jesus, O Cordeiro de Deus Altíssimo,
        que desde Gênesis 1:1 até Apocalipse 22:21 fala dEle.
      </p>
      <h3 className="font-bold mt-4">E quem é Jesus?</h3>
      <div className="space-y-4">
      <p>
        Ele é O Verbo.
        <Popover placement="top" color="primary">
          <PopoverTrigger>
            <Button variant="light" color="default">
              João 1:1
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.
          </PopoverContent>
        </Popover>
      </p>
      <p>
        Jesus é O Cordeiro de Deus que tira o pecado do mundo.
        <Popover placement="top" color="primary">
          <PopoverTrigger>
            <Button variant="light" color="default">
              João 1:29
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            No dia seguinte João viu a Jesus, que vinha para ele, e disse: Eis o Cordeiro de Deus, que tira o pecado do mundo.
          </PopoverContent>
        </Popover>
      </p>
      <p>
        Ele é o Messias.
        <Popover placement="top" color="primary">
          <PopoverTrigger>
            <Button variant="light" color="default">
              Mateus 16:15-16
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            Disse-lhes ele: E vós, quem dizeis que eu sou? Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo.
          </PopoverContent>
        </Popover>
      </p>
      <p>
        Cristo Jesus é o Caminho, a Verdade e a Vida.
        <Popover placement="top" color="primary">
          <PopoverTrigger>
            <Button variant="light">
              João 14:6
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.
          </PopoverContent>
        </Popover>
      </p>
      <p>
        Ele é Filho de Deus.
        <Popover placement="top" color="primary">
          <PopoverTrigger>
            <Button variant="light" color="default">
              João 3:16
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
          </PopoverContent>
        </Popover>
      </p>
      <p>
        <span className="italic">
          Jesus é a Luz que veio ao mundo, não para condenar o mundo, porém para que o mundo fosse salvo por meio dele.
          <br />
          - Mas lembre-se, Ele não veio trazer a paz, mas sim a espada.
          <Popover placement="top" color="primary">
            <PopoverTrigger>
              <Button variant="light" color="default">
                Mateus 10:34-39
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              Não cuideis que vim trazer a paz à terra; não vim trazer paz, mas espada. Porque eu vim pôr em dissensão o homem contra seu pai, e a filha contra sua mãe, e a nora contra sua sogra; E assim os inimigos do homem serão os seus familiares. Quem ama o pai ou a mãe mais do que a mim não é digno de mim; e quem ama o filho ou a filha mais do que a mim não é digno de mim. E quem não toma a sua cruz, e não segue após mim, não é digno de mim. Quem achar a sua vida, perdê-la-á, e quem perder a sua vida por amor de mim, achá-la-á.
            </PopoverContent>
          </Popover>
        </span>
      </p>
      <p>
        <span className="font-medium mb-6">
          Cristo Jesus é o caminho, pois Ele é o único que te leva ao Pai.
          <Popover placement="top" color="primary">
            <PopoverTrigger>
              <Button variant="light" color="default">
                João 14:6
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.
            </PopoverContent>
          </Popover>
          . Ele é a vida, pois se sacrificou para que tenhamos vida.
          <Popover placement="top" color="primary">
            <PopoverTrigger>
              <Button variant="light" color="default">
                2 Coríntios 5:15
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              E ele morreu por todos, para que os que vivem não vivam mais para si, mas para aquele que por eles morreu e ressuscitou.
            </PopoverContent>
          </Popover>
          .<br />
          Messias é a verdade, pois testifica do Pai, o Deus Altíssimo.
          <Popover placement="top" color="primary">
            <PopoverTrigger>
              <Button variant="light" color="default">
                João 8:14
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              Jesus respondeu, e disse-lhes: Ainda que eu testifico de mim mesmo, o meu testemunho é verdadeiro, porque sei de onde vim e para onde vou; mas vós não sabeis de onde venho, nem para onde vou.
            </PopoverContent>
          </Popover>
          . Jesus é o que é, e Ele é Deus.
          <Popover placement="top" color="primary">
            <PopoverTrigger>
              <Button variant="light" color="default">
                João 10:30
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              Eu e o Pai somos um.
            </PopoverContent>
          </Popover>
          |
          <Popover placement="top" color="primary">
            <PopoverTrigger>
              <Button variant="light" color="default">
                João 8:47
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              Quem é de Deus escuta as palavras de Deus; por isso vós não as escutais, porque não sois de Deus.
            </PopoverContent>
          </Popover>
        </span>
      </p>
      </div>
    </div>
  </motion.div>
  );
}

export default AboutJesus;

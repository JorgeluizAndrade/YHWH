'use client';

import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { motion } from "framer-motion";


type Props = {};

function AboutJesus({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    className="flex justify-center items-center min-h-screen mt-5 px-4">
    <div className="max-w-md w-full text-center">
      <h2 className="text-3xl mt-4 italic text-center font-medium capitalize mb-8">
        YHWH(יהוה)
      </h2>
      <p className="mb-3">
        YHWH, na tradução do hebraico para português significa: “Ele é” ou
        “Ele é Aquele que é”. E esse é Jesus, O Cordeiro de Deus Altíssimo,
        que desde Gênesis 1:1 até Apocalipse 22:21 fala de apenas uma Pessoa,
        que é <span className="font-medium">Jesus de Nazaré</span>.
      </p>
      <h3 className="font-bold mt-4">E quem é Jesus?</h3>
      <div className="space-y-4">
        <p>
          Ele é O Verbo.
          <Tooltip
            color="primary"
            content="No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus."
            className="capitalize"
          >
            <Button variant="light" color="default" className="capitalize">
              João 1:1  
            </Button>
          </Tooltip>
        </p>
        <p>
          Jesus é O Cordeiro de Deus que tira o pecado do mundo.
          <Tooltip
            color="primary"
            content="No dia seguinte João viu a Jesus, que vinha para ele, e disse: Eis o Cordeiro de Deus, que tira o pecado do mundo."
            className="capitalize"
          >
            <Button variant="light" color="default" className="capitalize">
              João 1:29
            </Button>
          </Tooltip>
        </p>
        <p>
          Ele é o Messias.
          <Tooltip
            color="primary"
            content="Disse-lhes ele: E vós, quem dizeis que eu sou? Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo."
            className="capitalize"
          >
            <Button variant="light" color="default" className="capitalize">
              Mateus 16:15-16
            </Button>
          </Tooltip>
        </p>
        <p>
          Cristo Jesus é o Caminho, a Verdade e a Vida.
          <Tooltip
            color="primary"
            content="Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim."
            className="capitalize"
          >
            <Button variant="light" className="capitalize">
              João 14:6
            </Button>
          </Tooltip>
        </p>
        <p>
          Ele é Filho de Deus.
          <Tooltip
            color="primary"
            content="Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
            className="capitalize"
          >
            <Button variant="light" color="default" className="capitalize">
              João 3:16
            </Button>
          </Tooltip>
        </p>
        <p>
          <span className="italic">
            Jesus é a Luz que veio ao mundo, não para condenar o mundo, porém
            para que o mundo fosse salvo por meio dele.
            <br />
            - Mas lembre-se, Ele não veio trazer a paz, mas sim a espada.
            <Tooltip
              color="primary"
              content="Não cuideis que vim trazer a paz à terra; não vim trazer paz, mas espada. Porque eu vim pôr em dissensão o homem contra seu pai, e a filha contra sua mãe, e a nora contra sua sogra; E assim os inimigos do homem serão os seus familiares. Quem ama o pai ou a mãe mais do que a mim não é digno de mim; e quem ama o filho ou a filha mais do que a mim não é digno de mim. E quem não toma a sua cruz, e não segue após mim, não é digno de mim. Quem achar a sua vida, perdê-la-á, e quem perder a sua vida por amor de mim, achá-la-á."
              className="capitalize"
            >
              <Button variant="light" color="default" className="capitalize">
                Mateus 10:34-39
              </Button>
            </Tooltip>
          </span>
        </p>
        <p>
          <span className="font-medium mb-6">
            Cristo Jesus é o caminho, pois Ele é o único que te leva ao Pai.
            <Tooltip
              color="primary"
              content="Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim."
              className="capitalize"
            >
              <Button variant="light" color="default" className="capitalize">
                João 14:6
              </Button>
            </Tooltip>
            . Ele é a vida, pois se sacrificou para que tenhamos vida.
            <Tooltip
              color="primary"
              content="E ele morreu por todos, para que os que vivem não vivam mais para si, mas para aquele que por eles morreu e ressuscitou."
              className="capitalize"
            >
              <Button variant="light" color="default" className="capitalize">
                2 Coríntios 5:15
              </Button>
            </Tooltip>
            .<br />
            Messias é a verdade, pois testifica do Pai, o Deus Altíssimo.
            <Tooltip
              color="primary"
              content="Jesus respondeu, e disse-lhes: Ainda que eu testifico de mim mesmo, o meu testemunho é verdadeiro, porque sei de onde vim e para onde vou; mas vós não sabeis de onde venho, nem para onde vou."
              className="capitalize"
            >
              <Button variant="light" color="default" className="capitalize">
                João 8:14
              </Button>
            </Tooltip>
            . Jesus é o que é, e Ele é Deus.
            <Tooltip
              color="primary"
              content="Eu e o Pai somos um."
              className="capitalize"
            >
              <Button variant="light" color="default" className="capitalize">
                João 10:30
              </Button>
            </Tooltip>
            |
            <Tooltip
              color="primary"
              content="Quem é de Deus escuta as palavras de Deus; por isso vós não as escutais, porque não sois de Deus."
              className="capitalize"
            >
              <Button variant="light" color="default" className="capitalize">
                João 8:47
              </Button>
            </Tooltip>
          </span>
        </p>
      </div>
    </div>
  </motion.div>
  );
}

export default AboutJesus;

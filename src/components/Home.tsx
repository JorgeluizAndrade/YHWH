"use client";

import React from "react";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
    }}    
    className="pt-2">
      <div className="flex items-center justify-center">
        {/* <Image
          width={500}
          height={300}
          alt="Jesus is Lord"
          src="https://i.pinimg.com/564x/79/e4/bd/79e4bde615db617869d800c53cf616f1.jpg"
        /> */}
      </div>
      <h1 className="pt-3 text-center text-3xl">Olá amigos(as)!</h1>
      <p className="text-center pt-3 text-lg">
        Em Mateus 24:35 o Senhor Jesus diz "-os céus e a terra passarão, mas as minhas palavras jamais passarão." <br />
        Logo, consegue vê a importância da palavra? Mas também lembre, o evangelho não é somente em palavras, porém também em poder e ações no Espírito Santo. <br />
        Eu proponho um desafio simples e nada difícil, que é o seguinte: No capítulo que cair em um livro, você lê o capítulo todo. Bem fácil, né? 
        <br /> 
      </p>
    </motion.div>
  );
}

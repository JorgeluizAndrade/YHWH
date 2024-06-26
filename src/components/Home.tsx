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
      <h1 className="pt-3 text-center text-3xl">Marcos 1:15</h1>
      <p className="text-center pt-3 text-lg">
        O tempo está cumprido, e o Reino de Deus está próximo. Arrependei-vos e crede no evangelho.
      </p>
    </motion.div>
  );
}

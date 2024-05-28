/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import useSWR from "swr";
import { motion } from "framer-motion";


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = {};

type BibleApi = {
  book: {
    name: string;
    version: string;
  };
  chapter: number;
  number: number;
  text: string;
};

export default function CardWordJesus({}) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR<BibleApi>(
    () => "https://www.abibliadigital.com.br/api/verses/nvi/random",
    fetcher
  );


  if (isLoading)
    return (
      <div className="pt-24 ">
        <div className="w-full gap-x-2 flex justify-center items-center">
          <div className="w-5 bg-[#d991c2] animate-pulse h-5 rounded-full animate-bounce"></div>
          <div className="w-5 animate-pulse h-5 bg-[#9869b8] rounded-full animate-bounce"></div>
          <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce"></div>
        </div>
      </div>
    );

    if(error){
      <h1>eita</h1>
    }

  const router = useRouter();
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="flex justify-center pt-20 items-center">
      <Card className="max-w-[450px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="Crown of Thorns"
            height={40}
            radius="sm"
            src="https://i.pinimg.com/564x/35/7d/80/357d80a6a1541b221d898600c62e7dee.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">{data?.book?.name}</p>
            <p className="text-small text-default-500">
              {data?.chapter}: {data?.number}
            </p>
            <p className="text-small text-default-500">
              {" "}
              Versão: {data?.book.version}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>{data?.text}</CardBody>
        <Divider />
        <CardFooter>
          <Button color="primary" variant="light" onClick={handleRefresh}>
            Outro versiculo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

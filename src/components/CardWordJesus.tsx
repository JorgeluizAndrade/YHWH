/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { Tabs, Tab } from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";

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
  const [version, setVersion] = React.useState("nvi");

  const fetcher = async (url: string) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJNb24gSnVuIDEwIDIwMjQgMjM6MDE6MTIgR01UKzAwMDAuamRzaGpzamRqc3NAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTgwNjA0NzJ9.eHEyCfGAtaVdBDteq6S6pPeXK_pv8btXUy6HtnfkIJ4';
    const headers = new Headers();

    
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Accept', 'application/json');
  
    const res = await fetch(url, { headers });
    return await res.json();
  };
  
  const { data, isLoading, error } = useSWR<BibleApi>(
    () => `https://www.abibliadigital.com.br/api/verses/${version}/random`,
    fetcher
  );

  const handleChangeVersion = (key: string | number) => {
    if (typeof key === "string") {
      setVersion(key);
    }
  };

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

  if (error) {
    <h1>eita</h1>;
  }

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex justify-center pt-20 items-center"
    >
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
          <Tabs
            color="primary"
            aria-label="Bible Versions Tabs"
            radius="full"
            selectedKey={version}
            onSelectionChange={handleChangeVersion}
          >
            <Tab key="acf" title="ACF" />
            <Tab key="nvi" title="NVI" />
          </Tabs>
          <Button color="primary" variant="light" onClick={handleRefresh}>
            Outro versiculo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
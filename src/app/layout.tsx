import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SWRProvider } from "./swr-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Jesus Words",
  description: "Jesus loves you my friend!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
          <SWRProvider>
            <NextUIProvider>{children}</NextUIProvider>
          </SWRProvider>
      </body>
    </html>
  );
}

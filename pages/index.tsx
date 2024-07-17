import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import discordLogo from "@/public/discord-logo.png";
import prismLogo from "@/public/prism-logo.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DiscordSuccess from "./DiscordSuccess";
import App from "next/app";
import BoardwalkSuccess from "./BoardwalkSuccess";

const inter = Inter({ subsets: ["latin"] });

enum APPS {
  discord = "discord",
  boardwalk = "boardwalk",
}

export default function Home() {
  const [connectedFrom, setConnectedFrom] = useState<APPS | undefined>();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.href.includes("makeprisms")) {
        setConnectedFrom(APPS.discord);
      } else {
        setConnectedFrom(APPS.boardwalk);
      }
    }
  }, []);

  const successPage = (app: APPS) => {
    switch (app) {
      case APPS.discord:
        return <DiscordSuccess />;
      case APPS.boardwalk:
        return <BoardwalkSuccess />;
      default:
        throw new Error("Invalid app");
    }
  };

  return (
    <>
      <Head>
        <title>
          {connectedFrom === APPS.discord ? "Zap Bot" : "Boardwalk NWA"}
        </title>
        <meta name="description" content="Broadcast nwa responses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={
            connectedFrom === APPS.discord ? "/favicon.png" : "/bw-favicon.ico"
          }
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&family=Teko:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {connectedFrom && successPage(connectedFrom)}
      </main>
    </>
  );
}

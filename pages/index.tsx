import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import discordLogo from "@/public/discord-logo.png";
import prismLogo from "@/public/prism-logo.png";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Head>
        <title>Zap Bot</title>
        <meta name="description" content="Broadcast nwa responses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Image
              src={discordLogo}
              alt="Discord Logo"
              width={50}
              height={50}
            />
            <Image
              src={prismLogo}
              alt="Other Image"
              width={50}
              height={50}
              style={{ marginLeft: "20px" }}
            />
          </div>
          <p>
            Alby successfully connected to the Zap Bot. You can return to
            discord now.
          </p>
        </div>
      </main>
    </>
  );
}

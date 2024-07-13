import Stopwatch from "@/components/stopwatch";
import Head from "next/head";
import styles from "../styles/style.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stopwatch App</title>
        <meta name="description" content="A simple stopwatch app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Stopwatch />
      </main>
    </div>
  );
}

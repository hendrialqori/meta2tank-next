import Head from "next/head";
import * as Section from "@/components/landing-page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse</title>
      </Head>
      <div className="bg-primary-black overflow-hidden">
        <Section.Navbar />
        <Section.Hero />
      </div>
    </>
  );
}

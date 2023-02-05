import Head from "next/head";
import * as Section from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse</title>
      </Head>
      <div className="bg-primary-black overflow-hidden">
        <Section.Navbar />
        <Section.Hero />
        <div className="relative">
          <Section.About />
          <div className="gradient-03 z-0" />
          <Section.Explore />
        </div>
        <div className="relative">
          <Section.GetStarted />
          <div className="gradient-4 z-0" />
          <Section.WhatsNew />
        </div>
        <Section.World />
        <div className="relative">
          <Section.Insight />
          <div className="gradient-05 z-0" />
          <Section.Feeback />
        </div>
        <Section.Footer />
      </div>
    </>
  );
}

import { FC, useState } from "react";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { exploreWorlds } from "@/constans";
import { TypingText, TitleText } from "./custom/text";
import { m } from "framer-motion";
import { ExploreCard } from "./custom/exploreCard";

export const Explore: FC = () => {
  const [active, setActive] = useState("");

  const handleActive = (worldId: string) => {
    if (active === worldId) {
      setActive("");

      return;
    }

    setActive(worldId);
  };

  console.log(active);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <m.div
        variants={staggerContainer(0.5, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText title="| The world" textStyles="text-center" />
        {/* Error this component */}
        <TitleText
          title={
            <>
              Choose the world you want <br /> to Explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex md:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, i) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={i}
              active={active}
              handleClick={() => handleActive(world.id)}
            />
          ))}
        </div>
      </m.div>
    </section>
  );
};

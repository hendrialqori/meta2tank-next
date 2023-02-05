import { FC } from "react";
import styles from "@/styles";
import { m } from "framer-motion";
import { TitleText, TypingText } from "./custom/text";
import { fadeIn } from "@/utils/motion";

export const World: FC = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <m.div
        // variants={staggerContainer("", "")}
        // initial="hidden"
        // whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText title="| People on ther world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <m.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-20 left-20 top-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-02.png" alt="people" className="h-full w-full" />
          </div>
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-01.png" alt="people" className="h-full w-full" />
          </div>
          <div className="absolute top-1/2 w-[70px] left-[45%] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="/people-03.png" alt="people" className="h-full w-full" />
          </div>
        </m.div>
      </m.div>
    </section>
  );
};

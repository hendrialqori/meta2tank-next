import { FC } from "react";
import { m } from "framer-motion";
import styles from "@/styles";
import { fadeIn, planetVariants } from "@/utils/motion";
import { TitleText, TypingText } from "./custom/text";
import { newFeatures } from "@/constans";
import { NewFeature } from "./custom/newFeature";

export const WhatsNew: FC = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <m.div
        // variants={staggerContainer("", "")}
        // initial="hidden"
        // whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 `}
      >
        <m.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex flex-col"
        >
          <TypingText title="| Whats new about Meta2Tank?" />
          <TitleText
            title={<>Get started with just a few click</>}
            textStyles={"tracking-wide leading-[1.1]"}
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((features, i) => (
              <NewFeature {...features} key={i} />
            ))}
          </div>
        </m.div>
        <m.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/whats-new.png"
            alt="whats-new"
            className="w-[90%] h-[90%] object-contain"
          />
        </m.div>
      </m.div>
    </section>
  );
};

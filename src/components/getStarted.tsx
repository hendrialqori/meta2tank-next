import { m } from "framer-motion";
import { staggerContainer, planetVariants, fadeIn } from "@/utils/motion";
import styles from "@/styles";
import { TitleText, TypingText } from "./custom/text";
import { startingFeatures } from "@/constans";
import { StartStep } from "./custom/startStep";

export const GetStarted: React.FC = () => {
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
          variants={planetVariants("left")}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </m.div>
        <m.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-between flex-col"
        >
          <TypingText title="| How Meta2Tank works" />
          <TitleText
            title={<>Get started with just a few click</>}
            textStyles={"tracking-wide leading-[1.1]"}
          />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, i) => (
              <StartStep key={i} number={i + 1} text={feature} />
            ))}
          </div>
        </m.div>
      </m.div>
    </section>
  );
};

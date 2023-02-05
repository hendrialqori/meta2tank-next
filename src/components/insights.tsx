import { FC } from "react";
import { insights } from "@/constans";
import { m } from "framer-motion";
import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { TypingText, TitleText } from "./custom/text";
import { InsightCard } from "./custom/insightCard";

export const Insight: FC = () => {
  return (
    <section className={`${styles.paddings} sm:pl-16 pl-6`}>
      <m.div
        // variants={staggerContainer("", "")}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about Meta2tank" textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight, i) => (
            <InsightCard key={i} index={i + 1} {...insight} />
          ))}
        </div>
      </m.div>
    </section>
  );
};

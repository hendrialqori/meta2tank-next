import { FC } from "react";
import { m } from "framer-motion";
import styles from "@/styles";
import { fadeIn, zoomIn } from "@/utils/motion";

export const Feeback: FC = () => {
  return (
    <section className={`${styles.paddings} sm:pl-16 pl-6`}>
      <m.div
        // variants={staggerContainer("", "")}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <m.div
          // variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4
          rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Hendri Alqori
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Frontend Engineer | Meta2Tank
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            nihil ipsam, nesciunt esse facilis nemo sequi a aspernatur beatae,
            nihil ipsam, nesciunt esse facilis nemo sequi a aspernatur beatae, "
          </p>
        </m.div>
        <m.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="/planet-09.png"
            alt="planet-09"
            className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
          <m.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <img
              src="/stamp.png"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
            />
          </m.div>
        </m.div>
      </m.div>
    </section>
  );
};

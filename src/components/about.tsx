import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "./custom/text";

export const About: React.FC = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer(0.5, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Meta2Tank" textStyles="text-center" />
        {/*  Error this component */}

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">Lorem</span> ipsum dolor
          sit amet consectetur, adipisicing elit. Maxime totam sint molestiae
          distinctio dicta omnis facere, ea{" "}
          <span className="font-extrabold text-white">exercitationem</span>{" "}
          molestias ipsam voluptatem asperiores veritatis accusamus fugiat est
          quibusdam porro quis{" "}
          <span className="font-extrabold text-white">gracias!</span>
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow-down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
};

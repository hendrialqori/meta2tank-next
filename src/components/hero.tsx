import { m } from "framer-motion";
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

export const Hero: React.FC = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <m.div
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
          <div className="flex flex-col justify-center items-center relative z-10">
            <m.h1
              // variants={textVariant(1.1)}
              initial="hidden"
              whileInView="show"
              className={`${styles.heroHeading}`}
            >
              META2TANK
            </m.h1>
            <m.div
              // variants={textVariant(1.2)}
              initial="hidden"
              whileInView="show"
              className="flex flex-row items-center justify-center"
            >
              <h1 className={styles.heroHeading}>MA</h1>
              <h1 className={styles.heroDText} />
              <h1 className={styles.heroHeading}>NESS</h1>
            </m.div>
          </div>
          <m.div
            // variants={slideIn("right", "tween", 0.2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
          >
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
            <img
              src="/cover.png"
              alt="cover"
              className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            />
            <a
              href="#explore"
              className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10"
            >
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </a>
            {/* </div> */}
          </m.div>
        </div>
      </m.div>
    </section>
  );
};

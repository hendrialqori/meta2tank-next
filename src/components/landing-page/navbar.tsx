import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold leading-[30px] text-white text-[24px]">
          META2TANK
        </h2>
        <img
          src="/menu.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
};
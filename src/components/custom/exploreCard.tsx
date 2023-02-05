import { FC } from "react";
import { m } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import styles from "@/styles";

type ExploreCardProps = {
  id: string;
  index: number;
  imgUrl: string;
  title: string;
  active: string;
  handleClick: () => void;
};

export const ExploreCard: FC<ExploreCardProps> = ({
  id,
  index,
  imgUrl,
  title,
  active,
  handleClick,
}) => {
  return (
    <m.div
      // variants={fadeIn("right", "spring", index * 0.25, 0.75)}
      className={`relative ${
        id === active ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.75s] ease-out-flex cursor-pointer bg-white rounded-[24px]`}
      onClick={handleClick}
    >
      <img
        src={imgUrl}
        alt={title}
        className="h-full w-full object-cover absolute rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-20 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div
          className="absolute bottom-8 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]
        "
        >
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </m.div>
  );
};

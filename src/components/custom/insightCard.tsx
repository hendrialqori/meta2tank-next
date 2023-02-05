import { FC } from "react";
import { m } from "framer-motion";
import { fadeIn } from "@/utils/motion";

type InsightCardProps = {
  index: number;
  imgUrl: string;
  title: string;
  subtitle: string;
};

export const InsightCard: FC<InsightCardProps> = ({
  index,
  imgUrl,
  title,
  subtitle,
}) => {
  return (
    <m.div
      // variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <img
        src={imgUrl}
        alt="planet-01"
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
      <div className="w-full">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
        </div>
      </div>
      <button className="lg:flex hidden justify-center items-center h-[55px] w-[80px] rounded-full border-[1px] bg-transparent active:scale-90 duration-200">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="h-[30%] w-[30%] object-contain"
        />
      </button>
    </m.div>
  );
};

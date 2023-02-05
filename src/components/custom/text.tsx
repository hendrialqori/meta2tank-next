import type { FC } from "react";
import { m } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

type TText<T> = {
  title: T;
  textStyles?: string;
};

export const TypingText: FC<TText<string>> = ({
  title = "Metaverse",
  textStyles,
}) => (
  <m.p
    variants={textContainer}
    whileInView="show"
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, i) => (
      <m.span key={i} variants={textVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </m.span>
    ))}
  </m.p>
);

export const TitleText: FC<TText<React.ReactNode>> = ({
  title,
  textStyles,
}) => (
  <m.h2
    // variants={textVariant2}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </m.h2>
);

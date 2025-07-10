"use client";
import { motion } from "motion/react";

type BubbleProps = {
  size: number;
  cursorPosition?: { x: number; y: number };
};

const Bubble = ({ size }: BubbleProps) => {
  const randomOffset = Math.random() * 2;
  const oneOrZero = Math.random() < 0.5 ? 0 : 1;

  const randomThemeColors = [
    "rgb(17, 24, 39)", // --color-neutral-50
    "rgb(31, 41, 55)", // --color-neutral-100
    "rgb(55, 65, 81)", // --color-neutral-200
    "rgb(75, 85, 99)", // --color-neutral-300
    "rgb(107, 114, 128)", // --color-neutral-400
    "rgb(156, 163, 175)", // --color-neutral-500
    "rgb(209, 213, 219)", // --color-neutral-600
    "rgb(229, 231, 235)", // --color-neutral-700
    "rgb(243, 244, 246)", // --color-neutral-800
    "rgb(249, 250, 251)", // --color-neutral-900
    "rgb(255, 255, 255)", // --color-neutral-950
  ];
  const randomColor = () => {
    const number = Math.floor(Math.random() * randomThemeColors.length - 1);
    return randomThemeColors[number];
  };

  return (
    <motion.div
      className="bg-blue-400 rounded-full shadow-lg absolute justify-center items-center flex text-brand-200 font-bold"
      style={{
        width: size,
        height: size,
        fontSize: size / 2.5,
        color: randomColor(),
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [20, -10, 0, 20, 20],
        x: [0, 50, 0, -56, 0],
      }}
      transition={{
        duration: 4 + randomOffset,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: randomOffset,
      }}
      whileHover={{
        scale: 1.3,
        rotate: 10,
      }}
    >
      <span style={{ transform: `rotate(${Math.random() * 360}deg)` }}>
        {oneOrZero}
      </span>
    </motion.div>
  );
};

export default Bubble;

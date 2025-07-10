"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type BubbleProps = {};

type BubbleData = {
  top: number;
  left: number;
  size: number;
};

const Bubble = ({}: BubbleProps) => {
  const [bubble, setBubble] = useState<BubbleData | null>(null);

  useEffect(() => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = 40 + Math.random() * 60;
    setBubble({ top, left, size });
  }, []);

  if (!bubble) {
    return null; // Prevent rendering until bubble data is initialized
  }

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
        width: bubble.size,
        height: bubble.size,
        fontSize: bubble.size / 2.5,
        color: randomColor(),
        top: bubble.top + "%",
        left: bubble.left + "%",
        position: "absolute",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 0.8,
        scale: 1,
        y: [10, -10, 0, 20, 10],
        x: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: Math.random() * 2,
      }}
      whileHover={{
        scale: 1.3,
        rotate: 10,
      }}
    >
      <span style={{ transform: `rotate(${Math.random() * 360}deg)` }}>
        {Math.random() < 0.5 ? 0 : 1}
      </span>
    </motion.div>
  );
};

export default Bubble;

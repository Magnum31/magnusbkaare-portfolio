"use client";
import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

type BubbleProps = {
  size: number;
  cursorPosition?: { x: number; y: number };
};

const Bubble = ({ size, cursorPosition }: BubbleProps) => {
  const [scope, animate] = useAnimate();
  const [initialPosition, setInitialPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);

  useEffect(() => {
    const top = Math.random() * 900;
    const left = Math.random() * 900;
    setInitialPosition({ left, top });
  }, []);

  useEffect(() => {
    if (!initialPosition) return;
    if (!cursorPosition) {
      animate(
        scope.current,
        { x: 0, y: 0, scale: 1, rotate: 0 },
        { duration: 0.5, type: "spring", stiffness: 300, damping: 20 }
      );
      return;
    }

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const bubbleX = (initialPosition.left / 100) * windowWidth;
    const bubbleY = (initialPosition.top / 100) * windowHeight;

    const dx = bubbleX - cursorPosition.x;
    const dy = bubbleY - cursorPosition.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const pushRadius = 150;
    const maxPush = 30;
    if (distance < pushRadius) {
      const pushX =
        (dx / distance) * ((pushRadius - distance) / pushRadius) * maxPush;
      const pushY =
        (dy / distance) * ((pushRadius - distance) / pushRadius) * maxPush;

      animate(
        scope.current,
        {
          x: pushX,
          y: pushY,
          scale: 1.2,
          rotate: 5,
          boxShadow: `0 0 ${size}px rgba(96, 165, 250, 0.8)`,
        },
        { type: "spring", stiffness: 300, damping: 20 }
      );
    } else {
      animate(
        scope.current,
        {
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          boxShadow: `0 0 ${size / 2}px rgba(96, 165, 250, 0.6)`,
        },
        { type: "spring", stiffness: 300, damping: 30 }
      );
    }
  }, [cursorPosition, animate, scope, size]);
  return (
    <motion.div
      className="absolute rounded-full shadow-lg bg-brand-50"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6)",
        boxShadow: `0 0 ${size / 2}px rgba(96, 165, 250, 0.6)`,
        top: `${initialPosition?.top}%`,
        left: `${initialPosition?.left}%`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Bubble;

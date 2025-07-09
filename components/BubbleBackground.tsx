"use client";
import { useEffect, useState } from "react";
import Bubble from "./Bubble";

type BubbleData = {
  top: number;
  left: number;
  size: number;
};

export default function BubbleBackground({ count }: { count: number }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, () => ({
      top: Math.random() * 90,
      left: Math.random() * 90,
      size: 40 + Math.random() * 60,
    }));
    setBubbles(generated);
  }, [count]);

  // Track mouse position inside the bubble container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div
      className="absolute inset-0 pointer-events-none -z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCursorPosition({ x: 0, y: 0 })}
    >
      {bubbles.map((bubble, i) => {
        return (
          <div
            key={i}
            style={{
              top: `${bubble.top}}`,
              left: `${bubble.left}%`,
              width: bubble.size,
              height: bubble.size,
            }}
            className="absolute"
          >
            <Bubble
              key={i}
              size={bubble.size}
              cursorPosition={cursorPosition}
            />
          </div>
        );
      })}
    </div>
  );
}

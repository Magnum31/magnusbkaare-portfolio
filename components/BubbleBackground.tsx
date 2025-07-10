"use client";
import { useEffect, useState } from "react";
import Bubble from "./Bubble";

type BubbleData = {
  top: number;
  left: number;
  size: number;
};

export default function BubbleBackground({ count }: { count: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10  bg-default-background ">
      {[...Array(count)].map((_, i) => {
        const size = 40 + Math.random() * 60; // 40–100 px size
        return (
          <div
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            className="absolute"
          >
            <Bubble size={size} />
          </div>
        );
      })}
    </div>
  );
}

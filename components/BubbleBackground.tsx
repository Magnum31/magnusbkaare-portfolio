"use client";
import { useEffect, useState } from "react";
import Bubble from "./Bubble";

export default function BubbleBackground({ count }: { count: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 bg-default-background ">
      {[...Array(count)].map((_, i) => {
        return <Bubble key={i} />;
      })}
    </div>
  );
}

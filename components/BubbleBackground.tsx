"use client";
import Bubble from "./Bubble";

export default function BubbleBackground({ count }: { count: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 bg-default-background overflow-hidden">
      {[...Array(count)].map((_, i) => {
        return <Bubble key={i} />;
      })}
    </div>
  );
}

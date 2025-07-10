import Bubble from "@/components/Bubble";
import BubbleBackground from "@/components/BubbleBackground";

export default function Home() {
  const bubbleCount = 100;

  return (
    <main className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-10 gap-16 sm:p-20 font-body text-default-font relative overflow-hidden">
      {/* Bubble Background */}
      <BubbleBackground count={bubbleCount} />

      <section className="relative z-10 flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-heading-1 font-heading-1">Hi, I’m Magnus</h1>
        <p className="text-body max-w-xl text-subtext-color">
          Welcome to my portfolio website built with Next.js and Tailwind CSS.
        </p>
      </section>
    </main>
  );
}

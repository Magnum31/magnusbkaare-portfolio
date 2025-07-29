export default function ContactPage() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-10 gap-16 sm:p-20 font-body text-default-font relative overflow-hidden">
      <section className="relative z-10 flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-heading-1 font-heading-1">Contact Me</h1>
        <p className="text-body max-w-xl text-subtext-color">
          If you have any questions or would like to get in touch, feel free to
          reach out!
        </p>
      </section>
    </main>
  );
}

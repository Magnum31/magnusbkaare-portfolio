export default function About() {
  return (
    <main className="min-h-screen px-8 pb-10 pt-8 sm:px-20 sm:pt-20 font-body text-default-font bg-default-background opacity-75">
      <section className="max-w-3xl mx-auto flex flex-col gap-8">
        <header>
          <h1 className="text-heading-1 font-heading-1 text-brand-primary">
            About Me
          </h1>
          <p className="text-body text-subtext-color mt-2">
            Get to know who I am and what I do.
          </p>
        </header>

        <article className="space-y-6 text-body text-subtext-color">
          <p>
            Here I write how passionate I am, but really I just love having fun
            and developing thins
          </p>
          <p>
            Currently I'm enjoying working as a frontend developer, but as I am
            starting to dip my toes into CMS and .Net development I realise
            there's much more fun to be had
          </p>
          <p>
            When I’m not coding, I lift heavy discs in the nearest gym or
            explore new recipes in the kitchen
          </p>
        </article>

        <footer className="pt-4 border-t border-neutral-border text-caption text-subtext-color">
          Currently happy with my position
        </footer>
      </section>
    </main>
  );
}

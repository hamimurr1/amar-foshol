
export default function AboutCTA() {
  return (
    <section
      id="about"
      className="px-5 pb-16 sm:px-8 md:pb-20 lg:px-10"
    >
      <div
        id="get-started"
        className="cta-panel mx-auto max-w-7xl rounded-3xl bg-green-800 px-6 py-10 text-center text-white sm:px-10 md:py-14"
      >
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
          Better Farming, Better Future
        </p>

        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Growing Together with AmarFoshol
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50">
          A direct connection between farmers and buyers for
          a fairer and more transparent agricultural marketplace.
        </p>

        <a
          href="#how-it-works"
          className="mt-7 inline-flex rounded-full bg-white px-7 py-3 font-bold text-green-800 transition hover:-translate-y-1 hover:bg-green-50"
        >
          Learn More →
        </a>
      </div>
    </section>
  );
}

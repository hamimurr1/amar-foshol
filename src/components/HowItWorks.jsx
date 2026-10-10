
const steps = [
  {
    number: "01",
    icon: "👨‍🌾",
    title: "Farmers List",
    description:
      "Farmers upload their fresh products with price and available quantity.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Buyers Order",
    description:
      "Buyers browse products and place orders directly with farmers.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Direct Connection",
    description:
      "Farmers receive fair prices and buyers get fresh products.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="section-heading mb-10 text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-700">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            From Farm to Your Door
          </h2>

          <p className="mt-3 text-slate-500">
            Simple, transparent and direct.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="step-card relative rounded-2xl border border-green-50 bg-[#f7fbf4] p-5 sm:p-6"
              style={{ "--card-delay": `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#e0f1c8] text-3xl">
                  {step.icon}
                </div>

                <div className="min-w-0 pt-1">
                  <span className="font-bold text-green-700">
                    {step.number}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>

              <span className="absolute bottom-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-900 transition duration-300">
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

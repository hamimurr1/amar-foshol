
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

const features = [
  { icon: "🌱", title: "Fresh & Organic", text: "Natural produce" },
  { icon: "🛡️", title: "Verified Farmers", text: "Trusted marketplace" },
];

const stats = [
  { icon: "♟", value: "Fair", label: "Farmer Prices" },
  { icon: "🌿", value: "Fresh", label: "Farm Products" },
  { icon: "🛡️", value: "Direct", label: "Farmer to Buyer" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-green-500 text-slate-800">
      {/* HERO */}
      <section className="amar-hero relative">
        <div className="amar-hero-inner mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-14 lg:px-10">

          {/* LEFT SIDE */}
          <div className="amar-hero-copy relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-200 px-4 py-2.5 text-sm font-semibold text-green-800">
              <span>🌿</span>
              Direct Farmer Marketplace
            </div>

            <h1 className="amar-hero-title text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Fresh From{" "}
              <span>Our Farmers</span>
              <br />
              Direct To You.
            </h1>

            <p className="mt-5 max-w-[500px] text-base leading-[1.7] text-slate-600 sm:text-lg">
              AmarFoshol connects farmers directly with buyers,
              helping farmers get fair prices while customers get
              fresh agricultural products at transparent prices.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#marketplace"
                className="amar-primary-btn inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 font-semibold text-white"
              >
                Explore Products <span>→</span>
              </a>

              <a
                href="#get-started"
                className="amar-secondary-btn inline-flex min-h-12 items-center justify-center rounded-full border border-green-700 bg-white/70 px-7 font-semibold text-green-800"
              >
                Sell Your Products
              </a>
            </div>

            {/* FEATURE STATS */}
            <div className="mt-10 grid max-w-lg grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`amar-stat ${
                    index > 0 ? "border-l border-green-200 pl-3 sm:pl-5" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-green-800">
                    <span className="text-xl sm:text-2xl">
                      {stat.icon}
                    </span>
                    <span className="text-lg font-extrabold sm:text-2xl">
                      {stat.value}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          
<div className="amar-visual relative mx-auto w-full max-w-[570px]">
  <div className="amar-orbit" />
  <div className="amar-image-shadow" />

  <div className="amar-farmer-image relative z-10">
    <img
      src="https://i.ibb.co.com/Q3wqYmXw/Gemini-Generated-Image-6x5qpg6x5qpg6x5q.jpg"
      alt="Farmer holding fresh vegetables"
      className="h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-green-950/20 via-transparent to-white/5" />
  </div>

  {/* FLOATING BADGES */}
  {features.map((feature, index) => (
    <div
      key={feature.title}
      className={`amar-float-card ${
        index === 0 ? "amar-float-top" : "amar-float-bottom"
      }`}
    >
      <span className="amar-card-icon">{feature.icon}</span>
      <div>
        <p>{feature.title}</p>
        <span>{feature.text}</span>
      </div>
    </div>
  ))}

  <span className="amar-leaf amar-leaf-one">🌿</span>
  <span className="amar-leaf amar-leaf-two">🍃</span>
</div>

        </div>
      </section>

      {/* HOW IT WORKS */}
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

      {/* ABOUT / CTA */}
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
    </main>
  );
}

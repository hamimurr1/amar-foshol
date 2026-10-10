
const features = [
  { icon: "🌱", title: "Fresh & Organic", text: "Natural produce" },
  { icon: "🛡️", title: "Verified Farmers", text: "Trusted marketplace" },
];

const stats = [
  { icon: "♟", value: "Fair", label: "Farmer Prices" },
  { icon: "🌿", value: "Fresh", label: "Farm Products" },
  { icon: "🛡️", value: "Direct", label: "Farmer to Buyer" },
];

export default function Hero() {
  return (
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
                  index > 0
                    ? "border-l border-green-200 pl-3 sm:pl-5"
                    : ""
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
                index === 0
                  ? "amar-float-top"
                  : "amar-float-bottom"
              }`}
            >
              <span className="amar-card-icon">
                {feature.icon}
              </span>

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
  );
}

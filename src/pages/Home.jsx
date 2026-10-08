function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="badge badge-lg bg-green-100 text-green-700 border-none mb-5">
                🌱 Direct Farmer Marketplace
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Fresh From
                <span className="text-green-600"> Our Farmers</span>
                <br />
                Direct To You.
              </h1>

              <p className="text-lg text-gray-600 mt-6 max-w-xl">
                AmarFoshol connects farmers directly with buyers,
                helping farmers get fair prices while customers get
                fresh agricultural products at transparent prices.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="btn bg-green-600 hover:bg-green-700 text-white border-none px-7">
                  Explore Products →
                </button>

                <button className="btn btn-outline border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-7">
                  Sell Your Products
                </button>
              </div>

              <div className="flex gap-8 mt-10">
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-500">Farmers</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">1K+</p>
                  <p className="text-sm text-gray-500">Products</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500">Transparent</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex justify-center">
              <div className="relative">

                <div className="w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full bg-green-100 flex items-center justify-center">
                  <div className="text-[150px] lg:text-[190px]">
                    🧑‍🌾
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-6 bg-white shadow-xl rounded-2xl p-4">
                  <p className="text-xs text-gray-500">
                    Verified Farmer
                  </p>

                  <p className="font-bold text-green-700">
                    ✓ Trusted Seller
                  </p>
                </div>

                <div className="absolute top-8 -right-5 bg-white shadow-xl rounded-2xl p-4">
                  <p className="text-xs text-gray-500">
                    Fresh Products
                  </p>

                  <p className="font-bold">
                    🥬 🌾 🍅
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold">
              HOW IT WORKS
            </p>

            <h2 className="text-4xl font-bold mt-2">
              From Farm to Your Door
            </h2>

            <p className="text-gray-500 mt-3">
              Simple, transparent and direct.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="card bg-green-50 p-8 text-center">
              <div className="text-5xl mb-5">👨‍🌾</div>

              <h3 className="text-xl font-bold">
                1. Farmers List
              </h3>

              <p className="text-gray-600 mt-3">
                Farmers upload their fresh products
                with price and available quantity.
              </p>
            </div>


            <div className="card bg-green-50 p-8 text-center">
              <div className="text-5xl mb-5">🛒</div>

              <h3 className="text-xl font-bold">
                2. Buyers Order
              </h3>

              <p className="text-gray-600 mt-3">
                Buyers browse products and place
                orders directly with farmers.
              </p>
            </div>


            <div className="card bg-green-50 p-8 text-center">
              <div className="text-5xl mb-5">🤝</div>

              <h3 className="text-xl font-bold">
                3. Direct Connection
              </h3>

              <p className="text-gray-600 mt-3">
                Farmers receive fair prices and
                buyers get fresh products.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Unique Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold">
              WHY AMARFOSHOL
            </p>

            <h2 className="text-4xl font-bold mt-2">
              More Than Just a Marketplace
            </h2>
          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <div className="text-3xl mb-4">✓</div>

              <h3 className="font-bold text-xl">
                Verified Farmers
              </h3>

              <p className="text-gray-600 mt-2">
                Admin-verified farmers receive a
                trusted seller badge.
              </p>
            </div>


            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <div className="text-3xl mb-4">📊</div>

              <h3 className="font-bold text-xl">
                Smart Price Comparison
              </h3>

              <p className="text-gray-600 mt-2">
                Compare farmer prices with reference
                market prices before ordering.
              </p>
            </div>


            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <div className="text-3xl mb-4">🚜</div>

              <h3 className="font-bold text-xl">
                Direct From Farmers
              </h3>

              <p className="text-gray-600 mt-2">
                Connect directly with farmers and
                reduce unnecessary middlemen.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-green-700 text-white">
        <div className="max-w-5xl mx-auto text-center px-6 py-20">

          <h2 className="text-4xl font-bold">
            Ready to Make Farming More Fair?
          </h2>

          <p className="mt-4 text-green-100">
            Join AmarFoshol and become part of a direct
            farmer-to-buyer marketplace.
          </p>

          <button className="btn bg-white text-green-700 border-none mt-8 px-8">
            Get Started
          </button>

        </div>
      </section>

    </main>
  );
}

export default Home;
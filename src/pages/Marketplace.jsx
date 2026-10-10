import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    marketPrice: 50,
    farmer: "Rahim Uddin",
    location: "Narsingdi",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Fresh Potatoes",
    category: "Vegetables",
    price: 30,
    marketPrice: 35,
    farmer: "Karim Mia",
    location: "Munshiganj",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Fresh Mangoes",
    category: "Fruits",
    price: 100,
    marketPrice: 120,
    farmer: "Abdul Hasan",
    location: "Rajshahi",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Red Onions",
    category: "Vegetables",
    price: 55,
    marketPrice: 60,
    farmer: "Jamal Hossain",
    location: "Faridpur",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 5,
    name: "Fresh Rice",
    category: "Grains",
    price: 65,
    marketPrice: 70,
    farmer: "Abdur Rahman",
    location: "Dinajpur",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 6,
    name: "Fresh Bananas",
    category: "Fruits",
    price: 60,
    marketPrice: 70,
    farmer: "Sohel Ahmed",
    location: "Narayanganj",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",
  },
];

const categories = ["All", "Vegetables", "Fruits", "Grains"];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.farmer.toLowerCase().includes(search.toLowerCase()) ||
        product.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  return (
    <main className="min-h-screen bg-[#f8faf7]">
      <section className="bg-gradient-to-br from-green-800 to-green-600 px-5 py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-100">
            Fresh from the farm
          </p>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
            Discover Fresh Products at Fair Prices
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-green-50 md:text-base">
            Buy fresh agricultural products directly from farmers.
            Compare prices and support local agriculture.
          </p>

          <div className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, farmers or location..."
              className="min-w-0 flex-1 rounded-xl border border-white/30 bg-white px-5 py-3.5 text-slate-800 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-green-300/40"
            />

            <a
              href="#products"
              className="rounded-xl bg-white px-6 py-3.5 text-center font-bold text-green-800 shadow-md transition hover:bg-green-50 hover:shadow-lg"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"
      >
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-green-700">
              OUR MARKETPLACE
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
              Fresh Products
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Explore products from local farmers.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label
              htmlFor="price-sort"
              className="text-sm font-medium text-slate-600"
            >
              Sort by price
            </label>

            <select
              id="price-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            >
              <option value="default">Recommended</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                category === item
                  ? "bg-green-700 text-white shadow-md shadow-green-700/20"
                  : "border border-gray-200 bg-white text-slate-600 hover:border-green-200 hover:bg-green-50 hover:text-green-800 hover:shadow-sm"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-800">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const savings = Math.round(
                ((product.marketPrice - product.price) /
                  product.marketPrice) *
                  100
              );

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5"
                >
                  <div className="relative h-56 overflow-hidden bg-green-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-green-800 shadow-sm">
                      {product.category}
                    </span>

                    <span className="absolute right-4 top-4 rounded-full bg-green-700 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                      Save {savings}%
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-slate-900">
                        {product.name}
                      </h3>

                      <span className="shrink-0 text-sm font-semibold text-amber-500">
                        ★ {product.rating}
                      </span>
                    </div>

                    <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                      <span>👨‍🌾</span>
                      <span>{product.farmer}</span>
                      <span className="text-green-600">✓ Verified</span>
                    </div>

                    <p className="mb-4 text-sm text-slate-500">
                      📍 {product.location}
                    </p>

                    <div className="mb-5 rounded-xl bg-green-50 p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm text-slate-600">
                          Farmer's price
                        </span>
                        <span className="text-xl font-extrabold text-green-800">
                          ৳{product.price}
                          <span className="text-xs font-medium text-slate-500">
                            /kg
                          </span>
                        </span>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2 text-sm">
                        <span className="text-slate-500">
                          Reference market price
                        </span>
                        <span className="text-slate-500 line-through">
                          ৳{product.marketPrice}/kg
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          `${product.name} selected. Ordering feature will be added next.`
                        )
                      }
                      className="w-full rounded-xl bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-800 hover:shadow-lg hover:shadow-green-700/20"
                    >
                      View Product →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-green-200 bg-white px-5 py-16 text-center">
            <div className="mb-3 text-4xl">🔎</div>
            <h3 className="text-xl font-bold text-slate-800">
              No products found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

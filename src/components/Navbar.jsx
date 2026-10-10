import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-gray-100 bg-white shadow-sm">
      <nav className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <span className="text-3xl">🌿</span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            Amar<span className="text-green-600">Foshol</span>
          </span>
        </a>

      
<div className="hidden items-center gap-2 md:flex">
  <Link
    to="/"
    className="rounded-lg border border-green-200 px-4 py-2 font-medium text-green-700 shadow-sm transition-all duration-300 hover:bg-green-50 hover:text-green-800 hover:shadow-md"
  >
    Home
  </Link>

  <Link
    to="/marketplace"
    className="rounded-lg border border-green-200 px-4 py-2 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-green-400 hover:bg-green-50 hover:text-green-800 hover:shadow-md"
  >
    Marketplace
  </Link>

  <Link
    to="/#how-it-works"
    className="rounded-lg border border-green-200 px-4 py-2 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-green-400 hover:bg-green-50 hover:text-green-800 hover:shadow-md"
  >
    How It Works
  </Link>

  <Link
    to="/#about"
    className="rounded-lg border border-green-200 px-4 py-2 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-green-400 hover:bg-green-50 hover:text-green-800 hover:shadow-md"
  >
    About
  </Link>
</div>


        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#marketplace"
            aria-label="Search products"
            className="rounded-full p-2 text-slate-700 shadow-sm transition-all duration-300 hover:bg-green-50 hover:text-green-700 hover:shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>
          </a>

          <a
            href="#login"
            className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-green-200 hover:bg-green-50 hover:text-green-700 hover:shadow-md"
          >
            Login
          </a>

          <a
            href="#get-started"
            className="rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-700/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg hover:shadow-green-700/20"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-200 p-2 text-slate-800 shadow-sm transition-all duration-300 hover:border-green-200 hover:bg-green-50 hover:text-green-700 hover:shadow-md md:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-gray-100 bg-white p-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {[
              ["Home", "#"],
              ["Marketplace", "#marketplace"],
              ["How It Works", "#how-it-works"],
              ["About", "#about"],
              ["Login", "#login"],
              ["Get Started", "#get-started"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:bg-green-50 hover:text-green-800 hover:shadow-md"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5faef] text-[#172b24] border-t border-green-100">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-[#087f43] to-[#159447] rounded-3xl px-7 py-9 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <span className="text-green-100 text-sm font-semibold uppercase tracking-widest">
              Stay Connected
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Fresh Updates, Straight From Farms!
            </h2>
            <p className="text-green-50 mt-2 text-sm md:text-base">
              Get the latest products, offers and farming updates.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto bg-white rounded-full p-1.5 shadow-lg"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="min-w-0 w-full md:w-60 px-4 py-2.5 text-sm text-gray-800 outline-none rounded-full"
            />
            <button
              type="submit"
              className="bg-[#087f43] hover:bg-[#066b37] text-white font-semibold px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2">
              <span className="text-4xl">🌿</span>
              <span className="text-2xl font-extrabold tracking-tight">
                Amar<span className="text-[#45a82e]">Foshol</span>
              </span>
            </a>

            <p className="text-gray-600 text-sm leading-7 mt-5 max-w-xs">
              Connecting farmers directly with buyers for fair prices,
              fresh agricultural products, and a more transparent
              food supply chain.
            </p>

            <div className="flex gap-3 mt-6">
              {[
                { name: "Facebook", icon: "f", url: "https://facebook.com" },
                { name: "Instagram", icon: "◎", url: "https://instagram.com" },
                { name: "YouTube", icon: "▶", url: "https://youtube.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white border border-green-100 flex items-center justify-center text-[#087f43] font-bold hover:bg-[#087f43] hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-green-700 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/marketplace" className="hover:text-green-700 transition">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-green-700 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-green-700 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-700 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="font-bold text-lg mb-5">For Our Community</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="/marketplace" className="hover:text-green-700 transition">
                  Browse Products
                </a>
              </li>
              <li>
                <a href="/farmer/register" className="hover:text-green-700 transition">
                  Become a Farmer
                </a>
              </li>
              <li>
                <a href="/buyer/register" className="hover:text-green-700 transition">
                  Create Buyer Account
                </a>
              </li>
              <li>
                <a href="/farmer/login" className="hover:text-green-700 transition">
                  Farmer Login
                </a>
              </li>
              <li>
                <a href="/buyer/login" className="hover:text-green-700 transition">
                  Buyer Login
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span>
                  Bangladesh
                  <br />
                  <span className="text-gray-500">
                    Supporting local farmers nationwide
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a
                  href="mailto:support@amarfoshol.com"
                  className="hover:text-green-700 transition break-all"
                >
                  support@amarfoshol.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+8801000000000" className="hover:text-green-700 transition">
                  +880 1000-000000
                </a>
              </li>
            </ul>

            <div className="mt-5 inline-flex items-center gap-2 bg-white border border-green-100 rounded-full px-3 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs font-medium text-gray-600">
                Connecting Farms & Families
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} AmarFoshol. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="/privacy-policy" className="hover:text-green-700 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-green-700 transition">
              Terms & Conditions
            </a>
          </div>

          <p className="text-center">
            Made with <span className="text-red-500">♥</span> for Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
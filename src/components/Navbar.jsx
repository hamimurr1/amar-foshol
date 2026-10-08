function Navbar() {
  return (
    <div className="navbar bg-white/95 shadow-sm px-6 lg:px-12 sticky top-0 z-50">
      <div className="navbar-start">
        <a className="text-2xl font-bold text-green-700">
          Amar<span className="text-green-500">Foshol</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li><a>Home</a></li>
          <li><a>Marketplace</a></li>
          <li><a>How It Works</a></li>
          <li><a>About</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <button className="btn btn-ghost">Login</button>
        <button className="btn bg-green-600 text-white border-none hover:bg-green-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
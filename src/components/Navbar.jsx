
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 flex min-h-[68px] flex-wrap items-center justify-between border-b border-slate-200/80 bg-white/95 px-[5%] backdrop-blur-xl md:min-h-[78px] md:flex-nowrap md:gap-8 md:px-[max(6%,calc((100%-1320px)/2))]">
      <Link to="/" className="mr-auto shrink-0 font-display text-[23px] font-extrabold tracking-[-1.2px] md:text-[25px]" onClick={closeMenu}>
        Electro<span className="text-blue-600">Hub.</span>
      </Link>

      <div className={`${menuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-0 pb-4 md:order-none md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:pb-0`}>
        {[
          ["/", "Home"],
          ["/products", "Products"],
          ["/categories", "Categories"],
          ["/about", "About"],
          ["/services", "Services"],
          ["/contact", "Contact"],
        ].map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) => `py-2 text-sm font-semibold transition-colors md:py-7 ${isActive ? "text-blue-600 md:relative md:after:absolute md:after:inset-x-0 md:after:bottom-[17px] md:after:h-0.5 md:after:rounded md:after:bg-blue-600" : "text-slate-600 hover:text-blue-600"}`}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <Link to="/contact" className="hidden min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 md:inline-flex">
        Get in Touch
      </Link>

      <button
        type="button"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-xl text-slate-800 md:hidden"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(open => !open)}
      >
        {menuOpen ? "×" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;

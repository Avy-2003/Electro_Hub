
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        Electro<span>Hub.</span>
      </Link>

      <div className={`nav-links${menuOpen ? " is-open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
        <NavLink to="/categories" onClick={closeMenu}>Categories</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

      <Link to="/contact" className="nav-button">
        Get in Touch
      </Link>

      <button
        type="button"
        className="menu-toggle"
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

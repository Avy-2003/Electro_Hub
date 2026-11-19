
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Electro<span>Hub.</span></h2>
        <p>Your trusted destination for electronics and technology.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p>© 2026 ElectroHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

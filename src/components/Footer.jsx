
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#111a2c] px-[6%] pb-6 pt-11 text-center text-white">
      <div>
        <h2 className="mb-2 text-2xl font-extrabold tracking-tight">Electro<span className="text-blue-400">Hub.</span></h2>
        <p className="mt-2 text-xs text-slate-400">Your trusted destination for electronics and technology.</p>
      </div>

      <div className="my-6 flex flex-wrap justify-center gap-6">
        <Link className="text-xs text-slate-300 transition hover:text-blue-300" to="/">Home</Link>
        <Link className="text-xs text-slate-300 transition hover:text-blue-300" to="/products">Products</Link>
        <Link className="text-xs text-slate-300 transition hover:text-blue-300" to="/about">About</Link>
        <Link className="text-xs text-slate-300 transition hover:text-blue-300" to="/contact">Contact</Link>
      </div>

      <p className="mt-2 border-t border-white/10 pt-5 text-xs text-slate-400">© 2026 ElectroHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;


import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Mobiles", icon: "📱" },
    { name: "Laptops", icon: "💻" },
    { name: "Accessories", icon: "🎧" }
  ];

  return (
    <section className="px-[5%] py-14 text-center sm:px-[6%] sm:py-20 lg:px-[max(6%,calc((100%-1320px)/2))]">
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">Explore</p>
      <h2 className="mb-4 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-tight">Product Categories</h2>

      <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(item => (
          <Link
            to="/products"
            className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/50 px-6 py-9 text-center transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/10"
            key={item.name}
          >
            <span className="mb-4 block text-4xl">{item.icon}</span>
            <h3 className="mb-2 text-lg font-bold">{item.name}</h3>
            <p className="text-xs font-bold text-blue-600">Explore Collection →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;

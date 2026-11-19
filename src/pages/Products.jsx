
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map(p => p.category))
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="px-[5%] py-14 text-center sm:px-[6%] sm:py-20 lg:px-[max(6%,calc((100%-1320px)/2))]">
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">Explore our collection</p>
      <h2 className="mb-4 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-tight">All Products</h2>

      <input
        className="mx-auto mb-6 mt-8 block min-h-[50px] w-full max-w-[540px] rounded-lg border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map(item => (
          <button
            key={item}
            className={`min-h-10 rounded-full border px-4 text-xs font-semibold transition ${category === item ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full py-12 text-center text-sm text-slate-500">No products found.</p>
        )}
      </div>
    </section>
  );
}

export default Products;

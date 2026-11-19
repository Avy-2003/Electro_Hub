
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-900/10 max-[520px]:grid max-[520px]:grid-cols-[38%_1fr]">
      <div className="overflow-hidden bg-slate-100">
        <img className="h-[218px] w-full object-cover transition duration-300 hover:scale-105 max-[520px]:h-full max-[520px]:min-h-[165px]" src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="p-5 max-[520px]:flex max-[520px]:flex-col max-[520px]:justify-center max-[520px]:p-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">{product.category}</p>
        <h3 className="mb-3 min-h-6 text-[15px] font-bold max-[520px]:min-h-0 max-[520px]:text-sm">{product.name}</h3>
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-3 max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-2">
          <h4 className="text-[17px] font-extrabold text-slate-900">₹{product.price.toLocaleString("en-IN")}</h4>
          <Link className="text-xs font-bold text-blue-600 hover:text-blue-800" to={`/products/${product.id}`}>
            View details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

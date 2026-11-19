
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <section className="px-[5%] py-20 text-center"><h2 className="text-3xl font-extrabold">Product not found</h2></section>;
  }

  return (
    <section className="grid min-h-[580px] grid-cols-1 items-center gap-9 px-[8%] py-14 text-center sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-24 lg:text-left">
      <img className="h-[310px] w-full rounded-2xl bg-slate-100 object-cover lg:h-[430px]" src={product.image} alt={product.name} />

      <div>
        <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">{product.category}</p>
        <h1 className="my-4 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight">{product.name}</h1>
        <h2 className="mb-5 text-3xl font-extrabold text-blue-600">₹{product.price.toLocaleString("en-IN")}</h2>

        <p className="mb-7 leading-8 text-slate-600">{product.description}</p>

        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700">
          Enquire About Product
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;


import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import homeimage from "../assets/homepage_img.jpg";

function Home() {
  return (
    <>
      <section className="grid min-h-0 grid-cols-1 items-center gap-10 overflow-hidden bg-[#f6f8fc] px-[6%] py-14 md:py-16 lg:min-h-[570px] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-20 lg:px-[max(6%,calc((100%-1320px)/2))]">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[1.4px] text-blue-600 before:h-0.5 before:w-5 before:rounded before:bg-current before:content-['']">Technology, thoughtfully chosen</p>

          <h1 className="mb-5 text-[clamp(2.5rem,5.2vw,4.25rem)] font-extrabold leading-[1.08] tracking-[-0.06em] text-slate-900">
            Find your next
            <br />
            <span className="text-blue-600">favorite device.</span>
          </h1>

          <p className="mx-auto mb-7 max-w-[460px] text-base leading-8 text-slate-600 lg:mx-0">
            Discover reliable tech for work, play and everything in between.
            Shop a curated collection of devices, backed by service you can trust.
          </p>

          <Link to="/products" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20">
            Explore products <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <img
            className="h-[260px] w-full rounded-2xl object-cover shadow-2xl shadow-slate-900/15 sm:h-[340px] lg:h-[clamp(330px,37vw,455px)]"
            src={homeimage}
            alt="A curated collection of modern electronic devices"
          />
          <div className="absolute bottom-3 right-2 flex min-w-0 items-center gap-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-xl sm:bottom-6 sm:right-[-17px] sm:min-w-[208px] sm:p-4">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-lg text-blue-600" aria-hidden="true">✦</span>
            <div>
              <strong className="block text-xs">Technology made simple</strong>
              <span className="block text-[11px] text-slate-500">Find the right fit for you</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 border-b border-slate-200 px-[3%] py-4 sm:px-[5%] lg:px-[max(6%,calc((100%-1320px)/2))]" aria-label="Why shop with ElectroHub">
        <div className="flex flex-col items-center gap-1 px-1 py-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:px-4 sm:text-left">
          <span className="text-lg text-blue-600" aria-hidden="true">✓</span>
          <div><strong className="block text-[10px] sm:text-xs">Quality you can trust</strong><small className="hidden text-[11px] text-slate-500 sm:block">Carefully selected products</small></div>
        </div>
        <div className="flex flex-col items-center gap-1 border-x border-slate-200 px-1 py-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:px-4 sm:text-left">
          <span className="text-lg text-blue-600" aria-hidden="true">↗</span>
          <div><strong className="block text-[10px] sm:text-xs">Helpful, human support</strong><small className="hidden text-[11px] text-slate-500 sm:block">Here when you need us</small></div>
        </div>
        <div className="flex flex-col items-center gap-1 px-1 py-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:px-4 sm:text-left">
          <span className="text-lg text-blue-600" aria-hidden="true">⌂</span>
          <div><strong className="block text-[10px] sm:text-xs">Convenient shopping</strong><small className="hidden text-[11px] text-slate-500 sm:block">Good tech, made accessible</small></div>
        </div>
      </section>

      <section className="px-[5%] py-14 sm:px-[6%] sm:py-20 lg:px-[max(6%,calc((100%-1320px)/2))]">
        <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">Our collection</p>
            <h2 className="m-0 text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight">Featured products</h2>
          </div>
          <Link to="/products" className="shrink-0 text-sm font-bold text-blue-600 hover:text-blue-800">View all products <span aria-hidden="true">→</span></Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-[#14213d] px-[7%] py-14 text-center text-white sm:py-[72px]">
        <h2 className="mb-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-tight">Ready to find your next favorite?</h2>
        <p className="mb-6 text-sm text-slate-300 sm:text-base">Explore trusted technology and get personal help choosing what works for you.</p>
        <Link to="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700">
          Talk to our team
        </Link>
      </section>
    </>
  );
}

export default Home;


function Services() {
  const services = [
    ["🔧", "Repair Support", "Professional electronic repair assistance."],
    ["🛡️", "Warranty Support", "After-sales and warranty assistance."],
    ["🚚", "Home Delivery", "Convenient product delivery."],
    ["💬", "Customer Support", "Help with products and purchases."]
  ];

  return (
    <section className="px-[5%] py-14 text-center sm:px-[6%] sm:py-20 lg:px-[max(6%,calc((100%-1320px)/2))]">
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">What we do</p>
      <h2 className="mb-4 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-tight">Our Services</h2>

      <div className="mt-9 grid grid-cols-1 gap-5 text-center sm:grid-cols-2">
        {services.map(([icon, title, description]) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10">
            <span className="text-4xl">{icon}</span>
            <h3 className="mb-2 mt-4 text-lg font-bold">{title}</h3>
            <p className="text-sm leading-7 text-slate-500">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

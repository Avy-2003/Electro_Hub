
function Contact() {
  return (
    <section className="min-h-[430px] bg-slate-50 px-[5%] py-14 text-center sm:px-[6%] sm:py-20 lg:px-[max(6%,calc((100%-1320px)/2))]">
      <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">Contact us</p>
      <h2 className="mb-4 text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold tracking-tight">Let's Connect</h2>

      <p className="text-slate-500">Have questions about our products? Get in touch.</p>

      <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        <h3 className="m-0 rounded-xl border border-slate-200 bg-white p-5 text-sm font-bold">📞 +91 98765 43210</h3>
        <h3 className="m-0 break-words rounded-xl border border-slate-200 bg-white p-5 text-sm font-bold">✉️ electrohub@gmail.com</h3>
        <h3 className="m-0 rounded-xl border border-slate-200 bg-white p-5 text-sm font-bold">📍 Mysuru, Karnataka , India</h3>
      </div>

      
    </section>
  );
}

export default Contact;

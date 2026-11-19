
function About() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 px-[6%] py-14 text-center sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-20 lg:px-[max(6%,calc((100%-1320px)/2))] lg:text-left">
      <div>
        <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[1.7px] text-blue-600">About our business</p>
        <h1 className="mb-6 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight">Technology Meets Trust</h1>

        <p className="mb-4 leading-8 text-slate-600">
          Welcome to ElectroHub, your destination for modern
          electronics and smart technology.
        </p>

        <p className="mb-4 leading-8 text-slate-600">
          We aim to provide quality products, competitive
          prices and excellent customer service.
        </p>

        <p className="mb-4 leading-8 text-slate-600">
          Our goal is to make technology accessible to everyone.
        </p>
      </div>

      <img
        className="h-[310px] w-full rounded-2xl object-cover lg:h-[390px]"
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
        alt="Electronics retail store"
      />
    </section>
  );
}

export default About;

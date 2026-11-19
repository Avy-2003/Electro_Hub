
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="px-[5%] py-20 text-center">
      <h1 className="mb-3 text-6xl font-extrabold text-blue-600">404</h1>
      <h2 className="mb-7 text-3xl font-bold">Page Not Found</h2>
      <Link to="/" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-bold text-white transition hover:bg-blue-700">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;

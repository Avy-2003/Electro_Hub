
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/" className="primary-button">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;

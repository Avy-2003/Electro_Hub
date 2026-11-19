
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="section-label">YOUR TRUSTED ELECTRONICS STORE</p>

          <h1>
            Technology That
            <br />
            <span>Connects Your World.</span>
          </h1>

          <p>
            Discover the latest smartphones, laptops,
            smart gadgets and electronic accessories.
          </p>

          <Link to="/products" className="primary-button">
            Explore Products →
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
          alt="Electronic gadgets"
        />
      </section>

      <section className="section">
        <p className="section-label">OUR COLLECTION</p>
        <h2>Featured Products</h2>

        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link to="/products" className="primary-button">
          View All Products
        </Link>
      </section>

      <section className="home-banner">
        <h2>Upgrade Your Technology Today</h2>
        <p>Quality products. Competitive prices. Trusted service.</p>
        <Link to="/contact" className="primary-button">
          Contact Us
        </Link>
      </section>
    </>
  );
}

export default Home;

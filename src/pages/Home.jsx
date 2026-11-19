
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="section-label">Technology, thoughtfully chosen</p>

          <h1>
            Find your next
            <br />
            <span>favorite device.</span>
          </h1>

          <p>
            Discover reliable tech for work, play and everything in between.
            Shop a curated collection of devices, backed by service you can trust.
          </p>

          <Link to="/products" className="primary-button">
            Explore products <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="hero-media">
          <img
            src="/src/assets/homepage_img.jpg"
            alt="A curated collection of modern electronic devices"
          />
          <div className="hero-image-note">
            <span className="note-icon" aria-hidden="true">✦</span>
            <div>
              <strong>Technology made simple</strong>
              <span>Find the right fit for you</span>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Why shop with ElectroHub">
        <div className="benefit-item">
          <span aria-hidden="true">✓</span>
          <div><strong>Quality you can trust</strong><small>Carefully selected products</small></div>
        </div>
        <div className="benefit-item">
          <span aria-hidden="true">↗</span>
          <div><strong>Helpful, human support</strong><small>Here when you need us</small></div>
        </div>
        <div className="benefit-item">
          <span aria-hidden="true">⌂</span>
          <div><strong>Convenient shopping</strong><small>Good tech, made accessible</small></div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <p className="section-label">Our collection</p>
            <h2>Featured products</h2>
          </div>
          <Link to="/products" className="text-link">View all products <span aria-hidden="true">→</span></Link>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="home-banner">
        <h2>Ready to find your next favorite?</h2>
        <p>Explore trusted technology and get personal help choosing what works for you.</p>
        <Link to="/contact" className="primary-button">
          Talk to our team
        </Link>
      </section>
    </>
  );
}

export default Home;

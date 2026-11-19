
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-info">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-price-row">
          <h4>₹{product.price.toLocaleString("en-IN")}</h4>
          <Link to={`/products/${product.id}`}>
            View details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <section className="section"><h2>Product not found</h2></section>;
  }

  return (
    <section className="product-details">
      <img src={product.image} alt={product.name} />

      <div>
        <p className="section-label">{product.category}</p>
        <h1>{product.name}</h1>
        <h2>₹{product.price.toLocaleString("en-IN")}</h2>

        <p>{product.description}</p>

        <Link to="/contact" className="primary-button">
          Enquire About Product
        </Link>
      </div>
    </section>
  );
}

export default ProductDetails;

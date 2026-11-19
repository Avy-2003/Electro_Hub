
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { name: "Mobiles", icon: "📱" },
    { name: "Laptops", icon: "💻" },
    { name: "Accessories", icon: "🎧" }
  ];

  return (
    <section className="section">
      <p className="section-label">EXPLORE</p>
      <h2>Product Categories</h2>

      <div className="category-grid">
        {categories.map(item => (
          <Link
            to="/products"
            className="category-card"
            key={item.name}
          >
            <span>{item.icon}</span>
            <h3>{item.name}</h3>
            <p>Explore Collection →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;

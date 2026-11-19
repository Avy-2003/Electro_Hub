
function Services() {
  const services = [
    ["🔧", "Repair Support", "Professional electronic repair assistance."],
    ["🛡️", "Warranty Support", "After-sales and warranty assistance."],
    ["🚚", "Home Delivery", "Convenient product delivery."],
    ["💬", "Customer Support", "Help with products and purchases."]
  ];

  return (
    <section className="section">
      <p className="section-label">WHAT WE DO</p>
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map(([icon, title, description]) => (
          <div key={title} className="service-card">
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

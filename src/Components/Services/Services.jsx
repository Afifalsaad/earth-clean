const Services = () => {
    const services = [
      "Neighborhood cleaning campaigns",
      "School and youth awareness programs",
      "Public space restoration",
      "Recycling and waste management guidance",
    ];
  
    return (
      <section className="py-4 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-secondary text-accent border border-accent/20 rounded-xl shadow-sm text-center">
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  
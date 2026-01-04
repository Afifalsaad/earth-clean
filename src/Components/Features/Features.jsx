const Features = () => {
    const features = [
      "Organized community cleaning drives",
      "Volunteer registration and coordination",
      "Waste segregation and recycling awareness",
      "Real-time event updates",
    ];
  
    // subtle background colors for each card
    const colors = ["bg-primary/10", "bg-secondary/10", "bg-accent/10", "bg-info/10"];
  
    return (
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center text-accent">Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`p-6 border rounded-xl text-center hover:scale-105 transition-transform ${colors[i % colors.length]}`}
              >
                <p className="text-base-content/80 font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  
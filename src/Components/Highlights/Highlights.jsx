import React from 'react';

const Highlights = () => {
    const items = [
        "500+ volunteers engaged",
        "100+ cleanup events completed",
        "20+ communities impacted",
      ];
    return (
        <div>
            <section className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center">
        {items.map((i, idx) => (
          <div key={idx} className="p-6 bg-secondary text-accent border border-accent/50 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold">{i}</h3>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default Highlights;
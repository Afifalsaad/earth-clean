const Blogs = () => {
    const posts = [
      { title: "Why Community Cleaning Matters", date: "Jan 2026" },
      { title: "How Volunteers Make a Difference", date: "Dec 2025" },
    ];
  
    const colors = ["bg-primary/10", "bg-secondary/10", "bg-accent/10", "bg-info/10"];
  
    return (
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-primary">Blogs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((p, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl shadow-md border border-accent/20 ${colors[i % colors.length]} hover:scale-105 transition-transform cursor-pointer`}
              >
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-base-content/60">{p.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Blogs;
  
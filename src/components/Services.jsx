const services = [
  { title: "Consulting", desc: "Expert business advice to grow your company." },
  { title: "Strategy", desc: "Tailored strategies for sustainable growth." },
  { title: "Technology", desc: "Modern IT solutions and automation." },
  { title: "Support", desc: "Reliable 24/7 technical support." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading text-primary mb-10 text-center">Our Services</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {services.map((s, i) => (
            <div key={i} className="min-w-[250px] p-6 rounded-xl bg-secondary shadow-lg hover:scale-105 transition transform">
              <h3 className="font-heading text-2xl mb-2 text-primary">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

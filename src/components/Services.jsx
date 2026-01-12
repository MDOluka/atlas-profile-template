const services = [
  { title: "Consulting", desc: "Business strategy and process optimization." },
  { title: "IT Solutions", desc: "Network, cloud, and digital systems." },
  { title: "Automation", desc: "Industrial and corporate automation." },
  { title: "Training", desc: "Workshops and corporate training sessions." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

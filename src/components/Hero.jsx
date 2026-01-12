export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Corporate Solutions
          </h1>
          <p className="text-gray-600 mb-6">
            Atlas Corporate delivers high-quality services for businesses, NGOs, and startups.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Get In Touch
          </a>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-500">Reliable • Modern • Scalable</p>
        </div>
      </div>
    </section>
  );
}

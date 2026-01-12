export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-secondary pt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-heading text-primary">Professional Corporate Solutions</h1>
          <p className="text-gray-700 text-lg">Innovative services to elevate your business globally.</p>
          <a href="#contact" className="inline-block px-6 py-3 rounded-lg bg-accent text-white font-semibold shadow-lg hover:scale-105 transition transform">
            Get Started
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="https://via.placeholder.com/500x350" alt="Corporate Illustration" className="rounded-xl shadow-lg"/>
        </div>
      </div>
    </section>
  )
}

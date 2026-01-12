const about = [
  { title: "Our Mission", desc: "Delivering excellence through innovation.", img: "https://via.placeholder.com/400x300" },
  { title: "Our Vision", desc: "To be the global leader in corporate solutions.", img: "https://via.placeholder.com/400x300" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {about.map((a, i) => (
          <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
            <div className="md:w-1/2">
              <img src={a.img} alt={a.title} className="rounded-xl shadow-lg"/>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-3xl font-heading text-primary">{a.title}</h3>
              <p className="text-gray-700">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

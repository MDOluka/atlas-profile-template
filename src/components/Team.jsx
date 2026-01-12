const team = [
  { name: "Alice Johnson", role: "CEO" },
  { name: "Bob Smith", role: "CTO" },
  { name: "Clara Adams", role: "Operations Manager" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading text-primary mb-10 text-center">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((t, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 rounded-full border-4 border-accent mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary">{t.name[0]}</div>
              <p className="font-heading text-xl">{t.name}</p>
              <p className="text-gray-700">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const team = [
  { name: "Alice Johnson", role: "CEO" },
  { name: "Bob Smith", role: "CTO" },
  { name: "Clara Adams", role: "Operations Manager" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <p className="font-semibold text-xl">{t.name}</p>
              <p className="text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

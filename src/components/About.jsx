export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Atlas Corporate</h2>
          <p className="text-gray-600">
            Atlas Corporate is a multi-industry solutions provider, delivering professional services to businesses and organizations worldwide.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6">
          <ul className="space-y-2">
            <li>✔ Experienced Team</li>
            <li>✔ Innovative Solutions</li>
            <li>✔ Client-focused Approach</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

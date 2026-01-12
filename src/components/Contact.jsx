import { useState } from "react";
const API_BASE = "http://localhost:4000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else setStatus("Failed to send message.");
    } catch (err) {
      setStatus("Server error.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Send Message
          </button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // Backend integration here
    setTimeout(() => setStatus("Message sent successfully."), 1000);
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-heading mb-10 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-3 rounded bg-white text-black"/>
          <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full p-3 rounded bg-white text-black"/>
          <textarea placeholder="Message" rows="5" value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full p-3 rounded bg-white text-black"></textarea>
          <button type="submit" className="bg-accent px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition transform">Send Message</button>
          {status && <p className="mt-2 text-white">{status}</p>}
        </form>
      </div>
    </section>
  )
}

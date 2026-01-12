export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 Atlas Corporate. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent">LinkedIn</a>
          <a href="#" className="hover:text-accent">Twitter</a>
          <a href="#" className="hover:text-accent">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

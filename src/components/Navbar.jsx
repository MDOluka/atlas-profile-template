export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-heading text-primary">Atlas Corporate</div>
        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#home" className="hover:text-accent transition">Home</a>
          <a href="#services" className="hover:text-accent transition">Services</a>
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#team" className="hover:text-accent transition">Team</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}

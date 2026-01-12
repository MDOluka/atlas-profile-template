export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">Atlas Corporate</h3>
          <p className="text-sm text-gray-400">Professional Solutions for Modern Companies</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Consulting</li>
            <li>IT Solutions</li>
            <li>Automation</li>
            <li>Training</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-400">Email: info@atlascorporate.com</p>
        </div>
      </div>
    </footer>
  );
}

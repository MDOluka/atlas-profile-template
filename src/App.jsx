import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

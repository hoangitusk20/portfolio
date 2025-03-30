import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

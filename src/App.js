
import AboutInfo from "./components/AboutInfo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
     <Hero />
     {/* <About /> */}
     <AboutInfo />
    <Services />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;


import AboutInfo from "./components/AboutInfo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
     <Hero />
     {/* <About /> */}
     <AboutInfo />
    <Services />
    </div>
  );
}

export default App;

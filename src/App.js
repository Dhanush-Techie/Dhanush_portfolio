

import "./App.scss";
import { Routes, Route ,useLocation} from "react-router-dom";
import About from "./containers/about";
import Home from "./containers/home";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import Navbar from "./components/navBar";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./utils.js/particles";
import Contact from "./containers/contact";

function App() {
  const location = useLocation();
  console.log(location);
  const particlesInit = async (engine) => { 
    console.log("Particles Engine Loaded", engine);
    await loadSlim(engine);
  };

  const renderParticleJsInHomePage = location.pathname === "/" ;

  return (
    <div className="App">
      {/* Background Particles */}
      { renderParticleJsInHomePage && 
      (<Particles id="tsparticles" init={particlesInit} options={particlesConfig} />)}
      

      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      </div>
    </div>
  );
}

export default App;

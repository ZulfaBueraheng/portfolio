import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AutoService from "./projects/AutoService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main>
              <Home />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </>
        } />
        
        <Route path="/projects/auto-service" element={<AutoService />} />
        
      </Routes>
    </Router>
  );
}

export default App;

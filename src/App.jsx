import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "swiper/css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Careers from "./Pages/Careers";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "react-photo-view/dist/react-photo-view.css";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <main
        className=""
        style={{
          minHeight: "100vh",
        }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </>
  );
}

export default App;

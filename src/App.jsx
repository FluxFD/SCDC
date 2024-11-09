import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "swiper/css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "react-photo-view/dist/react-photo-view.css";


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
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";

import NavBar from "./Components/NavBar";

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
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import ScrollReveal from 'scrollreveal'; 
import "./style.css";
import "./animations.js";

function App() {
  useEffect(() => {
    window.ScrollReveal = ScrollReveal;
    document.title = "Gabriel Alves - Software Developer";
  }, []);

  const HomePage = () => (
    <div className="stars">
      <Header />
      <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curriculo" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
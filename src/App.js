import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ScrollReveal from 'scrollreveal'; 
import "./style.css";
import "./animations.js";

function App() {
  useEffect(() => {
    window.ScrollReveal = ScrollReveal;
  }, []);

  return (
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
}

export default App;
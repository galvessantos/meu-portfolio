import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./style.css";

function App() {
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
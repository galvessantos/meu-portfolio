import React from "react";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import "./style.css";

function App() {
  return (
    <div className="stars">
      <div className="App" style={{ position: "relative", minHeight: "100vh" }}>
        <Home />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
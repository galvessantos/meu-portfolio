import React from "react";
import Home from "./components/Home/Home";
import Particle from "./components/Particle";
import "./style.css";


function App() {
  return (
    <div className="App" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Particle />
      <Home />
    </div>
  );
}

export default App;

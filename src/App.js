import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";

import "./scss/style.css";

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    // how to check page distance from top
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

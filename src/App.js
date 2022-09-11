// import components
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Stats from "./components/Stats";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <Router>
      <div className="overflow-hidden">
        <Header setNavMobile={setNavMobile} />
        <Hero />
        {/* mobile nav */}
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed z-10 top-0 h-full transition-all duration-200`}
        >
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        <Stats />
      </div>
    </Router>
  );
};

export default App;

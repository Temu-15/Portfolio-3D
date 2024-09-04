import { BrowserRouter, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatePage from "./components/AnimatePage";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Works,
  Tech,
  Services,
} from "./components";

function App() {
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
    setTimeout(() => {
      setShouldAnimate(false);
    }, 1500); //
  }, [location.hash]);

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <AnimatePresence>
        <AnimatePage key={location.pathname} shouldAnimate={shouldAnimate}>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Services />
          <Experience />
          <Works />
          <About />
          <Tech />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </AnimatePage>
      </AnimatePresence>
    </div>
  );
}

export default App;

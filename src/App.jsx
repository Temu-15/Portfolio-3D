// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   StarsCanvas,
//   Works,
//   Tech,
//   Services,
// } from "./components";
// import AnimatePage from "./components/AnimatePage";

// function App() {
//   const location = useLocation();
//   const [shouldAnimate, setShouldAnimate] = useState(false);

//   useEffect(() => {
//     if (location.hash) {
//       setShouldAnimate(true);
//     }
//   }, [location]);
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary overflow-x-hidden">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>

//         <Services />

//         <Experience />
//         <About />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

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
    console.log(location);
    if (location.hash) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [location]);

  return (
    <div className="relative z-0 bg-primary overflow-x-hidden">
      <AnimatePresence mode="wait">
        <AnimatePage shouldAnimate={shouldAnimate}>
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

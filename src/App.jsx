import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import AnimatePage from "./components/AnimatePage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <AnimatePresence>
          <Routes>
            <Route
              path="/services"
              element={
                <AnimatePage>
                  <Services />
                </AnimatePage>
              }
            />
          </Routes>
        </AnimatePresence>

        <Experience />
        <About />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { motion } from "framer-motion";
import React, { useRef } from "react";

function AnimatePage({ children, shouldAnimate }) {
  const nbofColumns = 5;

  const variants = {
    initial: { top: 0 },
    animate: (custom) => ({
      top: "100%",
      transition: { duration: 0.4, delay: custom * 0.05 },
    }),
    exit: (custom) => ({
      transition: {
        duration: 0.4,
        delay: custom * 0.05,
      },
    }),
  };

  return (
    <div className="">
      {children}
      {shouldAnimate && (
        <div className="fixed top-0 left-0 h-screen w-screen flex ">
          {[...Array(nbofColumns)].map((_, index) => (
            <motion.div
              key={index}
              custom={nbofColumns - index}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`w-full h-full relative bg-[#000]`}
            ></motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AnimatePage;

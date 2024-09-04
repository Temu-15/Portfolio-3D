import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function AnimatePage({ children, shouldAnimate }) {
  const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };

  const variants = {
    initial: { top: "0%", opacity: 1 },
    animate: { top: "100%", opacity: 0.9 }, // Added slight opacity change
    exit: { top: "0%", opacity: 1 }, // Ensure full opacity on exit
  };

  return (
    <>
      {children} {/* Render content regardless of animation */}
      <AnimatePresence>
        {shouldAnimate && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0.9,
              transition: {
                delay: 0.3, // Slightly earlier delay
                duration: 0.6, // Slightly longer duration
                ease: "easeInOut", // Smooth easing
              },
            }}
            exit={{
              opacity: 1,
              transition: { duration: 0.4 },
            }}
            className="h-screen w-screen fixed bg-primary z-50"
          >
            <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none h-screen w-screen flex ">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 0.5, // Slightly longer duration
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.08, // Reduced delay for faster sequence
                  }}
                  className="w-full h-full relative bg-[#fff]"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatePage;

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function AnimatePage({ children, shouldAnimate }) {
  const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };

  const variants = {
    initial: { top: "0%", opacity: 1 },
    animate: { top: "100%", opacity: 0.9 },
    exit: { top: "0%", opacity: 1 },
  };

  return (
    <>
      {children}
      <AnimatePresence>
        {shouldAnimate && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0.9,
              transition: {
                delay: 0.1,
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.4,
              },
            }}
            className="h-screen w-screen fixed bg-[#000] z-50"
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
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.08,
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

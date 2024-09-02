// // import { motion, AnimatePresence } from "framer-motion";
// // import React from "react";

// // function AnimatePage() {
// //   const variants = {
// //     initial: { top: 0 },
// //     animate: { top: "100%", transition: { duration: 1.5, delay: i * 0.5 } },
// //     exit: { top: 0 },
// //   };
// //   const nbofColumns = 5;
// //   return (
// //     <div className="fixed top-0 left-0 h-screen w-screen flex z-1000">
// //       {[...Array(5)].map((column, index) => {
// //         return (
// //           <motion.div
// //             key={index}
// //             variants={variants}
// //             initial="initial"
// //             animate="animate"
// //             exit="exit"
// //             index={index}
// //             className={`w-full h-full relative bg-[#222]`}
// //           />
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // export default AnimatePage;

// import { motion, useInView } from "framer-motion";
// import React from "react";
// import { useRef } from "react";

// function AnimatePage({ children }) {
//   const ref = useRef();
//   const isInView = useInView(ref, { once: true });

//   const nbofColumns = 5;

//   const variants = {
//     initial: { top: 0 },
//     animate: (custom) => ({
//       top: "100%",
//       transition: { duration: 1.4, delay: custom * 0.05 },
//       transitionEnd: {
//         height: 0,
//         top: 0,
//       },
//     }),
//     exit: (custom) => ({
//       height: "100%",
//       transition: {
//         duration: 1.4,
//         delay: custom * 0.05,
//       },
//     }),
//   };

//   return (
//     <div className="fixed top-0 left-0 h-screen w-screen flex z-1000">
//       {[...Array(nbofColumns)].map((_, index) => {
//         return (
//           <motion.div
//             key={index}
//             custom={nbofColumns - index}
//             variants={variants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className={`w-full h-full relative bg-[#000]`}
//           >
//             {children}
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// export default AnimatePage;

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

function AnimatePage({ children }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  const nbofColumns = 5;

  const variants = {
    initial: { top: 0 },
    animate: (custom) => ({
      top: "100%",
      transition: { duration: 1.4, delay: custom * 0.05 },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (custom) => ({
      height: "100%",
      transition: {
        duration: 1.4,
        delay: custom * 0.05,
      },
    }),
  };

  return (
    <div className="relative">
      {children}
      <div className="fixed top-0 left-0 h-screen w-screen flex ">
        {[...Array(nbofColumns)].map((_, index) => {
          return (
            <motion.div
              key={index}
              custom={nbofColumns - index}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`w-full h-full relative bg-[#000]`}
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimatePage;

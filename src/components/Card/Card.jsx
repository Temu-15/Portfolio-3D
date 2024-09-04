import { motion } from "framer-motion";
import { Fragment, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Card({ title, author, imgSrc }) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);
  useEffect(() => {
    if (isCardOpened) {
      // Add Tailwind class to body to prevent scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove Tailwind class from body to re-enable scrolling
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts or isCardOpened changes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCardOpened]);

  return (
    <Fragment>
      <motion.div
        ref={card}
        layout
        onClick={() => {
          setIsCardOpened(true);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight,
            });
          }
        }}
        className={`${
          isCardOpened
            ? "fixed top-0 right-0 bottom-0 left-0 max-w-[700px] m-auto  z-10 flex flex-col justify-start overflow-auto bg-[#050816] mt-[2.5rem] pb-[20%] md:pb-20 min-h-full mb-[6rem] rounded-3xl "
            : "w-full h-full group cursor-pointer"
        }`}
      >
        <motion.img
          layout="scale"
          src={imgSrc}
          className={`${
            isCardOpened
              ? "w-full h-[420px] object-cover"
              : " w-full h-full max-h-[300px] object-cover rounded-3xl"
          }`}
          alt={title}
        />

        <motion.h2
          layout="position"
          className={`${
            isCardOpened
              ? "text-2xl  px-[45px] mt-10 mb-4 text-[#915eff] p-13"
              : "text-2xl text-[#fff] font-600 mb-2  mt-2  group-hover:text-[#915eff]"
          }`}
        >
          {title}
        </motion.h2>
        {/* <motion.p
          layout="position"
          className={`font-bold text-xl ${
            isCardOpened ? "text-[#121212]" : "text-[#121414]"
          }`}
        >
          {author}
        </motion.p> */}

        {isCardOpened && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-[45px] w-[90%] text-[#9d9ca1] font-normal text-[20px] leading-5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>
        )}
      </motion.div>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height,
            }}
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
            className="fixed top-0 right-0 bottom-0 left-0 z-11 bg-black bg-opacity-60"
          />
          {/* <Link to="/" /> */}
        </Fragment>
      )}
    </Fragment>
  );
}

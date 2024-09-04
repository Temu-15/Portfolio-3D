import { motion } from "framer-motion";
import { Fragment, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
export default function Card({ title, link, imgSrc }) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);
  const startY = useRef(0);
  useEffect(() => {
    if (isCardOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCardOpened]);
  const handleScroll = (event) => {
    if (isCardOpened && event.deltaY < -10 && card.current.scrollTop <= 0) {
      setIsCardOpened(false);
    }
  };

  const handleTouchStart = (event) => {
    startY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const currentY = event.touches[0].clientY;
    const diffY = currentY - startY.current;
    if (isCardOpened && diffY > 10 && card.current.scrollTop <= 0) {
      setIsCardOpened(false);
    }
  };
  const cardVariants = {
    opened: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -100, transition: { duration: 0.4 } },
  };
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
        variants={cardVariants}
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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
        {isCardOpened && (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-5 py-2 bg-[#915eff] max-w-40 flex items-center  gap-1 rounded-2xl ml-[45px] mt-4 text-[20px] text-nowrap text-[#000]"
            href={link}
          >
            Go to site{" "}
            <span className="">
              <FaArrowRight />
            </span>
          </motion.a>
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

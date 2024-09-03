import { motion } from "framer-motion";
import { Fragment, useRef, useState } from "react";

export default function Card({ title, author, imgSrc }) {
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const card = useRef(null);

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
        className={`h-full w-full ${
          isCardOpened
            ? "fixed top-0 right-0 bottom-0 left-0 m-auto  mx-10 z-10 mt-10 mb-10 flex flex-col justify-start overflow-auto bg-[##050816]"
            : "max-h-[250px]"
        }`}
      >
        <motion.img
          layout="scale"
          src={imgSrc}
          className="w-full h-full contain"
          alt={title}
        />
        <motion.h2
          layout="position"
          className={`text-3xl font-bold my-2 ${
            isCardOpened ? "text-white" : "text-primary "
          }`}
        >
          {title}
        </motion.h2>
        <motion.p
          layout="position"
          className={`font-bold text-2xl mb-4 ${
            isCardOpened ? "text-[#121212]" : "text-subtitle"
          }`}
        >
          {author}
        </motion.p>

        {isCardOpened && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-light text-xl text-white"
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
            className="fixed top-0 right-0 bottom-0 left-0 z-9 bg-black bg-opacity-70"
          />
        </Fragment>
      )}
    </Fragment>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import AnimatePage from "./AnimatePage";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto mt-20 md:mt-0">
      <div
        className={` px-[9%] max-w-full h-full mx-auto flex flex-row items-center justify-center gap-5 flex-wrap lg:flex-nowrap  `}
      >
        <div className="flex flex-row items-start flex-nowrap gap-5 ">
          <div className="flex flex-col justify-center items-center mt-5 xs:hidden sm:flex">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
            <div className="w-1 sm:h-80  h-40 violet-gradient"></div>
          </div>
          <div className="w-[95%]">
            <h2 className={`text-white text-[2.6rem] font-poppins mt-5`}>
              Hello it is me
              <br />
              <span className="text-[#915eff] text-[50px] font-bold md:text-nowrap leading-4">
                Temesgen Fikadu
              </span>
              <br />
            </h2>
            <h2
              className={`text-white text-[2rem] md:line-clamp-1 font-poppins`}
            >
              I am a front-end developer
            </h2>
            <p className={`text-[16px] mt-5`}>
              I design and develop fast, responsive ,optimized and efficeient
              websites. Available for freelancing opportunities.
            </p>
            <div className="mt-6 mb-6">
              <a
                href="#"
                className="inline-flex justify-center items-center text-2xl border border-[#195eff] rounded-full w-11 h-11 text-main-color mr-5 bg-transparent transition ease-in-out duration-500 hover:bg-[#195eff]"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center text-2xl border border-[#195eff] rounded-full w-11 h-11 text-main-color mr-5 bg-transparent transition ease-in-out duration-500 hover:bg-[#195eff]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center text-2xl border border-[#195eff] rounded-full w-11 h-11 text-main-color mr-5 bg-transparent transition ease-in-out duration-500 hover:bg-[#195eff]"
              >
                <FaSquareInstagram />
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center text-2xl border border-[#195eff] rounded-full w-11 h-11 text-main-color mr-5  bg-transparent transition ease-in-out duration-500 hover:bg-[#195eff]"
              >
                <FaLinkedin />
              </a>
            </div>
            <a
              href="mailto:tamasgenfiqaadu@gmail.com"
              class="btn px-[20px] py-2  rounded-3xl  bg-[#195eff] inline-block text-[20px]"
            >
              Contact me
            </a>
          </div>
        </div>
        <ComputerCanvas className="z-0" />
      </div>
      <div className="absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center">
        <a
          href="#about"
          className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
        >
          <motion.dev
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full mb-1 bg-secondary"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

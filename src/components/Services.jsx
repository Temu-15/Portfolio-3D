import React from "react";
import { services } from "../constants/index";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowDownRight } from "react-icons/bs";
import AnimatePage from "./AnimatePage";
import { useState } from "react";
const Services = () => {
  return (
    <section
      className="min-h-[100vh] flex flex-col justify-center items-center py-24 px-[9%]   xl:py-0"
      id="services"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] ">
        {services?.map((service, index) => {
          return (
            <div
              className="flex-1 flex flex-col justify-center gap-4 group "
              key={index}
            >
              <div className="w-full flex justify-between items-center">
                <div className="font-extrabold text-5xl group-hover:text-[#915eff] transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  to="/"
                  className="w-[70px] h-[70px] rounded-full bg-[#fff] flex justify-center items-center group-hover:-rotate-45 group-hover:bg-[#915eff] transition-all duration-500"
                >
                  <BsArrowDownRight className="text-primary text-3xl " />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-[#fff] group-hover:text-[#915eff] transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-[#b3b3b3]">{service.description}</p>
              <div className="border-b w-full border-white/20"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

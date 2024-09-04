import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AnimatePage from "./AnimatePage";

import { experiences, education, technologies, about } from "../constants";
import { motion } from "framer-motion";

export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section
      className="w-full mx-auto px-[9%] xl:py-0   py-12 min-h-[80vh]"
      id="experience"
    >
      <AnimatePage />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "nowrap",
          // flexWrap: { xs: "wrap", md: "nowrap" },
          justifyContent: "center",
          gap: 5,
        }}
      >
        <div className="flex flex-col gap-6 max-w-[380px] w-full mx-auto xl:mx-0">
          <div className="w-full text-center lg:text-left">
            <h2>Why hire me?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sed
              delectus cum iure voluptatem? Libero, iure.
            </p>
          </div>
          <Tabs
            orientation="vertical"
            // variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              width: "100%",
              maxWidth: "360px",
              // mx: { xs: "auto", xl: 8 },
              borderRight: 1,
              borderColor: "divider",
            }}
          >
            <Tab
              label="Experience"
              sx={{
                color: value === 0 ? "#000" : "#fff",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontWeight: "bold",
                bgcolor: value === 0 ? "#915eff" : "#27272c",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Tab
              label="Education"
              sx={{
                color: "#fff",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontWeight: "bold",
                bgcolor: value === 1 ? "#915eff" : "#27272c",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Tab
              label="Skills"
              sx={{
                color: "#fff",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontWeight: "bold",
                bgcolor: value === 2 ? "#915eff" : "#27272c",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Tab
              label="About Me"
              sx={{
                color: value === 3 ? "#ffffff" : "#fffddf",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                fontWeight: "bold",
                bgcolor: value === 3 ? "#915eff" : "#27272c",
                borderRadius: 2,
                mb: 2,
              }}
            />
          </Tabs>
        </div>

        <Box sx={{ width: "100%", minHeight: "70vh" }}>
          {value === 0 && (
            <div sx={{ width: "100%" }}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">my experience</h3>
                <p className="max-w-[600px] text-[#fff]/60 mx-auto xl:mx-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo modi placeat expedita quam ipsum nisi voluptatibus,
                </p>
              </div>
              <div className="h-[480px] overflow-hidden py-2">
                <div className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-center xl:text-left">
                    {experiences.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] max-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#915eff]">{item.date}</span>
                          <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#915eff]"></span>
                            <p className="text-[#fff]/60">
                              {item.company_name}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {value === 1 && (
            <div>
              <div sx={{ width: "100%" }}>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">my Education</h3>
                  <p className="max-w-[600px] text-[#fff]/60 mx-auto xl:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo modi placeat expedita quam ipsum nisi
                    voluptatibus,
                  </p>
                </div>
                <div className="h-[480px] overflow-hidden py-2">
                  <div className=" overflow-hidden group hover:overflow-auto">
                    <ul className="h-[350px] grid grid-cols-1 md:grid-cols-2 gap-[30px] text-center xl:text-left ">
                      {education.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] max-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-[#915eff]">{item.date}</span>
                            <h3 className="text-xl max-w-[260px] text-center lg:text-left">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full inline-block bg-[#915eff]"></span>
                              <p className="text-[#fff]/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {value === 2 && (
            <div>
              <div sx={{ width: "100%" }}>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">my skills</h3>
                  <p className="max-w-[600px] text-[#fff]/60 mx-auto xl:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo modi placeat expedita quam ipsum nisi
                    voluptatibus,
                  </p>
                </div>
                <div className="h-[480px] overflow-hidden py-2">
                  <div className="h-[300px] overflow-hidden hover:overflow-auto">
                    <ul className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-[30px] text-center xl:text-left ">
                      {technologies.map((item, index) => {
                        return (
                          <li key={index}>
                            <div className="w-full min-h-[130px] bg-[#232329] rounded-2xl flex items-center justify-center  group">
                              {item.icon && (
                                <item.icon className="text-6xl font-bold text-[#fff] group-hover:text-[#915eff]" />
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {value === 3 && (
            <div>
              <div sx={{ width: "100%" }}>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-[#fff]/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <div className="overflow-hidden py-2">
                  <div className=" overflow-hidden group hover:overflow-auto">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-center xl:text-left ">
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center xl:justify-start gap-4 text-wrap"
                          >
                            <span className="text-[#fff]/60">{item.title}</span>
                            <span className="text-[#fff] text-xl ">
                              {item.content}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Box>
    </section>
  );
}

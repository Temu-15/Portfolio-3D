import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { experiences, education, skills } from "../constants";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa6";
export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="flex justify-center items-center  xl:py-0   py-12 min-h-[80vh]"
    >
      <section className="container mx-auto px-[9%]">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            flexWrap: "nowrap",
            // flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "center",
            // alignItems: "center",
            // width: "100%",
            // height: "100%",
            gap: 15,
          }}
        >
          <div className="flex flex-col gap-6 max-w-[380px] w-full mx-auto xl:mx-0">
            <div className="w-full text-center lg:text-left">
              <h2>Why hire me?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                sed delectus cum iure voluptatem? Libero, iure.
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
                  color: value === 0 ? "#fff" : "#b4b4b4",
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
                    Explicabo modi placeat expedita quam ipsum nisi
                    voluptatibus,
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
                            <h3 classNmae="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full text-[#915eff]"></span>
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
                    <div className="h-[400px] overflow-auto">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] text-center xl:text-left">
                        {education.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#232329] max-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-[#915eff]">
                                {item.date}
                              </span>
                              <h3 classNmae="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full text-[#915eff]"></span>
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
                    <div className="h-[300px] overflow-auto">
                      <ul className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 xl:gap-[30px] text-center xl:text-left py-2">
                        {skills.skillSets.map((item, index) => {
                          return (
                            <li key={index}>
                              <div className="w-full h-[150px] bg-[#232329] rounded -xl flex items-center justify-center group relative">
                                {item.icon}
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
            {value === 3 && <div>Item Four</div>}
          </Box>
        </Box>
      </section>
    </motion.div>
  );
}

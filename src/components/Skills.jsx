import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaJenkins, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiGithubactions, SiJest, SiMaterialdesign  } from "react-icons/si";
import { DiGoogleCloudPlatform } from "react-icons/di";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "React", icon: <FaReact size={50} /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Express.js", icon: <SiExpress size={50} /> },
    { id: 5, name: "Git", icon: <FaGitAlt size={50} /> },
    { id: 6, name: "GCP", icon: <DiGoogleCloudPlatform size={50} /> },
    { id: 7, name: "Jenkins", icon: <FaJenkins size={50} /> },
    { id: 8, name: "GitHub Actions", icon: <SiGithubactions size={50} /> },
    { id: 9, name: "Material UI", icon: <SiMaterialdesign size={50} /> },
    { id: 10, name: "Jest", icon: <SiJest size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Eviden",
      role: "Software Engineer II",
      period: "Nov 2021 - Apr 2025",
      description:
        "Worked as a contractor for HomeDepot, contributing as a full stack developer. I used technologies such as React for the frontend and Express.js for the backend, focusing on building and maintaining scalable and maintainable web applications. I brought strong problem-solving skills, clean code practices, and a collaborative mindset that helped streamline development processes and improve overall code quality within the team.",
      logo: "/assets/eviden.png",
    },
    {
      id: 2,
      company: "Procuraduría General de Justicia del Estado de Hidalgo ",
      role: "Web Developer",
      period: "Jul - Oct 2021",
      description:
        "Contributed as a web developer, working with technologies such as HTML, CSS and JavaScript. I focused on maintaining and improving internal systems to support administrative processes. My contributions included implementing cleaner, more efficient code and streamlining workflows, which helped improve usability and performance across several internal tools.",
      logo: "/assets/scale.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12 cursor-default">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-default"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

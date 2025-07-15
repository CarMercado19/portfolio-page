import React from 'react';
import { motion } from 'framer-motion';
import AboutMeImg from "../../public/assets/about-me.png";

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-[30%]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src={AboutMeImg} alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
            I’m a passionate and detail-oriented <strong>full stack developer</strong> with <strong>over three years</strong> of professional experience building and maintaining <strong>web applications</strong>. My primary focus has been on developing <strong>clean</strong>, <strong>scalable</strong>, and <strong>efficient</strong> solutions using <strong>modern JavaScript</strong> technologies.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            On the frontend, I specialize in <strong>React.js</strong>, leveraging its <strong>component-based architecture</strong>, <strong>hooks</strong>, and <strong>Context API</strong> to build <strong>responsive</strong> and <strong>dynamic single-page applications</strong>. I’m experienced in working with <strong>Material UI (MUI)</strong> as a primary <strong>UI framework</strong>, and I take pride in delivering <strong>polished, user-friendly interfaces</strong> that meet both <strong>user needs</strong> and <strong>business goals</strong>.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
            On the backend, I have hands-on experience with <strong>Express.js</strong>, where I’ve contributed to the <strong>creation and consumption of RESTful APIs</strong>, managed <strong>middleware logic</strong>, and handled <strong>server-side integration</strong>. My ability to work across the <strong>full stack</strong> allows me to quickly understand and connect <strong>frontend</strong> and <strong>backend</strong> requirements, ensuring smooth functionality across the entire application.
        </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
              Throughout my career, I’ve worked in <strong>collaborative</strong>, <strong>agile teams</strong> and have been part of <strong>large-scale enterprise environments</strong>. This has given me a solid understanding of <strong>real-world software development workflows</strong>, <strong>version control with Git</strong>, and working alongside <strong>QA</strong>, <strong>designers</strong>, and <strong>backend developers</strong>. I’ve also interacted with <strong>Google Cloud Platform (GCP)</strong> for <strong>deployment</strong>, <strong>environment variable management</strong>, and <strong>application scaling</strong>.
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
              I’m fluent in both <strong>English and Spanish</strong>, hold a <strong>B2 iTEP English certification</strong>, and have used <strong>English</strong> as the primary language in <strong>professional settings</strong>, including <strong>meetings</strong>, <strong>documentation</strong>, and <strong>team communication</strong>.
          </p>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
              I’m always looking to <strong>grow</strong> whether that means deepening my expertise in <strong>JavaScript</strong>, exploring new <strong>frameworks</strong>, or contributing to <strong>meaningful</strong>, <strong>impactful projects</strong>. I value <strong>clean code</strong>, <strong>thoughtful architecture</strong>, and <strong>clear communication</strong>, and I’m excited about the opportunity to continue developing <strong>high-quality software</strong> that makes a difference.
          </p>
      </motion.div>
    </div>
  );
}

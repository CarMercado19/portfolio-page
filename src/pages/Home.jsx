import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import ProfileImg from "../../public/assets/home-image.png";

export default function Home() {
  const socialLinks = [
    {
      icon: BiLogoGmail,
      href: 'mailto:mercadodiazcarlosroberto@gmail.com',
    },
    {
      icon: IoLogoLinkedin,
      href: 'https://www.linkedin.com/in/carlos-roberto-mercado-diaz-4a28371b7/',
    },
    {
      icon: BsGithub,
      href: 'https://github.com/CarMercado19',
    },
  ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Carlos Roberto',
                  1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Full-Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Mexico.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about <strong>software development</strong>, I specialize in building <strong>full stack</strong> web applications using <strong>React</strong> and <strong>Express.js</strong>. I’m focused on writing <strong>clean</strong>, <strong>efficient</strong> code and <strong>creating scalable solutions</strong>. My goal is to continue <strong>growing</strong> as a developer while <strong>contributing</strong> to meaningful and <strong>high-impact projects</strong>.
          </motion.p>

          <motion.div
              className="flex items-center gap-x-5 mt-10 lg:mt-14"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map(({ icon: Icon, href }, index) => (
                <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex lg:w-[55%] w-full justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-[70%] w-[70%]" src={ProfileImg} alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}

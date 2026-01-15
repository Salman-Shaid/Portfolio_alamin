'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaHtml5,
  FaPhp,
  FaLaptopCode,
  FaNetworkWired,
  FaFileAlt,
  FaGlobe,
} from 'react-icons/fa';
import { GiTalk } from "react-icons/gi";

export default function Skills() {
  const skills = [
    {
      name: 'Python',
      icon: <FaPython className="text-blue-500" />,
      description: 'Python programming for automation, scripting, and backend logic.',
    },
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-orange-500" />,
      description: 'Semantic HTML, accessibility standards, and responsive layouts.',
    },
    {
      name: 'PHP',
      icon: <FaPhp size='36px' className="text-purple-600 " />,
      description: 'Server-side development, dynamic websites, and database integration.',
    },
    {
      name: 'Digital Marketing',
      icon: <FaLaptopCode className="text-green-500" />,
      description: 'SEO, social media marketing, email campaigns, and affiliate marketing.',
    },
    {
      name: 'Networking',
      icon: <FaNetworkWired className="text-yellow-500" />,
      description: 'Computer networking, LAN setup, troubleshooting, and hardware support.',
    },
    {
      name: 'MS Office',
      icon: <FaFileAlt className="text-purple-400" />,
      description: 'Word, Excel, PowerPoint, data entry, and professional documentation.',
    },
    {
      name: 'Internet Skills',
      icon: <FaGlobe className="text-teal-500" />,
      description: 'Web browsing, email handling, online research, scanning, and printing.',
    },
    {
      name: 'Communication Skills',
      icon: <GiTalk className="text-pink-500" />,
      description: 'Effective verbal communication, teamwork, and professional interaction.',
    },
  ];


  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(120);

  // Rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.4);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(90);
      else if (width < 1024) setRadius(120);
      else setRadius(160);
    };

    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section id="skills" className="py-28">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content">
            My <span className="text-primary">Skills</span>
          </h2>

          <span className="block w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mt-4 mx-auto lg:mx-0" />

          <p className="mt-6 md:px-4 sm:px-3 lg:px-0 text-content/70 max-w-xl mx-auto lg:mx-0">
            A combination of technical expertise, digital skills, and communication abilities
            that help me build effective and scalable solutions.
          </p>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* Orbit Section */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center
          h-[260px] sm:h-[300px] lg:h-[380px]">

          {/* Center Node */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center shadow-xl">
            {/* Spinning gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-tertiary animate-spin-slow"></div>

            {/* Inner circle / background */}
            <div className="absolute inset-[4px] rounded-full bg-background flex items-center justify-center">
              {/* Text in gradient */}
              <span className="font-bold text-xl sm:text-sm lg:text-2xl bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent text-center">
                Skills
              </span>
            </div>
          </div>


          {/* Orbit Nodes */}
          {skills.map((skill, i) => {
            const angleOffset = (i / skills.length) * 360;
            const totalAngle = angle + angleOffset;
            const x = radius * Math.cos((totalAngle * Math.PI) / 180);
            const y = radius * Math.sin((totalAngle * Math.PI) / 180);

            return (
              <motion.div
                key={i}
                style={{ x, y }}
                whileHover={{ scale: 1.25 }}
                className="
                  absolute flex flex-col items-center justify-center
                  w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24
                  rounded-full bg-gradient-to-r from-primary/20 to-tertiary/20
                  shadow-xl
                "
              >
                <div className="text-lg sm:text-xl lg:text-2xl">
                  {skill.icon}
                </div>

                {/* Text only on large screens */}
                <span className="hidden lg:block text-xs mt-1 font-semibold text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>


        {/* Skill Cards */}
        {/* Skill Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -80, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                delay: i * 0.15,
                type: 'spring',
                stiffness: 80,
                damping: 12,
                mass: 0.5,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: 'spring', stiffness: 150, damping: 12 },
              }}
              className="group relative p-5 rounded-xl bg-background/80 backdrop-blur shadow-lg 
                 cursor-pointer border border-white/10
                 hover:shadow-xl hover:shadow-primary/20"
            >
              {/* Glow layer */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                      from-primary/30 to-tertiary/30 
                      opacity-0 blur-xl 
                      group-hover:opacity-100 transition duration-300
                      pointer-events-none" />


              {/* Content */}
              <div className="relative flex gap-4">
                <div className="text-2xl text-primary">
                  {skill.icon}
                </div>

                <div>
                  <h3 className="font-bold text-content group-hover:text-primary transition">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-content/70">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export default function About() {
  const aboutText = `Hi! I am Al-Amin, a motivated and tech-savvy professional with a Diploma in Computer Technology and currently pursuing a B.Sc. in Computer Science & Engineering at Fareast International University (FIU). I have a strong academic foundation and a genuine passion for technology, digital marketing, and problem-solving. I possess hands-on experience in Digital Marketing, SEO, Website Development, MS Office, Data Entry, and creative content creation using Canva, along with foundational skills in computer hardware and networking.

I am passionate about combining my technical knowledge and digital expertise to develop impactful solutions and contribute to data-driven growth. I enjoy analyzing challenges, learning new technologies, and applying innovative approaches to achieve results efficiently. Alongside technical skills, I value teamwork, communication, and continuous learning, which allow me to collaborate effectively and adapt to dynamic environments.

My goal is to leverage my skills and creativity to solve real-world problems, improve processes, and deliver measurable outcomes. I am always eager to take on new challenges, expand my knowledge, and grow as a professional in the rapidly evolving world of technology and digital solutions.`;

  return (
     <section id="about" className="relative py-16 sm:py-20 lg:py-28 text-content">
      
      {/* Outer wrapper for hover glow */}
      <div className="relative group mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-2xl overflow-hidden">

        {/* Glow Background Layer */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-tertiary/30
                     opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"
        />

        {/* Main Card */}
        <div className="relative bg-black/70 backdrop-blur-sm rounded-2xl py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10 transition-all">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">

            {/* Profile Image with Gradient Ring */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex-shrink-0 group"
            >
              {/* Gradient Ring */}
              <div className="absolute inset-0 rounded-full p-[3px]">
                <div className="w-full h-full rounded-full 
                                bg-gradient-to-r from-primary via-secondary to-tertiary 
                                blur-[2px] opacity-0 group-hover:opacity-100 
                                animate-spin-slow transition-all duration-500" />
              </div>

              {/* Profile Image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden bg-surface shadow-xl">
                <Image
                  src="/photo1.jpeg"
                  alt="Al-Amin Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Optional Glow on Hover */}
              <div className="absolute inset-0 rounded-full pointer-events-none 
                              shadow-[0_0_40px_rgba(255,255,255,0.5)] 
                              opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 max-w-full text-center md:text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-content ">
                <span className="text-primary ">About</span> Me
              </h2>

              <span className="block w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full my-4 mx-auto lg:mx-0" />

              {/* Typewriter Text */}
              <div className="relative mt-6 text-content/80 text-sm sm:text-base md:text-lg leading-relaxed min-h-[360px] sm:min-h-[400px] md:min-h-[480px]">
                <Typewriter
                  words={[aboutText]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={18}
                  deleteSpeed={0}
                  delaySpeed={800}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>

  );
}

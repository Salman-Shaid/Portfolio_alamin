'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Digital Marketing Trainee",
    company: "Kodeeo Limited",
    duration: "6 Months (Industrial Training)",
    points: [
      "Hands-on experience in SEO including keyword research, on-page SEO, and basic off-page strategies.",
      "Worked on social media marketing (SMM) and created visual content using Canva.",
      "Assisted in website promotion and content optimization to improve online visibility.",
      "Supported email marketing campaigns and learned affiliate marketing fundamentals.",
      "Collaborated with team members on data-driven digital marketing strategies.",
    ],
  },
  {
    role: "IT Support & Computer Servicing",
    company: "Model Institute of Science & Technology",
    duration: "Academic & Practical Experience",
    points: [
      "Performed basic computer servicing and hardware troubleshooting.",
      "Assisted with networking fundamentals and basic system configuration.",
      "Supported software installation, system maintenance, and technical troubleshooting.",
      "Developed problem-solving skills through hands-on lab-based learning.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl flex sm:text-4xl md:text-5xl font-bold text-content mb-4">
            My <span className="text-primary pl-3"> Experience</span>
          </h2>

          <span className="block w-24 h-1  bg-gradient-to-r from-primary to-tertiary rounded-full justify-start" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-10">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/40 to-tertiary/40" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-tertiary items-center justify-center shadow-lg">
                <div className="w-4 h-4 rounded-full bg-background" />
              </div>

              {/* Card */}
              <div className="group relative p-6 sm:p-8 rounded-3xl bg-surface/80 backdrop-blur border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                <div className="relative">
                  <div className="mb-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-content">
                      {exp.role}
                    </h3>

                    <p className="text-primary font-medium">
                      {exp.company}
                    </p>

                    <span className="text-sm text-content/60">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2 text-content/80 text-sm sm:text-base">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

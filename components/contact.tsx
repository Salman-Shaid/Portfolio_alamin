'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import contactAnimation from '../public/lottie/contact.json';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // ✅ Typed handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Typed handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-content mb-4">
            <span className="text-primary">Contact</span> Me
          </h2>

          <motion.span
            className="block w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto lg:mx-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Lottie */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block w-full max-w-md mx-auto lg:max-w-full"
          >
            <Lottie animationData={contactAnimation} loop />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-4 rounded-xl border border-white/20 bg-background text-content placeholder:text-content/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-4 rounded-xl border border-white/20 bg-background text-content placeholder:text-content/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="p-4 rounded-xl border border-white/20 bg-background text-content placeholder:text-content/50 focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="p-4 rounded-xl border border-white/20 bg-background text-content placeholder:text-content/50 focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2 resize-none"
            />

            <div className="sm:col-span-2 px-1">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
                className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border
                  border-white/20 hover:border-primary/30 w-full transition-all group"
              >
                <span className="text-content group-hover:text-primary transition-colors">
                  Explore Work
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r 
                    from-primary/10 to-tertiary/10 opacity-0
                    group-hover:opacity-100 transition-opacity"
                />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

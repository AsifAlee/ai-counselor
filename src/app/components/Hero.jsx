"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-32 pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white dark:from-blue-900/20 dark:via-gray-900 dark:to-gray-900 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — CONTENT */}
        <div>
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-blue-600 text-white mb-6"
          >
            AI-Powered Career Counselor
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100"
          >
            Shape your future with{" "}
            <span className="text-blue-600 dark:text-blue-400">AI-Driven</span>{" "}
            career guidance
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-700 dark:text-gray-300 max-w-lg text-lg"
          >
            Talk to a lifelike AI mentor, explore career paths, and receive a
            personalized step-by-step plan based on your strengths.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="/chat"
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Start Chat
            </a>

            <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* RIGHT — FLOATING AVATAR */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow behind avatar */}
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/10"
            animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Avatar */}
          <motion.img
            src="/hero-avatar.jpg"
            alt="AI Avatar"
            className="relative w-64 h-64 rounded-full shadow-xl dark:shadow-black/40 object-cover"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Decorative orbit circles */}
          <motion.div
            className="absolute inset-0 border border-blue-300/40 dark:border-blue-500/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Bottom Curve (optional like Sapia) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
    </section>
  );
}

"use client";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden"
    >
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Find Your Perfect{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Career Path
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-xl">
              Chat with our AI Counselor to explore career options and plan your
              future — personalized for you.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition">
                Start Free Session
              </button>
              <button className="border border-blue-600 text-blue-600 dark:text-blue-300 px-5 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end relative">
            {/* pulsing glow */}
            <motion.div
              className="absolute w-80 h-80 rounded-full blur-3xl bg-blue-400/30 dark:bg-blue-500/20"
              animate={{ scale: [1, 1.25, 1], opacity: [0.55, 0.2, 0.55] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="AI Avatar"
              className="w-72 md:w-80 rounded-2xl shadow-xl relative z-10 dark:shadow-black/40"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

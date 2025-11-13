"use client";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden"
    >
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
          {/* LEFT SIDE — TEXT */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect{" "}
              <span className="text-blue-600">Career Path</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Chat with our AI Counselor to explore career options and plan your
              future — personalized for you.
            </p>
            <div className="space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                Start Free Session
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT SIDE — FLOATING + GLOWING AVATAR */}
          <div className="flex-1 mt-10 md:mt-0 flex justify-center relative">
            {/* Glowing Pulse Effect */}
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-blue-400/30 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Floating Avatar */}
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
              alt="AI Counselor Avatar"
              className="w-80 md:w-[400px] rounded-2xl shadow-xl relative z-10"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

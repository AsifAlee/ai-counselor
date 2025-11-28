"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className=" hero relative overflow-hidden  dark:bg-gray-900 pt-20 pb-2 md:pt-40 md:pb-20">
      {/* Background Gradient */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — CONTENT */}
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl text-center md:text-left md:text-5xl font-bold leading-tight  dark:text-gray-100 font-sana-serif"
          >
            Shape the Future of Career Coaching
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6  dark:text-gray-300 max-w-lg text-lg font-sana-serif"
          >
            Are you looking for a new role, considering a career change, or
            wanting to know yourself better?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6  dark:text-gray-300 max-w-lg text-lg font-sana-serif"
          >
            Discover your potential with Phai, an experimental AI career coach
            from Pathlight. We’re seeking your valuable feedback to refine and
            improve our service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 flex  justify-center md:justify-start  font-sana-serif w-full mx-auto "
          >
            <a
              href="/login"
              className="px-6 py-3  flex  rounded-full text-white font-medium hover:bg-blue-700 transition chat-btn"
            >
              Start Chat
              <ArrowRight className="inline-block ml-2" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — FLOATING AVATAR */}
        <div className="img-div-wrapper flex justify-center items-center">
          <div className="img-div"></div>
        </div>
      </div>
    </section>
  );
}

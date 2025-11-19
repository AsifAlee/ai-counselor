"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className=" hero relative overflow-hidden  dark:bg-gray-900 pt-10 pb-20">
      {/* Background Gradient */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — CONTENT */}
        <div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-gray-100"
          >
            Shape the Future of Career Coaching
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-700 dark:text-gray-300 max-w-lg text-lg"
          >
            Are you looking for a new role, considering a career change, or
            wanting to know yourself better?
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-700 dark:text-gray-300 max-w-lg text-lg"
          >
            Discover your potential with Phai, an experimental AI career coach
            from Sapia.ai. We’re seeking your valuable feedback to refine and
            improve our service.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 flex "
          >
            <a
              href="/chat"
              className="px-6 py-3 rounded-full text-white font-medium hover:bg-blue-700 transition chat-btn"
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

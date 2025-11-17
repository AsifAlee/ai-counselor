"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSynced({ activeFeature }) {
  // Animation variants for different features
  const variants = {
    idle: {
      y: [0, -10, 0],
      scale: 1,
      filter: "brightness(1)",
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },

    avatar: {
      scale: 1.05,
      filter: "brightness(1.15)",
      transition: { duration: 0.4 },
    },

    roadmap: {
      rotate: [-2, 2, -2],
      transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
    },

    realtime: {
      scale: [1, 1.06, 1],
      boxShadow: [
        "0 0 10px rgba(59,130,246,0.0)",
        "0 0 25px rgba(59,130,246,0.6)",
        "0 0 10px rgba(59,130,246,0.0)",
      ],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },

    qa: {
      y: [-3, 3, -3],
      scale: 1.03,
      transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Chat bubble animation
  const chatBubble = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: activeFeature === "qa" ? 1 : 0,
      y: activeFeature === "qa" ? 0 : 10,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="flex justify-center relative py-20">
      {/* glowing background */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl bg-blue-400/20 dark:bg-blue-500/20"
        animate={
          activeFeature === "realtime"
            ? { opacity: [0.3, 0.8, 0.3] }
            : { opacity: 0.4 }
        }
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Avatar */}
      <motion.img
        src="/guide.jpg"
        alt="AI Avatar"
        className="w-40 h-40 rounded-full shadow-xl dark:shadow-black/40 relative"
        animate={activeFeature ? variants[activeFeature] : variants.idle}
      />

      {/* Chat bubble */}
      <motion.div
        variants={chatBubble}
        initial="hidden"
        animate="show"
        className="absolute right-1/3 bottom-8 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow text-sm max-w-[11rem]"
      >
        “Ask me anything!”
      </motion.div>
    </div>
  );
}

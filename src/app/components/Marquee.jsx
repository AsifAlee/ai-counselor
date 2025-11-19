"use client";

import { motion } from "framer-motion";
import "../styles/marquee.css";

export default function Marquee() {
  const images = [
    "/m1.svg",
    "/m2.svg",

    "/m1.svg",
    "/m2.svg",
    "/m1.svg",
    "/m2.svg",
    "/m1.svg",
    "/m2.svg",
    "/m1.svg",
    "/m2.svg",
    "/m1.svg",
    "/m2.svg",
  ];

  return (
    <div
      className="marquee w-full overflow-hidden py-10 bg-white dark:bg-gray-900"
      style={{ backgroundColor: "#f5f0ec" }}
    >
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      >
        {/* Duplicate items to create infinite loop */}
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="logo"
            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition"
            draggable="false"
          />
        ))}
      </motion.div>
    </div>
  );
}

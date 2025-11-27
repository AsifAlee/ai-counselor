"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CareerPitchMobileSlider({ steps }) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto slide every 3 seconds
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Manual swipe handler
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) {
      // swipe left
      setIndex((prev) => (prev + 1) % steps.length);
    } else if (info.offset.x > 50) {
      // swipe right
      setIndex((prev) => (prev - 1 + steps.length) % steps.length);
    }
  };

  return (
    <div className="relative md:hidden mt-10">
      {/* Slider container */}
      <div className="overflow-hidden relative w-full">
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={stopAutoSlide}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="min-w-full flex flex-col items-center justify-center py-8"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full shadow-md
                        text-gray-900 dark:text-gray-100"
                style={{ backgroundColor: "#cdfe00" }}
              >
                <step.icon size={28} />
              </div>

              <p className="mt-4 text-base font-semibold text-gray-800 dark:text-gray-200 max-w-[200px] text-center">
                {step.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center mt-4 gap-2">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all
              ${
                index === i ? "bg-blue-600 w-6" : "bg-gray-400 dark:bg-gray-600"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

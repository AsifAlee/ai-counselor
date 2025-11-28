"use client";

import { motion } from "framer-motion";

export default function Multilingual() {
  return (
    <section className="py-20 bg-black dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
              <motion.img
                src="https://cdn.ravatar.com/wp-content/uploads/2024/09/block-TRY-NOW-02-1-min.webp" /* replace with your image path */
                alt="Multilingual AI Avatar"
                className="w-full h-auto object-cover block"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // className="text-left"
          >
            <h3 className="text-2xl text-center md:text-3xl  md:text-left font-bold text-white dark:text-gray-100 mb-4">
              Multilingual Support
            </h3>

            <p className="text-white dark:text-gray-300 text-lg leading-relaxed">
              Our real-time conversational AI avatars open the door to global
              engagement, empowering businesses to converse fluently with
              audiences worldwide in all major languages.
            </p>

            <p className="mt-4 text-white dark:text-gray-300 text-lg leading-relaxed">
              This ensures seamless and captivating communication across diverse
              cultures and regions, nurturing deeper connections and creating
              meaningful experiences that resonate with customers on an
              international scale.
            </p>
          </motion.div>

          {/* RIGHT: Image */}
        </div>
      </div>
    </section>
  );
}

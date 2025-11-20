"use client";

import { motion } from "framer-motion";
import {
  FileUser,
  Flag,
  ChartNoAxesGantt,
  SquaresUnite,
  ChartNoAxesCombined,
} from "lucide-react";
<FileUser />;

import "../styles/career-pitch.css";

export default function CareerPitch() {
  const steps = [
    { icon: FileUser, text: "Define your goals" },
    { icon: Flag, text: "Upload background" },
    { icon: ChartNoAxesGantt, text: "Career plan" },
    { icon: SquaresUnite, text: "AI guidance" },
    { icon: ChartNoAxesCombined, text: "Track progress" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight italic font-sana-serif"
            >
              AI Career Counseling —{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Personalized Guidance, Real Avatars
              </span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-xl text-gray-700 dark:text-gray-300 font-medium font-sana"
            >
              You’re finally free.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-5 dark:text-gray-300 max-w-lg mx-auto font-sana"
            >
              No more generic advice. No more endless searching for the right
              career path. Drop in your goals and background, and let your AI
              Career Avatar guide you step by step. It’s time to turn career
              ambitions into real-world success.
            </motion.p>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto mt-14">
          {/* Background line */}
          <div className=" dotted-border"></div>

          {/* Steps */}
          <div className="grid grid-cols-5 text-center relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full shadow-md text-gray-900 dark:text-gray-100"
                  style={{ backgroundColor: "#cdfe00" }}
                >
                  <step.icon size={28} />
                </div>

                <p className="mt-4 text-base font-semibold text-gray-800 dark:text-gray-200 max-w-[150px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

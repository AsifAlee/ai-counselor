"use client";

import { motion } from "framer-motion";
import "../styles/impact.css";
export default function Impact() {
  const stats = [
    {
      value: "5M+",
      label: "Students Growing",
      desc: "Students benefiting from personalized career guidance.",
    },
    {
      value: "48M+",
      label: "Institutions Onboarded",
      desc: "Educational institutes using Pathvius for AI-driven counseling.",
    },
    {
      value: "92%",
      label: "Career Clarity Boost",
      desc: "Students report gaining clearer direction within 10 minutes.",
    },
    {
      value: "4.9/5",
      label: "Student Satisfaction",
      desc: "Consistently rated as a top-tier guidance experience.",
    },
  ];

  return (
    <section className="impact py-24 bg-gray-50 dark:bg-gray-800 transition-colors ">
      <div className="max-w-7xl grid grid-cols-2 sm:grid-col-1 mx-auto px-1">
        {/* Heading */}
        <div className="">
          <div className="flex flex-col w-[70%] justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 w-full text-left"
            >
              Pathvius Impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 max-w-xl   dark:text-gray-300 text-lg"
            >
              Empowering students and institutions with data-backed,
              personalized career guidance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 max-w-xl   dark:text-gray-300 text-lg"
            >
              Amira is validated by independent research and trusted by
              districts for delivering measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-4 max-w-xl  dark:text-gray-300 text-lg"
            >
              From urban centers to rural communities, Amira helps millions of
              students worldwide become proficient readers. Students learning
              with Amira experience 68% faster reading growth in one school year
              than those using other reading technologies.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-col  gap-14" style={{ paddingRight: "4rem" }}>
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="  grid grid-cols-1  dark:bg-gray-900 rounded-2xl  dark:shadow-lg"
            >
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 w-full h-full">
                  <div className="flex flex-col ">
                    <p className="text-left text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {s.label}
                    </p>
                    <p className="text-sm dark:text-gray-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center  justify-center ">
                    <h3 className="text-3xl font-bold text-black-600 dark:text-blue-400 value">
                      {s.value}
                    </h3>
                  </div>
                </div>

                <div className="linear-gradient-border"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

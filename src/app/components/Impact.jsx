"use client";

import { motion } from "framer-motion";

export default function Impact() {
  const stats = [
    {
      value: "12,500+",
      label: "Students Guided",
      desc: "Across universities, colleges, and self-learning programs.",
    },
    {
      value: "48+",
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
    <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100"
        >
          Pathvius Impact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-300"
        >
          Empowering students and institutions with data-backed, personalized
          career guidance.
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {s.value}
              </h3>
              <p className="mt-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {s.label}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

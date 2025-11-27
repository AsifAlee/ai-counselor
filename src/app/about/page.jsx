"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
        >
          About Pathlight
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
          Pathlight is your AI-powered mentor that helps students discover the
          right career direction through real-time insights, human-like
          conversations, and data-driven recommendations.
        </p>

        {/* Content */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We aim to democratize career guidance worldwide by providing
              students with access to personalized, high-quality advice —
              regardless of their location, school system, or background.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Why We Built Pathlight?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Traditional career counseling is often expensive, outdated, or
              inaccessible. Pathlight uses the latest advancements in
              conversational AI to guide you step-by-step, at any time and with
              unlimited support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center"
        >
          Privacy Policy
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
          Your privacy is extremely important to us. Here’s how Pathlight
          collects, uses, and protects your data.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may collect personal information you provide, including name,
              email, academic history, career preferences, and usage data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              2. How We Use Your Data
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use this information to personalize your career experience,
              improve the platform, and communicate important updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              3. Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We do not sell your data. Certain analytics or authentication
              tools may process your data securely.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

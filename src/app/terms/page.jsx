"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6"
        >
          Terms & Conditions
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-2xl mx-auto">
          By accessing or using Pathlight, you agree to the following terms and
          conditions. Please read them carefully.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By using our platform, you acknowledge that you have read,
              understood, and agree to be bound by these Terms & Conditions and
              our Privacy Policy.
            </p>
          </motion.section>

          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              2. User Responsibilities
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              You agree to use Pathlight responsibly and not engage in any
              activity that may harm, disrupt, or misuse the platform. You must
              provide accurate information during signup and maintain the
              security of your account.
            </p>
          </motion.section>

          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              3. AI Guidance Limitations
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              While Pathlight provides AI-generated recommendations, these
              suggestions are for informational purposes only. You are solely
              responsible for any decisions made based on these insights.
            </p>
          </motion.section>

          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 leading-relaxed">
              <li>Misrepresenting your identity or information</li>
              <li>Attempting to hack, disrupt, or overload our systems</li>
              <li>Sharing, selling, or distributing platform access</li>
              <li>Using Pathlight for unlawful purposes</li>
            </ul>
          </motion.section>

          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              5. Termination of Access
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Pathlight reserves the right to suspend or terminate your access
              if any of these terms are violated or if suspicious activity is
              detected.
            </p>
          </motion.section>

          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              6. Updates to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Pathlight may modify these terms as needed. Continued use of the
              platform indicates your acceptance of any updates.
            </p>
          </motion.section>

          {/* Section */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              7. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              For questions regarding these terms, please contact us at: <br />
              <span className="font-medium text-gray-900 dark:text-gray-100">
                support@pathlight.ai
              </span>
            </p>
          </motion.section>
        </div>
      </div>
    </section>
  );
}

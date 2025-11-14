"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to API
    console.log("Waitlist:", formData);
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="py-16 bg-blue-50 dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-3 text-blue-700 dark:text-blue-300"
        >
          Join the Waitlist
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Be the first to try our AI-powered career counseling platform.
        </p>

        {submitted ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-sm dark:shadow-gray-700/40">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Thanks — you’re on the list!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              We’ll reach out soon with early access details.
            </p>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-700/40 p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                First Name
              </label>
              <input
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Last Name
              </label>
              <input
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Company Name
              </label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Job Title
              </label>
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none"
              />
            </div>

            <div className="sm:col-span-2 flex items-center space-x-3 mt-2">
              <input
                id="marketing"
                name="marketing"
                type="checkbox"
                checked={formData.marketing}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label
                htmlFor="marketing"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Send me product updates, tips, and marketing emails.
              </label>
            </div>

            <div className="sm:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Join Waitlist
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  );
}

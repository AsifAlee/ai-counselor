"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    marketing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);

    alert("Thank you for joining the waitlist!");
  };

  return (
    <section id="waitlist" className="py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6 text-blue-700"
        >
          Join the Waitlist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 mb-10"
        >
          Be the first to try our AI-powered career counseling platform.
        </motion.p>

        {/* Form Card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* First Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Job Title */}
          <div className="sm:col-span-1">
            <label className="text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Marketing Checkbox */}
          <div className="sm:col-span-2 flex items-center mt-2">
            <input
              type="checkbox"
              name="marketing"
              checked={formData.marketing}
              onChange={handleChange}
              className="w-5 h-5 mr-3"
            />
            <span className="text-gray-700 text-sm">
              Send me product updates, tips, and marketing emails.
            </span>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Join Waitlist
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

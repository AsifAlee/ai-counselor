"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
      {/* LEFT COLUMN — FORM */}
      <div className="col-span-1 flex items-center justify-center px-8 py-12 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Create an Account
          </h2>

          {/* NAME */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Sign Up
          </button>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Log In
            </a>
          </p>
        </motion.div>
      </div>

      {/* RIGHT COLUMN — IMAGE */}
      <div className="col-span-2 hidden lg:block overflow-hidden h-full py-20 px-20">
        <img
          src="/login.png"
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

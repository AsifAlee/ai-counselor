"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "../styles/what-it-offers.css";
export default function WhatItOffers() {
  return (
    <section className="what-it-offers py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* ROW 1 — Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12 w-750 mx-auto w-[70%]"
        >
          Pathlight offers personalised career insights and guidance to help you
          explore your professional journey
        </motion.h2>

        {/* ROW 2 — Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN — Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/sample-img-2.jpeg" // update this path
              alt="What Pathlight Offers"
              className="w-full max-w-md rounded-2xl shadow-lg dark:shadow-black/40 object-cover"
            />
          </motion.div>

          {/* RIGHT COLUMN — Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <ul className="text-lg list-disc font-sana">
              <li>
                Career path and role recommendations aligned with your strengths
                and goals
              </li>
              <li>
                Actionable guidance for transitioning to new or different roles
              </li>
              <li>Personality insights to build your self-awareness</li>
              <li>Coaching tips to enhance your job search</li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-8 flex "
            >
              <a
                href="/login"
                className="px-6 py-3 rounded-full text-white font-medium hover:bg-blue-700 transition chat-btn"
              >
                Start Chat
                <ArrowRight className="inline-block ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

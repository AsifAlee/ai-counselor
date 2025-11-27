"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Pathlight?",
    a: "Pathlight is an AI career guidance platform that helps students discover the right career path using real-time insights and AI avatars.",
  },
  {
    q: "Is Pathlight free?",
    a: "We offer a free tier with essential features. Premium features will be introduced soon.",
  },
  {
    q: "Can schools use Pathlight?",
    a: "Yes! Schools can onboard students, monitor progress, and provide institution-wide career insights.",
  },
  {
    q: "How accurate is the career guidance?",
    a: "Our models are trained on real-world data and constantly improving, ensuring highly relevant recommendations.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {item.q}
                </p>
                <ChevronDown
                  className={`transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-gray-600 dark:text-gray-300"
                >
                  {item.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

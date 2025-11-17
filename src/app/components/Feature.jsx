"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import {
  Brain,
  Sparkles,
  UserSquare2,
  MessageCircle,
  Compass,
  Clock,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <UserSquare2 size={32} />,
      title: "Lifelike Avatar Interaction",
      desc: "Talk to a realistic AI counselor that feels natural, expressive, and emotionally aware.",
    },
    {
      icon: <Compass size={32} />,
      title: "Personalized Career Plan",
      desc: "Get a custom-built roadmap based on your skills, interests, and goals — updated automatically.",
    },
    {
      icon: <Clock size={32} />,
      title: "Real-Time Guidance & Monitoring",
      desc: "Your AI mentor tracks progress, gives reminders, and helps you stay on the right path.",
    },
    {
      icon: <MessageCircle size={32} />,
      title: "Interactive Q&A & Scenario Simulation",
      desc: "Ask anything — explore career scenarios, job roles, challenges, and real-life decisions.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <FadeInWhenVisible>
          <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Features & Benefits
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14">
            Pathvius gives students next-gen AI counseling with human-like
            interaction and highly personalized guidance.
          </p>
        </FadeInWhenVisible>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <FadeInWhenVisible key={i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-800/40 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 mb-4">
                  {f.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Pricing / Plans */}
        <FadeInWhenVisible>
          <div className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-block px-10 py-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-gray-800/40"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Pricing & Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Full pricing structure is under development.
              </p>
              <span className="px-4 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
                Coming Soon
              </span>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

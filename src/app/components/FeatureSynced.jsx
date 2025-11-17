"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import HeroSynced from "./HeroSynced";
import { useState } from "react";
import { UserSquare2, Compass, Clock, MessageCircle } from "lucide-react";

export default function FeaturesSynced() {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: "avatar",
      icon: <UserSquare2 size={28} />,
      title: "Lifelike Avatar Interaction",
      desc: "Talk to a realistic AI counselor that feels natural.",
    },
    {
      id: "roadmap",
      icon: <Compass size={28} />,
      title: "Personalized Career Plan",
      desc: "AI generates tailored career paths and learning plans.",
    },
    {
      id: "realtime",
      icon: <Clock size={28} />,
      title: "Real-Time Guidance & Monitoring",
      desc: "Get continuous support as you progress.",
    },
    {
      id: "qa",
      icon: <MessageCircle size={28} />,
      title: "Interactive Q&A & Simulation",
      desc: "Explore scenarios and ask anything.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      {/* Hero synced with features */}
      {/* <HeroSynced activeFeature={activeFeature} /> */}

      {/* Title */}
      {/* <FadeInWhenVisible>
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
          Features & Benefits
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14">
          Each AI capability is synced with our lifelike avatar for an immersive
          experience.
        </p>
      </FadeInWhenVisible> */}

      {/* Features Grid */}
      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setActiveFeature(f.id)}
            onMouseLeave={() => setActiveFeature(null)}
            onClick={() => setActiveFeature(f.id)}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer transition"
            whileHover={{ y: -6 }}
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
        ))}
      </div> */}
    </section>
  );
}

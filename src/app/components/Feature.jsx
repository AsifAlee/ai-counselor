"use client";

import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { UserSquare2, Compass, Clock, MessageCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <UserSquare2 size={28} />,
      title: "Lifelike Avatar Interaction",
      desc: "Talk to a realistic AI counselor that feels expressive, natural, and emotionally aware.",
    },
    {
      icon: <Compass size={28} />,
      title: "Personalized Career Plan",
      desc: "Get a custom roadmap built from your skills, personality, interests, and future goals.",
    },
    {
      icon: <Clock size={28} />,
      title: "Real-Time Guidance & Monitoring",
      desc: "Your AI mentor helps track your growth, gives reminders, and adapts your roadmap instantly.",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Interactive Q&A + Scenario Simulation",
      desc: "Explore job roles, challenges, interviews, or real-world career choices in seconds.",
    },
  ];

  return (
    <section
      id="features"
      className=" pt-0 pb-7 bg-white md:py-24 dark:bg-gray-900 border-t border-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <FadeInWhenVisible>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Features & Benefits
          </h2>
          <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Discover how Pathlight elevates career planning using next-gen AI
            intelligence.
          </p>
        </FadeInWhenVisible>

        {/* Floating 3D Feature Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {features.map((f, idx) => (
            <FadeInWhenVisible key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.06,
                  rotateX: 6,
                  rotateY: -6,
                  translateY: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                }}
                className="
                  relative p-7 rounded-2xl 
                  h-full flex flex-col
                  bg-white/70 dark:bg-gray-800/80 
                  border border-gray-200 dark:border-gray-700 
                  shadow-[0_10px_40px_-12px_rgba(0,0,0,0.2)]
                  dark:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.6)]
                  backdrop-blur-xl
                  transform-gpu
                  hover:shadow-[0_22px_60px_-10px_rgba(0,0,0,0.25)]
                  hover:dark:shadow-[0_22px_70px_-10px_rgba(0,0,0,0.75)]
                  transition-shadow duration-300
                "
              >
                {/* Glow Layer */}
                <div
                  className="
                  absolute inset-0 rounded-2xl 
                  bg-gradient-to-br from-blue-500/5 via-purple-600/5 to-pink-500/5
                  opacity-0 group-hover:opacity-30 
                  transition-opacity duration-500 pointer-events-none
                "
                />

                {/* Icon */}
                <div
                  className="
                  flex items-center justify-center w-16 h-16 
                  rounded-xl bg-blue-600/10 dark:bg-blue-500/20 
                  text-blue-700 dark:text-blue-300 mb-5 shadow-inner
                "
                >
                  {f.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                  {f.desc}
                </p>

                {/* Bottom Glow Bar */}
                <div
                  className="
                  mt-6 h-[3px] w-full rounded-full 
                  bg-gradient-to-r from-blue-600 to-purple-600
                  opacity-60 dark:opacity-70
                "
                />
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}

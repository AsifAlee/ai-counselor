"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollOnSlide() {
  const steps = [
    {
      title: "Adapts to your goals",
      desc: "Pathlight personalizes suggestions based on your ambitions.",
      img: "/slide-01.jpg",
    },
    {
      title: "Understands your context",
      desc: "It reads your profile, experience and preferences for tailored advice.",
      img: "/slide-02.jpg",
    },
    {
      title: "Just-in-time answers",
      desc: "Get mock interviews, guidance, and next steps instantly.",
      img: "/slide-03.jpg",
    },
    {
      title: "Practice & feedback",
      desc: "Practice real scenarios and get personalized feedback.",
      img: "/slide-04.jpg",
    },
    {
      title: "Track outcomes",
      desc: "Measure your progress with real-time indicators.",
      img: "/slide-05.jpg",
    },
  ];

  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [lockScroll, setLockScroll] = useState(false);

  /* --------- Lock scroll on entering section --------- */
  useEffect(() => {
    const section = sectionRef.current;

    function onScroll() {
      const rect = section.getBoundingClientRect();

      const enters = rect.top <= 0;
      const notExited = rect.bottom > window.innerHeight;

      if (enters && notExited) {
        setLockScroll(true);
      } else {
        setLockScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* --------- Apply Scroll Lock --------- */
  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [lockScroll]);

  /* --------- Page scroll drives progress --------- */
  useEffect(() => {
    const section = sectionRef.current;
    const totalHeight = section.offsetHeight - window.innerHeight;

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const scrollProgress = (-rect.top / totalHeight) * steps.length;

      const index = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(scrollProgress))
      );

      setActive(index);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-white dark:bg-gray-900"
    >
      {/* CONTENT WRAPPER */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN (never scrolls) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Learn like you.
            </h2>

            <div className="space-y-8">
              {steps.map((s, i) => {
                const isActive = i === active;

                return (
                  <div
                    key={i}
                    className={`transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN (Sticky Preview) */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[active].img}
                  src={steps[active].img}
                  alt={steps[active].title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[450px] object-cover rounded-2xl shadow-xl dark:shadow-black/40"
                />
              </AnimatePresence>

              <div className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                {active + 1}/{steps.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

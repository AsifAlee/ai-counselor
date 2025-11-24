"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload your profile",
      desc: "Provide your details or upload your resume to get started instantly.",
      details:
        "Upload your resume or fill in details manually. Pathlight extracts skills, background, interests, and experience to build your profile quickly.",
      icon: "📤",
    },
    {
      title: "AI analyzes your strengths",
      desc: "Our model evaluates your key skills and finds your strongest career matches.",
      details:
        "We run a multi-layer analysis using skill graphs, interests, job trends, and academic fit to identify top career directions suited for you.",
      icon: "🔎",
    },
    {
      title: "Get a personalized roadmap",
      desc: "Receive a step-by-step plan tailored to your goals and strengths.",
      details:
        "Your roadmap contains recommended skills, curated courses, practical projects, and timelines to reach your goals efficiently.",
      icon: "🗺️",
    },
    {
      title: "Interactive mentoring",
      desc: "Chat with the AI mentor for guidance, resources, and interview prep.",
      details:
        "Refine your roadmap, ask questions, practice interviews, and get personalized recommendations from your Pathlight AI mentor.",
      icon: "💬",
    },
  ];

  // states
  const [activeStep, setActiveStep] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [inViewStep, setInViewStep] = useState(null);

  const containerRef = useRef(null);
  const dotRefs = useRef([]);
  dotRefs.current = [];

  function addDotRef(el) {
    if (el && !dotRefs.current.includes(el)) dotRefs.current.push(el);
  }

  const highlighted = activeStep !== null ? activeStep : inViewStep;

  const openPanelFor = (index) => {
    setActiveStep(index);
    setPanelOpen(true);
  };

  const closePanel = () => setPanelOpen(false);

  // auto-activate steps during scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stepEls = Array.from(container.querySelectorAll("[data-step-index]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const idx = Number(visible[0].target.dataset.stepIndex);
          setInViewStep(idx);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0.15, 0.4, 0.6] }
    );

    stepEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // calculate SVG curved connectors
  const [svgPaths, setSvgPaths] = useState([]);

  useEffect(() => {
    function computePaths() {
      const dots = dotRefs.current;
      const container = containerRef.current;
      if (!container || dots.length < 2) return;

      const containerRect = container.getBoundingClientRect();
      const paths = [];

      for (let i = 0; i < dots.length - 1; i++) {
        const A = dots[i].getBoundingClientRect();
        const B = dots[i + 1].getBoundingClientRect();

        const ax = A.left + A.width / 2 - containerRect.left;
        const ay = A.top + A.height / 2 - containerRect.top;

        const bx = B.left + B.width / 2 - containerRect.left;
        const by = B.top + B.height / 2 - containerRect.top;

        const dx = Math.abs(bx - ax);
        const offset = Math.min(120, dx * 0.4);

        const cx1 = ax + offset;
        const cy1 = ay;
        const cx2 = bx - offset;
        const cy2 = by;

        const d = `M ${ax} ${ay} C ${cx1} ${cy1} ${cx2} ${cy2} ${bx} ${by}`;
        paths.push(d);
      }
      setSvgPaths(paths);
    }

    computePaths();

    const ro = new ResizeObserver(computePaths);
    ro.observe(document.body);

    window.addEventListener("scroll", computePaths, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", computePaths);
    };
  }, []);

  // progress for horizontal bar
  const progressPercent =
    highlighted == null ? 0 : (highlighted + 1) / steps.length;

  return (
    <section
      id="how"
      className="py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
          How Pathlight Works
        </h2>

        <FadeInWhenVisible>
          {/* AI Avatar */}
          <div className="flex justify-center mb-14">
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              <motion.div
                className="absolute w-64 h-64 rounded-full blur-3xl bg-blue-400/20 dark:bg-blue-500/10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.img
                src="/guide.jpg"
                alt="AI Mentor"
                className="w-40 h-40 rounded-full shadow-xl object-cover relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>
          </div>

          {/* HORIZONTAL PROGRESS + CONNECTORS */}
          <div className="relative overflow-hidden">
            <svg
              className="absolute inset-0 pointer-events-none"
              style={{ overflow: "visible", zIndex: 5 }}
            >
              {svgPaths.map((d, i) => {
                const stepProgress = progressPercent * steps.length;
                const segment = Math.min(Math.max(stepProgress - i, 0), 1);

                return (
                  <motion.path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="#2563EB"
                    className="dark:stroke-blue-400"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: segment }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    style={{
                      opacity: segment === 0 ? 0.2 : 1,
                      willChange: "pathLength",
                    }}
                  />
                );
              })}
            </svg>

            {/* PROGRESS BACKGROUND */}
            <div className="absolute top-6 left-0 right-0 h-[3px] bg-gray-300 dark:bg-gray-700 rounded-full progress-bg" />

            {/* PROGRESS FILL */}
            <motion.div
              className="absolute top-6 left-0 h-[3px] bg-blue-600 dark:bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* STEPS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-1">
              {steps.map((s, i) => {
                const isActive = highlighted === i;
                const isComplete = highlighted > i;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center"
                    data-step-index={i}
                  >
                    {/* DOT   */}
                    <motion.div
                      ref={addDotRef}
                      onClick={() => openPanelFor(i)}
                      whileHover={{ scale: 1.2 }}
                      className={`cursor-pointer w-6 h-6 rounded-full border-[3px] z-20 mt-3 ${
                        isActive || isComplete
                          ? "border-blue-600 bg-blue-600"
                          : "border-gray-400 bg-white dark:bg-gray-900"
                      }`}
                    />

                    {/* CARD */}
                    <motion.button
                      onClick={() => openPanelFor(i)}
                      whileHover={{ scale: 1.03 }}
                      className={`mt-4 p-4 rounded-xl w-full max-w-xs text-center shadow-sm border transition ${
                        isActive
                          ? "bg-blue-600 text-white border-blue-700 shadow-md"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <div className="text-3xl mb-2">{s.icon}</div>
                      <h5 className="text-sm font-semibold">{s.title}</h5>
                      <p className="mt-1 text-xs opacity-80">{s.desc}</p>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* SIDE PANEL */}
      <AnimatePresence>
        {panelOpen && activeStep !== null && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            className="fixed top-0 right-0 h-full w-full md:w-[420px] bg-white dark:bg-gray-800 shadow-2xl z-[999]"
          >
            <div className="h-full flex flex-col">
              {/* HEADER */}
              <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Step {activeStep + 1} of {steps.length}
                  </p>
                </div>

                <button
                  onClick={closePanel}
                  className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Close
                </button>
              </div>

              <div className="p-6 flex-1 overflow-y-auto">
                <div className="text-6xl mb-4">{steps[activeStep].icon}</div>
                <h3 className="text-xl font-semibold mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {steps[activeStep].details}
                </p>
              </div>

              <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                <button
                  onClick={() => {
                    if (activeStep < steps.length - 1) {
                      setActiveStep(activeStep + 1);
                    } else {
                      closePanel();
                    }
                  }}
                  className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
                >
                  {activeStep < steps.length - 1 ? "Next →" : "Done"}
                </button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
}

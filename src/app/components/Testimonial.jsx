"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";
import "../styles/testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Pathvius transformed how we think about career counselling – the AI avatar made our students feel one-on-one backed by data. The progress and confidence we saw was remarkable.",
      name: "Aisha Malik",
      title: "Student, Rawalpindi",
      image: "./profile/p1.jpg",
    },
    {
      quote:
        "The personalized roadmap helped me pick the perfect major that aligned with my strengths. I’ve never had this much confidence in my future career path.",
      name: "Bilal Khan",
      title: "Engineering Graduate",
      image: "./profile/p2.jpg",
    },
    {
      quote:
        "This AI counselor helped me understand my skills and career options. The guidance feels like talking to a real expert.",
      name: "Sana Iqbal",
      title: "Undergraduate Student",
      image: "./profile/p3.jpg",
    },
    {
      quote:
        "This AI counselor helped me understand my skills and career options. The guidance feels like talking to a real expert.",
      name: "Sana Iqbal",
      title: "Undergraduate Student",
      image: "./profile/p4.jpg",
    },
    {
      quote:
        "This AI counselor helped me understand my skills and career options. The guidance feels like talking to a real expert.",
      name: "Sana Iqbal",
      title: "Undergraduate Student",
      image: "./profile/p5.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => next(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-gray-900 transition-colors testimonials"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          <div className="relative h-[540px] sm:h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mt-6 flex items-center justify-center gap-2 testimonial-avatar">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-12 h-12  object-cover"
                  />
                </div>
                <h4 className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed max-w-xl  quote-text">
                  “{testimonials[index].quote}”
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 testimonial-title">
                  {testimonials[index].title}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition"
                  >
                    <ArrowLeft className="text-gray-900 dark:text-gray-100" />
                  </button>

                  <button
                    onClick={next}
                    className="bg-white dark:bg-gray-800 p-2 rounded-full shadow hover:scale-105 transition"
                  >
                    <ArrowRight className="text-gray-900 dark:text-gray-100" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}

          {/* Dots */}
          {/* <div className="flex justify-center gap-2 mt-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

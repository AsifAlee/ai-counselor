"use client";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Testimonials() {
  const reviews = [
    { name: "Sara", text: "The AI counselor helped me pick Data Science!" },
    { name: "Ali", text: "I got clarity on what to study next!" },
    { name: "Hina", text: "It’s like talking to a real counselor 24/7!" },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-gray-100">
            What Students Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-700/40"
              >
                <p className="text-gray-700 dark:text-gray-200 italic">
                  “{r.text}”
                </p>
                <h4 className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  — {r.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

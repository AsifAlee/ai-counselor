"use client";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    { title: "Ask Your Question", icon: "💬" },
    { title: "Get Personalized Guidance", icon: "✨" },
    { title: "Explore Careers & Skills", icon: "🎓" },
    { title: "Plan Your Next Step", icon: "🚀" },
  ];

  return (
    <section
      id="how"
      className="py-16 bg-white dark:bg-gray-900 transition-colors"
    >
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-gray-100">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-gray-700/40 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <p className="font-medium text-gray-800 dark:text-gray-100">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

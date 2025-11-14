"use client";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Features() {
  const features = [
    "Real-time AI conversation",
    "Personalized recommendations",
    "Available 24/7",
    "Skill-based career matching",
    "Trusted by educators",
  ];

  return (
    <section
      id="features"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
            Why Students Love It
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm dark:shadow-gray-700/40"
                >
                  <span className="text-blue-600">✅</span>
                  <span className="text-gray-800 dark:text-gray-200">{f}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <img
                src="/student-using-ai.png"
                alt="Student using AI"
                className="w-64 mx-auto rounded-xl shadow-lg dark:shadow-black/40"
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

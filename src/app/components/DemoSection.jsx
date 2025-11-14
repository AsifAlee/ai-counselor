"use client";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function DemoSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <FadeInWhenVisible>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            See It in Action
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Watch how our AI counselor helps students find their direction.
          </p>
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/demo-placeholder.png"
              alt="Demo"
              className="w-full object-cover dark:brightness-75"
            />
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

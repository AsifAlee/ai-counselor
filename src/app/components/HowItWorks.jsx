import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    { title: "Ask Your Question", icon: "💬" },
    { title: "Get Personalized Guidance", icon: "✨" },
    { title: "Explore Careers & Skills", icon: "🎓" },
    { title: "Plan Your Next Step", icon: "🚀" },
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h4 className="font-semibold">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

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
    <section id="features" className="py-20 bg-gray-50">
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">
            Why Students Love It
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <span className="text-blue-600 text-2xl">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

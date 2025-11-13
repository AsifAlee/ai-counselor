import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Testimonials() {
  const reviews = [
    { name: "Sara", text: "The AI counselor helped me pick Data Science!" },
    { name: "Ali", text: "I got clarity on what to study next!" },
    { name: "Hina", text: "It’s like talking to a real counselor 24/7!" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10">What Students Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-600 italic mb-4">“{r.text}”</p>
                <h4 className="font-semibold text-blue-600">— {r.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

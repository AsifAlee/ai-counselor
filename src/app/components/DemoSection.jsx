import FadeInWhenVisible from "./FadeInWhenVisible";

export default function DemoSection() {
  return (
    <section className="py-20 bg-white text-center">
      <FadeInWhenVisible>
        <h3 className="text-3xl font-bold mb-6">See It in Action</h3>
        <p className="text-gray-600 mb-8">
          Watch how our AI counselor helps students find their direction.
        </p>
        <div className="max-w-3xl mx-auto">
          <img
            src="/demo-placeholder.png"
            alt="Demo Video"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </FadeInWhenVisible>
    </section>
  );
}

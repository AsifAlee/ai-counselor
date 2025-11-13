import { useEffect, useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-slate-800">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-semibold text-lg">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="6" fill="#EEF2FF" />
              <path
                d="M7 12c1.2-2 3-3 5-3s3.8 1 5 3"
                stroke="#4F46E5"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="8" r="1.2" fill="#4F46E5" />
            </svg>
            AI Counselor
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#how" className="hover:text-indigo-600">
              How It Works
            </a>
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a href="#testimonials" className="hover:text-indigo-600">
              Success
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="#chat"
              className="hidden md:inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl font-medium shadow-sm hover:opacity-95 transition"
            >
              Start Chat
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 rounded-md hover:bg-slate-100"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/40">
            <div className="absolute right-0 w-64 bg-white h-full p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="mb-6 p-2 rounded-md hover:bg-slate-100"
                aria-label="Close menu"
              >
                ✕
              </button>
              <nav className="flex flex-col gap-4">
                <a href="#how" onClick={() => setMenuOpen(false)}>
                  How It Works
                </a>
                <a href="#features" onClick={() => setMenuOpen(false)}>
                  Features
                </a>
                <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                  Success
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
                <a
                  href="#chat"
                  className="mt-4 block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-xl text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Start Chat
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Find Your Perfect <br /> Career Path
            </h1>
            <p className="text-slate-600 mb-6 max-w-md">
              Chat with our AI counselor to discover the right career for your
              skills and interests.
            </p>
            <div className="flex gap-4">
              <a
                href="#chat"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:opacity-95"
              >
                Start Free Session
              </a>
              <a href="#demo" className="text-indigo-600 font-medium">
                Watch Demo →
              </a>
            </div>
          </div>

          <div className="flex-1 text-center">
            <div className="relative inline-block bg-indigo-50 rounded-2xl p-6 shadow-inner">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                alt="AI Avatar"
                className="w-48 mx-auto"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-3 py-2 text-sm">
                <p>Hello! I’m your AI counselor 👋</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                "Ask your question",
                "Get personalized guidance",
                "Explore careers & skills",
                "Plan your next step",
              ].map((text, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="text-indigo-600 text-3xl mb-4">💡</div>
                  <p className="font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Why Students Love It
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-4 text-slate-700">
              <li>✅ Real-time AI conversation</li>
              <li>✅ Personalized recommendations</li>
              <li>✅ 24/7 free access</li>
              <li>✅ Skill-based career matching</li>
            </ul>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2974/2974891.png"
              alt="Student using AI"
              className="w-64 mx-auto"
            />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="bg-slate-50 py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-10">What Students Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                “The AI counselor helped me pick Data Science!”
                <p className="mt-3 text-sm text-slate-500">– Sara, Student</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                “I got clarity on what to study next!”
                <p className="mt-3 text-sm text-slate-500">– Ali, Student</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="chat" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Your Future Starts Here
          </h2>
          <p className="text-slate-600 mb-6">
            It’s free and takes less than a minute.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:opacity-95"
          >
            Start Chat Now
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-8 text-center text-sm">
        <p>© 2025 AI Counselor. All rights reserved.</p>
      </footer>
    </div>
  );
}

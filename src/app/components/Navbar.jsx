"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80, // offset for header
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full  shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          AI Counselor
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <button
              onClick={() => handleScroll("home")}
              className="hover:text-blue-600 transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("how")}
              className="hover:text-blue-600 transition"
            >
              How It Works
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("features")}
              className="hover:text-blue-600 transition"
            >
              Features
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("testimonials")}
              className="hover:text-blue-600 transition"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="hover:text-blue-600 transition"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Start Chat button (Desktop only) */}
        <a href="/chat" className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Start Chat
          </motion.button>
        </a>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <ul className="flex flex-col items-center py-6 space-y-6 font-medium">
              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="hover:text-blue-600 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("how")}
                  className="hover:text-blue-600 transition"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("features")}
                  className="hover:text-blue-600 transition"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("testimonials")}
                  className="hover:text-blue-600 transition"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="hover:text-blue-600 transition"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="/chat">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                    Start Chat
                  </button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

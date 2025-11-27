"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DarkModeSwitch from "./DarkModeSwitch";
import { useAuth } from "../context/authContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 dark:text-gray-200 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <nav className=" relative max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* <img
          src="./logo.svg"
          alt="Pathlight logo"
          className="absolute w-36 cursor-pointer dark:invert-[0.9]"
          onClick={() => handleScroll("home")}
        /> */}
        <img
          src="/logo.svg"
          alt="Pathlight logo"
          className="
    absolute w-36 cursor-pointer dark:invert-[0.9]


    right-4 top-[-3.5rem]


    md:left-6 md:right-auto md:top-[-3.1rem] 
  "
          onClick={() => handleScroll("home")}
        />

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex space-x-8 font-medium text-sm dark:text-gray-200"
          style={{
            fontSize: "0.85rem",
            marginLeft: "10rem",
            marginTop: "0.3rem",
          }}
        >
          <li>
            {/* <button
              onClick={() => handleScroll("home")}
              className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button> */}

            <button
              onClick={() => handleScroll("home")}
              className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
              <span className="absolute left-0 top-9 w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScroll("how")}
              className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              How It Works
              <span className="absolute left-0 top-9  w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScroll("features")}
              className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Features
              <span className="absolute left-0 top-9  w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScroll("testimonials")}
              className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Testimonials
              <span className="absolute left-0 top-9  w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>

          <li>
            <button
              onClick={() => handleScroll("waitlist")}
              className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Waitlist
              <span className="absolute left-0 top-9  w-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Book Intro Button */}
          <a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 text-white text-sm px-5 py-2 rounded-full hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={() => {
                if (user) {
                  router.push("/dashboard");
                } else {
                  router.push("/login");
                }
              }}
            >
              Book an intro
            </motion.button>
          </a>

          {/* Dark Mode Toggle */}
          {/* <DarkModeSwitch /> */}
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col items-center py-6 space-y-6 font-medium text-gray-800 dark:text-gray-200">
              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("how")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  How It Works
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("features")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Features
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("testimonials")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Testimonials
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("waitlist")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Waitlist
                </button>
              </li>

              {/* Mobile Start Chat */}
              <li>
                <a href="/chat">
                  <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600">
                    Start Chat
                  </button>
                </a>
              </li>

              {/* Dark Mode Switch in Mobile Menu */}
              <li className="pt-2">{/* <DarkModeSwitch /> */}</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

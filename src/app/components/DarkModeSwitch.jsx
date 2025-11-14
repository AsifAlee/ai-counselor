"use client";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function DarkModeSwitch({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full flex items-center px-1 transition focus:outline-none ${className}`}
    >
      <Sun className="absolute left-1 w-4 h-4 text-yellow-400" />
      <Moon className="absolute right-1 w-4 h-4 text-blue-300" />

      <motion.div
        layout
        initial={false}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md"
        style={{ translateX: isDark ? 28 : 0 }}
      />
    </button>
  );
}

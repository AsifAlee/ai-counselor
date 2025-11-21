"use client";

import { motion } from "framer-motion";
import { User, Mail, MessageCircle, Logs } from "lucide-react";

const PROMPTS = [
  "Write a to-do list for a personal project or task",
  "Generate an email to reply to a job offer",
  "Summarise this article or text for me in one paragraph",
  "How does AI work in a technical capacity",
];

const ICONS = [User, Mail, MessageCircle, Logs];

export default function PromptCards() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {PROMPTS.map((p, i) => {
          const Icon = ICONS[i]; // pick correct icon

          return (
            <motion.button
              key={i}
              whileHover={{ y: -4 }}
              className="prompt-cards text-left pt-2 pb-3 px-3 rounded-xl dark:bg-gray-800 
              border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition flex gap-5 flex-col items-start"
            >
              <div className="text-xs text-gray-700 dark:text-gray-300 mb-3">
                {p}
              </div>

              {/* <div className="text-xs text-gray-400 dark:text-gray-500">⟶</div> */}
              <Icon className="w-5 h-5 mb-3 text-gray-700 dark:text-gray-300" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

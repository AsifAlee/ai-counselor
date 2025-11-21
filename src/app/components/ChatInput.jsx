// src/app/components/ChatInput.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatInput({ imageSrc }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("All Web");

  const charLimit = 1000;
  const remaining = charLimit - text.length;

  return (
    <div className="mt-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        {/* top row: dropdown */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Ask whatever you want...
          </div>
          <div className="flex items-center gap-3">
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full px-3 py-1 text-sm outline-none"
            >
              <option>All Web</option>
              <option>Pathvius</option>
              <option>My Files</option>
            </select>
          </div>
        </div>

        {/* big input */}
        <div className="flex gap-6">
          {/* left: large textarea */}
          <div className="flex-1">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              maxLength={charLimit}
              className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-100 resize-none outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask whatever you want..."
            />

            <div className="flex items-center justify-between mt-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-4">
                <button className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  ➕ Add Attachment
                </button>
                <button className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  🖼 Use Image
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-xs">{remaining}/1000</div>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full"
                >
                  ➤
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

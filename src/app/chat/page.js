"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/app/context/ThemeContext";
import DarkModeSwitch from "../components/DarkModeSwitch";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hi! I’m your AI Career Counselor. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const user = { role: "user", text: input };
    setMessages((p) => [...p, user]);
    setInput("");
    setIsTyping(true);

    // simulated AI reply (replace with API call)
    setTimeout(() => {
      setMessages((p) => [
        ...p,
        { role: "ai", text: `Thanks — let's explore "${user.text}" together.` },
      ]);
      setIsTyping(false);
    }, 1400);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
        <header className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow-sm">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            AI Counselor
          </h2>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-600 dark:text-gray-300">
              ← Back
            </a>
            <DarkModeSwitch />
          </div>
        </header>

        <main className="flex-1 md:flex">
          <aside className="md:w-1/3 bg-blue-50 dark:bg-gray-900 flex items-center justify-center p-6">
            <motion.img
              src="/ai-avatar.png"
              alt="AI"
              className="w-48 h-48 rounded-full shadow-md dark:shadow-black/40"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </aside>

          <section className="flex-1 bg-white dark:bg-gray-800 flex flex-col">
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {m.role === "ai" && (
                    <img
                      src="/ai-avatar.png"
                      alt="AI"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                      m.role === "user"
                        ? "bg-blue-600 dark:bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {m.text}
                  </motion.div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center space-x-2 text-gray-500">
                  <img
                    src="/ai-avatar.png"
                    alt="AI"
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="flex space-x-1">
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce delay-150">•</span>
                    <span className="animate-bounce delay-300">•</span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <form
              onSubmit={sendMessage}
              className="px-6 py-4 bg-gray-100 dark:bg-gray-800 flex items-center gap-3"
            >
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your career question..."
                className="flex-1 resize-none bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

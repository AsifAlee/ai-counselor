"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hi there! I’m your AI Career Counselor. What would you like to talk about today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (replace with real API later)
    setTimeout(() => {
      const aiResponse = {
        role: "ai",
        text: `That’s an interesting question! Let’s explore your options about "${userMessage.text}".`,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">AI Counselor</h1>
        <a href="/" className="text-gray-600 hover:text-blue-600">
          ← Back
        </a>
      </header>

      {/* Main Chat Section */}
      <main className="flex flex-col md:flex-row flex-1 overflow-hidden">
        {/* Avatar Area */}
        <div className="md:w-1/3 flex items-center justify-center bg-blue-50">
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="AI Counselor"
            className="w-48 h-48 rounded-full shadow-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Chat Area */}
        <div className="md:w-2/3 flex flex-col bg-white">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "ai" && (
                  <img
                    src="/ai-avatar.png"
                    alt="AI"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-2xl max-w-[70%] text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </motion.div>
              </div>
            ))}

            {/* Typing Indicator */}
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

          {/* Input Bar */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-gray-100 px-4 py-3 rounded-t-lg"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your career question..."
              className="flex-1 resize-none bg-transparent outline-none px-3 py-2 text-sm"
              rows={1}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

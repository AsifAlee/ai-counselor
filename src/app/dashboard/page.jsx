// app/dashboard/page.jsx
"use client";

import Sidebar from "@/app/components/Sidebar";
import PromptCards from "@/app/components/PromptCards";
import ChatInput from "@/app/components/ChatInput";

import "../styles/dashboard.css";
import ProtectedRoute from "../components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="dashboard min-h-screen bg-gray-100 dark:bg-gray-900 flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 px-10 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Greeting */}
            <div className="mb-8" style={{ backgroundColor: "none" }}>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-100">
                Hi there,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                  John
                </span>
              </h1>
              <p className=" mt-3 bg-clip-text text-4xl text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
                What would you like to know?
              </p>
              <p className="w-50 text-gray-500">
                Use one of the most common prompts
              </p>
              <p className="text-gray-500">below or use your own to begin</p>
            </div>

            {/* Prompt cards */}
            <PromptCards />

            {/* Refresh / spacer */}
            <div className="mt-6 mb-4 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:underline">
                ⟳ Refresh Prompts
              </button>
            </div>

            {/* Chat input box */}
            <ChatInput imageSrc="/mnt/data/B2CE5AAB-0A21-4C0D-B88C-B4A5126F9FB4.png" />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

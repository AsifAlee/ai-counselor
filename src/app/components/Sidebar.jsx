// src/app/components/Sidebar.jsx
"use client";

import { Home, MessageSquare, FileText, Settings, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className="sidebar w-16 md:w-20 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-6 gap-6">
      <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        {/* top circular icon */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500" />
      </div>

      <nav className="flex-1 flex flex-col items-center gap-4 mt-3">
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <Home size={18} className="text-gray-700 dark:text-gray-200" />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <MessageSquare
            size={18}
            className="text-gray-700 dark:text-gray-200"
          />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <FileText size={18} className="text-gray-700 dark:text-gray-200" />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <Plus size={18} className="text-gray-700 dark:text-gray-200" />
        </button>
      </nav>

      <div className="mb-2">
        <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <Settings size={18} className="text-gray-700 dark:text-gray-200" />
        </button>
      </div>

      {/* user avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
        <img
          src="/profile/p1.jpg"
          alt="avatar"
          className="w-full h-full object-cover"
          onClick={() => router.push("/dashboard/profile")}
        />
      </div>
    </aside>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuth } from "@/app/context/authContext";

export default function ProfilePage() {
  const { user, logout, initialized } = useAuth();
  //   debugger;
  const router = useRouter();

  // Ensure user is logged in
  useEffect(() => {
    if (initialized && !user) router.push("/login");
  }, [initialized, user, router]);

  if (!initialized)
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;

  if (!user) return null;

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-white"
        >
          Your Profile
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT CARD — Avatar + Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src="/placeholder-avatar.png"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full shadow-md mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {user.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-300">{user.email}</p>

            <button
              onClick={logout}
              className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          </motion.div>

          {/* RIGHT SIDE — Details */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2 space-y-8"
          >
            {/* ACCOUNT INFORMATION */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Account Information
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    disabled
                    className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    disabled
                    className="w-full mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* PASSWORD SECTION */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Change Password
              </h3>

              <div className="space-y-3">
                <input
                  type="password"
                  placeholder="Current password"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                />

                <button className="w-full mt-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Update Password
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

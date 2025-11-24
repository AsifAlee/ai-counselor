// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   return (
//     <section className="h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
//       {/* LEFT COLUMN — FORM */}
//       <div className="flex items-center justify-center px-8 py-12 bg-white dark:bg-gray-900 ">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-md"
//         >
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
//             Create an Account
//           </h2>

//           {/* FULL NAME */}
//           <div className="relative mb-6">
//             <input
//               type="text"
//               id="fullname"
//               className="peer w-full border-b border-gray-400 dark:border-gray-600 bg-transparent py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
//               placeholder=" "
//             />
//             <label
//               htmlFor="fullname"
//               className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all
//               peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
//               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base pointer-events-none"
//             >
//               Full Name
//             </label>
//           </div>

//           {/* EMAIL */}
//           <div className="relative mb-6">
//             <input
//               type="email"
//               id="email"
//               className="peer w-full border-b border-gray-400 dark:border-gray-600 bg-transparent py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
//               placeholder=" "
//             />
//             <label
//               htmlFor="email"
//               className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all
//               peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
//               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base pointer-events-none"
//             >
//               Email Address
//             </label>
//           </div>

//           {/* PASSWORD */}
//           <div className="relative mb-8">
//             <input
//               type="password"
//               id="password"
//               className="peer w-full border-b border-gray-400 dark:border-gray-600 bg-transparent py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
//               placeholder=" "
//             />
//             <label
//               htmlFor="password"
//               className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all
//               peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
//               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base pointer-events-none"
//             >
//               Password
//             </label>
//           </div>

//           {/* BUTTON */}
//           <button className="w-full py-3 rounded-lg bg-black hover:hover:bg-blue-700 text-white font-semibold">
//             Sign Up
//           </button>

//           <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
//             Already have an account?{" "}
//             <a
//               href="/login"
//               className="text-blue-600 dark:text-blue-400 underline"
//             >
//               Log In
//             </a>
//           </p>

//           <div className="flex items-center my-6">
//             <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
//             <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
//               or continue with
//             </span>
//             <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
//           </div>
//           <div className="space-y-3">
//             {/* Google */}
//             <button className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//               <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
//               <span className="text-gray-700 dark:text-gray-200">
//                 Sign up with Google
//               </span>
//             </button>

//             {/* Apple */}
//             <button className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//               <img src="/icons/apple.svg" alt="Apple" className="w-5 h-5" />
//               <span className="text-gray-700 dark:text-gray-200">
//                 Sign up with Apple
//               </span>
//             </button>

//             {/* Microsoft (Windows) */}
//             <button className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//               <img
//                 src="/icons/windows.svg"
//                 alt="Microsoft"
//                 className="w-5 h-5"
//               />
//               <span className="text-gray-700 dark:text-gray-200">
//                 Sign up with Microsoft
//               </span>
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* RIGHT COLUMN — IMAGE */}
//       <div className="hidden lg:block overflow-hidden h-full p-10">
//         <img
//           src="/loginpage.jpg"
//           alt="Signup Illustration"
//           className="w-full h-full object-cover"
//           style={{ borderRadius: "4rem" }}
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState("student"); // force student for now

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      }
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* LEFT COLUMN — FORM */}
      <div className="flex items-center justify-center px-8 py-12 bg-white dark:bg-gray-900 ">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
            Create an Account
          </h2>

          {/* ROLE SELECT (School disabled) */}
          <div className="flex gap-4 mb-8">
            {/* STUDENT BUTTON */}
            <button
              onClick={() => setRole("student")}
              className={`w-1/2 py-2 rounded-lg border font-medium transition ${
                role === "student"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
              }`}
            >
              Student
            </button>

            {/* SCHOOL BUTTON — DISABLED */}
            <button
              disabled
              className="w-1/2 py-2 rounded-lg border font-medium 
                bg-gray-200 dark:bg-gray-800/50 text-gray-500 dark:text-gray-500 
                border-gray-300 dark:border-gray-700 cursor-not-allowed relative"
            >
              School
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 dark:text-gray-400">
                Coming Soon
              </span>
            </button>
          </div>

          {/* FULL NAME */}
          <div className="relative mb-6">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="peer w-full border-b border-gray-400 dark:border-gray-600 bg-transparent py-2 
              text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
              placeholder=" "
            />
            <label
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base pointer-events-none"
            >
              Full Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="peer w-full border-b border-gray-400 dark:border-gray-600 bg-transparent py-2 
              text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
              placeholder=" "
            />
            <label
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base pointer-events-none"
            >
              Email Address
            </label>
          </div>

          {/* PASSWORD */}
          <div className="relative mb-8">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="peer w-full border-b border-gray-400 dark:border-gray-600 bg-transparent py-2 
              text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
              placeholder=" "
            />
            <label
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 transition-all
                peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base pointer-events-none"
            >
              Password
            </label>
          </div>

          {/* SUBMIT BUTTON (Always student) */}
          <button
            className="w-full py-3 rounded-lg bg-black hover:bg-gray-800 text-white font-semibold"
            onClick={handleSignup}
          >
            Sign Up as Student
          </button>

          {/* LOGIN LINK */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Log In
            </a>
          </p>

          {/* SOCIAL LOGIN */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
            <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">
              or continue with
            </span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
              <span className="text-gray-700 dark:text-gray-200">
                Sign up with Google
              </span>
            </button>

            <button className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <img src="/icons/apple.svg" alt="Apple" className="w-5 h-5" />
              <span className="text-gray-700 dark:text-gray-200">
                Sign up with Apple
              </span>
            </button>

            <button className="w-full py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <img
                src="/icons/windows.svg"
                alt="Microsoft"
                className="w-5 h-5"
              />
              <span className="text-gray-700 dark:text-gray-200">
                Sign up with Microsoft
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* RIGHT IMAGE COLUMN */}
      <div className="hidden lg:block overflow-hidden h-full p-10">
        <img
          src="/loginpage.jpg"
          alt="Signup Illustration"
          className="w-full h-full object-cover"
          style={{ borderRadius: "4rem" }}
        />
      </div>
    </section>
  );
}

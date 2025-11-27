// "use client";
// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 transition-colors">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         <div>
//           <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
//             Pathlight
//           </h3>
//           <p className="text-sm text-gray-700 dark:text-gray-300">
//             Your personal AI-powered career guide helping students choose the
//             right future path with confidence.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">
//             Quick Links
//           </h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a
//                 href="#how"
//                 className="hover:text-blue-400 dark:hover:text-blue-300"
//               >
//                 How It Works
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#features"
//                 className="hover:text-blue-400 dark:hover:text-blue-300"
//               >
//                 Features
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#testimonials"
//                 className="hover:text-blue-400 dark:hover:text-blue-300"
//               >
//                 Testimonials
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#waitlist"
//                 className="hover:text-blue-400 dark:hover:text-blue-300"
//               >
//                 Join Waitlist
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">
//             Support
//           </h4>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a className="hover:text-blue-400 dark:hover:text-blue-300">
//                 Help Center
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-blue-400 dark:hover:text-blue-300">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-blue-400 dark:hover:text-blue-300">
//                 Terms of Service
//               </a>
//             </li>
//             <li>
//               <a className="hover:text-blue-400 dark:hover:text-blue-300">
//                 FAQs
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">
//             Stay Updated
//           </h4>
//           <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
//             Subscribe to get career tips and updates.
//           </p>
//           <form className="flex bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
//             <input
//               type="email"
//               placeholder="Email address"
//               className="flex-1 px-3 py-2 bg-transparent outline-none text-sm text-gray-900 dark:text-gray-100"
//             />
//             <button className="bg-blue-600 dark:bg-blue-500 text-white px-4">
//               Join
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
//         © {new Date().getFullYear()} AI Counselor. All rights reserved.
//       </div>
//     </footer>
//   );
// }

"use client";
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* BRAND */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Pathlight
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Your personal AI-powered career guide helping students choose the
            right future path with confidence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#how"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#waitlist"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                Join Waitlist
              </a>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-blue-400 dark:hover:text-blue-300"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Stay Updated
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
            Subscribe to get career tips and updates.
          </p>
          <form className="flex bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 bg-transparent outline-none text-sm 
                         text-gray-900 dark:text-gray-100"
            />
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-4">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        © {new Date().getFullYear()} AI Counselor. All rights reserved.
      </div>
    </footer>
  );
}

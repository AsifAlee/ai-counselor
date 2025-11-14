import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Footer() {
  return (
    // <footer className="py-10 bg-gray-900 text-gray-300 text-center">
    //   <FadeInWhenVisible>
    //     <div className="max-w-6xl mx-auto px-6">
    //       <ul className="flex justify-center space-x-6 mb-4">
    //         <li>
    //           <a href="#" className="hover:text-white">
    //             Privacy
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-white">
    //             Terms
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#" className="hover:text-white">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //       <p>© 2025 AI Counselor. All rights reserved.</p>
    //     </div>
    //   </FadeInWhenVisible>
    // </footer>

    <footer className="bg-gray-900 text-gray-300 py-12">
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              AI Counselor
            </h3>
            <p className="text-sm leading-6">
              Your personal AI-powered career guide helping students choose the
              right future path with confidence and clarity.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#how" className="hover:text-blue-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to get career tips and updates.
            </p>

            <form className="flex bg-gray-800 rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 bg-transparent text-sm outline-none"
              />
              <button className="bg-blue-600 text-white px-4 hover:bg-blue-700">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} AI Counselor. All rights reserved.
        </div>
      </FadeInWhenVisible>
    </footer>
  );
}

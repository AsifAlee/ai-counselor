import FadeInWhenVisible from "./FadeInWhenVisible";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-900 text-gray-300 text-center">
      <FadeInWhenVisible>
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <a href="#" className="hover:text-white">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
          <p>© 2025 AI Counselor. All rights reserved.</p>
        </div>
      </FadeInWhenVisible>
    </footer>
  );
}

import "./globals.css";

import { AuthProvider } from "@/app/context/authContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import ToastManager from "./components/ToastManager";
import { useEffect } from "react";

export const metadata = {
  title: "Pathlight - AI-Powered Career Counselor",
  description: "Take a step into your career future with AI-powered guidance.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    // Force LIGHT mode
    document.documentElement.classList.remove("dark");
  }, []);
  return (
    <html lang="en">
      <ThemeProvider>
        <AuthProvider>
          <body>
            {children}
            <ToastManager />
          </body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}

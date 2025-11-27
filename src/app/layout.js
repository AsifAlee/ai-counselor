import "./globals.css";

import { AuthProvider } from "@/app/context/authContext";
// import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import ToastManager from "./components/ToastManager";

export const metadata = {
  title: "Pathlight - AI-Powered Career Counselor",
  description: "Take a step into your career future with AI-powered guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeProvider> */}
      <AuthProvider>
        <body>
          {children}
          <ToastManager />
        </body>
      </AuthProvider>
      {/* </ThemeProvider> */}
    </html>
  );
}

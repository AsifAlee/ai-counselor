import "./globals.css";

import { AuthProvider } from "@/app/context/authContext";
import { ThemeProvider } from "./context/ThemeContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Pathlight - AI-Powered Career Counselor",
  description: "Take a step into your career future with AI-powered guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  );
}

"use client";

import { Toaster } from "react-hot-toast";

export default function ToastManager() {
  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 3500,
          style: {
            background: "#1f1f1f",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
            animation: "slideIn 0.35s ease-out",
          },
          success: {
            style: { background: "#0f9d58" },
          },
          error: {
            style: { background: "#d93025" },
          },
        }}
      />

      {/* Global animation keyframes */}
      <style jsx global>{`
        @keyframes slideIn {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          60% {
            transform: translateX(-4px);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

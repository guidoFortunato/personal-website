"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { z } from "zod/v4";

const emailSchema = z.email();

type ToastType = "success" | "error" | null;

function Toast({
  type,
  onDone,
}: {
  type: "success" | "error";
  onDone: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const enterTimer = setTimeout(() => setVisible(true), 20);

    timerRef.current = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 300);
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(timerRef.current);
    };
  }, [onDone]);

  const isSuccess = type === "success";

  return createPortal(
    <div
      className={`toast flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl ${
        isSuccess ? "bg-white text-black" : "bg-red-500 text-white"
      } ${visible ? "show" : ""}`}
    >
      <svg
        className={`w-5 h-5 shrink-0 ${isSuccess ? "text-green-600" : "text-white"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        {isSuccess ? (
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        )}
      </svg>
      <span className="text-sm font-medium">
        {isSuccess ? "Email sent successfully" : "Something went wrong"}
      </span>
    </div>,
    document.body,
  );
}

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastType>(null);

  const showToast = useCallback((type: "success" | "error") => {
    setToast(type);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      showToast("success");
      setEmail("");
    } catch {
      showToast("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 ${
              error ? "border-red-500 ring-red-500/20" : "border-white/10"
            }`}
          />
          {error && <p className="text-red-400 text-xs mt-1 ml-1">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-slate-200 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{loading ? "Processing..." : "Send"}</span>
          {loading && (
            <svg
              className="animate-spin h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
        </button>
      </form>

      {toast && <Toast type={toast} onDone={() => setToast(null)} />}
    </>
  );
}

"use client"; // Error Boundaries MUST be Client Components

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset, // A function to attempt to re-render the segment
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log the error to an error reporting service
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 text-center">
      <AlertTriangle size={64} className="text-red-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Something Went Wrong!</h1>
      <p className="mb-6 max-w-md text-gray-400">
        We encountered an unexpected error. Please try reloading the page.
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
      >
        <RefreshCw size={18} />
        Try Again
      </button>
    </div>
  );
}

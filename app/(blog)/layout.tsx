import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Fixed Back to Home Button */}
      <Link href="/" className="fixed bottom-6 right-6 z-50 group">
        {/* Mobile: Icon only */}
        <div className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform">
          <Home size={20} />
        </div>

        {/* Desktop: Button with text */}
        <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full shadow-lg shadow-purple-500/50 hover:scale-105 transition-transform font-semibold">
          <Home size={20} />
          <span>Back to Home</span>
        </div>
      </Link>

      {children}
    </div>
  );
}

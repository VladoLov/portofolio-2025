import Link from "next/link";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 text-center">
      <Frown size={64} className="text-purple-500 mb-6" />
      <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-6 text-gray-300">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-gray-400">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

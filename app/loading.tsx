"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 text-white"
    >
      <span className="text-xl font-semibold animate-pulse">Loading...</span>
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white p-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
      >
        🌍 Welcome to GeoRoom
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg max-w-2xl mb-8 text-gray-300"
      >
        A collaborative platform where people <span className="text-pink-400">connect</span>,{" "}
        <span className="text-purple-400">share</span>, and{" "}
        <span className="text-red-400">create</span> together in an interactive space.
      </motion.p>

      {/* Buttons */}
      <div className="flex gap-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-semibold shadow-lg hover:shadow-pink-500/50 transition"
          >
            🚀 Get Started
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/login"
            className="px-6 py-3 rounded-2xl border border-pink-400 text-lg font-semibold hover:bg-pink-500/10 transition"
          >
            🔑 Login
          </Link>
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
      >
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/40 transition">
          <h3 className="text-xl font-bold mb-2">⚡ Real-time Collaboration</h3>
          <p className="text-gray-400">Work together instantly with friends & teams.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-pink-500/40 transition">
          <h3 className="text-xl font-bold mb-2">📊 Interactive Dashboards</h3>
          <p className="text-gray-400">Visualize and share data with style.</p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-red-500/40 transition">
          <h3 className="text-xl font-bold mb-2">🎨 Seamless UX</h3>
          <p className="text-gray-400">Fast, intuitive, and engaging experience.</p>
        </div>
      </motion.div>
    </main>
  );
}

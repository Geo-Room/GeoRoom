"use client";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white p-6">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold mb-6"
      >
        🌍 Welcome to <span className="text-purple-400">GeoRoom</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300"
      >
        A collaborative platform where people <span className="text-pink-400">connect</span>, 
        <span className="text-purple-400"> share</span>, and 
        <span className="text-blue-400"> create</span> together in an interactive space.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #ec4899" }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold shadow-lg transition"
      >
        🚀 Get Started
      </motion.button>

      {/* Features */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {[
          { title: "Real-time Collaboration 🌐", desc: "Work together instantly with friends & teams." },
          { title: "Interactive Dashboards 📊", desc: "Visualize and share data with style." },
          { title: "Seamless UX ⚡", desc: "Fast, intuitive, and engaging experience." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
            className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Join GeoRoom?</h2>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #3b82f6" }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-lg font-semibold shadow-lg transition"
        >
          🔑 Login Now
        </motion.button>
      </motion.div>
    </main>
  );
}

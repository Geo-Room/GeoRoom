"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            🌍 Welcome to <span className="text-purple-400">GeoRoom</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl max-w-xl mb-8"
          >
            A collaborative platform where people connect, share, and create
            together in an interactive space.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-semibold shadow-lg hover:shadow-pink-500/50 transition"
          >
            🚀 Get Started
          </motion.button>
        </div>

        {/* Right Animated Globe/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex-1 flex justify-center mt-10 md:mt-0"
        >
          <img
            src="/assets/globe.png"
            alt="GeoRoom Globe"
            className="w-72 md:w-96 animate-pulse"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          ✨ Why GeoRoom?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            "Collaborate in real-time 🌐",
            "Interactive Dashboards 📊",
            "Seamless User Experience ⚡",
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Join GeoRoom?
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/login")}
          className="px-8 py-3 rounded-2xl bg-black text-white text-lg font-semibold shadow-lg hover:shadow-black/50 transition"
        >
          🚪 Login Now
        </motion.button>
      </section>
    </main>
  );
}

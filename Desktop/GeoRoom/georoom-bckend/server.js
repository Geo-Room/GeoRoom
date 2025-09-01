import express from "express";
import http from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


// Routes
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();
console.log("Loaded ENV:", {
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
  MONGO_URI: process.env.MONGO_URI ? "✅ Exists" : "❌ Missing"
});


const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/rooms", roomRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🌍 GeoRoom API is running...");
});

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

// Socket.io events
io.on("connection", (socket) => {
  console.log("⚡ User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
//Api
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from GeoRoom Backend!" });
});

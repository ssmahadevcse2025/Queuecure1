require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const { initSocket } = require("./socket");

const app = express();
const server = http.createServer(app);

// ✅ Connect MongoDB
connectDB();

// ✅ Middleware
app.use(cors({
  origin: "*", // later replace with Netlify URL
  credentials: true
}));

app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ Socket.IO init
initSocket(server);

// ✅ Start server (Render compatible)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
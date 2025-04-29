import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.connection.js";
import userRoutes from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import cartRoute from "./routes/cartRoute.js";
import cors from "cors"

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors())

// Middleware
app.use(express.json());
app.use("/uploads",express.static("uploads"))

// Connect to MongoDB
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, API is working!");
});

// User Routes
app.use("/user", userRoutes);
app.use("/user", productRoute);
app.use("/user", orderRoute);
app.use("/user", cartRoute);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));



const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

// Routers

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRouter = require("./routes/cartRoutes");
const productRouter = require("./routes/productRoutes");
const connectDB = require("./config/db");


// Middleware
dotenv.config();
connectDB();

// CORS configuration - allow all origins for webhook calls
app.use(cors({
  origin: true
}));

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/cart", cartRouter);
app.use("/products", productRouter);
app.use("/orders", orderRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
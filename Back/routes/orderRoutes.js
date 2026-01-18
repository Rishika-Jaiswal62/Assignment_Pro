const express = require("express");
const router = express.Router();

// Controllers
const {
  createOrder,
  getUserOrders,
  deleteOrder,
} = require("../controllers/orderController");

// Create a new order
router.post("/", createOrder);

// Get all orders of a user
router.get("/:userId", getUserOrders);

// Delete an order
router.delete("/:id", deleteOrder);

module.exports = router;

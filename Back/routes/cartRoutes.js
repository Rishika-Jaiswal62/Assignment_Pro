const express = require("express");
const router = express.Router();
const { addToCart, getCart } = require("../controllers/cartController");

router.get("/", getCart);
router.post("/", addToCart);

module.exports = router;

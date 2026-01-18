


const Cart = require("../models/Cart");

// Get cart items for a user
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId })
      .populate("productId");

    res.json(
      cart.map(item => ({
        _id: item._id,
        product: item.productId,
        qty: item.qty
      }))
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add to cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId, qty } = req.body;

    let item = await Cart.findOne({ userId, productId });

    if (item) {
      item.qty += qty;
      await item.save();
    } else {
      item = new Cart({ userId, productId, qty });
      await item.save();
    }

    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCart,
  addToCart,
  removeFromCart
};


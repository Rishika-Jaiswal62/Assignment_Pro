import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import API from "../api";
import { AuthContext } from "../Context/AuthContext";

export default function Cart({ cart, setCart }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQty = (id, qty) => {
    if (qty < 1) qty = 1;
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, qty } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleCheckout = async () => {
    if (!user) return alert("Login first!");

    const orderData = {
      userId: user._id,
      products: cart.map((item) => ({
        productId: item._id,
        qty: item.qty,
      })),
      total: totalPrice,
    };

    try {
      await API.post("/orders", orderData);
      setCart([]);
      localStorage.removeItem("cart");
      alert("Order placed successfully!");
      navigate("/history");
    } catch (err) {
      alert("Checkout failed");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar cart={cart} />

      <section className="pt-28 max-w-5xl mx-auto px-4 pb-12">
        <h1 className="text-3xl font-bold mb-10 text-center text-gray-800">
          🛒 My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-5 flex flex-col sm:flex-row items-center gap-6"
              >
                {/* Image */}
                <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    ₹{item.price} each
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-4 justify-center sm:justify-start">
                    <button
                      onClick={() => updateQty(item._id, item.qty - 1)}
                      className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
                    >
                      −
                    </button>

                    <span className="font-semibold text-lg">{item.qty}</span>

                    <button
                      onClick={() => updateQty(item._id, item.qty + 1)}
                      className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="text-center sm:text-right">
                  <p className="font-bold text-lg text-gray-800">
                    ₹{item.price * item.qty}
                  </p>

                  {/* <button
                    onClick={() => removeItem(item._id)}
                    className="text-sm text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button> */}
                  <button
  onClick={() => removeItem(item._id)}
  className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg 
             bg-red-50 text-red-600 font-semibold
             border border-red-200
             hover:bg-red-500 hover:text-white hover:border-red-500
             transition-all duration-200"
>
  Remove
</button>
                </div>
              </div>
            ))}

            {/* Checkout Box */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-gray-500 text-sm">Total Amount</p>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{totalPrice}
                </p>
              </div>

              <button
                onClick={handleCheckout}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

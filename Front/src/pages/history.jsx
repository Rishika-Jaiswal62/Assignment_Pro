import { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import API from "../api";
import { AuthContext } from "../Context/AuthContext";

export default function History({ cart }) {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await API.get(`/orders/${user._id}`);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return (
     <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar cart={cart} />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          📦 Order History
        </h1>

        {/* Not logged in */}
        {!user && (
          <div className="text-center bg-white p-6 rounded-2xl shadow">
            <p className="text-red-500 font-semibold text-lg">
              Please login to see your orders
            </p>
           
          </div>
        )}

        {/* Loading */}
        {loading && user && (
          <p className="text-center text-gray-500 text-lg">
            Loading your orders...
          </p>
        )}

        {/* No orders */}
        {!loading && orders.length === 0 && user && (
          <div className="text-center bg-white p-8 rounded-2xl shadow">
            <p className="text-lg text-gray-600">
              You haven’t placed any orders yet
            </p>
            <p className="text-sm text-gray-500 mt-1">
              अभी तक कोई ऑर्डर नहीं किया गया है
            </p>
          </div>
        )}

        {/* Orders */}
        {!loading && orders.length > 0 && (
          <div className="space-y-10">
            {orders.map((order, index) => (
              <div
                key={order._id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-6"
              >
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order #{index + 1}
                    </p>
                    <p className="font-semibold text-gray-800 break-all">
                      {order._id}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(order.date).toLocaleString()}
                    </p>
                  </div>

                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                    ✅ Delivered
                  </span>
                </div>

                {/* Products */}
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-3">
                    Products
                  </p>

                  <ul className="divide-y">
                    {order.products.map((item) => (
                      <li
                        key={item._id}
                        className="py-3 flex justify-between items-center text-sm"
                      >
                        <span className="text-gray-700">
                          {item.productId?.title}
                          <span className="text-gray-500">
                            {" "}× {item.qty}
                          </span>
                        </span>

                        <span className="font-semibold text-gray-800">
                          ₹{(item.productId?.price || 0) * item.qty}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Total */}
                <div className="mt-6 flex justify-between items-center bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-700">
                    Total Amount
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{order.total}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

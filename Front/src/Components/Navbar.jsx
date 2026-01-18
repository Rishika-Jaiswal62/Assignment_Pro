
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHistory } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar({ cart = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const totalQty = cart.reduce(
    (sum, item) => sum + (item.qty || 1),
    0
  );

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center ">
        <Link to="/" className="text-2xl font-bold">
          Electro<span className="text-yellow-400">Shop</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/shop" className="hover:text-yellow-400">Shop</Link>

          <Link to="/cart" className="relative flex items-center gap-2">
            <FaShoppingCart /> Cart
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs px-2 rounded-full">
                {totalQty}
              </span>
            )}
          </Link>

          {user && (
            <Link to="/history" className="flex items-center gap-2">
              <FaHistory /> History
            </Link>
          )}

          {user ? (
            <button
              onClick={logout}
              className="border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400 hover:text-black"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            Cart ({totalQty})
          </Link>

          {user && (
            <Link to="/history" onClick={() => setIsOpen(false)}>
              History
            </Link>
          )}

          {user ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="text-left text-red-400"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setIsOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">
            ElectroShop
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your one-stop destination for latest electronics, gadgets and accessories at best prices.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebook className="hover:text-yellow-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-400 transition">Cart</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Customer Support</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>FAQ</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

          <p className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <FaEnvelope /> support@electroshop.com
          </p>

          <p className="flex items-center gap-2 text-gray-400 text-sm">
            <FaPhoneAlt /> +91 123-456-7890
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © 2026 ElectroShop. All rights reserved.
      </div>
    </footer>
  );
}

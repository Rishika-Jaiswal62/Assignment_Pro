
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import API from "../api";
import Footer from "../Components/Footer";

export default function Shop({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // 🔹 Fetch products
  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // 🔹 Filter logic
  useEffect(() => {
    let temp = [...products];

    if (category !== "all") {
      temp = temp.filter(
        (p) => p.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (search.trim() !== "") {
      temp = temp.filter((p) =>
        p.title?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(temp);
  }, [search, category, products]);

  // 🔹 Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);
    let updatedCart;

    if (exist) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, qty: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <Navbar cart={cart} />

      <section className="pt-28 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 pt-6 text-center text-gray-800">
          Shop Products
        </h1>

        {/* 🔍 Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center">

          {/* Search Bar */}
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="  w-full sm:w-1/4 py-2 px-5  rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 "
          >
            <option value="all">All Categories</option>
            <option value="laptop">Laptop</option>
            <option value="mobile">smartphone</option>
            <option value="headphones">Headphones</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>

        {/* 🛍️ Product Grid */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 -4">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p._id}
              product={p}
              onAdd={() => addToCart(p)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

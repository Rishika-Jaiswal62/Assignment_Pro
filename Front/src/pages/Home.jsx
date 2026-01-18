import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import API from "../api";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

export default function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (product) => {
    const exist = cart.find(item => item._id === product._id);

    let updatedCart;
    if (exist) {
      updatedCart = cart.map(item =>
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
    <div className="">
       <Hero className="pt-24"/>
       <h1 className="font-bold text-black flex items-center justify-center mt-20 mb-4 text-4xl">Product</h1>
     
      <section className="max-w-7xl mx-auto px-4 py-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          
        {/* {products.map(p => (
          <ProductCard
            key={p._id}
            product={p}
            addToCart={addToCart}
          />
        ))} */}



        {products.map(p => (
          <ProductCard
            key={p._id}
            product={p}
            onAdd={() => addToCart(p)}   
          />
        ))}
      </section>
      <Footer />
    </div>
  );
}



import React from "react";

import heroImg from "../assets/image/hero.webp";

const Hero = () => {
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          ElectroShop
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-3">
          Electronics E-Commerce Store
        </p>

        <p className="mb-6 text-sm sm:text-base md:text-lg">
          Buy latest mobiles, laptops & accessories at best prices.
        </p>

        <button className="bg-yellow-500 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;



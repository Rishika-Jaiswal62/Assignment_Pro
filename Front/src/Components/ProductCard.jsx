

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-2xl shadow-md 
                    hover:shadow-2xl hover:-translate-y-1 
                    transition-all duration-300 overflow-hidden group">

      {/* Image Section */}
      <div className="relative h-52 bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain 
                     transition-transform duration-300 
                     group-hover:scale-110"
        />

       
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-gray-800 text-sm line-clamp-2">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-green-600">
            ₹ {product.price}
          </p>
          <span className="text-sm text-gray-400 line-through">
            ₹ {product.price + 300}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
          ⭐ ⭐ ⭐ ⭐ <span className="text-gray-500 text-xs">(4.0)</span>
        </div>

        {/* Button */}
        <button
          onClick={onAdd}
          className="mt-3 bg-yellow-400 text-black font-semibold py-2 rounded-xl 
                     hover:bg-yellow-500 active:scale-95 transition"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

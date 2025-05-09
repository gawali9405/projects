import React from "react";

const Products = ({ addToCart }) => {
  const products = [
    {
      img: "/images/cart1.jpg",
      name: "Water Set",
      price: "$9.00 – $19.99",
    },
    {
      img: "/images/cart2.jpg",
      name: "Lemon+Mineral",
      price: "$6.99",
      oldPrice: "$7.89",
      sale: true,
    },
    {
      img: "/images/cart3.jpg",
      name: "Mineral Water",
      price: "$14.00",
    },
    {
      img: "/images/cart4.jpg",
      name: "Drop of Water. Mineral",
      price: "$6.75",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
  };

  return (
    <div className="bg-blue-50 py-12">
      <h1 className="text-1xl font-bold text-center mb-2 text-sky-600">Our Products</h1>
      <h2 className="text-blue-400 text-3xl font-bold text-center">Choose your water</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto my-2"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pt-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center relative hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>

              <div className="mt-3">
                {product.oldPrice && (
                  <span className="text-gray-500 line-through text-sm">{product.oldPrice}</span>
                )}
                <span className="text-green-600 font-semibold text-lg ml-2">{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)} // Pass product to addToCart
                  className="block w-full mt-3 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

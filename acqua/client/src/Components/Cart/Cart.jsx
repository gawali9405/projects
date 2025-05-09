import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="bg-blue-50 py-12 pt-40">
      <h1 className="text-1xl font-bold text-center mb-2 text-sky-600">Your Cart</h1>
      <h2 className="text-blue-400 text-3xl font-bold text-center">Items in Your Cart</h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto my-2"></div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 pt-20">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-900">{item.name}</h3>
              <p className="text-green-600 font-semibold text-lg">{item.price}</p>

              {/* Delete Button */}
              <button
                onClick={() => removeFromCart(index)} // Pass the index to remove that item
                className="absolute top-2 right-2 bg-red-500 text-white px-1 rounded-full hover:bg-red-700"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

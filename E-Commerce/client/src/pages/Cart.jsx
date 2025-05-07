import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { updateAddress } from "../store/addrssSlice.js";
import toast from "react-hot-toast";

const Cart = ({setRefresh}) => {
  const userAddress = useSelector((state) => state.address.userAddress);
  // console.log("delivery address",userAddress);
  
  const [newAddress, setNewAddress] = useState({
    streetAddress: userAddress[0]?.streetAddress || "",
    city: userAddress[0]?.city || "",
    postalCode: userAddress[0]?.postalCode || "",
    state: userAddress[0]?.state || "",
    country: userAddress[0]?.country || "",
  });
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  // ✅ Add handleSave
  const handleSave = () => {
    dispatch(updateAddress(newAddress));
    setEditMode(false);
    toast.success("Delivery address Updated successfully")
    setRefresh((prev)=>!prev)
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-20 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items List */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-4 items-center bg-white p-4 rounded shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1 w-full">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500 mb-2">{item.title}</p>

                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-sm">Quantity:</p>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item._id,
                            quantity: item.quantity - 1,
                          })
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="bg-gray-200 hover:bg-gray-300 text-lg px-2 rounded-full font-bold text-red-600 disabled:opacity-50"
                    >
                      -
                    </button>

                    <p className="text-gray-700 font-medium">{item.quantity}</p>

                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item._id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="bg-gray-200 hover:bg-gray-300 text-lg px-2 rounded-full font-bold text-red-600"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-green-600 font-semibold">
                    Price: ₹{item.price}
                  </p>
                  <p className="text-blue-600 font-semibold">
                    Total: ₹{item.totalPrice}
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  className="mt-2 md:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* delivery address */}
          <div className="bg-white p-6 rounded shadow h-fit">
            {userAddress.length > 0 && (
              <div>
                <h1 className="text-lg font-bold mb-2">Delivery Address</h1>
                <p>{newAddress.streetAddress}</p>
                <p>{newAddress.city}</p>
                <p>{newAddress.state}</p>
                <p>{newAddress.postalCode}</p>
                <p>{newAddress.country}</p>
                <button
                  onClick={() => setEditMode((prev) => !prev)}
                  className="bg-amber-300 px-2 py-2 mt-2 rounded-md hover:bg-amber-400"
                >
                  Change Address
                </button>
              </div>
            )}

            {/* Summary + Place Order */}
            <div className="mt-2">
              <p className="border border-gray-200 my-4 "></p>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Order Summary
              </h3>

              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Total Items:</span>{" "}
                {totalQuantity}
              </p>
              <p className="text-green-700 text-lg font-bold mb-4">
                Total Amount: ₹{totalAmount.toFixed(2)}
              </p>

              <button
                onClick={() => navigate("/payment")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition duration-300"
              >
                PLACE ORDER
              </button>
            </div>
          </div>

          {/* Edit Address Modal */}
          {editMode && (
            <div className="bg-neutral-900/60 fixed inset-0 z-50 flex justify-center items-center">
              <div className="bg-white w-full max-w-md py-5 px-8 rounded shadow-lg">
                <h2 className="font-semibold text-center text-lg mb-4">
                  Edit Address
                </h2>
                {[
                  "streetAddress",
                  "city",
                  "postalCode",
                  "state",
                  "country",
                ].map((field) => (
                  <div className="mb-4" key={field}>
                    <label className="block text-sm text-gray-600 capitalize mb-1">
                      {field}
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-2 rounded"
                      value={newAddress[field]}
                      onChange={(e) =>
                        setNewAddress({
                          ...newAddress,
                          [field]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}

                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-400 text-white p-2 rounded w-full hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Cart;

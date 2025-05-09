import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/orderSlice.js"; // Adjust the path

const MyOrder = () => {
  const dispatch = useDispatch();
  const { order, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    const userId = "681cbf18c3f119215f70c475"; // Replace with dynamic ID if available
    dispatch(fetchOrders(userId));
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Order</h2>

      {loading ? (
        <p>Loading order...</p>
      ) : error ? (
        <p className="text-red-600">Error: {error}</p>
      ) : !order ? (
        <p>No order found.</p>
      ) : (
        <div className="border rounded-lg p-4 shadow-sm bg-white space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Order ID:</span>
            <span>{order._id}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Date:</span>
            <span>{new Date(order.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total:</span>
            <span>₹{order.totalPrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span>{order.status}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrder;

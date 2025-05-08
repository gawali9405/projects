import express from "express";
import Order from "../model/orderModel.js";

const orderRoute = express.Router();

// add order
orderRoute.post("/add-order", async (req, res) => {
  try {
    const {
      user,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      paymentResult, // Added paymentResult
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({
        message: "Order items cannot be empty",
        error: true,
        success: false,
      });
    }

    const newOrder = new Order({
      user,
      orderItems,
      shippingAddress,
      paymentMethod,
      paymentResult, // Added paymentResult
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
    });

    const savedOrder = await newOrder.save();

    return res.status(201).json({
      message: "Order created successfully",
      success: true,
      error: false,
      order: savedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      error: true,
      success: false,
    });
  }
});

// get order
orderRoute.get("/get-order/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      message: "Order details fetched successfully",
      success: true,
      error: false,
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      error: true,
      success: false,
    });
  }
});

// cancel order
orderRoute.put("/cancel-order/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
        error: true,
        success: false,
      });
    }

    // Check if the order is already delivered or paid
    if (order.isPaid || order.isDelivered) {
      return res.status(400).json({
        message: "Cannot cancel an order that is already delivered or paid",
        error: true,
        success: false,
      });
    }

    order.status = "Cancelled"; // Update the status to "Cancelled"
    await order.save();

    return res.status(200).json({
      message: "Order cancelled successfully",
      success: true,
      error: false,
      order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Server Error",
      error: true,
      success: false,
    });
  }
});

export default orderRoute;

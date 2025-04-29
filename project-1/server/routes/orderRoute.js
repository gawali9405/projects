import express from "express";
import Order from "../models/order.model.js";
import User from "../models/user.model.js";
import userAuthentication from "../middleware/userAuth.js";
import mongoose from "mongoose";

const router = express.Router();

router.post("/place-order", userAuthentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { userOrder } = req.body;

    for (const item of userOrder) {
      const newOrder = new Order({
        user: id,
        goggle: userOrder._id,
      });
      const orderData = await newOrder.save();
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderData._id },
      });

      await User.findByIdAndUpdate(id, {
        $pull: { cart: item._id },
      });
    }

    return res.status(200).json({
      message: "Order place successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/save-address", async (req, res) => {
  try {
    const { name, mobile, state, city, pincode } = req.body;

    if (!name || !mobile || !state || !city || !pincode) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const address = await Order({
      name,
      mobile,
      state,
      city,
      pincode,
    });

    await address.save();
    return res.status(200).json({
      message: "Order address saved successfully",
      order: {
        name: address.name,
        mobile: address.mobile,
        state: address.state,
        city: address.city,
        pincode: address.pincode,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});


router.get("/get-all-orders", async (req, res) => {
  try { 
    const users = await Order.find()
      .populate({ path: "goggle" })
      .populate({ path: "user" })
      .sort({ createdAt: -1 });

    if (!users) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    return res.status(200).json({
      orders: users.orders,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/update-order-status/:id", userAuthentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(402).json({
        message: "Invalid id",
      });
    }

    const userOrder = await Order.findByIdAndUpdate(req.params.id, {
      status: status,
    });

    if (!userOrder) {
      return res.status(404).json({
        message: "UserOrder not found",
      });
    }

    return res.status(200).json({
      message: "Order updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;

import express from "express";
import mongoose from "mongoose";
import User from "../models/user.model.js";
import goggle from "../models/product.model.js";
import userAuthentication from "../middleware/userAuth.js";

const router = express.Router();

router.post("/addToCart", async (req, res) => {
  try {
    const { id } = req.headers;
    const { goggleId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(goggleId)) {
      return res.status(402).json({
        message: "Invalid product Id",
      });
    }

    const userId = await User.findById(id);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access",
      });
    }

    const goggleid = await goggle.findById(goggleId);

    if (!goggleid) {
      return res.status(401).json({
        message: "Goggle not found",
      });
    }

    if (userId.cart.includes(goggleid)) {
      return res.status(400).json({
        message: "Goggle already in the cart",
      });
    }

    const newUserId = await userId.cart.push(goggleid);
    await newUserId.save();

    return res.status(200).json({
      message: "Goggle added into cart ",
      cart: newUserId,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/getCart", async (req, res) => {
  try {
    const { id } = req.headers;
    const allCart = await User.findById(id).populate(cart);

    if (!allCart) {
      return res.status(401).json({
        message: "No cart found",
      });
    }

    return res.status(200).json({
      cart: allCart.cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/deleteCart/:id", userAuthentication, async (req, res) => {
  try {
    const { id } = req.headers;
    const { cartId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cartId)) {
      return res.status(401).json({
        message: "Invalid cart Id",
      });
    }

    const cartUser = await User.findById(id);

    if (!cartUser) {
      return res.status(401).json({
        message: "cartid not found",
      });
    }

    const deleteCart = await cartUser.filter((id) => id.toString() !== cartId);

    await cartUser.save();

    return res.status(200).json({
      message: "Cart deleted successfully",
      cart:deleteCart
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

export default router;

import mongoose from "mongoose";
import express from "express";
import Address from "../model/addresModel.js";
import User from "../model/userModel.js";

const addressRouter = express.Router();

// Add a new address
addressRouter.post("/add-address", async (req, res) => {
  try {
    const { userId, streetAddress, city, state, postalCode, country } = req.body;

    // Validate the input fields
    if (!userId || !streetAddress || !city || !state || !postalCode || !country) {
      return res.status(400).json({ message: "All address fields are required" });
    }

    // Validate the user ID
    // if (!mongoose.Types.ObjectId.isValid(userId)) {
    //   return res.status(400).json({ message: "Invalid userId" });
    // }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create and save the new address
    const newAddress = new Address({ userId, streetAddress, city, state, postalCode, country });
    const savedAddress = await newAddress.save();

    // Link the address to the user's address details
    // user.address_details.push(savedAddress._id);
    // await user.save();

    res.status(200).json({
      message: "Address saved and linked to user",
      address: savedAddress,
      user,
    });
  } catch (error) {
    console.error("Error saving address:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// Get all addresses (consider filtering by userId)
addressRouter.get("/get-address", async (req, res) => {
  try {
    const userAddress = await Address.find();  // Optionally, filter by userId
    if (!userAddress) {
      return res.status(400).json({ message: "Address not found" });
    }

    return res.status(200).json({
      message: "Addresses fetched successfully",
      success: true,
      userAddress,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false, error: true });
  }
});

// Delete an address by ID
addressRouter.delete("/delete-address/:id", async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: "Address not found", error: true, success: false });
    }

    // Remove address reference from user's address_details
    // await User.findByIdAndUpdate(address.userId, {
    //   $pull: { address_details: address._id },
    // });

    // Delete the address from the Address collection
    await Address.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Address deleted successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
});

// Update address by ID
addressRouter.put("/update-address/:id", async (req, res) => {
  try {
    const { streetAddress, city, state, postalCode, country } = req.body;
    
    // Ensure the address ID is passed in the URL
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid address ID" });
    }

    // Validate the required fields
    if (!streetAddress || !city || !state || !postalCode || !country) {
      return res.status(400).json({ message: "All address fields are required" });
    }

    // Find and update the address
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id, 
      { streetAddress, city, state, postalCode, country }, 
      { new: true }
    );

    if (!updatedAddress) {
      return res.status(404).json({ message: "Address not found", success: false });
    }

    return res.status(200).json({
      message: "Address updated successfully",
      address: updatedAddress,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, error: true, success: false });
  }
});

export default addressRouter;

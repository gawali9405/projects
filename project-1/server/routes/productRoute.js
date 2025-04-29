import express from "express";
import User from "../models/user.model.js";
import goggle from "../models/product.model.js";
import upload from "../middleware/upload.js"
import userAuthentication from "../middleware/userAuth.js";

const router = express.Router();

// add product by admin only
router.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.headers;
    const user = await User.findById(id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized Access" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "You are not an admin" });
    }

    const { name, title, price, rating, description } = req.body;
    const newFields = { name, title, price, rating, description };

    if (req.file) {
      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
      newFields.image = imageUrl;
    }

    const newGoggle = new goggle({
      userId: id,
      ...newFields,
    });

    const savedGoggle = await newGoggle.save();

    return res.status(200).json({
      message: "Product added successfully",
      goggles: savedGoggle,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});


router.get("/get-all-product", async (req, res) => {
  try {
    const goggleProduct = await goggle.find(); 
    
    if (!goggleProduct || goggleProduct.length === 0) {
      return res.status(404).json({
        message: "No product found",
      });
    }

    return res.status(200).json({
      goggleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/update-product", userAuthentication, upload.single("image"), async (req, res) => {
  try {
    const { id, role } = req.user;

    if (role !== "admin") {
      return res.status(403).json({
        message: "You are not authorized as admin",
      });
    }

    const { goggleId, ...updatedField } = req.body;

    if (req.file) {
      updatedField.image = req.file.filename; // if using multer for images
    }

    const updatedGoggle = await goggle.findByIdAndUpdate(
      goggleId,
      updatedField,
      { new: true }
    );

    if (!updatedGoggle) {
      return res.status(404).json({
        message: "Goggle not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Goggle updated successfully",
      data: updatedGoggle,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});


router.delete("/delete-product", userAuthentication, async (req, res) => {
  try {
    const { id } = req.headers;

    const userId = await User.findById(id);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access",
      });
    }

    if (userId.role !== "admin") {
      return res.status(403).json({
        message: "You not admin",
      });
    }

    const { goggleid } = req.headers;
    console.log(goggleid);

    const deletedGoggle = await goggle.findByIdAndDelete(goggleid);
    console.log(deletedGoggle);

    if (!deletedGoggle) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "GoggleProduct deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/get-product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const goggleProduct = await goggle.findById(id);

    if (!goggleProduct) {
      return res.status(401).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      data:goggleProduct
    });
  } catch (error) {
    return res.status(500).json({
      message: error.meassege,
    });
  }
});
export default router;

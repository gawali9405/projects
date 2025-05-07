import express from "express";
import Product from "../model/productModel.js";
import upload from "../middleware/upload.js";
import User from "../model/userModel.js";
import userAuthentication from "../middleware/userAuth.js";

const productRouter = express.Router();

// add product
productRouter.post(
  "/add-product",
  userAuthentication,
  upload.single("image"),
  async (req, res) => {
    try {
      const { id } = req.headers;
      const user = await User.findById(id);

      if (!user) {
        return res.status(400).json({
          message: "Unauthorized access",
        });
      }

      if (user.role !== "admin") {
        return res.status(400).json({
          message: "you are not admin",
        });
      }
      const { name, price, description, rating, title } = req.body;
      if (!name || !price || !description || !rating || !title) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }

      const addProduct = { name, price, description, rating, title };
      if (req.file) {
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
        addProduct.image = imageUrl;
      }

      const saved = new Product(addProduct);
      await saved.save();

      return res.status(200).json({
        message: "Product added successfully",
        error: false,
        success: true,
        data: saved,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  }
);

// get all products
productRouter.get("/get-product", async (req, res) => {
  try {
    const allProduct = await Product.find();

    if (!allProduct || allProduct.length === 0) {
      return res.status(404).json({
        message: "No products found",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      message: "All products retrieved successfully",
      error: false,
      success: true,
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
});

// update product
productRouter.put(
  "/update-product/:id",
  userAuthentication,
  upload.single("image"),
  async (req, res) => {
    try {
      const user = req.user;

      if (user.role !== "admin") {
        return res.status(403).json({
          message: "You are not admin",
        });
      }

      const productId = req.params.id;
      const updatedFields = req.body;

      if (req.file) {
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        updatedFields.image = imageUrl;
      }

      const updateProduct = await Product.findByIdAndUpdate(
        productId,
        updatedFields,
        { new: true }
      );

      if (!updateProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      return res.status(200).json({
        message: "Product updated successfully",
        product: updateProduct,
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
  }
);


// delete product
productRouter.delete(
  "/delete-product",
  userAuthentication,
  async (req, res) => {
    try {
      const { id, productid } = req.headers;

      const user = await User.findById(id);
      if (!user) {
        return res.status(401).json({
          message: "Unauthorized Access",
        });
      }

      if (user.role !== "admin") {
        return res.status(403).json({
          message: "You are not Admin",
        });
      }

      const deleteProduct = await Product.findByIdAndDelete(productid);

      if (!deleteProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      return res.status(200).json({
        message: "Product deleted successfully",
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
  }
);


export default productRouter;

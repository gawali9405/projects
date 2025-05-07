import express from "express";
import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userAuthentication from "../middleware/userAuth.js";
import upload from "../middleware/upload.js";
import mongoose from "mongoose";

const userRouter = express.Router();

// user registration router
userRouter.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for missing fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({
        message: "Email already exists",
        success: false,
        error: true,
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create and save the user
    const saved = new User({
      name,
      email,
      password: hashPassword,
    });

    await saved.save();

    // Respond with success
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      error: false,
      user: {
        id: saved._id,
        name: saved.name,
        email: saved.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
});

// user login router
userRouter.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const userEmail = await User.findOne({ email });

    if (!userEmail) {
      return res.status(401).json({
        message: "Invalid Credential",
      });
    }

    const checkPassword = await bcrypt.compare(password, userEmail.password);

    if (!checkPassword) {
      return res.status(401).json({
        message: "Invalid Credential",
      });
    }
    const token = jwt.sign(
      {
        id: userEmail._id,
        name: userEmail.name,
        email: userEmail.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "8d" }
    );

    return res.status(200).json({
      message: "Login Successfully",
      success: true,
      error: false,
      data: {
        // id: userEmail._id,
        // name: userEmail.name,
        // email: userEmail.email,
        // role: userEmail.role,
        userEmail,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
});

// get alluser router
userRouter.get("/all-user", async (req, res) => {
  try {
    const users = await User.find().select("-password");

    return res.status(200).json({
      message: "User get successfully",
      success: true,
      error: false,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
});

// get single user 
userRouter.get("/get-user/:id", async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid user ID",
      success: false,
      error: true,
    });
  }

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        error: true,
      });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      success: true,
      error: false,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
});


// update user details
userRouter.put(
  "/update-user",
  userAuthentication,
  upload.single("image"),
  async (req, res) => {
    try {
      const userId = req?.user?.id;
      // console.log("user id",userId); first assing the id in jwt sign then it can access
      
      const { name, email, mobile } = req.body;
      const updatedFields = { name, email, mobile };

      if (req.file) {
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
          req.file.filename
        }`;
        updatedFields.image = imageUrl;
      }
 
      
      const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
        new: true,
      });

      res.status(200).json({
        message: "User profile updated successfully",
        success: true,
        error: false,
        data: updatedUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
        success: false,
        error: true,
      });
    }
  }
);

export default userRouter;

import bcrypt from "bcrypt";
import express from "express";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import userAuthentication from "../middleware/userAuth.js";
import upload from "../middleware/upload.js"

const router = express.Router();

// User Registration Route
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password,role, address } = req.body;

    // Validate required fields
    if (!username || !email || !password ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }

    // Validate username length
    if (username.length < 4) {
      return res.status(400).json({
        message: "Username should be at least 4 characters long",
        success: false,
        error: true,
      });
    }

    // Check for existing email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
        error: true,
      });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      role,
      address
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Signup Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: true,
    });
  }
});

// User Sign-in Route
router.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if fields are provided
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
        error: true,
      });
    }

    // Check if email exists
    const userEmail = await User.findOne({ email });

    if (!userEmail) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
        error: true,
      });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, userEmail.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false,
        error: true,
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: userEmail._id,
        name: userEmail.username,
        role: userEmail.role,
      },
      process.env.JWT_SECRET || "default_secret", // Use env var or fallback
      {
        expiresIn: "30d",
      }
    );
 

    // Send response
    return res.status(200).json({
      message: "Login successful",
      success: true,
      error: false,
      data: {
        id: userEmail._id,
        username: userEmail.username,
        email: userEmail.email,
        address: userEmail.address,
        role: userEmail.role,
        image:userEmail.image,
        token,
      },
    });
  } catch (error) {
    console.error("Sign-in Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: true,
    });
  }
});

// Get All Users
router.get("/all-user", async (req, res) => {
  try {
    // Exclude password from the response
    const allUsers = await User.find().select("-password");

    res.status(200).json({
      message: "All users fetched successfully",
      success: true,
      error: false,
      data: allUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: true,
    });
  }
});

// Update User Profile 
router.put("/update-user", userAuthentication, upload.single("image"), async (req, res) => {
  try {
    const userId = req.user.id; // Middleware adds this
    const { username, email, password, address } = req.body;

    const updatedFields = { username, email, address };

    // Handle image if provided
    if (req.file) {
      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
      updatedFields.image = imageUrl;
    } 

    // Hash password if provided  
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedFields.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.status(200).json({
      message: "User profile updated successfully",
      success: true,
      error: false,
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update Error:", error.message);
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: true,
    });
  }
});


 

export default router;

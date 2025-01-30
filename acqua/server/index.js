import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./db/user.module.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect("mongodb://localhost:27017/person", {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

app.post("/registration", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("All input is required");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(200).send("User created successfully");
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port 8000"));

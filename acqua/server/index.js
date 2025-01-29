import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./db/user.module.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect("mongodb://localhost:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

app.get("/api", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why did the chicken cross the road?",
      punchline: "To get to the other side",
    },
    {
      id: 2,
      joke: "Why did the golfer bring two pairs of pants?",
      punchline: "In case he got a hole in one",
    },
    {
      id: 3,
      joke: "What do you call a fish with no eyes?",
      punchline: "Fsh",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port 8000"));

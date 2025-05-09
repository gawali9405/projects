import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static images
app.use("/images", express.static(path.join(__dirname, "public/images")));


// API Endpoint to Fetch Food Data
app.get("/", (req, res) => {
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "Delicious egg.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Tasty ramen.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Juicy chicken.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Sweet cake.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Delicious burger.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Fluffy pancake.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData); //  Send response with food data
});

// Start the Server
app.listen(8000, () => console.log("Server running on port 8000"));

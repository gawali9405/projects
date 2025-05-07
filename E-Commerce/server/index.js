import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./route/user.route.js"; 
import productRouter from "./route/product.route.js";
import addressRouter from "./route/address.route.js";


dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static("uploads"))
 

app.use("/user",userRouter)
app.use("/user",productRouter)
app.use('/user',addressRouter)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`✅ server is running on port ${PORT}`));

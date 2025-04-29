import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "goggle",
    },
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);

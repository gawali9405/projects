import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    goggle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goggle",
      // required: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "pick", "out for delivery", "delivery cancel"],
    },
    name: {
      type: String,
      // required: true,
    },
    mobile: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    pincode: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);

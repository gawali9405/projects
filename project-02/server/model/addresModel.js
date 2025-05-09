import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    // userId:{
    //   type:mongoose.Schema.Types.ObjectId,
    //   ref:"User"
    // },
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "India",
    },
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);
export default Address;

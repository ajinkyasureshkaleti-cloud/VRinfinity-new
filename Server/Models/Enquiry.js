import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
  },
  { timestamps: true },
);

export default mongoose.model("Enquiry", enquirySchema);

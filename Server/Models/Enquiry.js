import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    email: String,
    mobile: String,
    name: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, collection: "enquiries" },
);

export default mongoose.model("Enquiry", enquirySchema);

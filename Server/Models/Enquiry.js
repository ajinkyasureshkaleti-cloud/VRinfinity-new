import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, collection: "enquiries" },
);

export default mongoose.model("Enquiry", enquirySchema);

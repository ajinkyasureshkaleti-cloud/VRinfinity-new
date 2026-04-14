import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  heroTitle: String,
  heroDesc: String,

  overview: String,
  connectivity: String,

  amenities: [
    {
      title: String,
      description: String,
    },
  ],

  aboutUs: String,

  constructionUpdates: String,

  faq: [
    {
      question: String,
      answer: String,
    },
  ],
});

export default mongoose.model("Content", contentSchema);

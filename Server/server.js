import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./Routes/adminRoutes.js";
import contentRoutes from "./Routes/contentRoutes.js";
import enquiryRoutes from "./Routes/enquiryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/admin", adminRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/enquiry", enquiryRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, "0.0.0.0", () => {
  console.log("Server running");
});

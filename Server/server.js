import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./Routes/adminRoutes.js";
import contentRoutes from "./Routes/contentRoutes.js";
import enquiryRoutes from "./Routes/enquiryRoutes.js";

dotenv.config();

// --- Startup env diagnostics ---
console.log("[ENV CHECK] ADMIN_EMAIL loaded    :", process.env.ADMIN_EMAIL ? `"${process.env.ADMIN_EMAIL}"` : "NOT SET");
console.log("[ENV CHECK] ADMIN_PASSWORD loaded :", process.env.ADMIN_PASSWORD ? `"${process.env.ADMIN_PASSWORD.slice(0, 2)}${"*".repeat(Math.max(0, process.env.ADMIN_PASSWORD.length - 2))}"` : "NOT SET");
console.log("[ENV CHECK] MONGO_URL loaded      :", process.env.MONGO_URL ? "SET (value hidden)" : "NOT SET");
// --------------------------------

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("Backend Running");
});

app.get("/", (req, res) => {
  res.send("API is live");
});

app.use("/api/admin", adminRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/enquiry", enquiryRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

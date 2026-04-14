import express from "express";
import Enquiry from "../Models/Enquiry.js";

const router = express.Router();

// Save enquiry
router.post("/", async (req, res) => {
  const data = new Enquiry(req.body);
  await data.save();
  res.json({ success: true });
});

// Get all enquiries (ADMIN PANEL LIST)
router.get("/", async (req, res) => {
  const data = await Enquiry.find().sort({ createdAt: -1 });
  res.json(data);
});

export default router;

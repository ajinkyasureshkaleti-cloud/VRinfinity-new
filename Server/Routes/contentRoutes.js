import express from "express";
import Content from "../Models/Content.js";

const router = express.Router();

// get customer data
router.get("/", async (req, res) => {
  const data = await Content.findOne();
  res.json(data);
});

// update customer
router.post("/update", async (req, res) => {
  try {
    let content = await Content.findOne();

    if (!content) {
      content = new Content(req.body);
    } else {
      Object.assign(content, req.body);
    }

    await content.save();

    res.json({ success: true, message: "Content updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

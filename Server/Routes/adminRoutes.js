import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // --- Login debug logging ---
  console.log("[ADMIN LOGIN] Incoming email    :", email);
  console.log("[ADMIN LOGIN] Incoming password :", password ? `"${password.slice(0, 2)}${"*".repeat(Math.max(0, password.length - 2))}"` : "(empty)");
  console.log("[ADMIN LOGIN] ENV ADMIN_EMAIL   :", process.env.ADMIN_EMAIL ?? "NOT SET");
  console.log("[ADMIN LOGIN] ENV ADMIN_PASSWORD:", process.env.ADMIN_PASSWORD ? `"${process.env.ADMIN_PASSWORD.slice(0, 2)}${"*".repeat(Math.max(0, process.env.ADMIN_PASSWORD.length - 2))}"` : "NOT SET");
  console.log("[ADMIN LOGIN] Email match       :", email === process.env.ADMIN_EMAIL);
  console.log("[ADMIN LOGIN] Password match    :", password === process.env.ADMIN_PASSWORD);
  // ---------------------------

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    console.log("[ADMIN LOGIN] Result: SUCCESS");
    return res.json({ success: true, message: "Login success" });
  }

  console.log("[ADMIN LOGIN] Result: DENIED");
  return res
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
});

export default router;

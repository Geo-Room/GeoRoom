import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Room routes working!");
});

export default router;

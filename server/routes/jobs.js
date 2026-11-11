import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// GET /api/jobs  -> all jobs, newest first
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 }).limit(100);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/jobs  -> save a new job
router.post("/", async (req, res) => {
  try {
    const { title, location } = req.body;
    if (!title || !location) {
      return res.status(400).json({ message: "Title and location are required" });
    }
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;

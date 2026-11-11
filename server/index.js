import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobs.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

await connectDB();
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

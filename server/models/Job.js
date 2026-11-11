import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    type: { type: String, enum: ["Full-time", "Part-time", "Contract", "Internship"], default: "Full-time" },
    salary: { type: String, default: "" },
    status: { type: String, enum: ["Open", "Closed"], default: "Open" },
  },
  { timestamps: true } // "posted 3d ago" can be made from createdAt
);

// Helps search by title
jobSchema.index({ title: "text", location: "text" });

export default mongoose.model("Job", jobSchema);

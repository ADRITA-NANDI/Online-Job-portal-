import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // Simple version for now: company name and poster email as plain text
    companyName: { type: String, default: "" },
    postedByEmail: { type: String, default: "" },

    // Later we can link these to the Company and User collections
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    requirements: { type: String, default: "" },
    location: { type: String, default: "" },
    type: { type: String, enum: ["Full-time", "Part-time", "Contract", "Internship"], default: "Full-time" },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    status: { type: String, enum: ["Open", "Closed"], default: "Open" },
  },
  { timestamps: true }
);

jobSchema.index({ title: "text", location: "text" });

export default mongoose.model("Job", jobSchema);

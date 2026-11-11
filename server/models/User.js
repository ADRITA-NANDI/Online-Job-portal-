import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }, // save a HASHED password (bcrypt), never plain text
    role: { type: String, enum: ["Job Seeker", "Employer", "Admin"], default: "Job Seeker" },
    status: { type: String, enum: ["Active", "Suspended"], default: "Active" },

    // Job seeker profile (from the Profile page)
    phone: { type: String, default: "" },
    location: { type: String, default: "" },
    education: { type: String, default: "" },
    resumeUrl: { type: String, default: "" },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

export default mongoose.model("User", userSchema);

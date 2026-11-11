import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // the employer
    name: { type: String, required: true, trim: true },
    tagline: { type: String, default: "" },
    industry: { type: String, default: "" },
    size: { type: String, default: "" },
    founded: { type: String, default: "" },
    website: { type: String, default: "" },
    location: { type: String, default: "" },
    description: { type: String, default: "" },
    status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);

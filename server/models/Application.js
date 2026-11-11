import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    coverLetter: { type: String, default: "" },
    status: {
      type: String,
      enum: ["Applied", "Under Review", "Shortlisted", "Interview", "Selected", "Rejected"],
      default: "Applied",
    },
  },
  { timestamps: true }
);

// One person can apply to one job only one time
applicationSchema.index({ job: 1, applicant: 1 }, { unique: true });

export default mongoose.model("Application", applicationSchema);

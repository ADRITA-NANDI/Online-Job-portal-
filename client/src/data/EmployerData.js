// Mock data for the employer workspace.
// Later: fetch these from your backend (GET /api/v1/employer/...)
import { applicationStatuses } from "./Mockdata";

export { applicationStatuses };

export const employerCompany = {
  name: "Northbridge",
  tagline: "Building tools for distributed teams",
  industry: "Software & Technology",
  size: "11-50 employees",
  founded: "2021",
  website: "https://northbridgelabs.com",
  location: "Chattogram, Bangladesh",
  description:
    "Northbridge builds collaboration software for remote-first teams. We're a small, product-focused group looking to grow our engineering and design bench.",
};

export const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

export const employerJobs = [
  { id: 1, title: "Senior Frontend Engineer", location: "Remote", type: "Full-time", applicants: 46, posted: "3d ago", status: "Open" },
  { id: 3, title: "Backend Engineer (Node.js)", location: "Remote", type: "Contract", applicants: 61, posted: "1w ago", status: "Open" },
  { id: 7, title: "UI/UX Designer", location: "Chattogram", type: "Full-time", applicants: 9, posted: "2d ago", status: "Open" },
  { id: 8, title: "QA Analyst", location: "Dhaka", type: "Full-time", applicants: 15, posted: "3w ago", status: "Closed" },
];

export const employerApplicants = [
  { id: 1, name: "Tanvir Ahmed", job: "Senior Frontend Engineer", applied: "2h ago", status: "Applied" },
  { id: 2, name: "Rafi Hossain", job: "Senior Frontend Engineer", applied: "1d ago", status: "Applied" },
  { id: 3, name: "Farzana Akter", job: "Backend Engineer (Node.js)", applied: "1d ago", status: "Interview" },
  { id: 4, name: "Mahin Rahman", job: "UI/UX Designer", applied: "6h ago", status: "Under Review" },
  { id: 5, name: "Nusrat Jahan", job: "Backend Engineer (Node.js)", applied: "3d ago", status: "Shortlisted" },
  { id: 6, name: "Sadia Islam", job: "UI/UX Designer", applied: "4d ago", status: "Selected" },
];
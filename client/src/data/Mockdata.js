export const users = [
  { id: 1, name: "Tanvir Ahmed", email: "tanvir@example.com", role: "Job Seeker", status: "Active", joined: "12 Aug 2026" },
  { id: 2, name: "Mahin Rahman", email: "mahin@example.com", role: "Job Seeker", status: "Active", joined: "03 Sep 2026" },
  { id: 3, name: "Northbridge HR", email: "hr@northbridge.com", role: "Employer", status: "Active", joined: "28 Jul 2026" },
  { id: 4, name: "Farzana Akter", email: "farzana@example.com", role: "Job Seeker", status: "Suspended", joined: "19 Jun 2026" },
  { id: 5, name: "Rafi Hossain", email: "rafi@example.com", role: "Job Seeker", status: "Active", joined: "21 Sep 2026" },
  { id: 6, name: "Lumen Studio", email: "team@lumenstudio.com", role: "Employer", status: "Active", joined: "05 Sep 2026" },
  { id: 7, name: "Nusrat Jahan", email: "nusrat@example.com", role: "Job Seeker", status: "Active", joined: "24 Sep 2026" },
  { id: 8, name: "Kaizen Logistics", email: "jobs@kaizen.com", role: "Employer", status: "Suspended", joined: "11 May 2026" },
];

export const companies = [
  { id: 1, name: "Northbridge", industry: "Software", location: "Remote", jobs: 12, status: "Approved" },
  { id: 2, name: "Lumen Studio", industry: "Design", location: "Dhaka", jobs: 4, status: "Pending" },
  { id: 3, name: "Kaizen Logistics", industry: "Logistics", location: "Chattogram", jobs: 7, status: "Approved" },
  { id: 4, name: "BrightPath Edu", industry: "Education", location: "Sylhet", jobs: 0, status: "Pending" },
  { id: 5, name: "Harbor Foods", industry: "Food & Beverage", location: "Chattogram", jobs: 3, status: "Approved" },
  { id: 6, name: "QuickCart", industry: "E-commerce", location: "Dhaka", jobs: 0, status: "Rejected" },
];

export const jobs = [
  { id: 1, title: "Senior Frontend Engineer", company: "Northbridge", location: "Remote", type: "Full-time", applicants: 46, posted: "3d ago", status: "Open" },
  { id: 2, title: "Product Designer", company: "Lumen Studio", location: "Dhaka", type: "Full-time", applicants: 28, posted: "5d ago", status: "Open" },
  { id: 3, title: "Backend Engineer (Node.js)", company: "Northbridge", location: "Remote", type: "Contract", applicants: 61, posted: "1w ago", status: "Open" },
  { id: 4, title: "Marketing Manager", company: "Harbor Foods", location: "Chattogram", type: "Full-time", applicants: 19, posted: "1w ago", status: "Closed" },
  { id: 5, title: "Data Analyst", company: "Kaizen Logistics", location: "Remote", type: "Part-time", applicants: 33, posted: "2w ago", status: "Open" },
  { id: 6, title: "Operations Executive", company: "Kaizen Logistics", location: "Chattogram", type: "Full-time", applicants: 12, posted: "3w ago", status: "Closed" },
];

export const applicationStatuses = [
  "Applied",
  "Under Review",
  "Shortlisted",
  "Interview",
  "Selected",
  "Rejected",
];

export const applications = [
  { id: 1, applicant: "Tanvir Ahmed", job: "Senior Frontend Engineer", company: "Northbridge", applied: "2h ago", status: "Applied" },
  { id: 2, applicant: "Mahin Rahman", job: "Product Designer", company: "Lumen Studio", applied: "6h ago", status: "Under Review" },
  { id: 3, applicant: "Farzana Akter", job: "Backend Engineer (Node.js)", company: "Northbridge", applied: "1d ago", status: "Interview" },
  { id: 4, applicant: "Rafi Hossain", job: "Data Analyst", company: "Kaizen Logistics", applied: "1d ago", status: "Shortlisted" },
  { id: 5, applicant: "Nusrat Jahan", job: "Marketing Manager", company: "Harbor Foods", applied: "3d ago", status: "Selected" },
  { id: 6, applicant: "Sadia Islam", job: "Product Designer", company: "Lumen Studio", applied: "4d ago", status: "Rejected" },
];
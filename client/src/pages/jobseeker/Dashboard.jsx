import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { getInitials, getFirstName } from "../../utils/initials";
import { getSavedJobs } from "../../utils/SavedJobs";
import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Rocket,
  Upload,
  UserCog,
  BellRing,
  ChevronRight,
  FileText,
  Video,
  Eye,
  Heart,
} from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

function Avatar({ name, size }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#DBEAFE",
        color: "#2563EB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: `${Math.round(size * 0.34)}px`,
        flexShrink: 0,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const name = user?.name || "Guest User";
  const roleLabel = user?.role === "employer" ? "Employer" : "Job Seeker";

  const [savedJobs] = useState(() => getSavedJobs());

  // Profile completion is based only on what this user has actually filled in
  const profileFields = [
    name !== "Guest User",
    user?.email,
    user?.phone,
    user?.location,
    user?.education,
  ];
  const completion = Math.round(
    (profileFields.filter(Boolean).length / profileFields.length) * 100
  );

  // Real per-user numbers need the backend. Until then, a new account starts at zero.
  const stats = [
    { label: "Applications Sent", value: "0", icon: FileText, color: "#2563EB", bg: "#DBEAFE" },
    { label: "Interviews", value: "0", icon: Video, color: "#059669", bg: "#D1FAE5" },
    { label: "Profile Views", value: "0", icon: Eye, color: "#D97706", bg: "#FEF3C7" },
    { label: "Saved Jobs", value: String(savedJobs.length), icon: Heart, color: "#DB2777", bg: "#FCE7F3" },
  ];

  const recommendedJobs = [
    { title: "Frontend Developer", company: "Tech Innovate Ltd", location: "Chattogram, Bangladesh", type: "Full Time", salary: "৳25,000 - 40,000/month", letter: "T" },
    { title: "Web Developer (MERN Stack)", company: "SoftTech Solutions", location: "Dhaka, Bangladesh", type: "Full Time", salary: "৳30,000 - 45,000/month", letter: "S" },
    { title: "Junior Software Engineer", company: "Global IT Limited", location: "Chattogram, Bangladesh", type: "Internship", salary: "৳15,000 - 20,000/month", letter: "G" },
  ];

  // Filled from the backend later. Empty means "no applications yet".
  const applications = [];

  const appStatusStyle = (status) => {
    switch (status) {
      case "Interview":
        return { background: "#111827", color: "#FFFFFF" };
      case "Shortlisted":
        return { background: "#D1FAE5", color: "#047857" };
      case "Rejected":
        return { background: "#FEE2E2", color: "#B91C1C" };
      default:
        return { background: "#F3F4F6", color: "#374151" };
    }
  };

  const typeStyle = (type) => {
    switch (type) {
      case "Internship":
        return { background: "#FEF3C7", color: "#B45309" };
      case "Part Time":
        return { background: "#FCE7F3", color: "#BE185D" };
      default:
        return { background: "#D1FAE5", color: "#047857" };
    }
  };

  const cardStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "14px",
    padding: "1.75rem",
  };

  const emptyText = {
    margin: 0,
    color: "#6B7280",
    fontSize: "0.88rem",
    padding: "0.5rem 0",
  };

  const infoRows = [
    { icon: Mail, value: user?.email },
    { icon: Phone, value: user?.phone },
    { icon: MapPin, value: user?.location },
    { icon: GraduationCap, value: user?.education },
  ];

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1
        style={{
          color: "#111827",
          marginBottom: "0.3rem",
          fontSize: "1.7rem",
          lineHeight: "1.3",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {getGreeting()}, {getFirstName(name)} <span style={{ fontSize: "1.4rem" }}>👋</span>
      </h1>
      <p style={{ color: "#6B7280", marginBottom: "2rem", fontSize: "0.95rem" }}>
        Here's what's happening with your job search today.
      </p>

      {/* Profile card */}
      <div style={{ ...cardStyle, marginBottom: "1.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.1rem" }}>
            <Avatar name={name} size={64} />
            <div>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1.15rem" }}>{name}</h3>
              <p style={{ margin: "0.2rem 0", color: "#6B7280", fontSize: "0.95rem", fontWeight: 500 }}>
                {roleLabel}
              </p>
              <p style={{ margin: 0, color: "#2563EB", fontSize: "0.8rem", fontWeight: 600 }}>
                Profile completion: {completion}%
              </p>
            </div>
          </div>

          <button
            style={{
              background: "#2563EB",
              color: "#FFFFFF",
              border: "none",
              padding: "0.7rem 1.4rem",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Complete Profile
          </button>
        </div>

        {/* Stat cards row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginTop: "1.75rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid #F3F4F6",
          }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.9rem",
                  background: "#F9FAFB",
                  borderRadius: "12px",
                  padding: "1rem 1.1rem",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "10px",
                    background: s.bg,
                    color: s.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h2 style={{ margin: 0, color: "#111827", fontSize: "1.5rem", lineHeight: 1.1 }}>
                    {s.value}
                  </h2>
                  <p style={{ margin: "0.2rem 0 0", color: "#6B7280", fontSize: "0.8rem" }}>
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two column layout */}
      <div style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Left column */}
        <div style={{ flex: 2, minWidth: "360px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Recommended jobs */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1.1rem" }}>Recommended Jobs</h3>
              <span style={{ color: "#2563EB", fontSize: "0.85rem", cursor: "pointer", fontWeight: 600 }}>
                View all →
              </span>
            </div>

            {recommendedJobs.map((job, i) => (
              <div
                key={job.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.1rem 0",
                  borderBottom: i < recommendedJobs.length - 1 ? "1px solid #F3F4F6" : "none",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "#111827",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {job.letter}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                      <p style={{ margin: 0, color: "#111827", fontWeight: 600, fontSize: "0.95rem" }}>
                        {job.title}
                      </p>
                      <span
                        style={{
                          ...typeStyle(job.type),
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          padding: "0.2rem 0.6rem",
                          borderRadius: "9999px",
                        }}
                      >
                        {job.type}
                      </span>
                    </div>
                    <p style={{ margin: "0.25rem 0 0", color: "#6B7280", fontSize: "0.82rem" }}>
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.1rem" }}>
                  <span style={{ color: "#6B7280", fontSize: "0.82rem" }}>{job.salary}</span>
                  <button
                    style={{
                      background: "#2563EB",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "0.55rem 1.2rem",
                      borderRadius: "8px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recent applications */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1.1rem" }}>Recent Applications</h3>
              <span style={{ color: "#2563EB", fontSize: "0.85rem", cursor: "pointer", fontWeight: 600 }}>
                View all →
              </span>
            </div>

            {applications.length === 0 ? (
              <p style={emptyText}>
                No applications yet. Find a job and press Apply Now to get started.
              </p>
            ) : (
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ textAlign: "left", borderBottom: "1px solid #E5E7EB" }}>
                    <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem", fontWeight: 600 }}>Job Title</th>
                    <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem", fontWeight: 600 }}>Company</th>
                    <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem", fontWeight: 600 }}>Applied Date</th>
                    <th style={{ padding: "0.6rem 0", color: "#6B7280", fontSize: "0.8rem", fontWeight: 600 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.title} style={{ borderBottom: "1px solid #F3F4F6" }}>
                      <td style={{ padding: "0.85rem 0", color: "#111827", fontWeight: 600, fontSize: "0.88rem" }}>
                        {app.title}
                      </td>
                      <td style={{ padding: "0.85rem 0", color: "#6B7280", fontSize: "0.88rem" }}>{app.company}</td>
                      <td style={{ padding: "0.85rem 0", color: "#6B7280", fontSize: "0.88rem" }}>{app.date}</td>
                      <td style={{ padding: "0.85rem 0" }}>
                        <span
                          style={{
                            ...appStatusStyle(app.status),
                            padding: "0.3rem 0.8rem",
                            borderRadius: "9999px",
                            fontSize: "0.78rem",
                            fontWeight: 600,
                          }}
                        >
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Opportunity card */}
          <div
            style={{
              background: "#111827",
              borderRadius: "14px",
              padding: "1.75rem",
              color: "#FFFFFF",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "rgba(37, 99, 235, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Rocket size={22} color="#60A5FA" />
            </div>
            <h3 style={{ margin: "0 0 0.4rem", fontSize: "1.05rem", lineHeight: 1.4 }}>
              Your next opportunity is just a search away!
            </h3>
            <p style={{ margin: 0, color: "#9CA3AF", fontSize: "0.85rem" }}>
              Keep applying, keep growing.
            </p>
          </div>

          {/* Profile summary */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>Profile Summary</h3>
              <span style={{ color: "#2563EB", fontSize: "0.82rem", cursor: "pointer", fontWeight: 600 }}>Edit</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.4rem" }}>
              <Avatar name={name} size={52} />
              <div>
                <p style={{ margin: 0, color: "#111827", fontSize: "0.95rem", fontWeight: 700 }}>{name}</p>
                <p style={{ margin: "0.15rem 0 0", color: "#6B7280", fontSize: "0.8rem" }}>{roleLabel}</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {infoRows.map(({ icon: Icon, value }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#F3F4F6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} color="#6B7280" />
                  </div>
                  <span style={{ color: value ? "#374151" : "#9CA3AF", fontSize: "0.85rem" }}>
                    {value || "Not added yet"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div style={cardStyle}>
            <h3 style={{ margin: "0 0 1.25rem", color: "#111827", fontSize: "1.05rem" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Upload, color: "#2563EB", bg: "#DBEAFE", label: "Upload Resume", sub: "PDF, DOC (Max 2MB)" },
                { icon: UserCog, color: "#7C3AED", bg: "#EDE9FE", label: "Update Profile", sub: "Add skills, experience" },
                { icon: BellRing, color: "#DB2777", bg: "#FCE7F3", label: "Job Alerts", sub: "Get notified about new jobs" },
              ].map(({ icon: Icon, color, bg, label, sub }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: bg,
                        color: color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#111827", fontSize: "0.87rem", fontWeight: 600 }}>
                        {label}
                      </p>
                      <p style={{ margin: "0.1rem 0 0", color: "#9CA3AF", fontSize: "0.75rem" }}>{sub}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} color="#9CA3AF" style={{ flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>

          {/* Saved jobs */}
          <div style={cardStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>Saved Jobs</h3>
              <span style={{ color: "#2563EB", fontSize: "0.82rem", cursor: "pointer", fontWeight: 600 }}>
                View all →
              </span>
            </div>

            {savedJobs.length === 0 ? (
              <p style={emptyText}>No saved jobs yet. Tap the heart on a job to save it.</p>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                {savedJobs.slice(0, 3).map((job, i) => {
                  const company = job.company || job.companyName || "";
                  const letter = (company || job.title || "?").charAt(0).toUpperCase();
                  return (
                    <div key={job.id ?? i} style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "8px",
                          background: "#F3F4F6",
                          color: "#374151",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          flexShrink: 0,
                        }}
                      >
                        {letter}
                      </div>
                      <div>
                        <p style={{ margin: 0, color: "#111827", fontSize: "0.85rem", fontWeight: 600 }}>
                          {job.title}
                        </p>
                        <p style={{ margin: "0.1rem 0 0", color: "#6B7280", fontSize: "0.78rem" }}>{company}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { getInitials } from "../../utils/initials";
import {
  Camera,
  Edit,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  FileText,
  Eye,
  Download,
  MoreVertical,
  Upload,
  UserCog,
  FolderPlus,
  CheckCircle2,
  Circle,
  Sparkles,
} from "lucide-react";

const TABS = ["CV / Resume", "Cover Letter", "Additional Documents"];

const cardStyle = {
  background: "#FFFFFF",
  border: "1px solid #E5E7EB",
  borderRadius: "14px",
  padding: "1.5rem",
};

const primaryBtn = {
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  background: "#2563EB",
  color: "#FFFFFF",
  border: "none",
  padding: "0.55rem 1.1rem",
  borderRadius: "8px",
  fontSize: "0.82rem",
  fontWeight: 600,
  cursor: "pointer",
};

const outlineBtn = {
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  background: "#FFFFFF",
  color: "#2563EB",
  border: "1.5px solid #2563EB",
  padding: "0.5rem 1.1rem",
  borderRadius: "8px",
  fontSize: "0.82rem",
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const grayBtn = {
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
  background: "#F9FAFB",
  color: "#374151",
  border: "1px solid #E5E7EB",
  padding: "0.4rem 0.8rem",
  borderRadius: "7px",
  fontSize: "0.78rem",
  fontWeight: 600,
  cursor: "pointer",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  padding: "0.5rem 0.7rem",
  fontSize: "0.85rem",
  color: "#111827",
  outline: "none",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.25rem",
  color: "#374151",
  fontSize: "0.78rem",
  fontWeight: 600,
};

function InfoRow({ icon: Icon, text }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        color: text ? "#374151" : "#9CA3AF",
        fontSize: "0.82rem",
      }}
    >
      <span
        style={{
          width: "26px",
          height: "26px",
          borderRadius: "7px",
          background: "#F3F4F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={13} color="#6B7280" />
      </span>
      {text || "Not added yet"}
    </span>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
}

export default function Profile() {
  const { user, updateUser } = useAuth();
  const name = user?.name || "Guest User";
  const roleLabel = user?.role === "employer" ? "Employer" : "Job Seeker";

  const [activeTab, setActiveTab] = useState("CV / Resume");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    education: "",
  });

  const startEditing = () => {
    setForm({
      name: user?.name && user.name !== "Guest User" ? user.name : "",
      email: user?.email || "",
      phone: user?.phone || "",
      location: user?.location || "",
      education: user?.education || "",
    });
    setEditing(true);
  };

  const setField = (key) => (value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const saveProfile = (e) => {
    e.preventDefault();
    updateUser({
      name: form.name.trim() || "Guest User",
      email: form.email.trim(),
      phone: form.phone.trim(),
      location: form.location.trim(),
      education: form.education.trim(),
    });
    setEditing(false);
  };

  // Filled from the backend later. Empty means "no resumes yet".
  const resumes = [];

  // Same five fields the Dashboard uses, so both pages show the same percentage
  const checklist = [
    { label: "Full name", done: name !== "Guest User" },
    { label: "Email address", done: Boolean(user?.email) },
    { label: "Phone number", done: Boolean(user?.phone) },
    { label: "Location", done: Boolean(user?.location) },
    { label: "Education", done: Boolean(user?.education) },
  ];

  const completedCount = checklist.filter((c) => c.done).length;
  const completionPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.3rem", fontSize: "1.7rem" }}>
        Profile / Resume
      </h1>
      <p style={{ color: "#6B7280", marginBottom: "1.75rem" }}>
        Keep your profile and documents up to date so employers can find you.
      </p>

      <div style={{ display: "flex", gap: "1.75rem", alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Left column */}
        <div style={{ flex: 2, minWidth: "360px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Profile header card */}
          <div style={cardStyle}>
            {editing ? (
              <form onSubmit={saveProfile}>
                <h2 style={{ margin: 0, color: "#111827", fontSize: "1.15rem" }}>Edit profile</h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "1rem",
                    marginTop: "1.1rem",
                  }}
                >
                  <Field label="Full name" value={form.name} onChange={setField("name")} placeholder="Jane Doe" />
                  <Field label="Email address" type="email" value={form.email} onChange={setField("email")} placeholder="you@example.com" />
                  <Field label="Phone number" value={form.phone} onChange={setField("phone")} placeholder="+880 1XXXXXXXXX" />
                  <Field label="Location" value={form.location} onChange={setField("location")} placeholder="Chattogram, Bangladesh" />
                  <Field label="Education" value={form.education} onChange={setField("education")} placeholder="B.Sc in CSE, IIUC" />
                </div>
                <div style={{ display: "flex", gap: "0.7rem", marginTop: "1.25rem" }}>
                  <button type="submit" style={primaryBtn}>Save changes</button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    style={{ ...grayBtn, padding: "0.55rem 1.1rem", fontSize: "0.82rem" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.1rem" }}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "#DBEAFE",
                        color: "#2563EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "1.5rem",
                      }}
                    >
                      {getInitials(name)}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        background: "#2563EB",
                        borderRadius: "50%",
                        width: "26px",
                        height: "26px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        border: "2px solid #FFFFFF",
                      }}
                    >
                      <Camera size={13} color="#FFFFFF" />
                    </div>
                  </div>
                  <div>
                    <h2 style={{ margin: 0, color: "#111827", fontSize: "1.15rem" }}>{name}</h2>
                    <p style={{ margin: "0.15rem 0 0.7rem", color: "#6B7280", fontSize: "0.85rem" }}>
                      {roleLabel}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                      <InfoRow icon={GraduationCap} text={user?.education} />
                      <InfoRow icon={MapPin} text={user?.location} />
                      <InfoRow icon={Mail} text={user?.email} />
                      <InfoRow icon={Phone} text={user?.phone} />
                    </div>
                  </div>
                </div>

                <button onClick={startEditing} style={outlineBtn}>
                  <Edit size={14} /> Edit Profile
                </button>
              </div>
            )}
          </div>

          {/* Tabs + documents card */}
          <div style={cardStyle}>
            <div style={{ display: "flex", gap: "1.5rem", borderBottom: "1px solid #E5E7EB", marginBottom: "1.25rem" }}>
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "0 0 0.8rem",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: activeTab === tab ? "#2563EB" : "#6B7280",
                    borderBottom: activeTab === tab ? "2px solid #2563EB" : "2px solid transparent",
                    cursor: "pointer",
                    marginBottom: "-1px",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "CV / Resume" && (
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.1rem" }}>
                  <h3 style={{ margin: 0, color: "#111827", fontSize: "1rem" }}>My Resumes</h3>
                  <button style={primaryBtn}>
                    <Upload size={14} /> Upload New CV
                  </button>
                </div>

                {resumes.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "2.5rem 0", color: "#6B7280" }}>
                    <FileText size={32} color="#D1D5DB" style={{ marginBottom: "0.8rem" }} />
                    <p style={{ margin: 0, fontSize: "0.9rem" }}>
                      No resumes uploaded yet. Upload your CV so employers can find you.
                    </p>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                    {resumes.map((file) => (
                      <div
                        key={file.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          border: "1px solid #F3F4F6",
                          borderRadius: "10px",
                          padding: "0.9rem 1rem",
                          flexWrap: "wrap",
                          gap: "0.7rem",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "8px",
                              background: file.type === "pdf" ? "#FEE2E2" : "#DBEAFE",
                              color: file.type === "pdf" ? "#B91C1C" : "#2563EB",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <FileText size={18} />
                          </div>
                          <div>
                            <p style={{ margin: 0, color: "#111827", fontWeight: 600, fontSize: "0.87rem" }}>
                              {file.name}
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.2rem" }}>
                              <span style={{ color: "#9CA3AF", fontSize: "0.75rem" }}>
                                Updated on {file.updated} · {file.size}
                              </span>
                              <span
                                style={{
                                  background: file.tag === "Default" ? "#D1FAE5" : "#F3F4F6",
                                  color: file.tag === "Default" ? "#047857" : "#6B7280",
                                  fontSize: "0.68rem",
                                  fontWeight: 600,
                                  padding: "0.1rem 0.5rem",
                                  borderRadius: "9999px",
                                }}
                              >
                                {file.tag}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                          <button style={grayBtn}>
                            <Eye size={13} /> Preview
                          </button>
                          <button style={grayBtn}>
                            <Download size={13} /> Download
                          </button>
                          <MoreVertical size={16} color="#9CA3AF" style={{ cursor: "pointer" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === "Cover Letter" && (
              <div style={{ textAlign: "center", padding: "2.5rem 0", color: "#6B7280" }}>
                <FileText size={32} color="#D1D5DB" style={{ marginBottom: "0.8rem" }} />
                <p style={{ margin: 0, fontSize: "0.9rem" }}>No cover letter uploaded yet.</p>
              </div>
            )}

            {activeTab === "Additional Documents" && (
              <div style={{ textAlign: "center", padding: "2.5rem 0", color: "#6B7280" }}>
                <FolderPlus size={32} color="#D1D5DB" style={{ marginBottom: "0.8rem" }} />
                <p style={{ margin: 0, fontSize: "0.9rem" }}>No additional documents added yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Profile completion */}
          <div style={cardStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.1rem", marginBottom: "1.3rem" }}>
              <div
                style={{
                  position: "relative",
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: `conic-gradient(#2563EB ${completionPercent * 3.6}deg, #E5E7EB 0deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "50%",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#111827",
                    fontSize: "0.95rem",
                  }}
                >
                  {completionPercent}%
                </div>
              </div>
              <div>
                <h3 style={{ margin: 0, color: "#111827", fontSize: "1rem" }}>Profile Completion</h3>
                <p style={{ margin: "0.2rem 0 0", color: "#6B7280", fontSize: "0.78rem" }}>
                  Complete your profile to get more job recommendations.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {checklist.map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    {item.done ? (
                      <CheckCircle2 size={17} color="#059669" />
                    ) : (
                      <Circle size={17} color="#D1D5DB" />
                    )}
                    <span
                      style={{
                        color: item.done ? "#374151" : "#9CA3AF",
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  {!item.done && (
                    <button
                      onClick={startEditing}
                      style={{
                        background: "none",
                        border: "none",
                        padding: 0,
                        color: "#2563EB",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div style={cardStyle}>
            <h3 style={{ margin: "0 0 1.1rem", color: "#111827", fontSize: "1rem" }}>Quick Actions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: FileText, label: "Create New Resume", sub: "Build a professional CV from scratch" },
                { icon: UserCog, label: "Edit Profile", sub: "Update your personal and academic info", onClick: startEditing },
                { icon: FolderPlus, label: "Manage Documents", sub: "Add certificates, portfolio, etc." },
              ].map(({ icon: Icon, label, sub, onClick }) => (
                <div
                  key={label}
                  onClick={onClick}
                  style={{ display: "flex", alignItems: "center", gap: "0.8rem", cursor: "pointer" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "9px",
                      background: "#DBEAFE",
                      color: "#2563EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} />
                  </div>
                  <div>
                    <p style={{ margin: 0, color: "#111827", fontSize: "0.85rem", fontWeight: 600 }}>
                      {label}
                    </p>
                    <p style={{ margin: "0.1rem 0 0", color: "#9CA3AF", fontSize: "0.75rem" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stand out card */}
          <div style={{ ...cardStyle, background: "#111827", border: "none" }}>
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "rgba(37, 99, 235, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0.9rem",
              }}
            >
              <Sparkles size={20} color="#60A5FA" />
            </div>
            <h3 style={{ margin: "0 0 0.4rem", color: "#FFFFFF", fontSize: "0.95rem" }}>
              Stand out from the crowd!
            </h3>
            <p style={{ margin: "0 0 1.1rem", color: "#9CA3AF", fontSize: "0.8rem", lineHeight: 1.5 }}>
              A complete profile and updated CV can help you get noticed by employers.
            </p>
            <button
              onClick={startEditing}
              style={{
                background: "#2563EB",
                color: "#FFFFFF",
                border: "none",
                padding: "0.6rem 1.1rem",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Update Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
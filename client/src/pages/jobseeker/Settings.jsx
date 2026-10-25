import { useState, useEffect } from "react";
import {
  User,
  Lock,
  Bell,
  Shield,
  Trash2,
  Save,
  Eye,
  EyeOff,
  AlertTriangle,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

const JOB_TYPE_OPTIONS = ["Full Time", "Part Time", "Internship", "Contract", "Freelance"];

function getPasswordStrength(pw) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const labels = ["Very weak", "Weak", "Fair", "Good", "Strong"];
  const colors = ["#EF4444", "#F97316", "#F59E0B", "#3B82F6", "#059669"];
  return { score, label: labels[score], color: colors[score] };
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "9999px",
        border: "none",
        background: checked ? "#2563EB" : "#D1D5DB",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "3px",
          left: checked ? "23px" : "3px",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "#FFFFFF",
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}

export default function Settings() {
  const [email, setEmail] = useState("nowshinrahim@gmail.com");
  const [phone, setPhone] = useState("+880 1XXXXXXXXX");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [jobPrefs, setJobPrefs] = useState({
    types: ["Full Time", "Internship"],
    location: "Chattogram, Bangladesh",
    salary: "",
    openToRemote: true,
  });

  const [notifPrefs, setNotifPrefs] = useState({
    emailApplications: true,
    emailMessages: true,
    emailJobMatches: false,
    pushApplications: true,
    pushMessages: true,
    pushJobMatches: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(timer);
  }, [toast]);

  function showToast(message, type = "success") {
    setToast({ message, type });
  }

  function updateNotif(key) {
    setNotifPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function updatePrivacy(key) {
    setPrivacy((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function toggleJobType(type) {
    setJobPrefs((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  }

  function handleSaveAccount(e) {
    e.preventDefault();
    showToast("Account settings saved successfully.");
  }

  function handleSaveJobPrefs(e) {
    e.preventDefault();
    showToast("Job preferences saved successfully.");
  }

  function handleChangePassword(e) {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      showToast("Please fill in both password fields.", "error");
      return;
    }
    showToast("Password updated successfully.");
    setCurrentPassword("");
    setNewPassword("");
  }

  function handleDeleteAccount() {
    showToast("Account deletion is disabled in this demo.", "error");
    setShowDeleteConfirm(false);
  }

  const strength = getPasswordStrength(newPassword);

  const cardStyle = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "14px",
    padding: "1.75rem",
    marginBottom: "1.5rem",
  };

  const sectionHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.7rem",
    marginBottom: "1.4rem",
  };

  const iconBoxStyle = (bg, color) => ({
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    background: bg,
    color: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  });

  const labelStyle = {
    display: "block",
    marginBottom: "0.4rem",
    color: "#111827",
    fontWeight: 600,
    fontSize: "0.85rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.65rem 0.9rem",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    marginBottom: "1.1rem",
    fontSize: "0.9rem",
    boxSizing: "border-box",
  };

  const toggleRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.8rem 0",
    borderBottom: "1px solid #F3F4F6",
  };

  const primaryButtonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    padding: "0.65rem 1.3rem",
    borderRadius: "8px",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: "720px" }}>
      {/* Toast notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: toast.type === "error" ? "#FEF2F2" : "#F0FDF4",
            border: `1px solid ${toast.type === "error" ? "#FECACA" : "#BBF7D0"}`,
            color: toast.type === "error" ? "#B91C1C" : "#166534",
            padding: "0.8rem 1.1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            fontSize: "0.87rem",
            fontWeight: 600,
          }}
        >
          {toast.type === "error" ? <AlertTriangle size={17} /> : <CheckCircle2 size={17} />}
          {toast.message}
        </div>
      )}

      <h1 style={{ color: "#111827", marginBottom: "0.3rem", fontSize: "1.7rem" }}>Settings</h1>
      <p style={{ color: "#6B7280", marginBottom: "1.75rem" }}>
        Manage your account, job preferences, notifications, and privacy.
      </p>

      {/* Account settings */}
      <div style={cardStyle}>
        <div style={sectionHeaderStyle}>
          <div style={iconBoxStyle("#DBEAFE", "#2563EB")}>
            <User size={19} />
          </div>
          <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>Account Information</h3>
        </div>

        <form onSubmit={handleSaveAccount}>
          <label style={labelStyle}>Email Address</label>
          <input
            style={inputStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label style={labelStyle}>Phone Number</label>
          <input
            style={{ ...inputStyle, marginBottom: "1.4rem" }}
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit" style={primaryButtonStyle}>
            <Save size={15} /> Save Changes
          </button>
        </form>
      </div>

      {/* Job preferences */}
      <div style={cardStyle}>
        <div style={sectionHeaderStyle}>
          <div style={iconBoxStyle("#FCE7F3", "#BE185D")}>
            <Briefcase size={19} />
          </div>
          <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>Job Preferences</h3>
        </div>

        <form onSubmit={handleSaveJobPrefs}>
          <label style={labelStyle}>Preferred Job Types</label>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.2rem" }}>
            {JOB_TYPE_OPTIONS.map((type) => {
              const selected = jobPrefs.types.includes(type);
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => toggleJobType(type)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "9999px",
                    border: selected ? "1.5px solid #2563EB" : "1.5px solid #E5E7EB",
                    background: selected ? "#DBEAFE" : "#FFFFFF",
                    color: selected ? "#2563EB" : "#6B7280",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>

          <label style={labelStyle}>Preferred Location</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="e.g. Chattogram, Bangladesh"
            value={jobPrefs.location}
            onChange={(e) => setJobPrefs((prev) => ({ ...prev, location: e.target.value }))}
          />

          <label style={labelStyle}>Expected Salary (per month)</label>
          <input
            style={inputStyle}
            type="text"
            placeholder="e.g. TK 30,000"
            value={jobPrefs.salary}
            onChange={(e) => setJobPrefs((prev) => ({ ...prev, salary: e.target.value }))}
          />

          <div style={{ ...toggleRowStyle, borderBottom: "none", marginBottom: "0.8rem" }}>
            <div>
              <p style={{ margin: 0, color: "#374151", fontSize: "0.87rem", fontWeight: 600 }}>
                Open to remote work
              </p>
              <p style={{ margin: "0.15rem 0 0", color: "#9CA3AF", fontSize: "0.75rem" }}>
                Show me jobs that can be done from anywhere
              </p>
            </div>
            <Toggle
              checked={jobPrefs.openToRemote}
              onChange={(v) => setJobPrefs((prev) => ({ ...prev, openToRemote: v }))}
            />
          </div>

          <button type="submit" style={primaryButtonStyle}>
            <Save size={15} /> Save Preferences
          </button>
        </form>
      </div>

      {/* Change password */}
      <div style={cardStyle}>
        <div style={sectionHeaderStyle}>
          <div style={iconBoxStyle("#EDE9FE", "#7C3AED")}>
            <Lock size={19} />
          </div>
          <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>Change Password</h3>
        </div>

        <form onSubmit={handleChangePassword}>
          <label style={labelStyle}>Current Password</label>
          <input
            style={inputStyle}
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <label style={labelStyle}>New Password</label>
          <div style={{ position: "relative", marginBottom: newPassword ? "0.7rem" : "1.4rem" }}>
            <input
              style={{ ...inputStyle, marginBottom: 0, paddingRight: "2.6rem" }}
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "0.7rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
              }}
            >
              {showPassword ? (
                <EyeOff size={16} color="#9CA3AF" />
              ) : (
                <Eye size={16} color="#9CA3AF" />
              )}
            </button>
          </div>

          {/* Password strength meter */}
          {newPassword && (
            <div style={{ marginBottom: "1.4rem" }}>
              <div style={{ display: "flex", gap: "0.35rem", marginBottom: "0.4rem" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: "5px",
                      borderRadius: "9999px",
                      background: i <= strength.score ? strength.color : "#E5E7EB",
                      transition: "background 0.2s",
                    }}
                  />
                ))}
              </div>
              <p style={{ margin: 0, fontSize: "0.75rem", color: strength.color, fontWeight: 600 }}>
                {strength.label}
              </p>
            </div>
          )}

          <button type="submit" style={primaryButtonStyle}>
            <Save size={15} /> Update Password
          </button>
        </form>
      </div>

      {/* Notification preferences */}
      <div style={cardStyle}>
        <div style={sectionHeaderStyle}>
          <div style={iconBoxStyle("#FEF3C7", "#B45309")}>
            <Bell size={19} />
          </div>
          <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>
            Notification Preferences
          </h3>
        </div>

        <p style={{ color: "#9CA3AF", fontSize: "0.78rem", fontWeight: 700, marginBottom: "0.3rem" }}>
          EMAIL NOTIFICATIONS
        </p>
        <div style={toggleRowStyle}>
          <span style={{ color: "#374151", fontSize: "0.87rem" }}>Application updates</span>
          <Toggle
            checked={notifPrefs.emailApplications}
            onChange={() => updateNotif("emailApplications")}
          />
        </div>
        <div style={toggleRowStyle}>
          <span style={{ color: "#374151", fontSize: "0.87rem" }}>New messages</span>
          <Toggle checked={notifPrefs.emailMessages} onChange={() => updateNotif("emailMessages")} />
        </div>
        <div style={toggleRowStyle}>
          <span style={{ color: "#374151", fontSize: "0.87rem" }}>New job matches</span>
          <Toggle
            checked={notifPrefs.emailJobMatches}
            onChange={() => updateNotif("emailJobMatches")}
          />
        </div>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: "0.78rem",
            fontWeight: 700,
            marginTop: "1.3rem",
            marginBottom: "0.3rem",
          }}
        >
          PUSH NOTIFICATIONS
        </p>
        <div style={toggleRowStyle}>
          <span style={{ color: "#374151", fontSize: "0.87rem" }}>Application updates</span>
          <Toggle
            checked={notifPrefs.pushApplications}
            onChange={() => updateNotif("pushApplications")}
          />
        </div>
        <div style={toggleRowStyle}>
          <span style={{ color: "#374151", fontSize: "0.87rem" }}>New messages</span>
          <Toggle checked={notifPrefs.pushMessages} onChange={() => updateNotif("pushMessages")} />
        </div>
        <div style={{ ...toggleRowStyle, borderBottom: "none" }}>
          <span style={{ color: "#374151", fontSize: "0.87rem" }}>New job matches</span>
          <Toggle
            checked={notifPrefs.pushJobMatches}
            onChange={() => updateNotif("pushJobMatches")}
          />
        </div>
      </div>

      {/* Privacy settings */}
      <div style={cardStyle}>
        <div style={sectionHeaderStyle}>
          <div style={iconBoxStyle("#D1FAE5", "#059669")}>
            <Shield size={19} />
          </div>
          <h3 style={{ margin: 0, color: "#111827", fontSize: "1.05rem" }}>Privacy</h3>
        </div>

        <div style={toggleRowStyle}>
          <div>
            <p style={{ margin: 0, color: "#374151", fontSize: "0.87rem", fontWeight: 600 }}>
              Profile visible to employers
            </p>
            <p style={{ margin: "0.15rem 0 0", color: "#9CA3AF", fontSize: "0.75rem" }}>
              Employers can find and view your profile
            </p>
          </div>
          <Toggle checked={privacy.profileVisible} onChange={() => updatePrivacy("profileVisible")} />
        </div>
        <div style={toggleRowStyle}>
          <div>
            <p style={{ margin: 0, color: "#374151", fontSize: "0.87rem", fontWeight: 600 }}>
              Show email on profile
            </p>
          </div>
          <Toggle checked={privacy.showEmail} onChange={() => updatePrivacy("showEmail")} />
        </div>
        <div style={{ ...toggleRowStyle, borderBottom: "none" }}>
          <div>
            <p style={{ margin: 0, color: "#374151", fontSize: "0.87rem", fontWeight: 600 }}>
              Show phone number on profile
            </p>
          </div>
          <Toggle checked={privacy.showPhone} onChange={() => updatePrivacy("showPhone")} />
        </div>
      </div>

      {/* Danger zone */}
      <div style={{ ...cardStyle, border: "1px solid #FEE2E2", background: "#FFFBFB" }}>
        <div style={sectionHeaderStyle}>
          <div style={iconBoxStyle("#FEE2E2", "#B91C1C")}>
            <AlertTriangle size={19} />
          </div>
          <h3 style={{ margin: 0, color: "#B91C1C", fontSize: "1.05rem" }}>Danger Zone</h3>
        </div>

        <p style={{ color: "#6B7280", fontSize: "0.87rem", marginBottom: "1.1rem" }}>
          Deleting your account is permanent and cannot be undone. All your applications,
          saved jobs, and profile data will be removed.
        </p>

        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#FFFFFF",
              color: "#B91C1C",
              border: "1.5px solid #B91C1C",
              padding: "0.65rem 1.3rem",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <Trash2 size={15} /> Delete Account
          </button>
        ) : (
          <div>
            <p style={{ color: "#B91C1C", fontSize: "0.87rem", fontWeight: 600, marginBottom: "0.9rem" }}>
              Are you sure? This action cannot be undone.
            </p>
            <div style={{ display: "flex", gap: "0.7rem" }}>
              <button
                onClick={handleDeleteAccount}
                style={{
                  background: "#B91C1C",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Yes, delete my account
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  background: "#F3F4F6",
                  color: "#374151",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
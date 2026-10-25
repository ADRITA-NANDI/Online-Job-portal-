import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  CheckCircle2,
  Briefcase,
  MessageSquare,
  AlertCircle,
  Sparkles,
  Trash2,
  ArrowRight,
  Heart,
} from "lucide-react";

const notifCss = `
.filter-tab {
  padding: 0.5rem 1.1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #374151;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.filter-tab:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.15);
}
.filter-tab.active {
  background: #2563EB;
  color: #FFFFFF;
  border-color: #2563EB;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
}

.notif-primary-btn {
  background: #2563EB;
  color: #FFFFFF;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.notif-primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.35);
}

.notif-list {
  border-radius: 16px;
  overflow: hidden;
}

.notif-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.1rem 1.4rem;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}
.notif-row:not(:last-child) {
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
}
.notif-row.unread {
  background: rgba(219, 234, 254, 0.55);
}
.notif-row:hover {
  background: rgba(255, 255, 255, 0.78);
  box-shadow: inset 3px 0 0 #2563EB;
}

.notif-icon { transition: transform 0.2s ease; }
.notif-row:hover .notif-icon { transform: scale(1.1) rotate(-4deg); }

.notif-view {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #2563EB;
  font-size: 0.78rem;
  font-weight: 600;
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.notif-row:hover .notif-view { opacity: 1; transform: translateX(3px); }

.notif-trash {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 8px;
  color: #9CA3AF;
  display: flex;
  transition: color 0.2s ease, background 0.2s ease;
}
.notif-trash:hover { color: #EF4444; background: rgba(254, 226, 226, 0.8); }
`;

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "application",
    icon: CheckCircle2,
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    title: "Application status updated",
    message: "Your application for Senior Frontend Engineer at Northbridge moved to Interview stage.",
    time: "10 minutes ago",
    read: false,
    link: "/my-applications",
  },
  {
    id: 2,
    type: "message",
    icon: MessageSquare,
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    title: "New message from Northbridge HR",
    message: "Great! We'd like to schedule an interview for next week.",
    time: "24 minutes ago",
    read: false,
    link: "/messages",
  },
  {
    id: 3,
    type: "job",
    icon: Briefcase,
    iconBg: "#FEF3C7",
    iconColor: "#B45309",
    title: "New job matches your profile",
    message: "5 new Frontend Developer roles in Chattogram match your skills.",
    time: "2 hours ago",
    read: false,
    link: "/jobs",
  },
  {
    id: 4,
    type: "application",
    icon: AlertCircle,
    iconBg: "#FEE2E2",
    iconColor: "#B91C1C",
    title: "Application not selected",
    message: "Your application for UI/UX Designer at DesignHub was not selected this time.",
    time: "Yesterday",
    read: true,
    link: "/my-applications",
  },
  {
    id: 5,
    type: "system",
    icon: Sparkles,
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    title: "Complete your profile",
    message: "Add a cover letter to boost your profile completion to 100%.",
    time: "2 days ago",
    read: true,
    link: "/profile",
  },
  {
    id: 6,
    type: "job",
    icon: Heart,
    iconBg: "#FCE7F3",
    iconColor: "#BE185D",
    title: "Saved job is closing soon",
    message: "Backend Engineer (Node.js) at CloudNine is closing applications in 3 days.",
    time: "3 days ago",
    read: true,
    link: "/saved-jobs",
  },
];

const FILTERS = ["All", "Applications", "Jobs", "Messages", "System"];

function filterMatches(filter, type) {
  if (filter === "All") return true;
  if (filter === "Applications") return type === "application";
  if (filter === "Jobs") return type === "job";
  if (filter === "Messages") return type === "message";
  if (filter === "System") return type === "system";
  return true;
}

export default function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState("All");

  const unreadCount = notifications.filter((n) => !n.read).length;
  const filtered = notifications.filter((n) => filterMatches(activeFilter, n.type));

  function markAsRead(id) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function removeNotification(id) {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }

  function handleNotificationClick(n) {
    markAsRead(n.id);
    if (n.link) navigate(n.link);
  }

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <style>{notifCss}</style>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ color: "#111827", marginBottom: "0.3rem", fontSize: "1.7rem" }}>
            Notifications
          </h1>
          <p style={{ color: "#6B7280", margin: 0 }}>
            Stay updated on your applications, messages, and new job matches.
          </p>
        </div>

        {unreadCount > 0 && (
          <button className="notif-primary-btn" onClick={markAllAsRead}>
            Mark all as read ({unreadCount})
          </button>
        )}
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-tab ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Notification list */}
      {filtered.length === 0 ? (
        <div
          className="glass"
          style={{
            borderRadius: "16px",
            padding: "4rem 2rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "#DBEAFE",
              color: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}
          >
            <Bell size={28} />
          </div>
          <h2 style={{ color: "#111827", margin: "0 0 0.4rem", fontSize: "1.2rem" }}>
            No notifications here
          </h2>
          <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>
            You're all caught up in this category.
          </p>
        </div>
      ) : (
        <div className="glass notif-list">
          {filtered.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.id}
                className={`notif-row ${n.read ? "" : "unread"}`}
                onClick={() => handleNotificationClick(n)}
              >
                <div
                  className="notif-icon"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: n.iconBg,
                    color: n.iconColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={19} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <p
                      style={{
                        margin: 0,
                        color: "#111827",
                        fontWeight: n.read ? 600 : 700,
                        fontSize: "0.92rem",
                      }}
                    >
                      {n.title}
                    </p>
                    {!n.read && (
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#2563EB",
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </div>
                  <p style={{ margin: "0.3rem 0 0", color: "#6B7280", fontSize: "0.85rem", lineHeight: 1.5 }}>
                    {n.message}
                  </p>
                  <p style={{ margin: "0.4rem 0 0", color: "#9CA3AF", fontSize: "0.75rem" }}>
                    {n.time}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", flexShrink: 0 }}>
                  <span className="notif-view">
                    View <ArrowRight size={14} />
                  </span>

                  <button
                    className="notif-trash"
                    title="Remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeNotification(n.id);
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
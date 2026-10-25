import { useState } from "react";
import { Search, Send, Paperclip, MoreVertical, CheckCheck } from "lucide-react";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Northbridge HR",
    role: "Senior Frontend Engineer",
    avatarColor: "#DBEAFE",
    avatarText: "#2563EB",
    lastMessage: "Great! We'd like to schedule an interview for next week.",
    time: "10:24 AM",
    unread: 2,
    online: true,
    messages: [
      { id: 1, from: "them", text: "Hi Nowshin, thanks for applying to the Senior Frontend Engineer role!", time: "9:58 AM" },
      { id: 2, from: "them", text: "We reviewed your profile and would love to move forward.", time: "10:00 AM" },
      { id: 3, from: "me", text: "That's great to hear! I'm very interested in this opportunity.", time: "10:15 AM" },
      { id: 4, from: "them", text: "Great! We'd like to schedule an interview for next week.", time: "10:24 AM" },
    ],
  },
  {
    id: 2,
    name: "Chattogram Labs",
    role: "Product Designer",
    avatarColor: "#FCE7F3",
    avatarText: "#BE185D",
    lastMessage: "Could you share your portfolio link?",
    time: "Yesterday",
    unread: 0,
    online: false,
    messages: [
      { id: 1, from: "them", text: "Hello! Thanks for your application for Product Designer.", time: "Yesterday, 3:10 PM" },
      { id: 2, from: "them", text: "Could you share your portfolio link?", time: "Yesterday, 3:11 PM" },
      { id: 3, from: "me", text: "Sure, sending it over shortly!", time: "Yesterday, 4:02 PM" },
    ],
  },
  {
    id: 3,
    name: "CloudNine Recruiter",
    role: "Backend Engineer (Node.js)",
    avatarColor: "#D1FAE5",
    avatarText: "#047857",
    lastMessage: "You: Thank you, looking forward to it!",
    time: "2 days ago",
    unread: 0,
    online: true,
    messages: [
      { id: 1, from: "them", text: "Your application has moved to the interview stage.", time: "2 days ago" },
      { id: 2, from: "me", text: "Thank you, looking forward to it!", time: "2 days ago" },
    ],
  },
  {
    id: 4,
    name: "NexGen Digital",
    role: "UI/UX Designer",
    avatarColor: "#FEF3C7",
    avatarText: "#B45309",
    lastMessage: "We'll get back to you by Friday.",
    time: "1 week ago",
    unread: 0,
    online: false,
    messages: [
      { id: 1, from: "them", text: "Thanks for interviewing with us yesterday!", time: "1 week ago" },
      { id: 2, from: "them", text: "We'll get back to you by Friday.", time: "1 week ago" },
    ],
  },
];

export default function Messages() {
  const [conversations, setConversations] = useState(CONVERSATIONS);
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id);
  const [draft, setDraft] = useState("");
  const [search, setSearch] = useState("");

  const active = conversations.find((c) => c.id === activeId);

  const filteredConversations = conversations.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase())
  );

  function selectConversation(id) {
    setActiveId(id);
    setConversations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c))
    );
  }

  function sendMessage() {
    if (!draft.trim()) return;
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastMessage: `You: ${draft}`,
              time: "Just now",
              messages: [
                ...c.messages,
                { id: Date.now(), from: "me", text: draft, time: "Just now" },
              ],
            }
          : c
      )
    );
    setDraft("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#111827", marginBottom: "0.3rem", fontSize: "1.7rem" }}>Messages</h1>
      <p style={{ color: "#6B7280", marginBottom: "1.5rem" }}>
        Conversations with employers about your applications.
      </p>

      <div
        style={{
          display: "flex",
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "14px",
          overflow: "hidden",
          height: "600px",
        }}
      >
        {/* Conversation list */}
        <div
          style={{
            width: "320px",
            borderRight: "1px solid #E5E7EB",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "1rem", borderBottom: "1px solid #F3F4F6" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                padding: "0.5rem 0.8rem",
                background: "#F9FAFB",
              }}
            >
              <Search size={15} color="#9CA3AF" />
              <input
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "0.85rem",
                  width: "100%",
                  background: "transparent",
                }}
                type="text"
                placeholder="Search conversations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {filteredConversations.map((c) => (
              <div
                key={c.id}
                onClick={() => selectConversation(c.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.9rem 1rem",
                  cursor: "pointer",
                  background: c.id === activeId ? "#F0F5FF" : "transparent",
                  borderLeft: c.id === activeId ? "3px solid #2563EB" : "3px solid transparent",
                }}
              >
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: c.avatarColor,
                      color: c.avatarText,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {c.name.charAt(0)}
                  </div>
                  {c.online && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#22C55E",
                        border: "2px solid #FFFFFF",
                      }}
                    />
                  )}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <p
                      style={{
                        margin: 0,
                        color: "#111827",
                        fontWeight: 600,
                        fontSize: "0.87rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {c.name}
                    </p>
                    <span style={{ color: "#9CA3AF", fontSize: "0.7rem", flexShrink: 0, marginLeft: "0.4rem" }}>
                      {c.time}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "0.15rem 0 0",
                      color: c.unread > 0 ? "#111827" : "#6B7280",
                      fontWeight: c.unread > 0 ? 600 : 400,
                      fontSize: "0.78rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {c.lastMessage}
                  </p>
                </div>

                {c.unread > 0 && (
                  <span
                    style={{
                      background: "#2563EB",
                      color: "#FFFFFF",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      borderRadius: "9999px",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {c.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {active ? (
            <>
              {/* Chat header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: active.avatarColor,
                      color: active.avatarText,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    {active.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ margin: 0, color: "#111827", fontWeight: 700, fontSize: "0.9rem" }}>
                      {active.name}
                    </p>
                    <p style={{ margin: 0, color: "#6B7280", fontSize: "0.75rem" }}>
                      {active.role} {active.online && "· Online"}
                    </p>
                  </div>
                </div>
                <MoreVertical size={18} color="#9CA3AF" style={{ cursor: "pointer" }} />
              </div>

              {/* Message thread */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.9rem",
                  background: "#F9FAFB",
                }}
              >
                {active.messages.map((m) => (
                  <div
                    key={m.id}
                    style={{
                      alignSelf: m.from === "me" ? "flex-end" : "flex-start",
                      maxWidth: "70%",
                    }}
                  >
                    <div
                      style={{
                        background: m.from === "me" ? "#2563EB" : "#FFFFFF",
                        color: m.from === "me" ? "#FFFFFF" : "#111827",
                        border: m.from === "me" ? "none" : "1px solid #E5E7EB",
                        padding: "0.7rem 1rem",
                        borderRadius: m.from === "me" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                        fontSize: "0.87rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {m.text}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        justifyContent: m.from === "me" ? "flex-end" : "flex-start",
                        marginTop: "0.25rem",
                      }}
                    >
                      <span style={{ color: "#9CA3AF", fontSize: "0.7rem" }}>{m.time}</span>
                      {m.from === "me" && <CheckCheck size={13} color="#2563EB" />}
                    </div>
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  padding: "1rem 1.25rem",
                  borderTop: "1px solid #E5E7EB",
                }}
              >
                <Paperclip size={18} color="#9CA3AF" style={{ cursor: "pointer", flexShrink: 0 }} />
                <input
                  style={{
                    flex: 1,
                    border: "1px solid #E5E7EB",
                    borderRadius: "9999px",
                    padding: "0.65rem 1.1rem",
                    fontSize: "0.87rem",
                    outline: "none",
                  }}
                  type="text"
                  placeholder="Type a message..."
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={sendMessage}
                  style={{
                    background: "#2563EB",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <Send size={16} color="#FFFFFF" />
                </button>
              </div>
            </>
          ) : (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#9CA3AF" }}>
              Select a conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
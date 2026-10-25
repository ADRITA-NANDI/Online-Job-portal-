import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  FileText,
  Heart,
  User,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/jobs", label: "Find Jobs", icon: Search },
  { to: "/my-applications", label: "My Applications", icon: FileText },
  { to: "/saved-jobs", label: "Saved Jobs", icon: Heart },
  { to: "/profile", label: "Profile / Resume", icon: User },
  { to: "/messages", label: "Messages", icon: MessageSquare },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ top = 74 }) {
  return (
    <aside
      className="relative sticky hidden w-64 shrink-0 flex-col overflow-hidden border-r border-white/15 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-teal-900/60 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),8px_0_32px_-12px_rgba(15,23,42,0.5)] backdrop-blur-xl backdrop-saturate-150 md:flex"
      style={{ top, height: `calc(100vh - ${top}px)` }}
    >
      {/* soft glass highlights */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

      <nav className="relative flex-1 space-y-1.5 overflow-y-auto px-3 py-5">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              "flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200 " +
              (isActive
                ? "border-white/30 bg-accent/80 text-white shadow-lg shadow-blue-500/30 backdrop-blur-md"
                : "border-transparent text-slate-200 hover:border-white/15 hover:bg-white/10 hover:text-white")
            }
          >
            <Icon size={18} className="shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
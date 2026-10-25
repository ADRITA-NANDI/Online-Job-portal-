import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const icons = {
  overview: <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />,
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  companies: <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />,
  jobs: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </>
  ),
  board: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  applications: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8" />
    </>
  ),
};

const links = [
  { to: "/admin", label: "Overview", icon: "overview", end: true },
  { to: "/admin/users", label: "Users", icon: "users" },
  { to: "/admin/companies", label: "Companies", icon: "companies" },
  { to: "/admin/jobs", label: "Manage jobs", icon: "jobs" },
  { to: "/admin/job-board", label: "Job board", icon: "board" },
  { to: "/admin/applications", label: "Applications", icon: "applications" },
];

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
    >
      {icons[name]}
    </svg>
  );
}

export default function AdminLayout() {
  const [navH, setNavH] = useState(74);

  // Measure the real Navbar height so the sidebar sits exactly below it
  useEffect(() => {
    const measure = () => {
      const h = document.querySelector("header")?.offsetHeight;
      if (h) setNavH(h);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="relative isolate flex min-h-screen flex-col">
      {/* Background: dots + glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mist">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -left-10 top-24 h-96 w-72 rounded-full bg-blue-500/40 blur-3xl" />
        <div className="absolute -left-6 bottom-10 h-80 w-72 rounded-full bg-cyan-400/40 blur-3xl" />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
      </div>

      <Navbar />

      <div className="flex flex-1">
        {/* Glass sidebar */}
        <aside
          className="sticky hidden w-64 shrink-0 flex-col overflow-hidden border-r border-white/25 bg-gradient-to-b from-slate-900/60 via-slate-800/50 to-teal-900/40 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),8px_0_32px_-12px_rgba(15,23,42,0.5)] backdrop-blur-2xl backdrop-saturate-150 md:flex"
          style={{ top: navH, height: `calc(100vh - ${navH}px)` }}
        >
          {/* diagonal shine */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0.07)_35%,transparent_60%)]" />

          <div className="relative border-b border-white/15 px-6 py-5">
            <p className="text-xs uppercase tracking-wide text-slate-200">
              Admin workspace
            </p>
          </div>

          <nav className="relative flex-1 space-y-1.5 overflow-y-auto px-3 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  "flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200 " +
                  (isActive
                    ? "border-white/40 bg-gradient-to-r from-accent/80 to-cyan-400/50 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_20px_-6px_rgba(47,111,237,0.6)] backdrop-blur-md"
                    : "border-transparent text-slate-100 hover:border-white/20 hover:bg-white/15 hover:text-white")
                }
              >
                <Icon name={l.icon} />
                {l.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Mobile nav */}
          <nav className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-white/70 px-4 py-2 backdrop-blur md:hidden">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  "shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors " +
                  (isActive ? "bg-ink text-white" : "text-slate-600 hover:bg-white")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <main className="flex-1 p-6 md:p-8">
            <div className="mx-auto w-full max-w-6xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
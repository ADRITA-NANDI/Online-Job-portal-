import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  const role = String(user?.role || "").toLowerCase();
  const dashboardLink =
    role === "admin"
      ? { to: "/admin", label: "Admin panel" }
      : role === "employer"
      ? { to: "/employer", label: "Dashboard" }
      : { to: "/dashboard", label: "Dashboard" };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass =
    "group relative py-1 transition-colors hover:text-ink";
  const underline =
    "absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8.5L6.5 12L13 4" stroke="#2F6FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="font-display text-xl font-semibold text-ink">
            Job<span className="text-accent">Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link to="/jobs" className={linkClass}>
            Find jobs
            <span className={underline} />
          </Link>
          <Link to="/employer" className={linkClass}>
            For employers
            <span className={underline} />
          </Link>
          <Link to="/about" className={linkClass}>
            About
            <span className={underline} />
          </Link>
          {isLoggedIn && (
            <Link to={dashboardLink.to} className={linkClass + " text-accent"}>
              {dashboardLink.label}
              <span className={underline} />
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <span className="hidden text-sm text-slate-500 sm:inline">
                Hi, {user?.name?.split(" ")[0]}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md active:translate-y-0"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-slate-700 transition-colors hover:text-ink">
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md active:translate-y-0"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
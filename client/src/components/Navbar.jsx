import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link to="/jobs" className="group relative py-1 transition-colors hover:text-ink">
            Find jobs
            <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/employers" className="group relative py-1 transition-colors hover:text-ink">
            For employers
            <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/about" className="group relative py-1 transition-colors hover:text-ink">
            About
            <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-slate-700 transition-colors hover:text-ink">
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md active:translate-y-0"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
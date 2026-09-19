import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.5 12L13 4" stroke="#2F6FED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="font-display text-xl font-semibold">
                Job<span className="text-accent">Hub</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Connecting job seekers and employers on one board — real openings,
              real applicants, no noise.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <p>support@jobhub.com</p>
              <p>+880 1234567890</p>
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">For job seekers</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link to="/jobs" className="transition-colors hover:text-accent">Browse jobs</Link></li>
              <li><Link to="/register" className="transition-colors hover:text-accent">Create profile</Link></li>
              <li><Link to="/applications" className="transition-colors hover:text-accent">My applications</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">For employers</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link to="/post-job" className="transition-colors hover:text-accent">Post a job</Link></li>
              <li><Link to="/employers" className="transition-colors hover:text-accent">Manage jobs</Link></li>
              <li><Link to="/applicants" className="transition-colors hover:text-accent">View applicants</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link to="/about" className="transition-colors hover:text-accent">About</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent">Contact</Link></li>
              <li><Link to="/privacy" className="transition-colors hover:text-accent">Privacy policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} JobHub. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-accent">LinkedIn</a>
            <a href="#" aria-label="Twitter" className="transition-colors hover:text-accent">Twitter</a>
            <a href="#" aria-label="Facebook" className="transition-colors hover:text-accent">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
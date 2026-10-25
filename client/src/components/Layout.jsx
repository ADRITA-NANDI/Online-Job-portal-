import "../jobseeker-fonts.css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Search, Bell } from "lucide-react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
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
      {/* Landing-page style background: dots + soft glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mist">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-blue-400/25 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-fuchsia-300/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-slate-300/30 blur-3xl" />
      </div>

      <Navbar />

      <div className="jobseeker-area flex flex-1">
        <Sidebar top={navH} />

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Search + notifications: scrolls away with the page */}
          <div className="px-6 pt-5 md:px-8">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-xl border border-white/70 bg-white/60 px-4 py-3 shadow-sm backdrop-blur-md">
              <div className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 transition-colors focus-within:border-accent focus-within:bg-white">
                <Search size={16} className="shrink-0 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search jobs, applications..."
                  className="w-full bg-transparent text-sm text-ink placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <Link
                to="/notifications"
                aria-label="Notifications"
                className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white/70 text-slate-500 transition-colors hover:border-accent hover:text-accent"
              >
                <Bell size={17} />
                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              </Link>
            </div>
          </div>

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
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [role, setRole] = useState("seeker");

  return (
    <main className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-mist">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D6DBE8 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="mx-auto grid max-w-5xl items-stretch gap-10 px-6 py-16 md:grid-cols-2">
        {/* Branding panel */}
        <div className="hidden h-full flex-col justify-center rounded-3xl bg-navy p-10 text-white md:flex">
          <span className="font-display text-2xl font-semibold">
            Job<span className="text-accent">Hub</span>
          </span>
          <h2 className="mt-6 font-display text-2xl font-semibold leading-snug">
            Real openings, real applicants, no noise.
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Join thousands of job seekers and employers already using JobHub
            to hire and get hired faster.
          </p>
          <div className="mt-10 space-y-4">
            <div className="rounded-xl bg-white/5 p-4">
              <p className="font-display text-xl font-semibold">12,400+</p>
              <p className="text-sm text-slate-400">Open roles right now</p>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <p className="font-display text-xl font-semibold">89%</p>
              <p className="text-sm text-slate-400">Applied within a week</p>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-display text-2xl font-semibold text-ink">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Join JobHub as a job seeker or an employer.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 rounded-lg bg-mist p-1">
            <button
              type="button"
              onClick={() => setRole("seeker")}
              className={
                "rounded-md py-2 text-sm font-medium transition-all " +
                (role === "seeker"
                  ? "bg-white text-ink shadow-sm"
                  : "text-slate-500 hover:text-ink")
              }
            >
              Job Seeker
            </button>
            <button
              type="button"
              onClick={() => setRole("employer")}
              className={
                "rounded-md py-2 text-sm font-medium transition-all " +
                (role === "employer"
                  ? "bg-white text-ink shadow-sm"
                  : "text-slate-500 hover:text-ink")
              }
            >
              Employer
            </button>
          </div>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-ink">
                {role === "seeker" ? "Full name" : "Company name"}
              </label>
              <input
                type="text"
                placeholder={role === "seeker" ? "Jane Doe" : "Acme Inc."}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-ink">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-ink">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-ink py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md active:translate-y-0"
            >
              Create {role === "seeker" ? "seeker" : "employer"} account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-accent hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
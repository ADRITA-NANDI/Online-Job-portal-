import { Link } from "react-router-dom";

export default function Login() {
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
      <div className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      <div className="mx-auto grid max-w-5xl items-stretch gap-10 px-6 py-16 md:grid-cols-2">
        {/* Branding panel */}
        <div className="hidden h-full flex-col justify-center rounded-3xl bg-navy p-10 text-white md:flex">
          <span className="font-display text-2xl font-semibold">
            Job<span className="text-accent">Hub</span>
          </span>
          <h2 className="mt-6 font-display text-2xl font-semibold leading-snug">
            Welcome back. Your next opportunity is one search away.
          </h2>
          <p className="mt-4 text-sm text-slate-300">
            Log in to pick up where you left off — saved jobs, applications,
            or your open postings.
          </p>
          <div className="mt-10 space-y-3">
            <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm font-medium">Senior Frontend Engineer</p>
                <p className="text-xs text-slate-400">Remote · 46 applicants</p>
              </div>
              <span className="rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent">Open</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3">
              <div>
                <p className="text-sm font-medium">Product Designer</p>
                <p className="text-xs text-slate-400">Chattogram · 28 applicants</p>
              </div>
              <span className="rounded-full bg-accent/20 px-2 py-1 text-xs font-medium text-accent">Open</span>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-display text-2xl font-semibold text-ink">
            Log in to JobHub
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Enter your details to access your account.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-ink">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-ink">Password</label>
                <a href="#" className="text-xs font-medium text-accent hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-ink placeholder:text-slate-400 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="rounded border-slate-300 accent-accent" />
              Keep me signed in
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-ink py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md active:translate-y-0"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-accent hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
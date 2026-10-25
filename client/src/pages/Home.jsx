import heroPhoto from "../assets/hero.png";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-mist">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D6DBE8 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />

      {/* Bright blobs behind the dark glass card */}
      <div className="animate-float pointer-events-none absolute top-20 right-[6%] -z-10 h-80 w-80 rounded-full bg-accent/50 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute bottom-16 right-[22%] -z-10 h-72 w-72 rounded-full bg-cyan-400/40 blur-3xl" />
      <div className="animate-float pointer-events-none absolute top-1/2 right-[2%] -z-10 h-64 w-64 rounded-full bg-fuchsia-400/25 blur-3xl" />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-8 pb-20 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up">
          <div className="group relative mb-8 h-56 w-full max-w-md overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-xl">
            <img
              src={heroPhoto}
              alt="Person applying for jobs on a laptop"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                maskImage:
                  "radial-gradient(ellipse 100% 100% at center, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 100% 100% at center, black 55%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-navy/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70" />
          </div>

          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Find work that fits.
            <br />
            Hire people who fit.
          </h1>
          <p className="mt-5 max-w-md text-base text-slate-600">
            JobHub brings job seekers and employers onto one board — real openings,
            real applicants, no noise.
          </p>

          <div className="mt-8 flex max-w-md items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-shadow focus-within:border-accent focus-within:shadow-md">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-slate-400">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Job title, skill, or company"
              className="w-full bg-transparent text-sm text-ink placeholder:text-slate-400 focus:outline-none"
            />
            <button className="shrink-0 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md active:translate-y-0">
              Search
            </button>
          </div>

          <div className="mt-10 flex gap-4">
            {[
              { value: "12,400+", label: "Open roles" },
              { value: "3,200+", label: "Companies hiring" },
              { value: "89%", label: "Applied within a week" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="cursor-default rounded-xl px-3 py-2 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <p className="font-display text-2xl font-semibold text-ink">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Employer view (live dark glass) */}
        <div
          className="animate-fade-up relative overflow-hidden rounded-3xl border border-white/25 bg-navy/70 p-6 text-white shadow-2xl shadow-accent/20 backdrop-blur-2xl backdrop-saturate-150"
          style={{ animationDelay: "0.15s" }}
        >
          {/* Moving lights inside the glass */}
          <div className="animate-float pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/60 blur-3xl" />
          <div className="animate-float-slow pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-cyan-400/40 blur-3xl" />
          {/* Glossy top-left highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          {/* Light streak sweeping across */}
          <div className="animate-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-200">Employer view</p>
            <div className="mt-4 space-y-3">
              {[
                { role: "Senior Frontend Engineer", meta: "Remote · 46 applicants", status: "Open" },
                { role: "Product Designer", meta: "Chattogram · 28 applicants", status: "Open" },
                { role: "Backend Engineer (Node.js)", meta: "Remote · 61 applicants", status: "Reviewing" },
                { role: "Marketing Manager", meta: "Dhaka · 19 applicants", status: "Open" },
                { role: "Data Analyst", meta: "Remote · 33 applicants", status: "Reviewing" },
              ].map((job, i) => (
                <div
                  key={job.role}
                  className="animate-bob flex cursor-default items-center justify-between rounded-xl border border-white/30 bg-white/15 px-4 py-3 shadow-lg backdrop-blur-lg transition-colors hover:bg-white/25"
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <div>
                    <p className="text-sm font-medium">{job.role}</p>
                    <p className="text-xs text-slate-200">{job.meta}</p>
                  </div>
                  {job.status === "Open" ? (
                    <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                      </span>
                      Open
                    </span>
                  ) : (
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-200">
                      Reviewing
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import heroPhoto from "../assets/hero.png";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-mist">
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

        <div
          className="animate-fade-up rounded-2xl bg-navy p-6 text-white shadow-lg transition-shadow hover:shadow-xl"
          style={{ animationDelay: "0.15s" }}
        >
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Employer view</p>
          <div className="mt-4 space-y-3">
            {[
              { role: "Senior Frontend Engineer", meta: "Remote · 46 applicants", status: "Open" },
              { role: "Product Designer", meta: "Chattogram · 28 applicants", status: "Open" },
              { role: "Backend Engineer (Node.js)", meta: "Remote · 61 applicants", status: "Reviewing" },
              { role: "Marketing Manager", meta: "Dhaka · 19 applicants", status: "Open" },
              { role: "Data Analyst", meta: "Remote · 33 applicants", status: "Reviewing" },
            ].map((job) => (
              <div
                key={job.role}
                className="flex cursor-default items-center justify-between rounded-lg bg-white/5 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
              >
                <div>
                  <p className="text-sm font-medium">{job.role}</p>
                  <p className="text-xs text-slate-400">{job.meta}</p>
                </div>
                <span
                  className={
                    "rounded-full px-2 py-1 text-xs font-medium " +
                    (job.status === "Open"
                      ? "bg-accent/20 text-accent"
                      : "bg-slate-500/20 text-slate-300")
                  }
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
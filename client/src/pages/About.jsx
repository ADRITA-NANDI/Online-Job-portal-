import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import storyPhoto from "../assets/story.png";
import teamworkPhoto from "../assets/teamwork.png";

export default function About() {
  const { isLoggedIn } = useAuth();

  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-mist via-blue-50 to-mist">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #D6DBE8 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Colour blobs behind the glass cards */}
      <div className="animate-float pointer-events-none absolute top-24 left-[6%] -z-10 h-80 w-80 rounded-full bg-accent/40 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute top-40 right-[6%] -z-10 h-72 w-72 rounded-full bg-cyan-400/40 blur-3xl" />
      <div className="animate-float pointer-events-none absolute top-[38%] left-[35%] -z-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="animate-float-slow pointer-events-none absolute bottom-[14%] left-[8%] -z-10 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
      <div className="animate-float pointer-events-none absolute bottom-[10%] right-[8%] -z-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <h1 className="animate-fade-up font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Recruitment shouldn't feel scattered.
        </h1>
        <p
          className="animate-fade-up mx-auto mt-5 max-w-xl text-base text-slate-600"
          style={{ animationDelay: "0.1s" }}
        >
          JobHub puts job seekers and employers on one board, so finding a role
          — or finding the right person for one — doesn't mean checking five
          different places.
        </p>
      </section>

      {/* Stats (frosted glass) */}
      <section className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 pb-16 md:grid-cols-4">
        {[
          { value: "12,400+", label: "Open roles" },
          { value: "3,200+", label: "Companies hiring" },
          { value: "89%", label: "Applied within a week" },
          { value: "24/7", label: "Platform availability" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="cursor-default rounded-2xl border border-white/60 bg-white/40 px-4 py-6 text-center shadow-lg shadow-accent/10 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:bg-white/60 hover:shadow-xl hover:shadow-accent/20"
          >
            <p className="font-display text-2xl font-semibold text-ink">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="group relative h-72 overflow-hidden rounded-3xl border border-white/60 shadow-xl shadow-accent/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/20">
            <img
              src={storyPhoto}
              alt="Planning JobHub"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl shadow-accent/10 backdrop-blur-xl">
            <p className="text-sm font-medium text-accent">Our story</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
              Built after one too many messy hiring spreadsheets.
            </h2>
            <p className="mt-4 text-slate-600">
              JobHub started as a way to fix the everyday frustration of job
              hunting through scattered listings and recruiting through
              disconnected tools. It grew into a full platform where seekers
              and employers meet in one organized place.
            </p>
            <p className="mt-4 text-slate-600">
              Every feature, from filtered search to application tracking, was
              designed around one question: what would make this process less
              painful for the person on the other end?
            </p>
          </div>
        </div>
      </section>

      {/* How it works (live dark glass) */}
      <section className="relative isolate overflow-hidden bg-navy py-16 text-white">
        {/* Moving lights inside the section */}
        <div className="animate-float pointer-events-none absolute -top-20 left-[8%] -z-10 h-80 w-80 rounded-full bg-accent/60 blur-3xl" />
        <div className="animate-float-slow pointer-events-none absolute -bottom-24 right-[10%] -z-10 h-80 w-80 rounded-full bg-cyan-400/40 blur-3xl" />
        <div className="animate-float pointer-events-none absolute top-1/2 left-[45%] -z-10 h-64 w-64 rounded-full bg-fuchsia-400/25 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium text-blue-300">How it works</p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Built for both sides</h2>
              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Job seekers",
                    body: "Build a profile, search and filter roles, and apply directly — then track every application's status in one place.",
                  },
                  {
                    title: "Employers",
                    body: "Post a role in minutes, review applicants as they come in, and move candidates through your hiring stages.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="relative cursor-default overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-5 shadow-lg backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:bg-white/20"
                  >
                    {/* Glossy highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                    {/* Light streak */}
                    <div className="animate-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    <div className="relative">
                      <p className="flex items-center gap-2 text-sm font-medium text-blue-200">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                        </span>
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-slate-200">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="group relative h-72 overflow-hidden rounded-3xl border border-white/25 shadow-2xl shadow-accent/20 transition-shadow duration-300 hover:shadow-accent/40">
              <img
                src={teamworkPhoto}
                alt="Interview in progress"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why JobHub (frosted glass) */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-medium text-accent">Why JobHub</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
          What we focused on getting right
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { title: "Centralized listings", body: "No more checking five different sites — every open role lives in one searchable place." },
            { title: "Real filtering", body: "Narrow by location, job type, category, or experience level instead of scrolling endlessly." },
            { title: "Application tracking", body: "See exactly where you stand — applied, under review, shortlisted, or interviewed." },
            { title: "Built for both sides", body: "Employers get the same care as job seekers, with a dashboard designed for managing real hiring." },
          ].map((item) => (
            <div
              key={item.title}
              className="cursor-default rounded-2xl border border-white/60 bg-white/40 p-6 shadow-lg shadow-accent/10 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:bg-white/60 hover:shadow-xl hover:shadow-accent/20"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-white/60 bg-white/40 px-8 py-12 shadow-xl shadow-accent/10 backdrop-blur-xl">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
            Ready to get started?
          </h2>
          <p className="mt-3 text-slate-600">
            {isLoggedIn
              ? "Explore open roles and find your next opportunity."
              : "Create a free account as a job seeker or an employer."}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            {!isLoggedIn && (
              <Link
                to="/register"
                className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-lg"
              >
                Sign up
              </Link>
            )}
            <Link
              to="/jobs"
              className="rounded-lg border border-slate-300 bg-white/50 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Browse jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
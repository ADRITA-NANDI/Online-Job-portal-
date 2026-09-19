import { Link } from "react-router-dom";
import storyPhoto from "../assets/story.png";
import teamworkPhoto from "../assets/teamwork.png";

export default function About() {
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

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center">
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          Recruitment shouldn't feel scattered.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-600">
          JobHub puts job seekers and employers on one board, so finding a role
          — or finding the right person for one — doesn't mean checking five
          different places.
        </p>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 pb-16 md:grid-cols-4">
        {[
          { value: "12,400+", label: "Open roles" },
          { value: "3,200+", label: "Companies hiring" },
          { value: "89%", label: "Applied within a week" },
          { value: "24/7", label: "Platform availability" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="cursor-default rounded-xl border border-slate-200 bg-white px-4 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
          >
            <p className="font-display text-2xl font-semibold text-ink">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Our story */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="group relative h-72 overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-xl">
            <img
              src={storyPhoto}
              alt="Planning JobHub"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </div>
          <div>
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

      {/* How it works */}
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium text-accent">How it works</p>
              <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Built for both sides</h2>
              <div className="mt-8 space-y-6">
                <div className="cursor-default rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/5">
                  <p className="text-sm font-medium text-accent">Job seekers</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Build a profile, search and filter roles, and apply directly
                    — then track every application's status in one place.
                  </p>
                </div>
                <div className="cursor-default rounded-xl p-4 transition-all duration-200 hover:-translate-y-1 hover:bg-white/5">
                  <p className="text-sm font-medium text-accent">Employers</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Post a role in minutes, review applicants as they come in,
                    and move candidates through your hiring stages.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative h-72 overflow-hidden rounded-3xl transition-shadow duration-300 hover:shadow-xl">
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

      {/* Why JobHub */}
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
              className="cursor-default rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
          Ready to get started?
        </h2>
        <p className="mt-3 text-slate-600">
          Create a free account as a job seeker or an employer.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/register"
            className="rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md"
          >
            Sign up
          </Link>
          <Link
            to="/jobs"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Browse jobs
          </Link>
        </div>
      </section>
    </main>
  );
}
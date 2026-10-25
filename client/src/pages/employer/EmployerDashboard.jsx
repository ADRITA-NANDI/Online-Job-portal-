import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import PageHeader from "../../components/Admin/PageHeader";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { btn, btnDanger, th, td } from "../../components/Admin/styles";
import { employerJobs, employerApplicants } from "../../data/EmployerData";
import { MapPinIcon, ClockIcon, BriefcaseIcon } from "../../components/Admin/icons";

export default function EmployerDashboard() {
  const { user } = useAuth();
  const [jobs] = useState(employerJobs);
  const [applicants, setApplicants] = useState(employerApplicants);

  const firstName = user?.name?.split(" ")[0] || "there";
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const openJobs = jobs.filter((j) => j.status === "Open").length;
  const totalApplicants = jobs.reduce((sum, j) => sum + j.applicants, 0);
  const needsDecision = applicants.filter((a) => a.status === "Applied");

  const stats = [
    { label: "Active postings", value: openJobs, delta: "+2 this week", icon: "briefcase", tint: "#2F6FED" },
    { label: "Total applicants", value: totalApplicants, delta: "+38 this week", icon: "users", tint: "#0E9F8E" },
    { label: "Profile views", value: "1,940", delta: "+12% vs last week", icon: "eye", tint: "#EC4899" },
    { label: "Hired this month", value: applicants.filter((a) => a.status === "Selected").length, delta: "Goal: 5", icon: "check", tint: "#F59E0B" },
  ];

  const statIcons = {
    briefcase: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </>
    ),
    users: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    eye: (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12.5 11 15.5 16 9" />
      </>
    ),
  };

  // Later: PATCH /api/v1/applications/:id { status }
  const decide = (id, next) =>
    setApplicants((prev) => prev.map((a) => (a.id === id ? { ...a, status: next } : a)));

  return (
    <>
      <PageHeader title={`${greeting}, ${firstName}`} subtitle="Here's how your open roles are performing.">
        <Link to="/employer/jobs/new" className={btn}>
          + Post a job
        </Link>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="cursor-default rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ background: s.tint + "1A", color: s.tint }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                {statIcons[s.icon]}
              </svg>
            </span>
            <p className="mt-3 text-sm text-slate-500">{s.label}</p>
            <p className="mt-1 font-display text-3xl font-semibold text-ink">{s.value}</p>
            <p className="mt-2 text-xs font-medium text-accent">↗ {s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Job postings */}
        <section className="rounded-xl border border-slate-200 bg-white lg:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-ink">Job postings</h2>
            <Link to="/employer/jobs" className="text-sm font-medium text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-slate-400">
                  <th className={th}>Role</th>
                  <th className={th}>Location</th>
                  <th className={th}>Applicants</th>
                  <th className={th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((j) => (
                  <tr key={j.id} className="border-t border-slate-100 transition-colors hover:bg-mist">
                    <td className={td}>
                      <p className="font-medium text-ink">{j.title}</p>
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
                        <BriefcaseIcon className="h-3 w-3" />
                        {j.type}
                        <span className="mx-1">·</span>
                        <ClockIcon className="h-3 w-3" />
                        {j.posted}
                      </p>
                    </td>
                    <td className={td + " text-slate-600"}>
                      <span className="flex items-center gap-1.5">
                        <MapPinIcon className="h-3.5 w-3.5 text-slate-400" />
                        {j.location}
                      </span>
                    </td>
                    <td className={td + " text-slate-600"}>{j.applicants}</td>
                    <td className={td}><StatusBadge status={j.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Needs your decision */}
        <section className="rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-ink">Needs your decision</h2>
            <Link to="/employer/applicants" className="text-sm font-medium text-accent hover:underline">
              View all
            </Link>
          </div>
          <ul className="divide-y divide-slate-100">
            {needsDecision.length === 0 && (
              <li className="px-5 py-6 text-center text-sm text-slate-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 h-8 w-8 text-slate-300">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 12.5 3 3 5-6" />
                </svg>
                You're all caught up.
              </li>
            )}
            {needsDecision.map((a) => (
              <li key={a.id} className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-mist">
                <Avatar name={a.name} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{a.name}</p>
                  <p className="truncate text-xs text-slate-400">{a.job}</p>
                </div>
                <button onClick={() => decide(a.id, "Rejected")} className={btnDanger}>
                  Reject
                </button>
                <button onClick={() => decide(a.id, "Shortlisted")} className={btn}>
                  Shortlist
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
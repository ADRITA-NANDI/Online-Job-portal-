import { Link } from "react-router-dom";
import PageHeader from "../../components/Admin/PageHeader";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { th, td } from "../../components/Admin/styles";
import { jobs, companies, applications } from "../../data/Mockdata";

const stats = [
  { label: "Total users", value: "1,284", delta: "+38 this week" },
  { label: "Companies", value: "214", delta: "+6 this week" },
  { label: "Active jobs", value: "356", delta: "+12 this week" },
  { label: "Applications", value: "5,920", delta: "+214 this week" },
];

export default function AdminDashboard() {
  const pending = companies.filter((c) => c.status === "Pending");

  return (
    <>
      <PageHeader
        title="Good morning, Admin"
        subtitle="Here's what's happening across JobHub."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="cursor-default rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">{s.value}</p>
            <p className="mt-2 text-xs font-medium text-accent">↗ {s.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Recent jobs */}
        <section className="rounded-xl border border-slate-200 bg-white lg:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h2 className="font-display text-lg font-semibold text-ink">Recent job postings</h2>
            <Link to="/admin/jobs" className="text-sm font-medium text-accent hover:underline">
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
                {jobs.slice(0, 5).map((j) => (
                  <tr key={j.id} className="border-t border-slate-100 transition-colors hover:bg-mist">
                    <td className={td}>
                      <p className="font-medium text-ink">{j.title}</p>
                      <p className="text-xs text-slate-400">{j.company} · {j.posted}</p>
                    </td>
                    <td className={td + " text-slate-600"}>{j.location}</td>
                    <td className={td + " text-slate-600"}>{j.applicants}</td>
                    <td className={td}><StatusBadge status={j.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="space-y-6">
          {/* Pending approvals */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-ink">Pending approvals</h2>
              <Link to="/admin/companies" className="text-sm font-medium text-accent hover:underline">
                Review
              </Link>
            </div>
            <ul className="divide-y divide-slate-100">
              {pending.length === 0 && (
                <li className="px-5 py-6 text-sm text-slate-400">All caught up.</li>
              )}
              {pending.map((c) => (
                <li key={c.id} className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-mist">
                  <Avatar name={c.name} square />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{c.name}</p>
                    <p className="text-xs text-slate-400">{c.industry} · {c.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Recent applications */}
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-ink">Recent applications</h2>
              <Link to="/admin/applications" className="text-sm font-medium text-accent hover:underline">
                View all
              </Link>
            </div>
            <ul className="divide-y divide-slate-100">
              {applications.slice(0, 4).map((a) => (
                <li key={a.id} className="flex items-center justify-between gap-3 px-5 py-3 transition-colors hover:bg-mist">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-ink">{a.applicant}</p>
                    <p className="truncate text-xs text-slate-400">{a.job}</p>
                  </div>
                  <StatusBadge status={a.status} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
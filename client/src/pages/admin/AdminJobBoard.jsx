import { useMemo, useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { th, td } from "../../components/Admin/styles";
import { jobs, applications } from "../../data/Mockdata";

export default function AdminJobBoard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [openId, setOpenId] = useState(null);

  const statuses = ["All", ...new Set(jobs.map((j) => j.status))];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchText =
        !q ||
        j.title?.toLowerCase().includes(q) ||
        j.company?.toLowerCase().includes(q) ||
        j.location?.toLowerCase().includes(q);
      const matchStatus = status === "All" || j.status === status;
      return matchText && matchStatus;
    });
  }, [query, status]);

  // applications of one job (matched by job title)
  const applicantsOf = (job) => applications.filter((a) => a.job === job.title);

  return (
    <>
      <PageHeader
        title="Job board"
        subtitle="All posted jobs, and who applied to each one."
      />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by job, company or location..."
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:max-w-sm"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        >
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <p className="mb-3 text-sm text-slate-500">
        Showing {filtered.length} of {jobs.length} jobs
      </p>

      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-400">
            No jobs match your search.
          </div>
        )}

        {filtered.map((j) => {
          const list = applicantsOf(j);
          const isOpen = openId === j.id;

          return (
            <section
              key={j.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : j.id)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-mist"
              >
                <Avatar name={j.company || j.title} square />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-ink">{j.title}</p>
                  <p className="truncate text-xs text-slate-400">
                    {j.company} · {j.location} · {j.posted}
                  </p>
                </div>
                <div className="hidden text-right sm:block">
                  <p className="text-sm font-medium text-ink">{j.applicants}</p>
                  <p className="text-xs text-slate-400">applicants</p>
                </div>
                <StatusBadge status={j.status} />
                <span className="text-slate-400">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 bg-mist/50">
                  {list.length === 0 ? (
                    <p className="px-5 py-6 text-sm text-slate-400">
                      No applications recorded for this job yet.
                    </p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="text-xs uppercase tracking-wide text-slate-400">
                            <th className={th}>Applicant</th>
                            <th className={th}>Applied</th>
                            <th className={th}>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.map((a) => (
                            <tr key={a.id} className="border-t border-slate-100">
                              <td className={td}>
                                <span className="flex items-center gap-3">
                                  <Avatar name={a.applicant} />
                                  <span className="font-medium text-ink">
                                    {a.applicant}
                                  </span>
                                </span>
                              </td>
                              <td className={td + " text-slate-600"}>
                                {a.applied || a.date || "-"}
                              </td>
                              <td className={td}>
                                <StatusBadge status={a.status} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
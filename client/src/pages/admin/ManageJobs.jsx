import { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import AdminToolbar from "../../components/Admin/AdminToolbar";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { btn, btnDanger, th, td } from "../../components/Admin/styles";
import { jobs as initialJobs } from "../../data/Mockdata";
export default function ManageJobs() {
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [type, setType] = useState("All");

  const visible = jobs.filter(
    (j) =>
      (status === "All" || j.status === status) &&
      (type === "All" || j.type === type) &&
      (j.title + j.company + j.location).toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id) =>
    setJobs((prev) =>
      prev.map((j) =>
        j.id === id ? { ...j, status: j.status === "Open" ? "Closed" : "Open" } : j
      )
    );

  const remove = (id) => {
    if (window.confirm("Remove this job posting? This cannot be undone.")) {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  return (
    <>
      <PageHeader
        title="Manage jobs"
        subtitle="Close, reopen, or remove job postings across all companies."
      />

      <div className="rounded-xl border border-slate-200 bg-white">
        <AdminToolbar
          search={search}
          onSearch={setSearch}
          placeholder="Search by title, company, or location"
          filters={[
            { label: "statuses", value: status, onChange: setStatus, options: ["All", "Open", "Closed"] },
            { label: "types", value: type, onChange: setType, options: ["All", "Full-time", "Part-time", "Contract"] },
          ]}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className={th}>Role</th>
                <th className={th}>Location</th>
                <th className={th}>Type</th>
                <th className={th}>Applicants</th>
                <th className={th}>Status</th>
                <th className={th + " text-right"}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((j) => (
                <tr key={j.id} className="border-t border-slate-100 transition-colors hover:bg-mist">
                  <td className={td}>
                    <p className="font-medium text-ink">{j.title}</p>
                    <p className="text-xs text-slate-400">{j.company} · {j.posted}</p>
                  </td>
                  <td className={td + " text-slate-600"}>{j.location}</td>
                  <td className={td + " text-slate-600"}>{j.type}</td>
                  <td className={td + " text-slate-600"}>{j.applicants}</td>
                  <td className={td}><StatusBadge status={j.status} /></td>
                  <td className={td}>
                    <div className="flex justify-end gap-2">
                      <button onClick={() => toggle(j.id)} className={btn}>
                        {j.status === "Open" ? "Close" : "Reopen"}
                      </button>
                      <button onClick={() => remove(j.id)} className={btnDanger}>
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-sm text-slate-400">
                    No jobs match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          Showing {visible.length} of {jobs.length} jobs
        </p>
      </div>
    </>
  );
}
import { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import AdminToolbar from "../../components/Admin/AdminToolbar";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { btn, btnDanger, th, td } from "../../components/Admin/styles";

import {
  applications as initialApplications,
  applicationStatuses,
} from "../../data/Mockdata";

export default function ManageApplications() {
  const [applications, setApplications] = useState(initialApplications);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const visible = applications.filter(
    (a) =>
      (status === "All" || a.status === status) &&
      (a.applicant + a.job + a.company).toLowerCase().includes(search.toLowerCase())
  );

  const updateStatus = (id, next) =>
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: next } : a))
    );

  return (
    <>
      <PageHeader
        title="Manage applications"
        subtitle="Monitor every application and update its status."
      />

      <div className="rounded-xl border border-slate-200 bg-white">
        <AdminToolbar
          search={search}
          onSearch={setSearch}
          placeholder="Search by applicant, job, or company"
          filters={[
            { label: "statuses", value: status, onChange: setStatus, options: ["All", ...applicationStatuses] },
          ]}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className={th}>Applicant</th>
                <th className={th}>Job</th>
                <th className={th}>Applied</th>
                <th className={th}>Status</th>
                <th className={th + " text-right"}>Update</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((a) => (
                <tr key={a.id} className="border-t border-slate-100 transition-colors hover:bg-mist">
                  <td className={td}>
                    <div className="flex items-center gap-3">
                      <Avatar name={a.applicant} />
                      <p className="font-medium text-ink">{a.applicant}</p>
                    </div>
                  </td>
                  <td className={td}>
                    <p className="text-ink">{a.job}</p>
                    <p className="text-xs text-slate-400">{a.company}</p>
                  </td>
                  <td className={td + " text-slate-600"}>{a.applied}</td>
                  <td className={td}><StatusBadge status={a.status} /></td>
                  <td className={td}>
                    <div className="flex justify-end">
                      <select
                        value=""
                        onChange={(e) => updateStatus(a.id, e.target.value)}
                        aria-label={`Update status for ${a.applicant}`}
                        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-accent focus:border-accent focus:outline-none"
                      >
                        <option value="" disabled>Change status…</option>
                        {applicationStatuses.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-400">
                    No applications match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          Showing {visible.length} of {applications.length} applications
        </p>
      </div>
    </>
  );
}
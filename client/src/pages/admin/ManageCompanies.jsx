import { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import AdminToolbar from "../../components/Admin/AdminToolbar";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { btn, btnDanger, th, td } from "../../components/Admin/styles";
import { companies as initialCompanies } from "../../data/Mockdata";

export default function ManageCompanies() {
  const [companies, setCompanies] = useState(initialCompanies);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const visible = companies.filter(
    (c) =>
      (status === "All" || c.status === status) &&
      (c.name + c.industry + c.location).toLowerCase().includes(search.toLowerCase())
  );

  const setCompanyStatus = (id, next) =>
    setCompanies((prev) => prev.map((c) => (c.id === id ? { ...c, status: next } : c)));

  return (
    <>
      <PageHeader
        title="Manage companies"
        subtitle="Approve or reject employer company profiles."
      />

      <div className="rounded-xl border border-slate-200 bg-white">
        <AdminToolbar
          search={search}
          onSearch={setSearch}
          placeholder="Search by name, industry, or location"
          filters={[
            { label: "statuses", value: status, onChange: setStatus, options: ["All", "Approved", "Pending", "Rejected"] },
          ]}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className={th}>Company</th>
                <th className={th}>Industry</th>
                <th className={th}>Location</th>
                <th className={th}>Jobs</th>
                <th className={th}>Status</th>
                <th className={th + " text-right"}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((c) => (
                <tr key={c.id} className="border-t border-slate-100 transition-colors hover:bg-mist">
                  <td className={td}>
                    <div className="flex items-center gap-3">
                      <Avatar name={c.name} square />
                      <p className="font-medium text-ink">{c.name}</p>
                    </div>
                  </td>
                  <td className={td + " text-slate-600"}>{c.industry}</td>
                  <td className={td + " text-slate-600"}>{c.location}</td>
                  <td className={td + " text-slate-600"}>{c.jobs}</td>
                  <td className={td}><StatusBadge status={c.status} /></td>
                  <td className={td}>
                    <div className="flex justify-end gap-2">
                      {c.status !== "Approved" && (
                        <button onClick={() => setCompanyStatus(c.id, "Approved")} className={btn}>
                          Approve
                        </button>
                      )}
                      {c.status !== "Rejected" && (
                        <button onClick={() => setCompanyStatus(c.id, "Rejected")} className={btnDanger}>
                          Reject
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-sm text-slate-400">
                    No companies match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          Showing {visible.length} of {companies.length} companies
        </p>
      </div>
    </>
  );
}
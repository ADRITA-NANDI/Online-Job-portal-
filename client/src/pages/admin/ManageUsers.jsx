import { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import AdminToolbar from "../../components/Admin/AdminToolbar";
import StatusBadge from "../../components/Admin/StatusBadge";
import Avatar from "../../components/Admin/Avatar";
import { btn, btnDanger, th, td } from "../../components/Admin/styles";
import { users as initialUsers } from "../../data/Mockdata";

export default function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");
  const [status, setStatus] = useState("All");

  const visible = users.filter(
    (u) =>
      (role === "All" || u.role === role) &&
      (status === "All" || u.status === status) &&
      (u.name + u.email).toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (id) =>
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" }
          : u
      )
    );

  const remove = (id) => {
    if (window.confirm("Delete this user? This cannot be undone.")) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <>
      <PageHeader
        title="Manage users"
        subtitle="View, suspend, or remove job seeker and employer accounts."
      />

      <div className="rounded-xl border border-slate-200 bg-white">
        <AdminToolbar
          search={search}
          onSearch={setSearch}
          placeholder="Search by name or email"
          filters={[
            { label: "roles", value: role, onChange: setRole, options: ["All", "Job Seeker", "Employer"] },
            { label: "statuses", value: status, onChange: setStatus, options: ["All", "Active", "Suspended"] },
          ]}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-slate-400">
                <th className={th}>User</th>
                <th className={th}>Role</th>
                <th className={th}>Status</th>
                <th className={th}>Joined</th>
                <th className={th + " text-right"}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((u) => (
                <tr key={u.id} className="border-t border-slate-100 transition-colors hover:bg-mist">
                  <td className={td}>
                    <div className="flex items-center gap-3">
                      <Avatar name={u.name} />
                      <div>
                        <p className="font-medium text-ink">{u.name}</p>
                        <p className="text-xs text-slate-400">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className={td + " text-slate-600"}>{u.role}</td>
                  <td className={td}><StatusBadge status={u.status} /></td>
                  <td className={td + " text-slate-600"}>{u.joined}</td>
                  <td className={td}>
                    <div className="flex justify-end gap-2">
                      <button onClick={() => toggle(u.id)} className={btn}>
                        {u.status === "Active" ? "Suspend" : "Activate"}
                      </button>
                      <button onClick={() => remove(u.id)} className={btnDanger}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-400">
                    No users match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          Showing {visible.length} of {users.length} users
        </p>
      </div>
    </>
  );
}
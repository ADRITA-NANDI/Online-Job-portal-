const green = "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
const amber = "bg-amber-50 text-amber-700 ring-amber-600/20";
const red = "bg-red-50 text-red-700 ring-red-600/20";
const gray = "bg-slate-100 text-slate-600 ring-slate-500/20";

const styles = {
  Active: green,
  Approved: green,
  Selected: green,
  Open: "bg-blue-50 text-accent ring-accent/20",
  Pending: amber,
  "Under Review": amber,
  Shortlisted: "bg-indigo-50 text-indigo-700 ring-indigo-600/20",
  Interview: "bg-ink text-white ring-ink",
  Applied: gray,
  Closed: gray,
  Suspended: red,
  Rejected: red,
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset " +
        (styles[status] || gray)
      }
    >
      {status}
    </span>
  );
}
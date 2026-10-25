export default function AdminToolbar({ search, onSearch, placeholder, filters = [] }) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-200 p-4 sm:flex-row sm:items-center">
      <div className="flex flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-mist px-3 py-2 transition-colors focus-within:border-accent focus-within:bg-white">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="shrink-0 text-slate-400">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-ink placeholder:text-slate-400 focus:outline-none"
        />
      </div>

      {filters.map((f) => (
        <select
          key={f.label}
          aria-label={f.label}
          value={f.value}
          onChange={(e) => f.onChange(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors focus:border-accent focus:outline-none"
        >
          {f.options.map((o) => (
            <option key={o} value={o}>
              {o === "All" ? `All ${f.label}` : o}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
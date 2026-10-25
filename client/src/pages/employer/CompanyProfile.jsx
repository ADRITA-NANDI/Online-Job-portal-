
import { useState } from "react";
import PageHeader from "../../components/Admin/PageHeader";
import { btn } from "../../components/Admin/styles";
import { employerCompany } from "../../data/EmployerData";

const FIELDS = [
  { key: "industry", label: "Industry" },
  { key: "size", label: "Company size" },
  { key: "founded", label: "Founded" },
  { key: "website", label: "Website" },
  { key: "location", label: "Location", wide: true },
];

const inputCls =
  "mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

export default function CompanyProfile() {
  const [company, setCompany] = useState(employerCompany);
  const [logoUrl, setLogoUrl] = useState(null);
  const [saved, setSaved] = useState(true);

  const handleChange = (field) => (e) => {
    setCompany((prev) => ({ ...prev, [field]: e.target.value }));
    setSaved(false);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setLogoUrl(reader.result);
      setSaved(false);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    // Later: await fetch("/api/v1/company/update", { method: "POST", body: ... })
    setSaved(true);
  };

  const initials = company.name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <>
      <PageHeader title="Company profile" subtitle="This is what job seekers see when they visit your company page.">
        <button
          onClick={handleSave}
          disabled={saved}
          className={saved ? "rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-400" : btn}
        >
          {saved ? "Saved" : "Save changes"}
        </button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                {logoUrl ? (
                  <img src={logoUrl} alt="" className="h-16 w-16 rounded-xl object-cover" />
                ) : (
                  <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-navy text-xl font-semibold text-white">
                    {initials || "?"}
                  </span>
                )}
                <label className="absolute -bottom-1 -right-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-accent text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                </label>
              </div>
              <div className="min-w-0 flex-1 space-y-2">
                <label className="block text-xs text-slate-500">
                  Company name
                  <input value={company.name} onChange={handleChange("name")} className={inputCls} />
                </label>
                <label className="block text-xs text-slate-500">
                  Tagline
                  <input value={company.tagline} onChange={handleChange("tagline")} className={inputCls} />
                </label>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Company details</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <label key={f.key} className={"block text-xs text-slate-500" + (f.wide ? " sm:col-span-2" : "")}>
                  {f.label}
                  <input value={company[f.key]} onChange={handleChange(f.key)} className={inputCls} />
                </label>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="font-display text-lg font-semibold text-ink">About the company</h2>
            <textarea
              value={company.description}
              onChange={handleChange("description")}
              rows={5}
              className={inputCls + " resize-none leading-relaxed"}
              placeholder="Tell job seekers what your company does and what it's like to work there."
            />
          </section>
        </div>

        {/* Preview */}
        <aside className="rounded-xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24 lg:h-fit">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-400">What job seekers see</p>
          <div className="mt-4 flex items-center gap-3">
            {logoUrl ? (
              <img src={logoUrl} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover" />
            ) : (
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy text-base font-semibold text-white">
                {initials || "?"}
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate font-display font-semibold text-ink">{company.name || "Company name"}</p>
              <p className="truncate text-sm text-slate-500">{company.tagline}</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
            <li>{company.location}</li>
            <li>{company.size}, founded {company.founded}</li>
            <li className="truncate text-accent">{company.website}</li>
          </ul>
          <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
            {company.description}
          </p>
        </aside>
      </div>
    </>
  );
}
const STORAGE_KEY = "jobhub_saved_jobs";

export function getSavedJobs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isJobSaved(id) {
  return getSavedJobs().some((job) => job.id === id);
}

export function saveJob(job) {
  const current = getSavedJobs();
  if (current.some((j) => j.id === job.id)) return current;
  const updated = [...current, job];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function removeJob(id) {
  const updated = getSavedJobs().filter((j) => j.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}

export function toggleSavedJob(job) {
  return isJobSaved(job.id) ? removeJob(job.id) : saveJob(job);
}
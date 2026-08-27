import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { getStoredReviews, updateReviewStatus, removeReview } from "@/data/reviews";
import type { Review } from "@/types";
import { Check, Trash2 } from "lucide-react";

// Dev-only lightweight admin gate; configure via env var VITE_ADMIN_PASSWORD or REACT_APP_ADMIN_PASSWORD
const ADMIN_PASSWORD =
  (typeof import.meta !== "undefined" && (import.meta as any).env && (import.meta as any).env.VITE_ADMIN_PASSWORD) ||
  (typeof process !== "undefined" && process.env && (process.env.REACT_APP_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD)) ||
  "devadmin"; // fallback for local development
const VITE_ADMIN_PASSWORD="devadmin";
export default function AdminReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [authenticated, setAuthenticated] = useState<boolean>(() => sessionStorage.getItem("saffron-admin-authed") === "1");
  const [attempt, setAttempt] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => setReviews(getStoredReviews());
    sync();
    window.addEventListener("saffron-reviews-updated", sync);
    return () => window.removeEventListener("saffron-reviews-updated", sync);
  }, []);

  const handleApprove = (id: string) => {
    updateReviewStatus(id, "approved");
    setReviews(getStoredReviews());
  };

  const handlePublish = (id: string) => {
    updateReviewStatus(id, "published");
    setReviews(getStoredReviews());
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Remove this review permanently?")) return;
    removeReview(id);
    setReviews(getStoredReviews());
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (attempt === ADMIN_PASSWORD) {
      sessionStorage.setItem("saffron-admin-authed", "1");
      setAuthenticated(true);
      setAuthError(null);
    } else {
      setAuthError("Password incorrect");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("saffron-admin-authed");
    setAuthenticated(false);
    setAttempt("");
    setAuthError(null);
  };

  // If not authenticated show a simple password prompt
  if (!authenticated) {
    return (
      <div>
        <PageHeader eyebrow="Admin" title="Admin sign in (dev only)" description={"Enter the dev admin password to manage pending reviews."} />
        <section className="py-12">
          <div className="container-page">
            <div className="mx-auto max-w-md rounded-2xl border bg-white/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-ink-900">Developer admin access</h3>
              <form onSubmit={handleAuthSubmit} className="mt-4 space-y-3">
                <div>
                  <label className="field-label">Password</label>
                  <input
                    type="password"
                    className="field-input"
                    value={attempt}
                    onChange={(e) => setAttempt(e.target.value)}
                    autoFocus
                  />
                  {authError && <p className="field-error">{authError}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <button type="submit" className="btn-primary">Enter admin</button>
                  <button type="button" onClick={() => { if (window.confirm('Leave admin page?')) window.history.back(); }} className="inline-flex items-center rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHeader eyebrow="Admin" title="Manage reviews (dev only)" description={"Approve, publish, or delete user reviews stored in localStorage."} />

      <section className="py-12">
        <div className="container-page">
          <div className="flex justify-end mb-4">
            <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-md bg-ink-50 px-3 py-2 text-sm font-medium text-ink-700">Logout</button>
          </div>

          <div className="space-y-4">
            {reviews.length === 0 ? (
              <div className="glass-panel p-6 text-center">No reviews found</div>
            ) : (
              reviews
                .slice()
                .reverse()
                .map((r) => (
                  <div key={r.id} className="rounded-2xl border bg-white/80 p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                            {r.customerName}
                          </div>
                          <div className="text-sm text-slate">{r.serviceType}</div>
                        </div>

                        <div className="mt-3">
                          <div className="text-ink-900 font-semibold text-lg">{r.title}</div>
                          <div className="text-sm text-slate mt-1">{new Date(r.createdAt).toLocaleString()}</div>
                        </div>

                        <p className="mt-3 text-sm text-ink-700">{r.message}</p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                          Status: <span className="ml-2 font-semibold">{r.status}</span>
                        </div>

                        <div className="flex gap-2 mt-2">
                          {r.status !== "approved" && (
                            <button
                              onClick={() => handleApprove(r.id)}
                              className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700"
                            >
                              <Check className="h-4 w-4" /> Approve
                            </button>
                          )}

                          {r.status !== "published" && (
                            <button
                              onClick={() => handlePublish(r.id)}
                              className="inline-flex items-center gap-2 rounded-md bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700"
                            >
                              Publish
                            </button>
                          )}

                          <button
                            onClick={() => handleDelete(r.id)}
                            className="inline-flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700"
                          >
                            <Trash2 className="h-4 w-4" /> Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

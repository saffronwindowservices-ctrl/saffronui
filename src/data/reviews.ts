import type { Review } from "@/types";

export const REVIEWS_STORAGE_KEY = "saffron-window-cleaning-reviews-v1";

export const DEFAULT_REVIEWS: Review[] = [];

export function getStoredReviews(): Review[] {
  if (typeof window === "undefined") {
    return DEFAULT_REVIEWS;
  }

  try {
    const saved = window.localStorage.getItem(REVIEWS_STORAGE_KEY);

    if (!saved) {
      window.localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(DEFAULT_REVIEWS));
      return DEFAULT_REVIEWS;
    }

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      window.localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(DEFAULT_REVIEWS));
      return DEFAULT_REVIEWS;
    }

    return parsed as Review[];
  } catch {
    return DEFAULT_REVIEWS;
  }
}

export function saveReviews(reviews: Review[]) {
  if (typeof window === "undefined") {
    return reviews;
  }

  window.localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  window.dispatchEvent(new Event("saffron-reviews-updated"));
  return reviews;
}

export function appendReview(review: Review) {
  const current = getStoredReviews();
  const next = [...current, review];
  saveReviews(next);
  return next;
}

export function updateReviewStatus(id: string, status: Review['status']) {
  const current = getStoredReviews();
  const next = current.map((r) => (r.id === id ? { ...r, status } : r));
  saveReviews(next);
  return next;
}

export function removeReview(id: string) {
  const current = getStoredReviews();
  const next = current.filter((r) => r.id !== id);
  saveReviews(next);
  return next;
}

export function getPublishedReviews(): Review[] {
  return getStoredReviews()
    .filter((review) => review.status === "published" || review.status === "approved")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

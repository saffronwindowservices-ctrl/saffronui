import type { Review } from "@/types";

export const REVIEWS_STORAGE_KEY = "saffron-window-cleaning-reviews-v1";

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: "seed-1",
    customerName: "Priya R.",
    email: "priya@example.com",
    serviceType: "Residential Window Cleaning",
    rating: 5,
    title: "Absolutely spotless from top to bottom",
    message:
      "The team arrived on time, treated our home with care, and left our windows cleaner than they have been in years. The finish is crystal clear and the whole process was effortless.",
    image: null,
    status: "published",
    createdAt: "2024-10-12T14:00:00.000Z",
  },
  {
    id: "seed-2",
    customerName: "David L.",
    email: "david@example.com",
    serviceType: "Commercial Window Cleaning",
    rating: 5,
    title: "Professional service for our storefront",
    message:
      "We needed a polished look for customer-facing windows without disrupting business hours. The crew was efficient, respectful, and the results looked premium from day one.",
    image: null,
    status: "published",
    createdAt: "2024-11-05T10:30:00.000Z",
  },
  {
    id: "seed-3",
    customerName: "Monica F.",
    email: "monica@example.com",
    serviceType: "Interior Window Cleaning",
    rating: 5,
    title: "Tidy, careful, and noticeably thorough",
    message:
      "They cleaned every pane, track, and sill with great attention to detail. I especially appreciated how careful they were around our furniture and plants.",
    image: null,
    status: "published",
    createdAt: "2024-11-18T18:15:00.000Z",
  },
];

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

export function getPublishedReviews(): Review[] {
  return getStoredReviews()
    .filter((review) => review.status === "published" || review.status === "approved")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleCheckBig,
  LoaderCircle,
  Quote,
  Sparkles,
  Star,
  Upload,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";
import RatingStars from "@/components/RatingStars";
import { SERVICE_OPTIONS } from "@/data/content";
import { appendReview, getPublishedReviews } from "@/data/reviews";
import type { Review } from "@/types";

interface ReviewFormState {
  customerName: string;
  email: string;
  serviceType: string;
  rating: number;
  title: string;
  message: string;
  photo: string | null;
}

const initialFormState: ReviewFormState = {
  customerName: "",
  email: "",
  serviceType: SERVICE_OPTIONS[0],
  rating: 5,
  title: "",
  message: "",
  photo: null,
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "S";

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ReviewFormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof ReviewFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const syncReviews = () => setReviews(getPublishedReviews());
    syncReviews();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);
    updateMotionPreference();

    window.addEventListener("saffron-reviews-updated", syncReviews);
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      window.removeEventListener("saffron-reviews-updated", syncReviews);
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const marqueeReviews = useMemo(() => {
    if (!reviews.length) return [];
    return [...reviews, ...reviews];
  }, [reviews]);

  const onFieldChange = (field: keyof ReviewFormState, value: string | number | null) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof ReviewFormState, string>> = {};

    if (!formData.customerName.trim()) nextErrors.customerName = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.serviceType.trim()) nextErrors.serviceType = "Please choose a service type.";
    if (!formData.rating || formData.rating < 1) nextErrors.rating = "Please select a star rating.";
    if (!formData.title.trim()) nextErrors.title = "Please add a review title.";
    if (formData.message.trim().length < 20) {
      nextErrors.message = "Please share at least 20 characters of feedback.";
    }
    if (formData.photo && !/^data:image\//.test(formData.photo)) {
      nextErrors.photo = "Please upload a valid image.";
    }

    return nextErrors;
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      setErrors((current) => ({ ...current, photo: "Image must be smaller than 3 MB." }));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = typeof reader.result === "string" ? reader.result : null;
      setFormData((current) => ({ ...current, photo: dataUrl }));
      setErrors((current) => ({ ...current, photo: undefined }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 1000));

    const newReview: Review = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      customerName: formData.customerName.trim(),
      email: formData.email.trim(),
      serviceType: formData.serviceType,
      rating: formData.rating,
      title: formData.title.trim(),
      message: formData.message.trim(),
      image: formData.photo,
      status: "published",
      createdAt: new Date().toISOString(),
    };

    appendReview(newReview);
    setReviews(getPublishedReviews());
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitting(false);
    setSuccessVisible(true);
    setIsModalOpen(false);
    window.setTimeout(() => setSuccessVisible(false), 2600);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({});
  };

  return (
    <section className="relative py-24">
      <div className="container-page">
        <RevealOnScroll>
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Customer Feedback
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-ink-900 sm:text-5xl">
                Real experiences from customers who enjoy a clearer, brighter view.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink-700">
                Your feedback means a lot to us. Read what our customers have to say, or share your own experience with Saffron Window Cleaning.
              </p>
            </div>

            <button type="button" onClick={() => setIsModalOpen(true)} className="btn-primary self-start">
              <Star className="h-4 w-4 fill-current" />
              Share Your Experience
            </button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mb-10 rounded-[2rem] border border-sky-200/80 bg-gradient-to-r from-amber-50 via-white to-sky-50 p-5 shadow-[0_18px_48px_-24px_rgba(15,24,42,0.22)] sm:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl font-semibold text-ink-900">Enjoyed Our Service?</p>
                <p className="mt-2 max-w-lg text-sm leading-6 text-ink-700">
                  Your feedback helps us improve and helps other customers choose with confidence.
                </p>
              </div>
              <button type="button" onClick={() => setIsModalOpen(true)} className="btn-secondary shrink-0">
                Write a Review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {reviews.length === 0 ? (
          <div className="glass-panel p-10 text-center">
            <p className="text-lg font-semibold text-ink-900">No reviews yet</p>
            <p className="mt-2 text-sm text-ink-700">Be the first to share your experience with Saffron Window Cleaning.</p>
            <button type="button" onClick={() => setIsModalOpen(true)} className="btn-primary mt-6">
              Leave a Review
            </button>
          </div>
        ) : (
          <div className="review-marquee" aria-live="polite">
            <div
              className="review-marquee-track"
              style={{
                animationPlayState: reduceMotion ? "paused" : "running",
                animationDuration: `${Math.max(28, reviews.length * 18)}s`,
              }}
            >
              {marqueeReviews.map((review, index) => {
                const expanded = !!expandedReviews[review.id];
                const reviewText =
                  review.message.length > 170 && !expanded
                    ? `${review.message.slice(0, 170)}...`
                    : review.message;

                return (
                  <article key={`${review.id}-${index}`} className="review-marquee-card">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-semibold text-sky-700">
                          {getInitials(review.customerName)}
                        </div>
                        <div>
                          <p className="font-semibold text-ink-900">{review.customerName}</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate">{review.serviceType}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-700">
                        <CircleCheckBig className="h-3 w-3" />
                        Verified
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-4 text-sm text-slate">
                      <RatingStars count={review.rating} />
                      <span>{formatDate(review.createdAt)}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-ink-900">{review.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-700">
                      “{reviewText}”
                    </p>
                    {review.message.length > 170 ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedReviews((current) => ({
                            ...current,
                            [review.id]: !current[review.id],
                          }))
                        }
                        className="mt-3 inline-flex items-center text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                      >
                        {expanded ? "Show less" : "Read more"}
                      </button>
                    ) : null}

                    {review.image ? (
                      <img
                        src={review.image}
                        alt={`${review.customerName} review photo`}
                        className="mt-4 h-28 w-full rounded-2xl object-cover"
                      />
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        )}

        <RevealOnScroll>
          <div className="mt-10 rounded-[2rem] border border-sky-200/80 bg-white/75 p-6 shadow-[0_18px_48px_-24px_rgba(15,24,42,0.22)] backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="eyebrow inline-flex items-center gap-2">
                  <Quote className="h-3.5 w-3.5" />
                  Recent Feedback
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-ink-900">
                  Have We Cleaned Your Windows Recently?
                </h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-ink-700">
                  We’d love to know how we did. Your feedback takes just a minute and helps us continue delivering exceptional service.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setIsModalOpen(true)} className="btn-primary">
                  Leave Your Feedback
                </button>
                <Link to="/reviews" className="btn-secondary">
                  Read All Reviews
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <AnimatePresence>
        {isModalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-ink-900/45 p-3 backdrop-blur-sm sm:items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/60 bg-white/90 p-5 shadow-[0_32px_80px_-20px_rgba(15,23,42,0.48)] backdrop-blur-xl sm:p-7"
              role="dialog"
              aria-modal="true"
              aria-labelledby="review-modal-title"
            >
              <button
                type="button"
                aria-label="Close review form"
                onClick={closeModal}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-ink-800/10 bg-white text-ink-700 transition hover:bg-sky-50 hover:text-sky-700"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="eyebrow inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" />
                Share Your Experience
              </p>
              <h3 id="review-modal-title" className="mt-4 text-3xl font-semibold text-ink-900">
                Tell us about your experience
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                Your feedback helps us improve and helps future customers feel confident choosing us.
              </p>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-name" className="field-label">Name</label>
                    <input
                      id="modal-name"
                      className="field-input"
                      value={formData.customerName}
                      onChange={(event) => onFieldChange("customerName", event.target.value)}
                      placeholder="Jordan Smith"
                      aria-invalid={!!errors.customerName}
                    />
                    {errors.customerName && <p className="field-error">{errors.customerName}</p>}
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="field-label">Email</label>
                    <input
                      id="modal-email"
                      type="email"
                      className="field-input"
                      value={formData.email}
                      onChange={(event) => onFieldChange("email", event.target.value)}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="field-error">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="modal-service" className="field-label">Service received</label>
                    <select
                      id="modal-service"
                      className="field-input appearance-none"
                      value={formData.serviceType}
                      onChange={(event) => onFieldChange("serviceType", event.target.value)}
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && <p className="field-error">{errors.serviceType}</p>}
                  </div>

                  <div>
                    <label className="field-label">Rating</label>
                    <div className="flex items-center gap-2 rounded-xl border border-ink-800/15 bg-white/80 px-3 py-2.5">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          aria-label={`Rate ${value} out of 5`}
                          onClick={() => onFieldChange("rating", value)}
                          className="transition hover:scale-110"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              value <= formData.rating ? "fill-amber text-amber" : "fill-transparent text-slate/35"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-auto text-sm font-medium text-ink-700">{formData.rating}/5</span>
                    </div>
                    {errors.rating && <p className="field-error">{errors.rating}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-title" className="field-label">Review title</label>
                  <input
                    id="modal-title"
                    className="field-input"
                    value={formData.title}
                    onChange={(event) => onFieldChange("title", event.target.value)}
                    placeholder="Crystal clear finish for every pane"
                    aria-invalid={!!errors.title}
                  />
                  {errors.title && <p className="field-error">{errors.title}</p>}
                </div>

                <div>
                  <label htmlFor="modal-message" className="field-label">Review message</label>
                  <textarea
                    id="modal-message"
                    rows={5}
                    className="field-input resize-none"
                    placeholder="Tell us about the quality of the service, professionalism, and final result..."
                    value={formData.message}
                    onChange={(event) => onFieldChange("message", event.target.value)}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="field-error">{errors.message}</p>}
                </div>

                <div>
                  <label className="field-label">Optional image</label>
                  <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-dashed border-sky-300 bg-sky-50/80 px-4 py-4 text-sm font-medium text-sky-700 transition hover:border-sky-400 hover:bg-sky-100/90">
                    <Upload className="h-4 w-4" />
                    {formData.photo ? "Replace image" : "Upload a photo"}
                    <input type="file" accept="image/*" className="hidden" onChange={onFileChange} />
                  </label>
                  {formData.photo ? (
                    <img src={formData.photo} alt="Review upload preview" className="mt-3 h-28 w-full rounded-2xl object-cover" />
                  ) : null}
                  {errors.photo && <p className="field-error">{errors.photo}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-80">
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Submitting review...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Submit My Review
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {successVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.45)]"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="font-semibold text-ink-900">Thank you for your feedback! 🎉</p>
              <p className="text-sm text-ink-700">Your review has been submitted and is now live.</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

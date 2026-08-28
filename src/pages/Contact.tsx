import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Phone, Mail, MapPin, Clock, Send, Loader2, MessageCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import RevealOnScroll from "@/components/RevealOnScroll";
import { BRAND, SERVICE_OPTIONS } from "@/data/content";
import type { ContactFormValues } from "@/types";

const RECIPIENT_EMAIL = "patelshubh5009@gmail.com";
const WHATSAPP_LINK = "https://wa.me/12896882963?text=Hi%20Saffron%20Window%20Cleaning%2C%20I%20would%20like%20a%20free%20quote.";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: SERVICE_OPTIONS[0],
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      await emailjs.send(
        "service_vxawlhe",
        "template_8smklnn",
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
          to_email: RECIPIENT_EMAIL,
        },
        "3nxy1qH-mb164nZ5D"
      );

      toast.success("Thanks! Your quote request has been sent successfully.");
      reset();
    } catch (error) {
      toast.error("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get your free, no-obligation quote"
        description="Tell us a bit about your property and we'll follow up with next available dates."
      />

      <section className="pb-28 pt-4">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll>
            <div className="glass-panel h-full p-8">
              <h2 className="font-display text-xl font-semibold text-ink-800 dark:text-cloud">
                Reach us directly
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-glass" />
                  <div>
                    <p className="text-sm text-slate dark:text-ink-100">Call or text</p>
                    <a href={BRAND.phoneHref} className="font-medium text-ink-800 dark:text-cloud">
                      {BRAND.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-glass" />
                  <div>
                    <p className="text-sm text-slate dark:text-ink-100">WhatsApp</p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-ink-800 underline decoration-sky-500 underline-offset-4 dark:text-cloud"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-glass" />
                  <div>
                    <p className="text-sm text-slate dark:text-ink-100">Email</p>
                    <a href={`mailto:${BRAND.email}`} className="font-medium text-ink-800 dark:text-cloud">
                      {BRAND.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-glass" />
                  <div>
                    <p className="text-sm text-slate dark:text-ink-100">Service area</p>
                    <p className="font-medium text-ink-800 dark:text-cloud">{BRAND.serviceArea}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sky-600 dark:text-glass" />
                  <div>
                    <p className="text-sm text-slate dark:text-ink-100">Timing</p>
                    <p className="font-medium text-ink-800 dark:text-cloud">
                      Mon–Sat, 8:00 AM – 6:00 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="glass-panel space-y-5 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jordan Smith"
                    className="field-input"
                    aria-invalid={!!errors.name}
                    {...register("name", {
                      required: "Please enter your name.",
                      minLength: { value: 2, message: "Name must be at least 2 characters." },
                    })}
                  />
                  {errors.name && <p className="field-error">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="field-label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 (289) 688-2963"
                    className="field-input"
                    aria-invalid={!!errors.phone}
                    {...register("phone", {
                      required: "Please enter a phone number.",
                      pattern: {
                        value: /^[0-9()+\-.\s]{7,20}$/,
                        message: "Enter a valid phone number.",
                      },
                    })}
                  />
                  {errors.phone && <p className="field-error">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="field-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="field-input"
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address.",
                    },
                  })}
                />
                {errors.email && <p className="field-error">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="service" className="field-label">
                  Service needed
                </label>
                <select
                  id="service"
                  className="field-input appearance-none"
                  {...register("service", { required: true })}
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="field-label">
                  Tell us about your property
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Number of windows, storeys, or anything else we should know…"
                  className="field-input resize-none"
                  aria-invalid={!!errors.message}
                  {...register("message", {
                    required: "A few details help us quote accurately.",
                    minLength: { value: 10, message: "Please add a little more detail." },
                  })}
                />
                {errors.message && <p className="field-error">{errors.message.message}</p>}
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Request Free Quote
                  </>
                )}
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

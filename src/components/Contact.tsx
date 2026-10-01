import { FaEnvelope, FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { useState, type SubmitEvent } from "react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/portfolio";
import { Reveal } from "./Reveal";

export const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const accessKey =
      import.meta.env.WEB3FORMS_ACCESS_KEY ||
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message: t("contact.missingKey"),
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const payload = Object.fromEntries(new FormData(form));
      payload.access_key = accessKey;
      payload.subject = t("contact.emailSubject", { name: payload.name });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result: { success?: boolean } = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Web3Forms submission failed");
      }

      form.reset();
      setStatus({
        type: "success",
        message: t("contact.success"),
      });
    } catch {
      setStatus({
        type: "error",
        message: t("contact.failure"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <Reveal>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
              {t("contact.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-100 sm:text-4xl">
              {t("contact.title")}
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-stone-300">
            {t("contact.description")}
          </p>

          <div className="space-y-4">
            <a
              href={`https://wa.me/237699959447?text=${encodeURIComponent(t("contact.whatsappMessage"))}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-base font-medium text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
              {t("contact.whatsapp")}
            </a>

            <a
              href={socialLinks.email}
              className="inline-flex items-center gap-3 text-sm font-medium text-stone-200 transition-colors hover:text-white"
            >
              <FaEnvelope
                size={16}
                className="text-emerald-300"
                aria-hidden="true"
              />
              {socialLinks.email.replace("mailto:", "")}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t("social.github")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-200 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <FaGithub size={18} aria-hidden="true" />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label={t("social.facebook")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-stone-200 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <FaFacebookF size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.7rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.18)] sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-stone-200">
              {t("contact.form.name")}
              <input
                type="text"
                name="name"
                required
                className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                placeholder={t("contact.form.namePlaceholder")}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-stone-200">
              {t("contact.form.business")}
              <input
                type="text"
                name="business"
                className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                placeholder={t("contact.form.business")}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-stone-200">
              {t("contact.form.email")}
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                placeholder="you@example.com"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-stone-200">
              {t("contact.form.phone")}
              <input
                type="tel"
                name="contact"
                autoComplete="tel"
                className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                placeholder="+237..."
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-stone-200 sm:col-span-2">
              {t("contact.form.message")}
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                placeholder={t("contact.form.messagePlaceholder")}
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-stone-200 sm:col-span-2">
              {t("contact.form.budget")}
              <input
                type="text"
                name="budget"
                className="rounded-xl border border-white/10 bg-slate-900 px-3 py-3 text-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                placeholder={t("contact.form.budgetPlaceholder")}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-medium text-slate-950 transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting
              ? t("contact.form.sending")
              : t("contact.form.submit")}
          </button>

          {status ? (
            <p
              role="status"
              className={`mt-4 rounded-xl border px-3 py-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-100"
                  : "border-amber-400/20 bg-amber-500/10 text-amber-100"
              }`}
            >
              {status.message}
            </p>
          ) : null}

          <p className="mt-4 text-xs text-stone-400">
            {t("contact.form.privacy")}
          </p>
        </form>
      </Reveal>
    </div>
  );
};

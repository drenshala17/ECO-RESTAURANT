"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type LoginForm = {
  email: string;
  fjalekalimi: string;
};

type LoginErrors = Partial<Record<keyof LoginForm, string>>;

export default function KycKlientit() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    fjalekalimi: "",
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(field: keyof LoginForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    setIsSubmitted(false);
  }

  function validateForm() {
    const nextErrors: LoginErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Ju lutemi shkruani email-in.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Ju lutemi vendosni një email të vlefshëm.";
    }

    if (!form.fjalekalimi) {
      nextErrors.fjalekalimi = "Ju lutemi shkruani fjalëkalimin.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);
    setIsSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden px-5 py-10 sm:px-8">
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 size-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white shadow-lg shadow-emerald-700/20">
              E
            </span>
            <span className="text-lg font-bold tracking-[0.18em] text-slate-800">
              ECO-RESTAURANT
            </span>
          </Link>
        </div>

        <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.3)] backdrop-blur sm:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Mirë se u kthyet
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Kyçu si klient
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Hyni në llogarinë tuaj për të vazhduar me porositë.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-gabim" : undefined}
                onChange={(event) => handleChange("email", event.target.value)}
                className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                  errors.email
                    ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                    : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
                }`}
              />
              {errors.email && (
                <p id="email-gabim" className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="fjalekalimi"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Fjalëkalimi
              </label>
              <div className="relative">
                <input
                  id="fjalekalimi"
                  name="fjalekalimi"
                  type={showPassword ? "text" : "password"}
                  value={form.fjalekalimi}
                  required
                  aria-invalid={Boolean(errors.fjalekalimi)}
                  aria-describedby={
                    errors.fjalekalimi ? "fjalekalimi-gabim" : undefined
                  }
                  onChange={(event) =>
                    handleChange("fjalekalimi", event.target.value)
                  }
                  className={`w-full rounded-xl border bg-slate-50 px-4 py-3 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
                    errors.fjalekalimi
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((isVisible) => !isVisible)}
                  aria-label={
                    showPassword
                      ? "Fshih fjalëkalimin"
                      : "Shfaq fjalëkalimin"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {showPassword ? "Fshih" : "Shfaq"}
                </button>
              </div>
              {errors.fjalekalimi && (
                <p id="fjalekalimi-gabim" className="mt-2 text-sm text-red-600">
                  {errors.fjalekalimi}
                </p>
              )}
            </div>

            {isSubmitted && (
              <p
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
              >
                Të dhënat janë të vlefshme. Funksionaliteti i kyçjes do të
                aktivizohet së shpejti.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Kyçu
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Nuk ke llogari?{" "}
            <Link
              href="/klienti/regjistrimi"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Regjistrohu
            </Link>
          </p>
        </section>

        <p className="mt-7 text-center text-sm">
          <Link href="/" className="font-medium text-slate-500 hover:text-emerald-700">
            ← Kthehu në faqen fillestare
          </Link>
        </p>
      </div>
    </main>
  );
}

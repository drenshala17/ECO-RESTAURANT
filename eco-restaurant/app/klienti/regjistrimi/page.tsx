"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormFields = {
  emri: string;
  mbiemri: string;
  email: string;
  fjalekalimi: string;
  konfirmimi: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialForm: FormFields = {
  emri: "",
  mbiemri: "",
  email: "",
  fjalekalimi: "",
  konfirmimi: "",
};

export default function RegjistrimiKlientit() {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(field: keyof FormFields, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    setIsSubmitted(false);
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!form.emri.trim()) {
      nextErrors.emri = "Ju lutemi shkruani emrin.";
    }

    if (!form.mbiemri.trim()) {
      nextErrors.mbiemri = "Ju lutemi shkruani mbiemrin.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Ju lutemi shkruani email-in.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Ju lutemi vendosni një email të vlefshëm.";
    }

    if (!form.fjalekalimi) {
      nextErrors.fjalekalimi = "Ju lutemi vendosni një fjalëkalim.";
    }

    if (!form.konfirmimi) {
      nextErrors.konfirmimi = "Ju lutemi konfirmoni fjalëkalimin.";
    } else if (form.fjalekalimi !== form.konfirmimi) {
      nextErrors.konfirmimi = "Fjalëkalimet nuk përputhen.";
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

      <div className="relative z-10 w-full max-w-2xl">
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
              Llogari e re
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              Regjistrohu si klient
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
              Krijoni llogarinë tuaj për të shijuar një përvojë të lehtë porosie.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id="emri"
                label="Emri"
                value={form.emri}
                error={errors.emri}
                onChange={(value) => handleChange("emri", value)}
              />
              <FormField
                id="mbiemri"
                label="Mbiemri"
                value={form.mbiemri}
                error={errors.mbiemri}
                onChange={(value) => handleChange("mbiemri", value)}
              />
            </div>

            <FormField
              id="email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(value) => handleChange("email", value)}
            />
            <FormField
              id="fjalekalimi"
              label="Fjalëkalimi"
              type="password"
              value={form.fjalekalimi}
              error={errors.fjalekalimi}
              onChange={(value) => handleChange("fjalekalimi", value)}
            />
            <FormField
              id="konfirmimi"
              label="Konfirmimi i fjalëkalimit"
              type="password"
              value={form.konfirmimi}
              error={errors.konfirmimi}
              onChange={(value) => handleChange("konfirmimi", value)}
            />

            {isSubmitted && (
              <p
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
              >
                Të dhënat janë të vlefshme. Regjistrimi do të aktivizohet së shpejti.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Regjistrohu
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-slate-500">
            Ke tashmë llogari?{" "}
            <Link href="/" className="font-semibold text-emerald-700 hover:text-emerald-800">
              Kyçu
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

type FormFieldProps = {
  id: keyof FormFields;
  label: string;
  type?: "text" | "email" | "password";
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function FormField({
  id,
  label,
  type = "text",
  value,
  error,
  onChange,
}: FormFieldProps) {
  const errorId = `${id}-gabim`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-100"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";

type StaffRole = "Kuzhinieri" | "Pronari";

const staffRoles: {
  name: StaffRole;
  description: string;
  icon: "chef" | "owner";
}[] = [
  {
    name: "Kuzhinieri",
    description: "Menaxhoni porositë dhe përgatitjen e ushqimeve.",
    icon: "chef",
  },
  {
    name: "Pronari",
    description: "Mbani nën kontroll restorantin dhe aktivitetin e tij.",
    icon: "owner",
  },
];

export default function KycStafit() {
  const [selectedRole, setSelectedRole] = useState<StaffRole | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#11100e] px-5 py-10 text-[#f5efe4] sm:px-8">
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-[#c6a15b]/10 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 size-80 rounded-full bg-[#c6a15b]/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="ECO-RESTAURANT">
            <span className="flex size-11 items-center justify-center border border-[#c6a15b] text-lg font-semibold text-[#c6a15b]">
              E
            </span>
            <span className="text-lg font-semibold tracking-[0.22em] text-[#f5efe4]">
              ECO-RESTAURANT
            </span>
          </Link>
        </div>

        <section className="rounded-3xl border border-[#3b3731] bg-[#1a1815] p-6 shadow-2xl shadow-black/30 sm:p-10">
          {selectedRole ? (
            <LoginForm
              role={selectedRole}
              onBack={() => setSelectedRole(null)}
              onSubmit={handleSubmit}
            />
          ) : (
            <>
              <div className="mb-8 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c6a15b]">
                  Hyrje e sigurt
                </p>
                <h1 className="text-3xl font-light tracking-tight text-[#f5efe4]">
                  Kyçja e stafit
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#a9a39a]">
                  Zgjidhni rolin tuaj për të vazhduar në hapësirën e menaxhimit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {staffRoles.map((role) => (
                  <RoleCard
                    key={role.name}
                    role={role}
                    onContinue={() => setSelectedRole(role.name)}
                  />
                ))}
              </div>
            </>
          )}
        </section>

        <p className="mt-7 text-center text-sm">
          <Link href="/" className="text-[#a9a39a] transition hover:text-[#c6a15b]">
            ← Kthehu në faqen kryesore
          </Link>
        </p>
      </div>
    </main>
  );
}

function RoleCard({
  role,
  onContinue,
}: {
  role: (typeof staffRoles)[number];
  onContinue: () => void;
}) {
  return (
    <article className="rounded-2xl border border-[#4b4439] bg-[#11100e] p-5 transition hover:border-[#c6a15b]/80">
      <div className="flex size-12 items-center justify-center rounded-xl bg-[#c6a15b]/10 text-[#c6a15b]">
        <RoleIcon type={role.icon} />
      </div>
      <h2 className="mt-5 text-xl font-medium text-[#f5efe4]">{role.name}</h2>
      <p className="mt-2 min-h-12 text-sm leading-6 text-[#a9a39a]">{role.description}</p>
      <button
        type="button"
        onClick={onContinue}
        className="mt-5 w-full rounded-xl border border-[#c6a15b] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6a15b] transition hover:bg-[#c6a15b] hover:text-[#11100e] focus:outline-none focus:ring-2 focus:ring-[#c6a15b] focus:ring-offset-2 focus:ring-offset-[#11100e]"
      >
        Vazhdo
      </button>
    </article>
  );
}

function LoginForm({
  role,
  onBack,
  onSubmit,
}: {
  role: StaffRole;
  onBack: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className="mb-7 text-sm text-[#a9a39a] transition hover:text-[#c6a15b]"
      >
        ← Ndrysho rolin
      </button>

      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c6a15b]">
          {role}
        </p>
        <h1 className="text-3xl font-light tracking-tight text-[#f5efe4]">
          Kyçu si {role.toLowerCase()}
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#a9a39a]">
          Shkruani të dhënat tuaja për të vazhduar.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#d8d0c3]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-[#4b4439] bg-[#11100e] px-4 py-3 text-sm text-[#f5efe4] outline-none transition placeholder:text-[#6f6960] focus:border-[#c6a15b] focus:ring-2 focus:ring-[#c6a15b]/20"
          />
        </div>

        <div>
          <label
            htmlFor="fjalekalimi"
            className="mb-2 block text-sm font-medium text-[#d8d0c3]"
          >
            Fjalëkalimi
          </label>
          <input
            id="fjalekalimi"
            name="fjalekalimi"
            type="password"
            required
            className="w-full rounded-xl border border-[#4b4439] bg-[#11100e] px-4 py-3 text-sm text-[#f5efe4] outline-none transition placeholder:text-[#6f6960] focus:border-[#c6a15b] focus:ring-2 focus:ring-[#c6a15b]/20"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#c6a15b] px-5 py-3.5 text-sm font-semibold text-[#11100e] transition hover:bg-[#d8b976] focus:outline-none focus:ring-2 focus:ring-[#c6a15b] focus:ring-offset-2 focus:ring-offset-[#1a1815]"
        >
          Kyçu
        </button>
      </form>
    </>
  );
}

function RoleIcon({ type }: { type: "chef" | "owner" }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  if (type === "chef") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
        <path {...commonProps} d="M7.5 10.5h9v9h-9zM5 10.5h14M9 10.5V8a3 3 0 0 1 6 0v2.5M12 5V3M8 5 6.5 3.5M16 5l1.5-1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6">
      <path {...commonProps} d="M4 20h16M6 20v-9l6-4 6 4v9M9 20v-5h6v5M9 10h.01M12 10h.01M15 10h.01" />
    </svg>
  );
}

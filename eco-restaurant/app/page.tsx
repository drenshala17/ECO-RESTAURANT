"use client";

import { useState } from "react";
import Link from "next/link";

type Role = {
  name: string;
  description: string;
  icon: "client" | "chef" | "owner";
  accent: string;
  href?: string;
  registrationHref?: string;
};

const roles: Role[] = [
  {
    name: "Klienti",
    description: "Hyr si klient për të parë ushqimet dhe për të porositur.",
    icon: "client",
    accent: "bg-emerald-100 text-emerald-700",
    href: "/klienti/kyc",
    registrationHref: "/klienti/regjistrimi",
  },
  {
    name: "Kuzhinieri",
    description: "Hyr në sistem për të menaxhuar porositë.",
    icon: "chef",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    name: "Pronari",
    description: "Hyr në sistem për të menaxhuar restorantin.",
    icon: "owner",
    accent: "bg-sky-100 text-sky-700",
  },
];

function RoleIcon({ type }: { type: Role["icon"] }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  if (type === "chef") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
        <path {...commonProps} d="M7.5 10.5h9v9h-9zM5 10.5h14M9 10.5V8a3 3 0 0 1 6 0v2.5M12 5V3M8 5 6.5 3.5M16 5l1.5-1.5" />
      </svg>
    );
  }

  if (type === "owner") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
        <path {...commonProps} d="M4 20h16M6 20v-9l6-4 6 4v9M9 20v-5h6v5M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7">
      <path {...commonProps} d="M12 3.5c-4.7 0-8.5 3.2-8.5 7.2 0 2.3 1.3 4.3 3.4 5.6l-.8 3.2 3.2-1.6c.9.2 1.8.3 2.7.3 4.7 0 8.5-3.2 8.5-7.2S16.7 3.5 12 3.5Z" />
      <path {...commonProps} d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </svg>
  );
}

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden px-5 py-10 sm:px-8 lg:px-12">
      <div className="absolute -left-24 -top-24 size-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-20 size-80 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl">
        <header className="mb-12 text-center sm:mb-14">
          <div className="mb-7 inline-flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-emerald-700 text-lg font-bold text-white shadow-lg shadow-emerald-700/20">
              E
            </span>
            <span className="text-lg font-bold tracking-[0.18em] text-slate-800">
              ECO-RESTAURANT
            </span>
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Mirë se vini
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Zgjidhni mënyrën tuaj të hyrjes
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Një përvojë e thjeshtë dhe e këndshme për çdo pjesë të restorantit
            tuaj.
          </p>
        </header>

        <section
          aria-label="Zgjidhni rolin tuaj"
          className="grid gap-5 md:grid-cols-3"
        >
          {roles.map((role) => (
            <RoleCard
              key={role.name}
              role={role}
              onSelect={() => setSelectedRole(role.name)}
            />
          ))}
        </section>

        {selectedRole && (
          <div
            role="status"
            className="mx-auto mt-8 max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center text-sm text-emerald-800"
          >
            Faqja për <strong>{selectedRole}</strong> do të jetë e disponueshme
            së shpejti.
          </div>
        )}

        <footer className="mt-12 text-center text-sm text-slate-400">
          Zgjedhja juaj e mirë, nga kuzhina te tavolina.
        </footer>
      </div>
    </main>
  );
}

const cardClassName =
  "group cursor-pointer rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_45px_-20px_rgba(15,118,110,0.25)] focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2";

function RoleCard({
  role,
  onSelect,
}: {
  role: Role;
  onSelect: () => void;
}) {
  const content = (
    <>
              <div className="flex items-start justify-between">
                <div className={`flex size-14 items-center justify-center rounded-2xl ${role.accent}`}>
                  <RoleIcon type={role.icon} />
                </div>
                <span className="text-2xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600">
                  →
                </span>
              </div>
              <h2 className="mt-7 text-2xl font-semibold text-slate-900">
                {role.name}
              </h2>
              <p className="mt-3 min-h-14 text-[15px] leading-6 text-slate-500">
                {role.description}
              </p>
              {role.href ? (
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={role.href}
                    className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Kyçu
                  </Link>
                  <Link
                    href={role.registrationHref ?? "/klienti/regjistrimi"}
                    className="rounded-xl border border-emerald-700 px-4 py-3 text-center text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    Regjistrohu
                  </Link>
                </div>
              ) : (
                <button
                  type="button"
                  className="mt-7 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelect();
                  }}
                >
                  Kyçu
                </button>
              )}
    </>
  );

  return (
    <article className={cardClassName} onClick={role.href ? undefined : onSelect}>
      {content}
    </article>
  );
}

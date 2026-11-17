"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";

type Category = "Të gjitha" | "Antipasta" | "Pjata kryesore" | "Ëmbëlsira";

type Dish = {
  name: string;
  description: string;
  price: string;
  category: Exclude<Category, "Të gjitha">;
  image: string;
  imageAlt: string;
};

const categories: Category[] = [
  "Të gjitha",
  "Antipasta",
  "Pjata kryesore",
  "Ëmbëlsira",
];

const dishes: Dish[] = [
  {
    name: "Burrata me domate të pjekura",
    description: "Burrata kremoze, domate të ëmbla dhe vaj borziloku.",
    price: "12.50 €",
    category: "Antipasta",
    image:
      "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Burrata me domate të freskëta",
  },
  {
    name: "Karkaleca me agrume",
    description: "Karkaleca të freskët, agrume dhe sallatë me kopër.",
    price: "16.00 €",
    category: "Antipasta",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Pjatë me karkaleca dhe agrume",
  },
  {
    name: "Fileto viçi me trumzë",
    description: "Fileto e pjekur në perfeksion me salcë vere të kuqe.",
    price: "28.00 €",
    category: "Pjata kryesore",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fileto viçi e servirur me perime",
  },
  {
    name: "Risotto me kërpudha pylli",
    description: "Oriz Carnaroli, kërpudha pylli dhe parmixhano i vjetëruar.",
    price: "19.50 €",
    category: "Pjata kryesore",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Risotto kremoz me kërpudha",
  },
  {
    name: "Salmon me barishte",
    description: "Salmon i egër, pure bizeleje dhe salcë me limon.",
    price: "24.00 €",
    category: "Pjata kryesore",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Fileto salmoni me garniturë",
  },
  {
    name: "Tiramisu klasik",
    description: "Krem mascarpone, kafe espresso dhe kakao e hidhur.",
    price: "8.00 €",
    category: "Ëmbëlsira",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Tiramisu i servirur në gotë",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Të gjitha");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const visibleDishes =
    selectedCategory === "Të gjitha"
      ? dishes
      : dishes.filter((dish) => dish.category === selectedCategory);

  function handleOrder(dish: Dish) {
    setSelectedDish(dish);
    setAuthMode("login");
  }

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="min-h-screen bg-[#11100e] text-[#f5efe4]">
      <header className="border-b border-[#c6a15b]/20 bg-[#11100e]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3" aria-label="ECO-RESTAURANT">
            <span className="flex size-10 items-center justify-center border border-[#c6a15b] text-lg font-semibold text-[#c6a15b]">
              E
            </span>
            <span className="text-sm font-semibold tracking-[0.3em] text-[#f5efe4] sm:text-base">
              ECO-RESTAURANT
            </span>
          </Link>
          <span className="hidden text-xs uppercase tracking-[0.25em] text-[#a9a39a] sm:block">
            Kuzhinë e zgjedhur
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#c6a15b]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(198,161,91,0.18),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(198,161,91,0.08),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#c6a15b]">
            Shije që mbetet
          </p>
          <h1 className="max-w-3xl text-5xl font-light leading-[1.05] tracking-tight text-[#f5efe4] sm:text-7xl">
            Një përvojë e veçantë,
            <span className="block text-[#c6a15b]">në çdo pjatë.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#a9a39a] sm:text-lg">
            Përbërës të zgjedhur, teknikë moderne dhe pasion për shijen.
            Mirë se vini në tryezën tonë.
          </p>
          <a
            href="#menuja"
            className="mt-9 inline-flex items-center gap-3 border border-[#c6a15b] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c6a15b] transition hover:bg-[#c6a15b] hover:text-[#11100e]"
          >
            Shiko menunë
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="menuja" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#c6a15b]">
              Menuja jonë
            </p>
            <h2 className="text-3xl font-light tracking-tight text-[#f5efe4] sm:text-4xl">
              Zgjedhje të kuruara
            </h2>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Kategoritë e ushqimeve"
          >
            {categories.map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`border px-4 py-2 text-xs font-medium transition ${
                    isSelected
                      ? "border-[#c6a15b] bg-[#c6a15b] text-[#11100e]"
                      : "border-[#5d5549] text-[#a9a39a] hover:border-[#c6a15b] hover:text-[#c6a15b]"
                  }`}
                  aria-pressed={isSelected}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDishes.map((dish) => (
            <article
              key={dish.name}
              className="group flex min-h-40 overflow-hidden rounded-2xl border border-[#3b3731] bg-[#1a1815] transition hover:border-[#c6a15b]/70"
            >
              <div className="flex min-w-0 flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#c6a15b]">
                    {dish.category}
                  </span>
                  <h3 className="mt-2 text-lg font-medium leading-tight text-[#f5efe4]">
                    {dish.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#a9a39a]">
                    {dish.description}
                  </p>
                </div>
                <span className="mt-4 text-sm font-semibold text-[#c6a15b]">{dish.price}</span>
                <button
                  type="button"
                  onClick={() => handleOrder(dish)}
                  className="mt-4 w-full rounded-lg border border-[#c6a15b] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#c6a15b] transition hover:bg-[#c6a15b] hover:text-[#11100e] focus:outline-none focus:ring-2 focus:ring-[#c6a15b] focus:ring-offset-2 focus:ring-offset-[#1a1815]"
                  aria-label={`Porosit ${dish.name}`}
                >
                  Porosit
                </button>
              </div>
              <div className="relative order-2 w-32 shrink-0 overflow-hidden bg-[#2a2722] sm:w-36">
                <img
                  src={dish.image}
                  alt={dish.imageAlt}
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#c6a15b]/20 px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs tracking-wide text-[#6f6960]">
            Përgatitur me kujdes. Shërbyer me pasion.
          </p>
          <Link
            href="/staf/kyc"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6f6960] transition hover:text-[#c6a15b]"
          >
            Kyçja e stafit
          </Link>
        </div>
      </footer>

      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm sm:px-6"
          role="presentation"
          onClick={() => setSelectedDish(null)}
        >
          <section
            className="relative my-auto w-full max-w-lg rounded-3xl border border-[#c6a15b]/40 bg-[#1a1815] p-6 shadow-2xl shadow-black/50 sm:p-9"
            role="dialog"
            aria-modal="true"
            aria-labelledby="order-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full border border-[#4b4439] text-lg text-[#a9a39a] transition hover:border-[#c6a15b] hover:text-[#c6a15b]"
              aria-label="Mbyll dritaren"
            >
              ×
            </button>

            <div className="pr-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c6a15b]">
                Porosia juaj
              </p>
              <h2
                id="order-modal-title"
                className="mt-3 text-2xl font-light tracking-tight text-[#f5efe4] sm:text-3xl"
              >
                {selectedDish.name}
              </h2>
              <p className="mt-2 text-sm text-[#a9a39a]">
                Kyçu ose krijo një llogari për të vazhduar.
              </p>
            </div>

            <div className="mt-7 flex rounded-xl border border-[#4b4439] bg-[#11100e] p-1">
              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  authMode === "login"
                    ? "bg-[#c6a15b] text-[#11100e]"
                    : "text-[#a9a39a] hover:text-[#c6a15b]"
                }`}
                aria-pressed={authMode === "login"}
              >
                Kyçu
              </button>
              <button
                type="button"
                onClick={() => setAuthMode("register")}
                className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                  authMode === "register"
                    ? "bg-[#c6a15b] text-[#11100e]"
                    : "text-[#a9a39a] hover:text-[#c6a15b]"
                }`}
                aria-pressed={authMode === "register"}
              >
                Regjistrohu
              </button>
            </div>

            <form onSubmit={handleDemoSubmit} className="mt-7 space-y-4">
              {authMode === "register" && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <ModalField id="emri" label="Emri" />
                  <ModalField id="mbiemri" label="Mbiemri" />
                </div>
              )}
              <ModalField id="email" label="Email" type="email" />
              <ModalField id="fjalekalimi" label="Fjalëkalimi" type="password" />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#c6a15b] px-5 py-3.5 text-sm font-semibold text-[#11100e] transition hover:bg-[#d8b976] focus:outline-none focus:ring-2 focus:ring-[#c6a15b] focus:ring-offset-2 focus:ring-offset-[#1a1815]"
              >
                {authMode === "login" ? "Kyçu" : "Regjistrohu"}
              </button>
            </form>

            <p className="mt-5 text-center text-xs leading-5 text-[#6f6960]">
              Ky funksionalitet do të aktivizohet së shpejti.
            </p>
          </section>
        </div>
      )}
    </main>
  );
}

function ModalField({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
}) {
  return (
    <div>
      <label htmlFor={`modal-${id}`} className="mb-2 block text-sm font-medium text-[#d8d0c3]">
        {label}
      </label>
      <input
        id={`modal-${id}`}
        name={id}
        type={type}
        required
        className="w-full rounded-xl border border-[#4b4439] bg-[#11100e] px-4 py-3 text-sm text-[#f5efe4] outline-none transition placeholder:text-[#6f6960] focus:border-[#c6a15b] focus:ring-2 focus:ring-[#c6a15b]/20"
      />
    </div>
  );
}

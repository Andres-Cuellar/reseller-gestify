"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

type Currency = "USD" | "COP";

const plans = [
  {
    name: "Solo",
    prices: { USD: "27", COP: "80.000" },
    subaccounts: "1 Subcuenta",
    popular: false,
    hrefs: { USD: "https://whop.com/gestify-reseller/20subs-copy/", COP: "https://mpago.la/1aV17pC" },
    features: [
      "CRM omnicanal completo",
      "Panel de administración",
      "Comunidad Skool (En construcción)",
      "Llamadas grupales quincenales",

    ],
  },
  {
    name: "Agencia",
    prices: { USD: "57", COP: "190.000" },
    subaccounts: "20 Subcuentas",
    popular: true,
    hrefs: { USD: "https://whop.com/gestify-reseller/20subs", COP: "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=f122679cd2504ebf8c38f53f2ffa055a" },
    features: [
      "CRM omnicanal completo",
      "Panel de administración",
      "Comunidad Skool (En construcción)",
      "Llamadas grupales quincenales",
      "Snapshots listos para usar",
    ],
  },
  {
    name: "Ilimitado",
    prices: { USD: "97", COP: "320.000" },
    subaccounts: "Subcuentas ilimitadas",
    popular: false,
    hrefs: { USD: "https://whop.com/gestify-reseller/gestify-reseller-ilimitadas/", COP: "https://mpago.la/2Pv5J4f" },
    features: [
      "CRM omnicanal completo",
      "Panel de administración",
      "Comunidad Skool (En construcción)",
      "Snapshots listos para usar",
      "Llamada 1:1 bimensual con Felipe",
      "Acceso directo · acompañamiento real",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section
      id="precios"
      className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto mb-6 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Elige tu plan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">
            Todos los planes incluyen acceso completo al CRM. La diferencia
            está en el número de clientes que puedes gestionar.
          </p>
        </RevealOnScroll>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-2 py-1.5 shadow-sm">
            <span className="hidden pl-2 text-xs font-semibold uppercase tracking-wide text-ink/50 sm:inline">
              Moneda
            </span>
            <div className="flex rounded-full bg-ink/5 p-1">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                aria-pressed={currency === "USD"}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                  currency === "USD"
                    ? "bg-ink text-paper shadow-sm"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                USD
              </button>
              <button
                type="button"
                onClick={() => setCurrency("COP")}
                aria-pressed={currency === "COP"}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                  currency === "COP"
                    ? "bg-ink text-paper shadow-sm"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                COP
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ scale: plan.popular ? 1.03 : 1.02 }}
              className={
                plan.popular
                  ? "relative rounded-3xl border-2 border-accent bg-ink px-7 py-9 text-paper shadow-[0_20px_60px_-20px_rgba(35,65,133,0.45)] lg:-translate-y-3 lg:scale-[1.04]"
                  : "relative rounded-3xl border border-ink/10 bg-white px-7 py-9 text-ink"
              }
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm">
                  Más popular
                </span>
              )}

              <h3 className="font-display text-lg font-bold">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-data text-4xl font-bold">
                  ${plan.prices[currency]}
                </span>
                <span
                  className={`font-data text-sm ${plan.popular ? "text-mist" : "text-ink/50"}`}
                >
                  /mes
                </span>
              </div>
              <p
                className={`mt-1 font-data text-sm ${plan.popular ? "text-accent" : "text-ink/60"}`}
              >
                {plan.subaccounts}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon />
                    <span
                      className={plan.popular ? "text-paper/90" : "text-ink/80"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.hrefs[currency]}
                className={
                  plan.popular
                    ? "mt-8 block rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-accent-light active:scale-95"
                    : "mt-8 block rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-paper transition-transform hover:scale-[1.03] hover:bg-ink/85 active:scale-95"
                }
              >
                Empezar →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

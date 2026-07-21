"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const plans = [
  {
    name: "Solo",
    price: "80.000",
    subaccounts: "1 subcuenta",
    popular: false,
    href: "https://mpago.la/1aV17pC",
    features: [
      "CRM omnicanal completo",
      "Panel de administración",
      "Comunidad Skool (En construcción)",
      "Llamadas grupales quincenales",
      "Snapshots de agencia",
      "Llamada 1:1 con Felipe",
    ],
  },
  {
    name: "Agencia",
    price: "190.000",
    subaccounts: "20 subcuentas",
    popular: true,
    href: "https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=f122679cd2504ebf8c38f53f2ffa055a",
    features: [
      "CRM omnicanal completo",
      "Panel de administración",
      "Comunidad Skool (En construcción)",
      "Llamadas grupales quincenales",
      "Snapshots listos para usar",
      "Llamada 1:1 con Felipe",
    ],
  },
  {
    name: "Ilimitado",
    price: "320.000",
    subaccounts: "Sin límite",
    popular: false,
    href: "https://mpago.la/2Pv5J4f",
    features: [
      "CRM omnicanal completo",
      "Panel de administración",
      "Comunidad Skool (En construcción)",
      "Snapshots listos para usar",
      "Llamada 1:1 mensual con Felipe",
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
  return (
    <section
      id="precios"
      className="bg-paper px-5 py-20 text-ink sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Elige tu plan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">
            Todos los planes incluyen acceso completo al CRM. La diferencia
            está en el número de clientes que puedes gestionar.
          </p>
        </RevealOnScroll>

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
                  ${plan.price}
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
                href={plan.href}
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

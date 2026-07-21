"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const ventajas = [
  {
    title: "Paga en pesos, no en dólares",
    ours: "Todo en COP, sin tipo de cambio",
    theirs: "Clientify, HubSpot y otros cotizan en USD",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9c0-1.5 1.5-2 3-2s3 .5 3 2-1.5 2-3 3-3 1.5-3 3 1.5 2 3 2 3-.5 3-2" />
        <path d="M12 6v12" />
      </>
    ),
  },
  {
    title: "WhatsApp nativo",
    ours: "Multiagente + API oficial, sin terceros",
    theirs: "Integraciones de pago o sin WhatsApp nativo",
    icon: (
      <>
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path d="M9 10a.5.5 0 0 0 0 1" />
        <path d="M14 10a.5.5 0 0 0 0 1" />
        <path d="M10.5 14c.5.5 1.5.5 2 0" />
      </>
    ),
  },
  {
    title: "20 subcuentas incluidas",
    ours: "Una tarifa, muchos clientes",
    theirs: "Cobro por usuario o plan muy superior",
    icon: (
      <>
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="3" y="15" width="7" height="7" rx="1.5" />
        <rect x="14" y="15" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    title: "Embudos + landing pages",
    ours: "Constructor drag-and-drop incluido",
    theirs: "Add-on separado o plan enterprise",
    icon: (
      <path d="M4 4h16l-6 9v6l-4 1v-7L4 4z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Snapshots preconfigurados",
    ours: "Onboarding en minutos, no en semanas",
    theirs: "Configuración desde cero, sin plantillas",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
        <path d="M9 9h1" />
      </>
    ),
  },
  {
    title: "Acompañamiento real",
    ours: "Comunidad Skool + llamada 1:1",
    theirs: "Chatbot o plan enterprise para soporte",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
];

export default function Ventajas() {
  return (
    <section id="ventajas" className="bg-ink px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-[0.14em] text-accent">
            vs. Clientify, HubSpot y otros CRMs
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Por qué elegir Gestify
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
            No somos un CRM genérico. Cada decisión está pensada para agencias
            colombianas que quieren escalar sin pagar en dólares.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ventajas.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-paper">
                {item.title}
              </h3>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-accent">
                  {item.ours}
                </span>
                <span className="text-sm leading-relaxed text-mist">
                  {item.theirs}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

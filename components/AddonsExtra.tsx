"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const addons = [
  {
    name: "WhatZai — 3 números WhatsApp",
    price: "$21 USD/mes",
    description:
      "Conecta 3 líneas de WhatsApp al CRM. Ideal para reventas — cobra $10 USD por número.",
  },
  {
    name: "WhatsApp API Oficial",
    price: "$12 USD/mes",
    description:
      "Para clientes con alto volumen de mensajes. Integración directa sin intermediarios.",
  },
];

export default function AddonsExtra() {
  return (
    <section id="add-ons" className="bg-paper px-5 pb-24 text-ink sm:px-8">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto mb-10 max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-[0.14em] text-coral">
            Add-ons disponibles
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Potencia tu CRM
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60 sm:text-lg">
            Servicios adicionales que puedes activar en cualquier plan según
            las necesidades de tus clientes.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {addons.map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              whileHover={{ scale: 1.015 }}
              className="flex flex-col gap-2 rounded-2xl border border-ink/10 bg-white p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-base font-semibold text-ink">
                  {addon.name}
                </h3>
                <span className="shrink-0 font-data text-sm font-semibold text-accent">
                  {addon.price}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink/60">
                {addon.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

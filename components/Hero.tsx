"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CurrencyTicker from "./CurrencyTicker";
import { staggerContainer, staggerItem } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center"
      >
        <motion.span
          variants={staggerItem}
          className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-mist"
        >
          CRM profesional para agencias colombianas
        </motion.span>

        <motion.h1
          variants={staggerItem}
          className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-6xl"
        >
          Todo lo que necesita tu agencia.
          <br />
          Sin pagar en dólares.
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="max-w-2xl text-balance text-base leading-relaxed text-mist sm:text-lg"
        >
          Gestiona todos tus clientes desde un CRM omnicanal completo —
          WhatsApp, email, SMS, calendarios, embudos y automatizaciones —
          desde{" "}
          <span className="font-data font-semibold text-accent">
            $190.000 COP
          </span>{" "}
          al mes.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#precios"
            className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(62,181,232,0.55)] transition-transform hover:scale-[1.04] hover:bg-accent-light active:scale-95 sm:text-base"
          >
            Elegir mi plan →
          </a>
          <Link
            href="/agenda"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.04] hover:border-accent hover:text-accent active:scale-95 sm:text-base"
          >
            Agendar demo →
          </Link>
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="font-data text-xs text-mist"
        >
          Tu portal: app.gstf.us · Acceso inmediato tras el pago
        </motion.p>

        <motion.div variants={staggerItem} className="mt-6 w-full">
          <div className="flex justify-center">
            <CurrencyTicker />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

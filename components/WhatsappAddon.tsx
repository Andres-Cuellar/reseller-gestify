"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

export default function WhatsappAddon() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-data text-xs uppercase tracking-[0.14em] text-coral">
            Add-on WhatsApp
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            WhatsApp como nunca lo tuviste
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
            Dos opciones para conectar WhatsApp a tu CRM, según el volumen y
            las necesidades de cada cliente.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* WhatZai — Multiagente */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.015 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-paper">
              WhatZai — Multiagente
            </h3>
            <p className="mt-1 font-data text-sm text-accent">
              3 números de WhatsApp conectados a tu CRM
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Conecta hasta 3 líneas de WhatsApp al mismo panel. Ideal para
              agencias que manejan distintos proyectos o equipos de ventas
              con números separados. Sin restricciones de WhatsApp Business
              API.
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">
                  Tu costo
                </dt>
                <dd className="mt-1 font-data text-base font-semibold text-paper">
                  $21 USD/mes
                </dd>
                <dd className="font-data text-xs text-mist">3 números</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">
                  Precio de reventa sugerido
                </dt>
                <dd className="mt-1 font-data text-base font-semibold text-paper">
                  $10 USD/mes
                </dd>
                <dd className="font-data text-xs text-mist">por número</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">
                  Margen potencial
                </dt>
                <dd className="mt-1 font-data text-base font-semibold text-accent">
                  +$9 USD/mes
                </dd>
                <dd className="font-data text-xs text-mist">por número</dd>
              </div>
            </dl>
          </motion.div>

          {/* WhatsApp API Oficial */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.015 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-paper">
              WhatsApp API Oficial
            </h3>
            <p className="mt-1 font-data text-sm text-accent">
              API oficial de Meta para volumen alto
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Para clientes que necesitan cumplimiento, mayor capacidad de
              mensajes y la palomita de verificación. Integración directa con
              el CRM sin apps de terceros.
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">
                  Precio mensual
                </dt>
                <dd className="mt-1 font-data text-base font-semibold text-paper">
                  $15 USD/mes
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">
                  Integración
                </dt>
                <dd className="mt-1 font-data text-base font-semibold text-paper">
                  Directo al CRM
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-mist">
                  Perfil
                </dt>
                <dd className="mt-1 font-data text-base font-semibold text-paper">
                  Clientes con volumen alto
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { staggerContainer, staggerItem } from "@/lib/motion";

const features = [
  {
    title: "WhatsApp, SMS e Instagram DM",
    description:
      "Todas las conversaciones en una bandeja de entrada unificada. Responde desde donde estés.",
    icon: (
      <path d="M12 3C7.03 3 3 6.8 3 11.5c0 2.32 1.02 4.42 2.68 5.96L5 21l3.87-1.53c.98.34 2.03.53 3.13.53 4.97 0 9-3.8 9-8.5S16.97 3 12 3z" />
    ),
  },
  {
    title: "Email marketing",
    description:
      "Campañas, seguimientos automáticos y flujos de nurturing sin salir del CRM.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    title: "Calendarios y agendamiento",
    description:
      "Citas automáticas, recordatorios y sincronización con Google Calendar. Nunca más pierdas un lead caliente.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </>
    ),
  },
  {
    title: "Automatizaciones",
    description:
      "Workflows que trabajan 24/7: asigna leads, envía seguimientos y mueve oportunidades en el pipeline sin intervención manual.",
    icon: (
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Embudos y páginas web",
    description:
      "Constructor drag-and-drop para landing pages, formularios y embudos de venta completos.",
    icon: (
      <>
        <path d="M4 4h16l-6 9v6l-4 1v-7L4 4z" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Pipeline de ventas",
    description:
      "Visualiza cada oportunidad, etapa y valor esperado. Sabe exactamente en qué está cada cliente.",
    icon: (
      <>
        <path d="M4 19V6M10 19V10M16 19V4" />
      </>
    ),
  },
  {
    title: "Reputación y reseñas",
    description:
      "Solicita reseñas de Google automáticamente después de cada venta o servicio.",
    icon: (
      <path d="M12 3l2.6 5.8 6.4.6-4.8 4.2 1.4 6.2L12 16.9 6.4 19.8l1.4-6.2L3 9.4l6.4-.6L12 3z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Panel multi-cliente",
    description:
      "Cambia logos, SMS provider y accede a snapshots preconfigurados para onboardear clientes en minutos.",
    icon: (
      <>
        <rect x="3" y="4" width="7" height="7" rx="1.5" />
        <rect x="14" y="4" width="7" height="7" rx="1.5" />
        <rect x="3" y="15" width="7" height="7" rx="1.5" />
        <rect x="14" y="15" width="7" height="7" rx="1.5" />
      </>
    ),
  },
];

export default function PlatformFeatures() {
  return (
    <section id="plataforma" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
            Un solo panel. Todos tus canales.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
            Deja de saltar entre apps. Gestiona cada punto de contacto con tus
            clientes desde un único CRM diseñado para agencias que quieren
            escalar.
          </p>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/30"
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
                  {feature.icon}
                </svg>
              </div>
              <h3 className="font-display text-base font-semibold text-paper">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-mist">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

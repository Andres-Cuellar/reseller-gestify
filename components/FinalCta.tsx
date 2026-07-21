"use client";

import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function FinalCta() {
  return (
    <section className="bg-ink px-5 py-24 text-center sm:px-8 sm:py-32">
      <RevealOnScroll className="mx-auto flex max-w-2xl flex-col items-center gap-5">
        <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          ¿Tu agencia lista para crecer?
        </h2>
        <p className="text-base leading-relaxed text-mist sm:text-lg">
          Paga hoy, accede en minutos, onboarda tu primer cliente esta
          semana.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#precios"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-6px_rgba(62,181,232,0.55)] transition-transform hover:scale-[1.04] hover:bg-accent-light active:scale-95 sm:text-base"
          >
            Elegir mi plan →
          </a>
          <Link
            href="/agenda"
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-paper transition-transform hover:scale-[1.04] hover:border-accent hover:text-accent active:scale-95 sm:text-base"
          >
            Agendar demo →
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}

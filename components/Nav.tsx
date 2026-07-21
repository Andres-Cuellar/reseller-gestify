"use client";

import { motion } from "framer-motion";
import SavingsChip from "./SavingsChip";

const links = [
  { href: "#plataforma", label: "Plataforma" },
  { href: "#precios", label: "Precios" },
  { href: "#add-ons", label: "Add-ons" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="/"
          aria-label="Gestify — inicio"
          className="flex items-center gap-2"
        >
          <img src="/logo.webp" alt="Gestify" className="h-8 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <SavingsChip className="hidden sm:inline-flex" />
          <a
            href="#precios"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] hover:bg-accent-light active:scale-95"
          >
            Ver planes →
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

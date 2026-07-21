export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-gray-50 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-xs text-ink/60 sm:flex-row sm:text-left">
        <div className="flex items-center gap-4">
          <img src="/logo.webp" alt="Gestify" className="h-7 w-auto" />
          <span className="hidden sm:inline">© 2026 · CRM para Agencias</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/privacidad"
            className="font-data text-ink/60 transition-colors hover:text-accent"
          >
            Privacidad
          </a>
          <a
            href="/terminos"
            className="font-data text-ink/60 transition-colors hover:text-accent"
          >
            Términos
          </a>
          <a
            href="https://reseller.gstf.us/pagos"
            className="font-data text-ink/60 transition-colors hover:text-accent"
          >
            Pagos
          </a>
        </div>
      </div>
    </footer>
  );
}

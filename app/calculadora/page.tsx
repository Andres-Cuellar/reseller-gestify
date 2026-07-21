"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const EUR_RATE = 0.85;

type FieldKey = keyof typeof defaultValues;

const defaultValues = {
  emailsEnabled: false,
  emailsSent: 0,
  smsEnabled: false,
  smsSent: 0,
  callMinutesEnabled: false,
  callMinutes: 0,
  whatsappEnabled: false,
  whatsappSubaccounts: 0,
  whatsappConversations: 0,
  aiUnlimitedEnabled: false,
  conversationAiEnabled: false,
  conversationAiSessions: 0,
  voiceAiEnabled: false,
  voiceAiMinutes: 0,
  reviewsAiEnabled: false,
  reviewsReplied: 0,
  contentAiEnabled: false,
  contentWords: 0,
  contentImages: 0,
  agentStudioEnabled: false,
  agentStudioCredits: 0,
  workflowExecutionsEnabled: false,
  workflowExecutions: 0,
  onlineListingsEnabled: false,
  onlineListings: 0,
  wpHostingSitesEnabled: false,
  wpHostingSites: 0,
};

function clampNumber(value: number) {
  if (Number.isNaN(value) || value < 0) return 0;
  return value;
}

function parseNumericInput(rawValue: string) {
  if (rawValue === "") return 0;
  return clampNumber(Number(rawValue));
}

function formatCurrency(value: number, currency: string) {
  const normalizedValue = Number.isFinite(value) ? value : 0;
  const safeCurrency = currency === "EUR" ? "EUR" : "USD";

  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: safeCurrency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(normalizedValue);
}

function InputRow({
  label,
  hint,
  value,
  onChange,
  unit,
  step = "1",
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (value: number) => void;
  unit: string;
  step?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900">{label}</p>
          <p className="text-sm text-slate-500">{hint}</p>
        </div>
        <div className="mt-3 md:mt-0 md:w-56">
          <label className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2">
            <input
              type="number"
              min="0"
              step={step}
              value={value}
              onChange={(event) => onChange(parseNumericInput(event.target.value))}
              className="w-full bg-transparent text-right text-slate-900 outline-none"
            />
            <span className="text-xs uppercase tracking-wide text-slate-400">{unit}</span>
          </label>
        </div>
      </div>
    </div>
  );
}

function ServiceToggle({
  label,
  hint,
  enabled,
  onToggle,
  locked = false,
  lockHint,
  children,
}: {
  label: string;
  hint: string;
  enabled: boolean;
  onToggle: () => void;
  locked?: boolean;
  lockHint?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900">{label}</p>
          <p className="text-sm text-slate-500">{hint}</p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          disabled={locked}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${locked
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : enabled
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
        >
          {enabled ? "ON" : "OFF"}
        </button>
      </div>
      {locked && lockHint ? (
        <p className="mt-2 text-xs font-medium text-amber-700">{lockHint}</p>
      ) : null}
      {enabled && !locked ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

export default function CalculadoraPage() {
  const [currency, setCurrency] = useState("USD");
  const [values, setValues] = useState(defaultValues);

  const rawSummary = useMemo(() => {
    const emailCost = values.emailsEnabled ? (values.emailsSent / 1000) * 0.675 : 0;
    const smsCost = values.smsEnabled ? values.smsSent * 0.008 : 0;
    const callsCost = values.callMinutesEnabled ? values.callMinutes * 0.014 : 0;
    const whatsappCost = values.whatsappEnabled
      ? values.whatsappSubaccounts * 12 + values.whatsappConversations * 0.03
      : 0;

    const aiUnlimitedCost = values.aiUnlimitedEnabled ? 97 : 0;
    const conversationAiCost =
      !values.aiUnlimitedEnabled && values.conversationAiEnabled
        ? values.conversationAiSessions * 0.02
        : 0;
    const voiceAiCost = values.voiceAiEnabled ? values.voiceAiMinutes * 0.06 : 0;
    const reviewsAiCost =
      !values.aiUnlimitedEnabled && values.reviewsAiEnabled
        ? values.reviewsReplied * 0.01
        : 0;
    const contentAiCost =
      !values.aiUnlimitedEnabled && values.contentAiEnabled
        ? (values.contentWords / 1000) * 0.0945 + values.contentImages * 0.063
        : 0;
    const agentStudioCost = values.agentStudioEnabled ? values.agentStudioCredits * 0.12 : 0;

    const workflowChargeableExecutions = values.workflowExecutionsEnabled
      ? Math.max(values.workflowExecutions - 100, 0)
      : 0;
    const workflowsCost = workflowChargeableExecutions * 0.01;

    const listingsCost = values.onlineListingsEnabled ? values.onlineListings * 25 : 0;
    const wordpressCost = values.wpHostingSitesEnabled ? values.wpHostingSites * 10 : 0;

    const categories = {
      communication: emailCost + smsCost + callsCost + whatsappCost,
      ai:
        aiUnlimitedCost +
        conversationAiCost +
        voiceAiCost +
        reviewsAiCost +
        contentAiCost +
        agentStudioCost,
      automations: workflowsCost,
      marketing: listingsCost + wordpressCost,
    };

    const total =
      categories.communication +
      categories.ai +
      categories.automations +
      categories.marketing;

    return { categories, total };
  }, [values]);

  const displaySummary = useMemo(() => {
    if (currency === "EUR") {
      return {
        categories: {
          communication: rawSummary.categories.communication * EUR_RATE,
          ai: rawSummary.categories.ai * EUR_RATE,
          automations: rawSummary.categories.automations * EUR_RATE,
          marketing: rawSummary.categories.marketing * EUR_RATE,
        },
        total: rawSummary.total * EUR_RATE,
      };
    }

    return rawSummary;
  }, [currency, rawSummary]);

  function setNumericField(field: FieldKey, nextValue: number) {
    setValues((current) => ({
      ...current,
      [field]: nextValue,
    }));
  }

  function toggleField(field: FieldKey) {
    setValues((current) => ({
      ...current,
      [field]: !current[field],
    }));
  }

  function handleAiUnlimitedToggle() {
    setValues((current) => {
      const nextUnlimited = !current.aiUnlimitedEnabled;

      if (nextUnlimited) {
        return {
          ...current,
          aiUnlimitedEnabled: true,
          conversationAiEnabled: false,
          reviewsAiEnabled: false,
          contentAiEnabled: false,
        };
      }

      return {
        ...current,
        aiUnlimitedEnabled: false,
      };
    });
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 pb-20 pt-28 md:px-10 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-[0_15px_45px_-30px_rgba(15,23,42,0.5)] md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            GoHighLevel - Costes Variables
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Calculadora mensual de costes
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Estima el coste operativo de tu stack dentro de GoHighLevel segun el volumen real de uso.
            Activa solo lo que necesitas y obtendras un total mensual orientativo.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-slate-700">Moneda:</span>
            <div className="inline-flex rounded-lg border border-slate-300 bg-slate-50 p-1">
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${currency === "USD"
                    ? "bg-secondary-900 text-white"
                    : "text-slate-600 hover:bg-white"
                  }`}
              >
                USD $
              </button>
              <button
                type="button"
                onClick={() => setCurrency("EUR")}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${currency === "EUR"
                    ? "bg-secondary-900 text-white"
                    : "text-slate-600 hover:bg-white"
                  }`}
              >
                EUR
              </button>
            </div>
            <p className="text-xs text-slate-500">Tasa estimada: 1 USD = {EUR_RATE} EUR</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-slate-900">Comunicacion</h2>
              <p className="mt-1 text-sm text-slate-500">Email, SMS, llamadas y WhatsApp.</p>
              <div className="mt-4 space-y-3">
                <ServiceToggle
                  label="Emails"
                  hint="Activa este coste y define la cantidad mensual de emails."
                  enabled={values.emailsEnabled}
                  onToggle={() => toggleField("emailsEnabled")}
                >
                  <InputRow
                    label="Emails enviados"
                    hint="Referencia: $0.675 por cada 1,000 emails."
                    value={values.emailsSent}
                    onChange={(next) => setNumericField("emailsSent", next)}
                    unit="mes"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="SMS"
                  hint="Activa este coste y define la cantidad mensual de SMS."
                  enabled={values.smsEnabled}
                  onToggle={() => toggleField("smsEnabled")}
                >
                  <InputRow
                    label="SMS enviados"
                    hint="Referencia estimada: $0.008 por SMS."
                    value={values.smsSent}
                    onChange={(next) => setNumericField("smsSent", next)}
                    unit="mes"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="Llamadas"
                  hint="Activa este coste y define los minutos consumidos."
                  enabled={values.callMinutesEnabled}
                  onToggle={() => toggleField("callMinutesEnabled")}
                >
                  <InputRow
                    label="Minutos de llamada"
                    hint="Referencia estimada: $0.014 por minuto."
                    value={values.callMinutes}
                    onChange={(next) => setNumericField("callMinutes", next)}
                    unit="min"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="WhatsApp"
                  hint="Activa este coste y define subcuentas y conversaciones."
                  enabled={values.whatsappEnabled}
                  onToggle={() => toggleField("whatsappEnabled")}
                >
                  <div className="space-y-3">
                    <InputRow
                      label="Subcuentas con WhatsApp"
                      hint="Referencia: $12 por subcuenta activa."
                      value={values.whatsappSubaccounts}
                      onChange={(next) => setNumericField("whatsappSubaccounts", next)}
                      unit="uds"
                    />
                    <InputRow
                      label="Conversaciones de WhatsApp"
                      hint="Referencia estimada: $0.03 por conversacion."
                      value={values.whatsappConversations}
                      onChange={(next) => setNumericField("whatsappConversations", next)}
                      unit="mes"
                    />
                  </div>
                </ServiceToggle>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-slate-900">Inteligencia artificial</h2>
              <p className="mt-1 text-sm text-slate-500">Planes y consumo de capacidades AI.</p>
              <div className="mt-4 space-y-3">
                <ServiceToggle
                  label="Plan AI Unlimited"
                  hint="Si esta ON, se desactivan Conversation, Reviews y Content por uso. No incluye Agent Studio ni Voice AI Widget/Outbound (se cobran aparte)."
                  enabled={values.aiUnlimitedEnabled}
                  onToggle={handleAiUnlimitedToggle}
                />

                <ServiceToggle
                  label="Conversation AI"
                  hint="Activa este coste y define interacciones mensuales."
                  enabled={values.conversationAiEnabled}
                  onToggle={() => toggleField("conversationAiEnabled")}
                  locked={values.aiUnlimitedEnabled}
                  lockHint="Incluido en AI Unlimited. Desactiva el plan para estimarlo por uso."
                >
                  <InputRow
                    label="Interacciones Conversation AI"
                    hint="Referencia estimada: $0.02 por interaccion."
                    value={values.conversationAiSessions}
                    onChange={(next) => setNumericField("conversationAiSessions", next)}
                    unit="usos"
                  />
                </ServiceToggle>



                <ServiceToggle
                  label="Reviews AI"
                  hint="Activa este coste y define resenas procesadas."
                  enabled={values.reviewsAiEnabled}
                  onToggle={() => toggleField("reviewsAiEnabled")}
                  locked={values.aiUnlimitedEnabled}
                  lockHint="Incluido en AI Unlimited. Desactiva el plan para estimarlo por uso."
                >
                  <InputRow
                    label="Resenas gestionadas"
                    hint="Referencia: $0.01 por resena gestionada."
                    value={values.reviewsReplied}
                    onChange={(next) => setNumericField("reviewsReplied", next)}
                    unit="uds"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="Content AI"
                  hint="Activa este coste y define palabras e imagenes."
                  enabled={values.contentAiEnabled}
                  onToggle={() => toggleField("contentAiEnabled")}
                  locked={values.aiUnlimitedEnabled}
                  lockHint="Incluido en AI Unlimited. Desactiva el plan para estimarlo por uso."
                >
                  <div className="space-y-3">
                    <InputRow
                      label="Content AI (palabras)"
                      hint="Referencia: $0.0945 por 1,000 palabras."
                      value={values.contentWords}
                      onChange={(next) => setNumericField("contentWords", next)}
                      unit="mes"
                    />
                    <InputRow
                      label="Content AI (imagenes)"
                      hint="Referencia: $0.063 por imagen."
                      value={values.contentImages}
                      onChange={(next) => setNumericField("contentImages", next)}
                      unit="uds"
                    />
                  </div>
                </ServiceToggle>

                <ServiceToggle
                  label="Voice AI Widget / Outbound"
                  hint="Este coste se cobra aparte incluso con AI Unlimited activo."
                  enabled={values.voiceAiEnabled}
                  onToggle={() => toggleField("voiceAiEnabled")}
                >
                  <InputRow
                    label="Minutos de Voice AI Widget / Outbound"
                    hint="Referencia: $0.06 por minuto."
                    value={values.voiceAiMinutes}
                    onChange={(next) => setNumericField("voiceAiMinutes", next)}
                    unit="min"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="Agent Studio"
                  hint="Se cobra aparte incluso con AI Unlimited activo."
                  enabled={values.agentStudioEnabled}
                  onToggle={() => toggleField("agentStudioEnabled")}
                >
                  <InputRow
                    label="Creditos Agent Studio"
                    hint="Referencia estimada: $0.12 por credito."
                    value={values.agentStudioCredits}
                    onChange={(next) => setNumericField("agentStudioCredits", next)}
                    unit="creditos"
                  />
                </ServiceToggle>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-bold text-slate-900">Automatizaciones y marketing</h2>
              <p className="mt-1 text-sm text-slate-500">Acciones premium, listings y hosting.</p>
              <div className="mt-4 space-y-3">
                <ServiceToggle
                  label="Workflow Premium Actions"
                  hint="Activa este coste y define ejecuciones mensuales."
                  enabled={values.workflowExecutionsEnabled}
                  onToggle={() => toggleField("workflowExecutionsEnabled")}
                >
                  <InputRow
                    label="Workflow Premium Actions"
                    hint="Los primeros 100 usos son gratis. Luego, $0.01 por ejecucion."
                    value={values.workflowExecutions}
                    onChange={(next) => setNumericField("workflowExecutions", next)}
                    unit="usos"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="Online Listings"
                  hint="Activa este coste y define cuantas cuentas necesitas."
                  enabled={values.onlineListingsEnabled}
                  onToggle={() => toggleField("onlineListingsEnabled")}
                >
                  <InputRow
                    label="Online Listings"
                    hint="Referencia desde $25 por cuenta."
                    value={values.onlineListings}
                    onChange={(next) => setNumericField("onlineListings", next)}
                    unit="cuentas"
                  />
                </ServiceToggle>

                <ServiceToggle
                  label="WordPress Hosting"
                  hint="Activa este coste y define numero de sitios."
                  enabled={values.wpHostingSitesEnabled}
                  onToggle={() => toggleField("wpHostingSitesEnabled")}
                >
                  <InputRow
                    label="WordPress Hosting"
                    hint="Referencia desde $10 por sitio."
                    value={values.wpHostingSites}
                    onChange={(next) => setNumericField("wpHostingSites", next)}
                    unit="sitios"
                  />
                </ServiceToggle>
              </div>
            </div>
          </section>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_15px_45px_-30px_rgba(15,23,42,0.5)]">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Resumen mensual
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">Coste variable estimado</h3>
              <p className="mt-1 text-sm text-slate-500">No incluye tu suscripcion base de GoHighLevel.</p>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="text-slate-700">Comunicacion</span>
                  <strong className="text-slate-900">{formatCurrency(displaySummary.categories.communication, currency)}</strong>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="text-slate-700">AI</span>
                  <strong className="text-slate-900">{formatCurrency(displaySummary.categories.ai, currency)}</strong>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="text-slate-700">Automatizaciones</span>
                  <strong className="text-slate-900">{formatCurrency(displaySummary.categories.automations, currency)}</strong>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2">
                  <span className="text-slate-700">Marketing</span>
                  <strong className="text-slate-900">{formatCurrency(displaySummary.categories.marketing, currency)}</strong>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-secondary-900 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-300">Total estimado / mes</p>
                <p className="mt-2 text-3xl font-extrabold">{formatCurrency(displaySummary.total, currency)}</p>
              </div>

              <div className="mt-5 space-y-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Descargar resumen en PDF
                </button>
                <Link
                  href="/agenda"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Quiero optimizar mi coste con una demo
                </Link>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Nota: esta calculadora es orientativa y usa precios de referencia publicos.
                Los importes reales pueden variar segun pais, proveedor y plan activo.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Agenda una reunión — Gestify",
  description:
    "Agenda una reunión con nosotros para conocer cómo Gestify CRM puede transformar tu negocio.",
};

export default function Agenda() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl text-center">
            Agenda una reunión
          </h1>
          <p className="mt-2 mb-10 text-center text-sm text-mist">
            Elegí el día y horario que mejor te quede.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <iframe
            src="https://api.gstf.us/widget/booking/pgoGJqTJO3enJ0gxkWJF"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="pgoGJqTJO3enJ0gxkWJF_1784662019547"
          />
        </div>
        <Script
          src="https://api.gstf.us/js/form_embed.js"
          strategy="afterInteractive"
        />
      </main>
      <Footer />
    </>
  );
}

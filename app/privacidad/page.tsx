import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacidad — Gestify",
  description:
    "Política de privacidad de Gestify CRM. Conoce cómo tratamos tus datos personales.",
};

export default function Privacidad() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <h1 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mt-2 font-data text-sm text-mist">
          Última actualización: julio de 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper/80 sm:text-base [&_strong]:font-semibold [&_strong]:text-paper">
          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              1. Responsable del tratamiento
            </h2>
            <p className="mt-2">
              Glump Studio, con domicilio en Cra 8 # 45C - 01, Bogotá, Colombia,
              es el responsable del tratamiento de los datos personales
              suministrados a través de este sitio web.
            </p>
            <p className="mt-2">
              Correo electrónico de contacto:{" "}
              <a
                href="mailto:hello@glumpstudio.com"
                className="font-medium text-accent transition-colors hover:text-accent-light"
              >
                hello@glumpstudio.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              2. Datos que recopilamos
            </h2>
            <p className="mt-2">
              Cuando agendas una reunión, te registras en nuestro CRM o te
              pones en contacto con nosotros, podemos recopilar:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono / WhatsApp</li>
              <li>Nombre de la empresa o agencia</li>
              <li>Información de facturación</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              3. Finalidades del tratamiento
            </h2>
            <p className="mt-2">Tus datos serán tratados para:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Contactarte para brindar información sobre nuestros planes y
                servicios
              </li>
              <li>
                Gestionar tu registro y cuenta en el CRM de Gestify
              </li>
              <li>
                Prestarte soporte técnico y acompañamiento comercial
              </li>
              <li>
                Facturar y gestionar los pagos de los planes contratados
              </li>
              <li>
                Enviar comunicaciones relacionadas con el servicio (no
                publicitarias)
              </li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              4. Cookies y tecnologías de rastreo
            </h2>
            <p className="mt-2">
              Este sitio web utiliza Google Analytics y Meta Pixel para
              analizar el tráfico y medir la efectividad de nuestras campañas
              publicitarias. Estas herramientas pueden instalar cookies en tu
              navegador y recopilar información anónima sobre tu interacción
              con el sitio.
            </p>
            <p className="mt-2">
              Puedes configurar tu navegador para rechazar todas las cookies
              o indicar cuándo se está enviando una cookie. Sin embargo, si
              no aceptas las cookies, es posible que no puedas utilizar
              algunas partes de nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              5. Transferencia de datos a terceros
            </h2>
            <p className="mt-2">
              Podemos compartir tus datos personales con:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Proveedores de servicios de pago para procesar transacciones
              </li>
              <li>
                Google LLC y Meta Platforms Inc. como encargados del
                tratamiento para fines analíticos y publicitarios
              </li>
              <li>
                Autoridades competentes cuando la ley colombiana así lo
                exija
              </li>
            </ul>
            <p className="mt-2">
              No vendemos tus datos personales a terceros bajo ninguna
              circunstancia.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              6. Derechos ARCO
            </h2>
            <p className="mt-2">
              De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013,
              tienes derecho a:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Acceder</strong> a tus datos personales en nuestro
                poder
              </li>
              <li>
                <strong>Rectificar</strong> datos inexactos o incompletos
              </li>
              <li>
                <strong>Cancelar</strong> (suprimir) tus datos cuando no
                sean necesarios para las finalidades descritas
              </li>
              <li>
                <strong>Oponerte</strong> al tratamiento de tus datos para
                fines específicos
              </li>
            </ul>
            <p className="mt-2">
              Para ejercer estos derechos, escríbenos a{" "}
              <a
                href="mailto:hello@glumpstudio.com"
                className="font-medium text-accent transition-colors hover:text-accent-light"
              >
                hello@glumpstudio.com
              </a>{" "}
              indicando el derecho que deseas ejercer. Responderemos en un
              plazo máximo de 15 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              7. Conservación de datos
            </h2>
            <p className="mt-2">
              Conservaremos tus datos personales durante el tiempo necesario
              para cumplir con las finalidades descritas en esta política,
              y durante los plazos legalmente exigidos por la legislación
              colombiana. Una vez cumplidas estas obligaciones, tus datos
              serán eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              8. Seguridad
            </h2>
            <p className="mt-2">
              Implementamos medidas de seguridad técnicas, administrativas y
              físicas para proteger tus datos personales contra acceso no
              autorizado, pérdida, alteración o divulgación. Sin embargo,
              ningún método de transmisión por internet es 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              9. Cambios a esta política
            </h2>
            <p className="mt-2">
              Nos reservamos el derecho de modificar esta política de
              privacidad en cualquier momento. Los cambios serán publicados
              en esta página con la fecha de actualización correspondiente.
              Te recomendamos revisar periódicamente esta página.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              10. Contacto
            </h2>
            <p className="mt-2">
              Si tienes preguntas sobre esta política de privacidad o sobre
              el tratamiento de tus datos personales, contáctanos en:
            </p>
            <p className="mt-2">
              Glump Studio
              <br />
              Cra 8 # 45C - 01, Bogotá
              <br />
              <a
                href="mailto:hello@glumpstudio.com"
                className="font-medium text-accent transition-colors hover:text-accent-light"
              >
                hello@glumpstudio.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

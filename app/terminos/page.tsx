import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones — Gestify",
  description:
    "Términos y condiciones de uso de Gestify CRM. Al usar nuestros servicios aceptas estos términos.",
};

export default function Terminos() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <h1 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl">
          Términos y Condiciones
        </h1>
        <p className="mt-2 font-data text-sm text-mist">
          Última actualización: julio de 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper/80 sm:text-base [&_strong]:font-semibold [&_strong]:text-paper">
          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              1. Aceptación de los términos
            </h2>
            <p className="mt-2">
              Al acceder y utilizar el sitio web{" "}
              <span className="font-medium text-paper">reseller.gstf.us</span>{" "}
              y los servicios de CRM ofrecidos por Glump Studio (en adelante,
              &laquo;Gestify&raquo;), aceptas estar sujeto a estos Términos y
              Condiciones. Si no estás de acuerdo con alguna parte de estos
              términos, no debes usar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              2. Descripción del servicio
            </h2>
            <p className="mt-2">
              Gestify proporciona un CRM omnicanal diseñado para agencias y
              profesionales en Colombia. Los planes incluyen acceso a
              funcionalidades como gestión de contactos, WhatsApp, email,
              SMS, calendarios, embudos de venta, automatizaciones y panel
              multi-cliente, según el plan contratado.
            </p>
            <p className="mt-2">
              El acceso al servicio se otorga mediante suscripciones
              mensuales. Cada plan tiene un límite específico de subcuentas
              y funcionalidades, detallado en la sección de precios del
              sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              3. Registro y cuenta de usuario
            </h2>
            <p className="mt-2">
              Para acceder al servicio, debes registrar una cuenta
              proporcionando información veraz y actualizada. Eres
              responsable de mantener la confidencialidad de tus credenciales
              de acceso y de todas las actividades que ocurran bajo tu
              cuenta.
            </p>
            <p className="mt-2">
              Debes ser mayor de 18 años para contratar nuestros servicios.
              Al registrarte, declaras que cumples con este requisito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              4. Planes, pagos y facturación
            </h2>
            <p className="mt-2">
              Los precios de los planes están expresados en pesos colombianos
              (COP) e incluyen los impuestos aplicables según la legislación
              colombiana. El cobro se realiza de forma mensual anticipada.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                El pago debe realizarse dentro de los plazos establecidos
                para mantener el acceso al servicio.
              </li>
              <li>
                Los planes no incluyen reembolsos parciales por días no
                utilizados dentro del período de facturación.
              </li>
              <li>
                Gestify se reserva el derecho de modificar los precios de
                los planes con aviso previo de al menos 30 días.
              </li>
              <li>
                Los add-ons (como WhatZai y WhatsApp API Oficial) tienen
                costos adicionales y se facturan por separado.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              5. Uso aceptable
            </h2>
            <p className="mt-2">Como usuario de Gestify, aceptas:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                No utilizar el servicio para actividades ilegales o no
                autorizadas
              </li>
              <li>
                No violar las leyes colombianas en materia de protección de
                datos (Ley 1581 de 2012) al almacenar información de tus
                clientes
              </li>
              <li>
                No enviar mensajes no solicitados (spam) a través de las
                herramientas de comunicación del CRM
              </li>
              <li>
                No intentar vulnerar la seguridad del sistema ni acceder a
                cuentas de otros usuarios
              </li>
              <li>
                No revender, sublicenciar ni transferir tu cuenta sin
                autorización escrita de Gestify
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              6. Propiedad intelectual
            </h2>
            <p className="mt-2">
              Todo el contenido, diseño, logotipos, marcas, código fuente y
              funcionalidades del software de Gestify son propiedad
              intelectual de Glump Studio o de sus licenciantes. El usuario
              no adquiere ningún derecho de propiedad sobre el software, más
              allá de la licencia de uso limitada para acceder al servicio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              7. Limitación de responsabilidad
            </h2>
            <p className="mt-2">
              Gestify proporciona el servicio &laquo;tal cual&raquo; y según
              su disponibilidad. En la medida máxima permitida por la ley
              colombiana, no seremos responsables por daños indirectos,
              pérdida de datos, lucro cesante o interrupción del servicio.
            </p>
            <p className="mt-2">
              Nuestra responsabilidad total frente a cualquier reclamación
              relacionada con el servicio no excederá el valor de la
              suscripción mensual pagada por el usuario en el mes anterior
              al hecho que originó la reclamación.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              8. Cancelación y terminación
            </h2>
            <p className="mt-2">
              Puedes cancelar tu suscripción en cualquier momento. Al
              cancelar, el servicio permanecerá activo hasta el final del
              período de facturación actual y no se renovará.
            </p>
            <p className="mt-2">
              Gestify se reserva el derecho de suspender o terminar tu
              cuenta si violas estos términos, sin derecho a reembolso. En
              caso de terminación por nuestra causa, tus datos serán
              eliminados después de 30 días.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              9. Ley aplicable y jurisdicción
            </h2>
            <p className="mt-2">
              Estos términos se rigen por las leyes de la República de
              Colombia. Cualquier controversia será sometida a los jueces y
              tribunales de Bogotá, Colombia.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-bold text-paper">
              10. Contacto
            </h2>
            <p className="mt-2">
              Para cualquier consulta sobre estos términos, contáctanos en:
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

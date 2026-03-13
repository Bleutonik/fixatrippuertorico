import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <>
      <SEOHead
        title={isEs ? "Política de Privacidad | Fix a Trip" : "Privacy Policy | Fix a Trip"}
        description={isEs ? "Política de privacidad de Fix a Trip Puerto Rico" : "Privacy policy for Fix a Trip Puerto Rico"}
      />
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm sm:prose dark:prose-invert">
          <h1 className="text-3xl font-bold font-display text-foreground mb-8">
            {isEs ? "Política de Privacidad" : "Privacy Policy"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {isEs ? "Última actualización: Marzo 2026" : "Last updated: March 2026"}
          </p>

          {/* Intro */}
          <section className="mb-8">
            <p className="text-foreground/90">
              {isEs
                ? "En Fix a Trip (\"nosotros\"), nos comprometemos a proteger su privacidad. Esta política describe cómo recopilamos, usamos y protegemos su información personal cuando utiliza nuestros servicios."
                : "At Fix a Trip (\"we\", \"us\"), we are committed to protecting your privacy. This policy describes how we collect, use, and protect your personal information when you use our services."}
            </p>
          </section>

          {/* Information Collection */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "Información que Recopilamos" : "Information We Collect"}
            </h2>
            <p className="text-foreground/90 mb-3">
              {isEs
                ? "Cuando realiza una reserva o se pone en contacto con nosotros, podemos recopilar la siguiente información:"
                : "When you make a booking or contact us, we may collect the following information:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>{isEs ? "Nombre completo" : "Full name"}</li>
              <li>{isEs ? "Dirección de correo electrónico" : "Email address"}</li>
              <li>
                <strong>{isEs ? "Número de teléfono móvil" : "Mobile phone number"}</strong>
                {isEs
                  ? " — recopilado para poder comunicarnos con usted sobre sus reservas y enviar mensajes SMS."
                  : " — collected to communicate with you about your bookings and send SMS messages."}
              </li>
              <li>{isEs ? "Detalles de la reserva (fechas, número de huéspedes, preferencias)" : "Booking details (dates, number of guests, preferences)"}</li>
            </ul>
          </section>

          {/* SMS Usage */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "Uso de Mensajes SMS" : "SMS Messaging"}
            </h2>
            <p className="text-foreground/90 mb-3">
              {isEs
                ? "Si usted otorga su consentimiento, utilizaremos su número de teléfono para enviarle mensajes SMS con los siguientes propósitos:"
                : "If you provide your consent, we will use your phone number to send you SMS messages for the following purposes:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>{isEs ? "Confirmaciones de reserva" : "Booking confirmations"}</li>
              <li>{isEs ? "Recordatorios de sus tours o servicios programados" : "Reminders for your scheduled tours or services"}</li>
              <li>{isEs ? "Actualizaciones importantes sobre sus reservas (cambios de horario, clima, etc.)" : "Important updates about your bookings (schedule changes, weather, etc.)"}</li>
            </ul>
            <p className="text-foreground/90 mt-3">
              {isEs
                ? "La frecuencia de los mensajes puede variar. Pueden aplicarse tarifas de mensajes y datos."
                : "Message frequency may vary. Message and data rates may apply."}
            </p>
          </section>

          {/* No Selling */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "No Vendemos su Información" : "We Do Not Sell Your Information"}
            </h2>
            <p className="text-foreground/90">
              {isEs
                ? "Fix a Trip no vende, alquila ni comparte su información personal, incluyendo su número de teléfono, con terceros con fines de marketing. Su información se utiliza únicamente para brindarle nuestros servicios y comunicarnos con usted sobre sus reservas."
                : "Fix a Trip does not sell, rent, or share your personal information, including your phone number, with third parties for marketing purposes. Your information is used solely to provide our services and communicate with you about your bookings."}
            </p>
          </section>

          {/* Opt-out */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "Cómo Darse de Baja de SMS" : "How to Opt Out of SMS"}
            </h2>
            <p className="text-foreground/90 mb-3">
              {isEs
                ? "Puede dejar de recibir mensajes SMS en cualquier momento siguiendo estos pasos:"
                : "You can stop receiving SMS messages at any time by following these steps:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>
                {isEs
                  ? <>Responda <strong>STOP</strong> a cualquier mensaje SMS que reciba de nosotros.</>
                  : <>Reply <strong>STOP</strong> to any SMS message you receive from us.</>}
              </li>
              <li>
                {isEs
                  ? <>Contáctenos directamente al <a href="tel:+17874880202" className="text-primary underline">+1 (787) 488-0202</a> y solicite ser eliminado de la lista de mensajes.</>
                  : <>Contact us directly at <a href="tel:+17874880202" className="text-primary underline">+1 (787) 488-0202</a> and request to be removed from the messaging list.</>}
              </li>
              <li>
                {isEs
                  ? <>Envíe un correo a <a href="mailto:info@fixatrip.com" className="text-primary underline">info@fixatrip.com</a> con el asunto "Cancelar SMS".</>
                  : <>Email us at <a href="mailto:info@fixatrip.com" className="text-primary underline">info@fixatrip.com</a> with the subject line "Unsubscribe SMS".</>}
              </li>
            </ul>
            <p className="text-foreground/90 mt-3">
              {isEs
                ? "Después de enviar STOP, recibirá un mensaje de confirmación y no se le enviarán más mensajes SMS. Darse de baja de SMS no afecta su reserva."
                : "After sending STOP, you will receive a confirmation message and no further SMS messages will be sent. Opting out of SMS does not affect your booking."}
            </p>
          </section>

          {/* Data Protection */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "Protección de Datos" : "Data Protection"}
            </h2>
            <p className="text-foreground/90">
              {isEs
                ? "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, pérdida o alteración."
                : "We implement technical and organizational security measures to protect your personal information from unauthorized access, loss, or alteration."}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "Contacto" : "Contact Us"}
            </h2>
            <p className="text-foreground/90">
              {isEs
                ? "Si tiene preguntas sobre esta política de privacidad, puede contactarnos:"
                : "If you have questions about this privacy policy, you can contact us:"}
            </p>
            <ul className="list-none pl-0 space-y-1 text-foreground/90 mt-3">
              <li>📧 <a href="mailto:info@fixatrip.com" className="text-primary underline">info@fixatrip.com</a></li>
              <li>📞 <a href="tel:+17874880202" className="text-primary underline">+1 (787) 488-0202</a></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

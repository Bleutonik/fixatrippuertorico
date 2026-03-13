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
        title={isEs ? "Política de Privacidad | Fix A Trip PR" : "Privacy Policy | Fix A Trip PR"}
        description={isEs ? "Política de privacidad de Fix A Trip Puerto Rico" : "Privacy policy for Fix A Trip Puerto Rico"}
      />
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm sm:prose dark:prose-invert">
          <h1 className="text-3xl font-bold font-display text-foreground mb-8">
            {isEs ? "Fix A Trip Puerto Rico — Política de Privacidad" : "Fix A Trip Puerto Rico — Privacy Policy"}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            {isEs ? "Última actualización: Marzo 2025" : "Last updated: March 2025"}
          </p>

          {/* 1. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "1. Información que Recopilamos" : "1. Information We Collect"}
            </h2>
            <p className="text-foreground/90">
              {isEs
                ? "Recopilamos su nombre, dirección de correo electrónico y número de teléfono cuando realiza una reserva a través de nuestro sitio web."
                : "We collect your name, email address, and phone number when you make a booking through our website."}
            </p>
          </section>

          {/* 2. SMS Communications */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "2. Comunicaciones por SMS" : "2. SMS Communications"}
            </h2>
            <p className="text-foreground/90 mb-3">
              {isEs
                ? "Al proporcionar su número de teléfono y marcar la casilla de consentimiento de SMS durante la reserva, usted acepta recibir mensajes de texto de Fix A Trip PR (787-370-0218) que incluyen:"
                : "By providing your phone number and checking the SMS consent box during booking, you agree to receive text messages from Fix A Trip PR (787-370-0218) including:"}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>{isEs ? "Confirmaciones de reserva" : "Booking confirmations"}</li>
              <li>{isEs ? "Recordatorios de actividades (día anterior)" : "Activity reminders (day before)"}</li>
              <li>{isEs ? "Actualizaciones de viaje en tiempo real" : "Real-time trip updates"}</li>
              <li>{isEs ? "Solicitudes de comentarios post-experiencia" : "Post-experience feedback requests"}</li>
            </ul>
            <p className="text-foreground/90 mt-3">
              {isEs
                ? "La frecuencia de los mensajes varía según la reserva. Pueden aplicarse tarifas de mensajes y datos."
                : "Message frequency varies by booking. Message & data rates may apply."}
            </p>
          </section>

          {/* 3. How to Opt Out */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "3. Cómo Darse de Baja" : "3. How to Opt Out"}
            </h2>
            <p className="text-foreground/90">
              {isEs
                ? <>Responda <strong>STOP</strong> a cualquier mensaje para cancelar la suscripción. Responda <strong>HELP</strong> para obtener asistencia. También puede enviarnos un correo electrónico a <a href="mailto:info@fixatrippr.com" className="text-primary underline">info@fixatrippr.com</a>.</>
                : <>Reply <strong>STOP</strong> to any message to unsubscribe. Reply <strong>HELP</strong> for assistance. You can also email us at <a href="mailto:info@fixatrippr.com" className="text-primary underline">info@fixatrippr.com</a>.</>}
            </p>
          </section>

          {/* 4. We Do Not Share Your Data */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "4. No Compartimos su Información" : "4. We Do Not Share Your Data"}
            </h2>
            <p className="text-foreground/90">
              {isEs
                ? "Su número de teléfono e información personal nunca se venden ni se comparten con terceros con fines de marketing."
                : "Your phone number and personal information are never sold or shared with third parties for marketing purposes."}
            </p>
          </section>

          {/* 5. Contact */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {isEs ? "5. Contacto" : "5. Contact"}
            </h2>
            <p className="text-foreground/90">
              Fix A Trip Puerto Rico<br />
              <a href="mailto:info@fixatrippr.com" className="text-primary underline">info@fixatrippr.com</a> | <a href="tel:+17873700218" className="text-primary underline">(787) 370-0218</a><br />
              <a href="https://fixatrippr.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">fixatrippr.com</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

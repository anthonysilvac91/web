"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TermsAndConditions() {
  const { language } = useLanguage();
  const lastUpdated = "March 2026";

  const content = {
      es: {
          back: "Volver al Inicio",
          title: "Términos y Condiciones",
          lastUpdated: "Última actualización",
          sections: [
              {
                  title: "1. Uso del Sitio",
                  content: "Al acceder y utilizar el sitio web de CoreMetrics Media, usted acepta estar sujeto a estos Términos y Condiciones, así como a todas las leyes y regulaciones aplicables. El acceso y uso de nuestros servicios están sujetos a la aceptación íntegra de estos términos y nos reservamos el derecho de denegar el servicio a cualquier persona por cualquier motivo en cualquier momento."
              },
              {
                  title: "2. Responsabilidades",
                  content: "Como usuario, se compromete a utilizar nuestra plataforma y servicios con fines legales y apropiados. Usted es responsable de garantizar que la información proporcionada a CoreMetrics Media sea veraz y precisa. No debe interferir, interrumpir ni tratar de obtener acceso no autorizado a los sistemas, redes o infraestructura vinculada a nuestros servicios."
              },
              {
                  title: "3. Limitaciones",
                  content: "En ningún caso CoreMetrics Media o sus proveedores serán responsables de daños indirectos, incidentales o consecuentes que surjan del uso o de la imposibilidad de uso de nuestros servicios. Nuestras soluciones operan con componentes de terceros e integraciones tecnológicas (como herramientas de IA), por lo cual no garantizamos un servicio libre ininterrumpido a prueba de errores de plataformas externas."
              },
              {
                  title: "4. Propiedad Intelectual",
                  content: "Todo el contenido presente en este sitio web, incluyendo textos, gráficos, logotipos, imágenes e integraciones de código, es propiedad intelectual de CoreMetrics Media o de sus respectivos licenciantes, y está protegido por normativas de derechos de autor. Se prohíbe la reproducción, distribución o modificación no autorizada de cualquier material sin un permiso escrito y expreso."
              }
          ]
      },
      en: {
          back: "Back to Home",
          title: "Terms and Conditions",
          lastUpdated: "Last Updated",
          sections: [
              {
                  title: "1. Site Use",
                  content: "By accessing and using the CoreMetrics Media website, you agree to be bound by these Terms and Conditions, as well as all applicable laws and regulations. Access to and use of our services are subject to the full acceptance of these terms, and we reserve the right to refuse service to anyone for any reason at any time."
              },
              {
                  title: "2. Responsibilities",
                  content: "As a user, you agree to use our platform and services for lawful and appropriate purposes. You are responsible for ensuring that the information provided to CoreMetrics Media is true and accurate. You must not interfere with, disrupt, or attempt to gain unauthorized access to the systems, networks, or infrastructure linked to our services."
              },
              {
                  title: "3. Limitations",
                  content: "In no event shall CoreMetrics Media or its suppliers be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services. Our solutions operate with third-party components and technological integrations (such as AI tools), whereby we do not guarantee an uninterrupted service immune to errors from external platforms."
              },
              {
                  title: "4. Intellectual Property",
                  content: "All content present on this website, including text, graphics, logos, images, and code integrations, is the intellectual property of CoreMetrics Media or its respective licensors and is protected by copyright laws. Unauthorized reproduction, distribution, or modification of any material is prohibited without express written permission."
              }
          ]
      }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-[#0b0f19] pt-32 pb-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00ff66]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-gray-300">
            <Link href="/" className="inline-flex items-center gap-2 text-[#00ff66] hover:text-white transition-colors mb-8 text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> {t.back}
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">{t.title}</h1>
            <p className="text-gray-400 mb-12 border-b border-white/10 pb-6">{t.lastUpdated}: {lastUpdated}</p>

            <div className="space-y-8 mb-12">
                {t.sections.map((section, index) => (
                    <section key={index}>
                        <h2 className="text-2xl font-outfit font-bold text-white mb-4">{section.title}</h2>
                        <p className="leading-relaxed">
                            {section.content}
                        </p>
                    </section>
                ))}
            </div>

            <div className="mt-8 p-6 glass-panel rounded-xl border border-white/5 bg-white/5 w-fit shadow-lg shadow-black/20">
                <p className="text-white font-medium mb-1 font-outfit">CoreMetrics Media</p>
                <a href="mailto:contacto@coremetricsmedia.com" className="text-[#00ff66] hover:underline hover:text-white transition-colors">
                    contacto@coremetricsmedia.com
                </a>
            </div>
        </div>
    </div>
  );
}

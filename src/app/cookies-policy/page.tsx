"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CookiesPolicy() {
  const { language } = useLanguage();
  const lastUpdated = "March 2026";

  const content = {
      es: {
          back: "Volver al Inicio",
          title: "Política de Cookies",
          lastUpdated: "Última actualización",
          sections: [
              {
                  title: "1. ¿Qué son las cookies?",
                  content: "Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tablet, smartphone) a través de su navegador de internet. Su propósito es recordar información sobre su visita, como su configuración de idioma, y ayudarnos a proporcionarle una mejor experiencia de navegación más personalizada y eficiente."
              },
              {
                  title: "2. Tipos de cookies utilizadas",
                  content: "En CoreMetrics Media utilizamos diferentes tipos de cookies para garantizar el funcionamiento del sitio y entender cómo interactúa con nosotros: \n\n• Cookies estrictamente necesarias: Esenciales para que la web funcione correctamente.\n• Cookies analíticas: Empleadas para rastrear el rendimiento del sitio y contabilizar de forma anónima el tráfico (ej. Google Analytics).\n• Cookies de personalización: Permiten a la página web recordar información que cambia el comportamiento o aspecto (ej. su elección de idioma entre EN/ES)."
              },
              {
                  title: "3. Cómo gestionar las cookies",
                  content: "Usted tiene el derecho de decidir si acepta o rechaza las cookies. Puede establecer o modificar los controles de su navegador web para aceptar o rechazar dichas cookies. Tenga en cuenta que si elige rechazar las cookies, su acceso a algunas funcionalidades de este sitio web podría verse restringido. Para instrucciones específicas sobre cómo gestionar cookies en su navegador móvil o de escritorio, le sugerimos revisar el menú de 'Ayuda' del mismo."
              }
          ]
      },
      en: {
          back: "Back to Home",
          title: "Cookies Policy",
          lastUpdated: "Last Updated",
          sections: [
              {
                  title: "1. What are cookies?",
                  content: "Cookies are small text files that websites store on your device (computer, tablet, smartphone) through your internet browser. Their purpose is to remember information about your visit, such as your language preferences, and help us provide you with a better, more personalized, and efficient browsing experience."
              },
              {
                  title: "2. Types of cookies we use",
                  content: "At CoreMetrics Media, we use different types of cookies to ensure the site's functionality and understand how you interact with us:\n\n• Strictly necessary cookies: Essential for the website to function properly.\n• Analytical cookies: Used to track the site's performance and anonymously count traffic (e.g., Google Analytics).\n• Personalization cookies: Allow the website to remember information that changes behavior or appearance (e.g., your language choice between EN/ES)."
              },
              {
                  title: "3. How to manage cookies",
                  content: "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse these cookies. Please note that if you choose to reject cookies, your access to some functionality of this website may be restricted. For specific instructions on how to manage cookies on your mobile or desktop browser, we suggest reviewing its 'Help' menu."
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
                        <p className="leading-relaxed whitespace-pre-line">
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

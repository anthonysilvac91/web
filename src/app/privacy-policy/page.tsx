"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const lastUpdated = "March 2026";

  const content = {
      es: {
          back: "Volver al Inicio",
          title: "Política de Privacidad",
          lastUpdated: "Última actualización",
          sections: [
              {
                  title: "1. Información Recopilada",
                  content: "Recopilamos información que usted nos proporciona directamente cuando interactúa con nuestros formularios de contacto, solicita una auditoría o se comunica con nuestro equipo. Esto puede incluir su nombre, dirección de correo electrónico, nombre de la empresa y sitio web. Adicionalmente, recopilamos datos de uso automáticamente al navegar por nuestra web, como su dirección IP, tipo de dispositivo y métricas de interacción."
              },
              {
                  title: "2. Uso de Datos",
                  content: "Utilizamos la información recopilada para proporcionar y personalizar nuestros servicios técnicos y de marketing, mejorar y optimizar el rendimiento de nuestro sitio web, contactarlo en respuesta a sus solicitudes y notificarle sobre cambios en nuestros servicios."
              },
              {
                  title: "3. Protección de Datos",
                  content: "Implementamos estrictas medidas de seguridad a nivel infraestructura para mantener la integridad y confidencialidad de su información personal. Sus datos se almacenan en servidores seguros y solo son accesibles por el personal estrictamente necesario. CoreMetrics Media no vende, intercambia ni transfiere su información personal a terceros bajo ninguna circunstancia."
              },
              {
                  title: "4. Política de Cookies",
                  content: "Utilizamos cookies y tecnologías de seguimiento similares para mejorar su experiencia de navegación. Utilizamos cookies analíticas para entender cómo los visitantes interactúan con el sitio web y realizar mejoras continuas en nuestra interfaz y contenido. Puede configurar su navegador para rechazar todas las cookies si lo estima conveniente."
              },
              {
                  title: "5. Información de Contacto",
                  content: "Si tiene alguna duda o consulta sobre esta Política de Privacidad, o desea ejercer sus derechos sobre sus datos personales, puede contactarnos directamente a través de:"
              }
          ]
      },
      en: {
          back: "Back to Home",
          title: "Privacy Policy",
          lastUpdated: "Last Updated",
          sections: [
              {
                  title: "1. Information We Collect",
                  content: "We collect information you provide directly to us when you interact with our contact forms, request an audit, or communicate with our team. This may include your name, email address, company name, and website. Additionally, we automatically collect usage data when you browse our website, such as your IP address, device type, and interaction metrics."
              },
              {
                  title: "2. How We Use Your Data",
                  content: "We use the collected information to provide and personalize our technical and marketing services, improve and optimize our website's performance, contact you in response to your requests, and notify you about changes to our services."
              },
              {
                  title: "3. Data Protection",
                  content: "We implement strict infrastructure-level security measures to maintain the integrity and confidentiality of your personal information. Your data is stored on secure servers and is only accessible by strictly necessary personnel. CoreMetrics Media does not sell, trade, or transfer your personal information to third parties under any circumstances."
              },
              {
                  title: "4. Cookies Policy",
                  content: "We use cookies and similar tracking technologies to enhance your browsing experience. We use analytical cookies to understand how visitors interact with the website and make continuous improvements to our interface and content. You can configure your browser to refuse all cookies if you see fit."
              },
              {
                  title: "5. Contact Information",
                  content: "If you have any questions or concerns about this Privacy Policy, or wish to exercise your rights regarding your personal data, you can contact us directly via:"
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

            <div className="space-y-8">
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

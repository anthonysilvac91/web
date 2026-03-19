"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram } from "lucide-react";
import { content } from "@/content/landing";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
    const { language } = useLanguage();
    const landingContent = content[language];
    const currentYear = new Date().getFullYear();
    const contactEmail = language === 'es' ? 'contacto@coremetricsmedia.com' : 'contact@coremetricsmedia.com';

    return (
        <footer className="w-full border-t border-white/10 bg-[#0b0f19] pt-16 pb-8 px-6 mt-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 relative z-10">

                {/* Brand Col */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src="/CoreMetrics_horizontal_v2.png" 
                            alt="CoreMetrics Media Logo" 
                            width={160} 
                            height={36} 
                            className="h-9 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-gray-400 text-sm max-w-sm mt-2">
                        {landingContent.footer.description}
                    </p>
                    <a href={`mailto:${contactEmail}`} className="mt-4 flex items-center gap-2 text-sm text-gray-400 hover:text-[#00ff66] transition-colors w-fit">
                        <Mail className="w-4 h-4" />
                        {contactEmail}
                    </a>
                    <div className="flex items-center gap-6 text-gray-400 mt-2">
                        <a href="https://instagram.com/coremetricsmedia" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff66] hover:scale-110 transition-all" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff66] hover:scale-110 transition-all" aria-label="TikTok">
                            <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                                <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Links Cols */}
                {Object.entries(landingContent.footer.links).map(([category, links]) => (
                    <div key={category} className="flex flex-col gap-4">
                        <h4 className="font-outfit font-semibold text-white">{category}</h4>
                        <ul className="flex flex-col gap-2">
                            {links.map((link) => {
                                const getHref = (name: string) => {
                                    if (name === "Privacy Policy" || name === "Política de Privacidad") return "/privacy-policy";
                                    if (name === "Terms of Service" || name === "Términos de Servicio") return "/terms-and-conditions";
                                    if (name === "Cookies Policy" || name === "Política de Cookies") return "/cookies-policy";
                                    return "#";
                                };

                                return (
                                    <li key={link}>
                                        <Link
                                            href={getHref(link)}
                                            className="text-sm text-gray-400 hover:text-[#00ff66] transition-colors"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-500 relative z-10 text-center">
                <p>© {currentYear} CoreMetrics Media. All rights reserved.</p>
            </div>
        </footer>
    );
}

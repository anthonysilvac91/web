"use client";

import { content } from "@/content/landing";
import { ContactForm } from "@/components/ui/ContactForm";
import { Hexagon, Instagram } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Contact() {
    const { language } = useLanguage();
    const landingContent = content[language];
    return (
        <section id="contact" className="py-24 relative bg-[#06090e]">

            {/* Background elements */}
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff66]/20 to-transparent" />
            <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-[#00ff66]/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <div className="w-16 h-16 rounded-2xl glass-panel border-[#00ff66]/20 bg-[#00ff66]/5 flex items-center justify-center mb-8">
                            <Hexagon className="w-8 h-8 text-[#00ff66]" />
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-6 leading-tight">
                            {landingContent.contact.title}
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            {landingContent.contact.subtitle}
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            <a href="https://instagram.com/coremetricsmedia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full glass-panel border-[#00ff66]/10 bg-[#00ff66]/5 hover:bg-[#00ff66]/20 hover:border-[#00ff66]/50 hover:text-[#00ff66] transition-all text-gray-400 text-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full glass-panel border-[#00ff66]/10 bg-[#00ff66]/5 hover:bg-[#00ff66]/20 hover:border-[#00ff66]/50 hover:text-[#00ff66] transition-all text-gray-400 text-sm">
                                <svg viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}

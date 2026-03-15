"use client";

import { content } from "@/content/landing";
import { ContactForm } from "@/components/ui/ContactForm";
import { Hexagon } from "lucide-react";
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
                    </div>

                    <div className="w-full lg:w-7/12">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </section>
    );
}

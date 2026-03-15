"use client";

import { content } from "@/content/landing";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function About() {
    const { language } = useLanguage();
    const landingContent = content[language];
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-[#0a0e14]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium mb-8">
                        Our Mission
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit mb-10 leading-tight">
                        {landingContent.about.title}
                    </h2>

                    <div className="flex flex-col gap-6 text-xl md:text-2xl text-gray-300 font-outfit leading-relaxed">
                        {landingContent.about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

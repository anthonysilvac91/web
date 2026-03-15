"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { content } from "@/content/landing";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function CaseStudies() {
    const { language } = useLanguage();
    const landingContent = content[language];
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="case-studies" className="py-24 relative overflow-hidden bg-[#0b0f19]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
                        {landingContent.caseStudies.title}
                    </h2>
                    <p className="text-lg text-gray-400">
                        {landingContent.caseStudies.subtitle}
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {landingContent.caseStudies.items.map((caseStudy) => (
                        <motion.div key={caseStudy.id} variants={item}>
                            <GlassCard glowColor="neon" className="h-full flex flex-col items-start text-left group">
                                <span className="text-xs font-semibold tracking-wider text-[#00ff66] uppercase mb-2">
                                    {caseStudy.industry}
                                </span>
                                <h3 className="text-xl font-bold font-outfit text-white mb-3 group-hover:text-[#00ff66] transition-colors">{caseStudy.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {caseStudy.description}
                                </p>
                                <div className="mt-auto px-4 py-3 bg-[#0a0f18] border border-[#00ff66]/10 rounded-lg w-full">
                                    <span className="text-sm font-medium text-[#00ff66] font-outfit">Result</span>
                                    <p className="text-white font-bold mt-1 text-lg">{caseStudy.result}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}

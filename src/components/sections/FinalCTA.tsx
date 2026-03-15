"use client";

import { content } from "@/content/landing";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/tracking";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FinalCTA() {
    const { language } = useLanguage();
    const landingContent = content[language];
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="glass-panel border-[#00ff66]/30 bg-[#00ff66]/[0.05] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Glowing Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[800px] bg-[#00ff66]/10 blur-[120px] rounded-full pointer-events-none z-0" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-6">
                            {landingContent.finalCta.title}
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            {landingContent.finalCta.subtitle}
                        </p>
                        <Button
                            size="lg"
                            className="text-lg px-8 py-6 h-auto shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-[0_0_50px_rgba(0,255,102,0.5)] transition-shadow duration-300"
                            onClick={() => {
                                trackEvent("final_cta_click");
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            {landingContent.finalCta.cta}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

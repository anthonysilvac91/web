"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/landing";
import { trackEvent } from "@/lib/tracking";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Hero() {
    const { language } = useLanguage();
    const landingContent = content[language];
    return (
        <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00ff66]/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-[#00ff66]/20 text-[#00ff66] text-sm font-medium mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
                    {landingContent.hero.badge}
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-outfit tracking-tight leading-[1.1] mb-6 max-w-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {landingContent.hero.titleStart}{" "}
                    <br className="hidden md:block" />
                    <span className="text-glow-neon text-[#00ff66]">
                        {landingContent.hero.titleHighlight}
                    </span>{" "}
                    {landingContent.hero.titleEnd}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {landingContent.hero.description}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => {
                            trackEvent("hero_primary_cta_click");
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {landingContent.hero.primaryCta}
                    </Button>
                    <Button
                        variant="glass"
                        size="lg"
                        className="w-full sm:w-auto"
                        onClick={() => {
                            trackEvent("hero_secondary_cta_click");
                            document.getElementById("method")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {landingContent.hero.secondaryCta}
                    </Button>
                </motion.div>

                <motion.p
                    className="mt-8 text-sm text-gray-400 font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {landingContent.hero.trustLine}
                </motion.p>
            </div>


        </section>
    );
}

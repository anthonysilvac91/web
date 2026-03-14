"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { landingContent } from "@/content/landing";
import { trackEvent } from "@/lib/tracking";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00ff66]/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#00ff66]/20 to-transparent" />

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
                            document.getElementById("platform")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {landingContent.hero.secondaryCta}
                    </Button>
                </motion.div>
            </div>

            {/* Abstract Tech Illustration Placeholder */}
            <motion.div
                className="w-full max-w-4xl mx-auto mt-20 relative z-10 hidden md:block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
            >
                <div className="aspect-[16/9] w-full rounded-2xl glass-panel border-[#00ff66]/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent z-10" />
                    {/* This would ideally be a real Next/Image or Spline 3D embed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0b0f19]">
                        {/* Mock Dashboard UI */}
                        <div className="w-[80%] h-[80%] bg-[#0a0f18] border border-white/5 rounded-xl shadow-2xl p-6 flex flex-col gap-4">
                            <div className="h-8 w-1/3 bg-white/5 rounded-md" />
                            <div className="flex-1 flex gap-4">
                                <div className="w-1/4 h-full bg-white/5 rounded-md" />
                                <div className="w-3/4 h-full bg-white/5 rounded-md relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#00ff66]/20 to-transparent" />
                                    {/* Simulated chart line */}
                                    <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <path d="M0,80 Q20,60 40,80 T80,40 T100,20" fill="none" stroke="#00ff66" strokeWidth="2" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import { content } from "@/content/landing";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Results() {
    const { language } = useLanguage();
    const landingContent = content[language];
    return (
        <section id="results" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-12 h-[1px] bg-[#00ff66] opacity-50"></div>
                            <span className="text-[#00ff66] font-medium tracking-wider uppercase text-sm">
                                {landingContent.results.badge}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6 leading-tight">
                            {landingContent.results.title}
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-lg">
                            {landingContent.results.subtitle}
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0b0f19] bg-gray-800 flex items-center justify-center overflow-hidden">
                                        {/* Placeholder for avatars */}
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} className="w-full h-full object-cover" alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-400">Trusted by <br /><strong className="text-white">growth leaders</strong></p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 relative">
                        {/* Center Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00ff66]/10 blur-[80px] rounded-full pointer-events-none" />

                        {landingContent.results.metrics.map((metric, index) => (
                            <motion.div
                                key={metric.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <GlassCard className="flex flex-col justify-center items-center text-center p-8 border-[#00ff66]/20 bg-[#00ff66]/[0.02]">
                                    <div className="flex items-center gap-2 mb-2 text-[#00ff66]">
                                        {metric.trend === 'up' ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-bold font-outfit text-white mb-2">{metric.value}</h3>
                                    <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">{metric.label}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

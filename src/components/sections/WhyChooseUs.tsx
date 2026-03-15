"use client";

import { content } from "@/content/landing";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function WhyChooseUs() {
    const { language } = useLanguage();
    const landingContent = content[language];
    return (
        <section id="why-choose-us" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-8 leading-tight">
                            {landingContent.whyChooseUs.title}
                        </h2>

                        <div className="flex flex-col gap-8">
                            {landingContent.whyChooseUs.points.map((point, index) => (
                                <motion.div
                                    key={point.id}
                                    className="flex items-start gap-4 group"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-[#00ff66] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-[#00ff66] transition-colors">{point.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">{point.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative hidden lg:block">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00ff66]/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="aspect-square w-full max-w-md mx-auto relative group">
                            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-dashed border-[#00ff66]/30 animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-8 rounded-full bg-[#0b0f19] border border-white/5 shadow-2xl flex items-center justify-center">
                                {/* Decorational neon grid / abstract shape */}
                                <div className="w-3/4 h-3/4 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-2xl bg-[#00ff66]/10 border border-[#00ff66]/30 shadow-[0_0_50px_rgba(0,255,102,0.2)] flex items-center justify-center rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                                        <div className="w-10 h-10 bg-[#00ff66] rounded-xl shadow-[0_0_20px_rgba(0,255,102,0.8)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { content } from "@/content/landing";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export function DataStorytelling() {
    const { language } = useLanguage();
    const landingContent = content[language];

    return (
        <section className="py-24 relative overflow-hidden bg-[#06090e]">
            {/* Background elements */}
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00ff66]/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: Storytelling Text */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6 leading-tight">
                                {landingContent.storytelling.title}
                            </h2>
                            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                                {landingContent.storytelling.description}
                            </p>

                            <div className="flex flex-col gap-6">
                                {landingContent.storytelling.points.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-4 group"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center group-hover:bg-[#00ff66] transition-colors duration-300">
                                            <CheckCircle2 className="w-5 h-5 text-[#00ff66] group-hover:text-[#06090e]" />
                                        </div>
                                        <span className="text-lg font-medium text-white group-hover:text-[#00ff66] transition-colors">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual Chart & Floating Stats */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            className="aspect-[4/3] max-w-lg mx-auto w-full rounded-2xl glass-panel shadow-[0_0_50px_rgba(0,255,102,0.1)] border-[#00ff66]/20 relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="absolute inset-0 bg-[#0b0f19] z-0" />
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] z-0" />

                            {/* Animated Chart SVG */}
                            <div className="absolute bottom-0 left-0 w-full h-[70%] z-10 flex items-end">
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#00ff66]/30 to-transparent" />
                                <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,102,0.8)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <motion.path
                                        d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,20 T100,5"
                                        fill="none"
                                        stroke="#00ff66"
                                        strokeWidth="3"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                    {/* Line Fill to bottom */}
                                    <motion.path
                                        d="M0,80 Q10,70 20,75 T40,60 T60,40 T80,20 T100,5 L100,100 L0,100 Z"
                                        fill="url(#glowGradient)"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, ease: "easeIn" }}
                                    />
                                    <defs>
                                        <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="rgba(0, 255, 102, 0.4)" />
                                            <stop offset="100%" stopColor="rgba(0, 255, 102, 0)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Floating Stat Elements */}
                            {landingContent.storytelling.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute glass-panel bg-[#0b0f19]/80 backdrop-blur-md border border-[#00ff66]/30 px-4 py-3 rounded-xl shadow-xl z-20 flex flex-col pointer-events-none"
                                    style={{ top: stat.top, left: stat.left, right: stat.right, bottom: stat.bottom }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: stat.delay + 0.5 }}
                                >
                                    <span className="text-2xl font-bold font-outfit text-white">{stat.value}</span>
                                    <span className="text-xs text-[#00ff66] font-medium uppercase tracking-wider">{stat.label}</span>
                                </motion.div>
                            ))}

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

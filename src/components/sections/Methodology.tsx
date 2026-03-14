"use client";

import { landingContent } from "@/content/landing";
import { motion } from "framer-motion";
import { Database, Lightbulb, Bot, Rocket } from "lucide-react";

const stepIcons = [Database, Lightbulb, Bot, Rocket];

export function Methodology() {
    return (
        <section id="results" className="py-24 relative overflow-hidden bg-[#0a0e14]">
            {/* Glow effects */}
            <div className="absolute top-1/2 -left-[20%] w-[500px] h-[500px] bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 -right-[20%] w-[500px] h-[500px] bg-[#10b981]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
                        {landingContent.methodology.title}
                    </h2>
                    <p className="text-lg text-gray-400">
                        {landingContent.methodology.subtitle}
                    </p>
                </div>

                {/* Pipeline Visualization */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-[44px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff66]/30 to-transparent z-0" />

                    {/* Animated Glow on Line */}
                    <motion.div
                        className="hidden md:block absolute top-[43px] left-0 w-[20%] h-[4px] bg-[#00ff66] blur-[4px] z-0 rounded-full"
                        animate={{ left: ["0%", "100%", "0%"] }}
                        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative z-10">
                        {landingContent.methodology.steps.map((step, index) => {
                            const Icon = stepIcons[index];
                            return (
                                <motion.div
                                    key={step.id}
                                    className="flex flex-col items-center text-center relative"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                >
                                    {/* Step Icon Node */}
                                    <div className="w-24 h-24 rounded-2xl glass-panel shadow-[0_0_20px_rgba(0,255,102,0.1)] flex items-center justify-center mb-6 relative group border-[#00ff66]/20 bg-[#0b0f19]">
                                        <div className="absolute inset-0 bg-[#00ff66]/5 group-hover:bg-[#00ff66]/10 transition-colors rounded-2xl" />
                                        <Icon className="w-10 h-10 text-[#00ff66] relative z-10" />

                                        {/* Number Badge */}
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#00ff66] text-black font-bold flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,255,102,0.5)]">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="font-outfit font-bold text-xl mb-3">{step.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

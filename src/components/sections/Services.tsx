"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { landingContent } from "@/content/landing";
import { motion } from "framer-motion";
import { BarChart3, Users, TrendingUp, Search, MousePointerClick, Zap } from "lucide-react";

// Icon map to render dynamic icons from string names in our content
const iconMap = {
    BarChart3,
    Users,
    TrendingUp,
    Search,
    MousePointerClick,
    Zap,
};

export function Services() {
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
        <section id="platform" className="py-24 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
                        {landingContent.services.title}
                    </h2>
                    <p className="text-lg text-gray-400">
                        {landingContent.services.subtitle}
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {landingContent.services.items.map((service) => {
                        const Icon = iconMap[service.icon as keyof typeof iconMap];

                        return (
                            <motion.div key={service.id} variants={item}>
                                <GlassCard glowColor="neon" className="h-full flex flex-col items-start text-left group">
                                    <div className="w-12 h-12 rounded-lg bg-[#00ff66]/10 border border-[#00ff66]/20 flex items-center justify-center mb-6 group-hover:bg-[#00ff66] group-hover:text-black transition-colors duration-300">
                                        {Icon && <Icon className="w-6 h-6 text-[#00ff66] group-hover:text-black transition-colors duration-300" />}
                                    </div>
                                    <h3 className="text-xl font-bold font-outfit text-white mb-3 group-hover:text-[#00ff66] transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {service.description}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

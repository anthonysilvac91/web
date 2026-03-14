"use client";

import { landingContent } from "@/content/landing";
import { motion } from "framer-motion";

export function SocialProof() {
    const logos = ["Google", "AWS", "Microsoft", "HubSpot", "Salesforce", "Shopify"];

    return (
        <section className="py-12 border-y border-white/5 bg-[#0b0f19]/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-medium text-gray-400 mb-8 font-outfit">
                    {landingContent.socialProof.text}
                </p>

                {/* Infinite marquee effect container */}
                <div className="flex overflow-hidden relative w-full group">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b0f19] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b0f19] to-transparent z-10" />

                    <motion.div
                        className="flex gap-16 min-w-full items-center justify-center shrink-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Double the logos to create seamless loop effect */}
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <span className="text-2xl font-bold text-white font-outfit">{logo}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from "next/link";
import { Hexagon } from "lucide-react";
import { content } from "@/content/landing";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Footer() {
    const { language } = useLanguage();
    const landingContent = content[language];
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-[#0b0f19] pt-16 pb-8 px-6 mt-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00ff66]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 relative z-10">

                {/* Brand Col */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Hexagon className="text-[#00ff66] w-6 h-6" />
                        <span className="font-outfit font-bold text-xl tracking-tight">
                            CoreMetrics<span className="text-[#00ff66]">.</span>
                        </span>
                    </Link>
                    <p className="text-gray-400 text-sm max-w-sm mt-2">
                        {landingContent.footer.description}
                    </p>
                </div>

                {/* Links Cols */}
                {Object.entries(landingContent.footer.links).map(([category, links]) => (
                    <div key={category} className="flex flex-col gap-4">
                        <h4 className="font-outfit font-semibold text-white">{category}</h4>
                        <ul className="flex flex-col gap-2">
                            {links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="#"
                                        className="text-sm text-gray-400 hover:text-[#00ff66] transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="container mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-10">
                <p>© {currentYear} CoreMetrics Media. All rights reserved.</p>
                <div className="flex gap-4">
                    {landingContent.footer.social.map(network => (
                        <Link key={network} href="#" className="hover:text-white transition-colors">{network}</Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

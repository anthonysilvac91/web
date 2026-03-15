"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { content } from "@/content/landing";
import { Button } from "@/components/ui/Button";
import { Menu, X, Hexagon } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Navbar() {
    const { language, setLanguage } = useLanguage();
    const landingContent = content[language];

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-[#0b0f19]/80 backdrop-blur-md border-[rgba(255,255,255,0.05)] shadow-lg" : "bg-transparent py-2"
            )}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                    onClick={() => trackEvent("navbar_logo_click")}
                >
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] group-hover:border-[#00ff66]/50 transition-colors">
                        <Hexagon className="text-[#00ff66] w-6 h-6" />
                        <div className="absolute inset-0 bg-[#00ff66] blur-xl opacity-20"></div>
                    </div>
                    <span className="font-outfit font-bold text-xl tracking-tight">
                        CoreMetrics<span className="text-[#00ff66]">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Services', 'Results', 'Case Studies', 'About', 'Contact'].map((link) => {
                        const esTranslations: Record<string, string> = {
                            'Services': 'Servicios',
                            'Results': 'Resultados',
                            'Case Studies': 'Casos de Estudio',
                            'About': 'Nosotros',
                            'Contact': 'Contacto'
                        };
                        const translatedLink = language === 'es' ? esTranslations[link] : link;

                        return (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {translatedLink}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTA & Language Toggle */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm font-outfit text-gray-400 bg-white/5 rounded-full px-3 py-1 border border-white/10">
                        <button
                            onClick={() => setLanguage("en")}
                            className={cn("transition-colors hover:text-white", language === "en" && "text-[#00ff66] font-bold")}
                        >
                            EN
                        </button>
                        <span className="opacity-30">|</span>
                        <button
                            onClick={() => setLanguage("es")}
                            className={cn("transition-colors hover:text-white", language === "es" && "text-[#00ff66] font-bold")}
                        >
                            ES
                        </button>
                    </div>
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                            trackEvent("navbar_cta_click");
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {language === 'es' ? 'Obtén Auditoría Gratuita' : 'Get Free Growth Audit'}
                    </Button>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-panel absolute top-full left-0 w-full p-6 flex flex-col gap-4 border-t-0 rounded-b-2xl">
                    {['Services', 'Results', 'Case Studies', 'About', 'Contact'].map((link) => {
                        const esTranslations: Record<string, string> = {
                            'Services': 'Servicios',
                            'Results': 'Resultados',
                            'Case Studies': 'Casos de Estudio',
                            'About': 'Nosotros',
                            'Contact': 'Contacto'
                        };
                        const translatedLink = language === 'es' ? esTranslations[link] : link;

                        return (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase().replace(' ', '-')}`}
                                className="text-base font-medium text-gray-300 hover:text-white w-full py-2 border-b border-white/5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {translatedLink}
                            </Link>
                        );
                    })}
                    <Button className="mt-4 w-full" onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        setMobileMenuOpen(false);
                    }}>
                        {language === 'es' ? 'Obtén Auditoría Gratuita' : 'Get Free Growth Audit'}
                    </Button>
                </div>
            )}
        </header>
    );
}

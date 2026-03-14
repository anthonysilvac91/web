"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    glowColor?: "neon" | "emerald" | "none";
}

export function GlassCard({
    className,
    children,
    hoverEffect = true,
    glowColor = "none",
    ...props
}: GlassCardProps) {

    const glowClasses = {
        none: "",
        neon: "hover:shadow-[0_0_30px_rgba(0,255,102,0.15)] hover:border-[#00ff66]/30",
        emerald: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-[#10b981]/30",
    };

    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "glass-panel rounded-2xl p-6 transition-colors duration-300",
                hoverEffect && glowClasses[glowColor],
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}

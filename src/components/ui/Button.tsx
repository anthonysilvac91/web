"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-outfit";

        const variants = {
            primary: "bg-[#00ff66] text-black hover:bg-[#10b981] shadow-[0_0_15px_rgba(0,255,102,0.4)] hover:shadow-[0_0_25px_rgba(0,255,102,0.6)]",
            secondary: "bg-transparent text-white border border-[#00ff66] box-glow-neon box-glow-neon-hover",
            ghost: "hover:bg-white/10 text-white",
            glass: "glass-panel text-white hover:bg-white/10"
        };

        const sizes = {
            sm: "h-9 px-3",
            md: "h-11 px-6 py-2 text-base",
            lg: "h-14 px-8 text-lg"
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...(props as HTMLMotionProps<"button">)}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };

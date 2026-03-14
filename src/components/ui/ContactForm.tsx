"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { landingContent } from "@/content/landing";
import { trackConversion } from "@/lib/tracking";
import { Loader2 } from "lucide-react";
import { useState } from "react";

// Define the validation schema
const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid work email" }),
    company: z.string().min(2, { message: "Company name is required" }),
    website: z.string().url({ message: "Please enter a valid URL (https://...)" }).optional().or(z.literal("")),
    budget: z.string().min(1, { message: "Please select a budget range" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm({ className }: { className?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            website: "",
            budget: "",
        },
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form submitted:", data);
        trackConversion("form_submit_audit", 1);

        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        setTimeout(() => {
            setIsSuccess(false);
        }, 5000);
    };

    const inputStyles = "w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] focus:border-[#00ff66]/50 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 transition-colors outline-none focus:ring-1 focus:ring-[#00ff66]/50";
    const labelStyles = "block text-sm font-medium text-gray-300 mb-2 font-outfit";
    const errorStyles = "text-red-400 text-xs mt-1 absolute";

    if (isSuccess) {
        return (
            <div className={cn("glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center h-full min-h-[400px]", className)}>
                <div className="w-16 h-16 bg-[#00ff66]/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#00ff66]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-outfit">Audit Requested!</h3>
                <p className="text-gray-400">
                    Our team is reviewing your details and will reach out to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden", className)}>
            {/* Decorative Glow inside form */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00ff66]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                <div className="relative pb-6">
                    <label className={labelStyles}>{landingContent.contact.formLabels.name}</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className={inputStyles}
                        {...register("name")}
                    />
                    {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
                </div>

                <div className="relative pb-6">
                    <label className={labelStyles}>{landingContent.contact.formLabels.email}</label>
                    <input
                        type="email"
                        placeholder="john@company.com"
                        className={inputStyles}
                        {...register("email")}
                    />
                    {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
                </div>

                <div className="relative pb-6">
                    <label className={labelStyles}>{landingContent.contact.formLabels.company}</label>
                    <input
                        type="text"
                        placeholder="Acme Inc."
                        className={inputStyles}
                        {...register("company")}
                    />
                    {errors.company && <p className={errorStyles}>{errors.company.message}</p>}
                </div>

                <div className="relative pb-6">
                    <label className={labelStyles}>{landingContent.contact.formLabels.website}</label>
                    <input
                        type="url"
                        placeholder="https://acme.com"
                        className={inputStyles}
                        {...register("website")}
                    />
                    {errors.website && <p className={errorStyles}>{errors.website.message}</p>}
                </div>

                <div className="sm:col-span-2 relative pb-6">
                    <label className={labelStyles}>{landingContent.contact.formLabels.budget}</label>
                    <select
                        className={cn(inputStyles, "appearance-none")}
                        {...register("budget")}
                    >
                        <option value="" disabled className="bg-[#0b0f19] text-gray-400">Select monthly budget</option>
                        <option value="5k-10k" className="bg-[#0b0f19] text-white">$5,000 - $10,000</option>
                        <option value="10k-50k" className="bg-[#0b0f19] text-white">$10,000 - $50,000</option>
                        <option value="50k+" className="bg-[#0b0f19] text-white">$50,000+</option>
                    </select>
                    {/* Custom Select Arrow */}
                    <div className="absolute right-4 top-10 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                    {errors.budget && <p className={errorStyles}>{errors.budget.message}</p>}
                </div>
            </div>

            <Button
                type="submit"
                size="lg"
                className="w-full mt-2 relative z-10"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    landingContent.contact.formLabels.submit
                )}
            </Button>
            <p className="text-center text-xs text-gray-500 mt-2">
                Your information is secure. We never sell your data to third parties.
            </p>
        </form>
    );
}

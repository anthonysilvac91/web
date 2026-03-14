/**
 * Stub functions for analytics tracking
 * Can be connected to Google Tag Manager, FB Pixel, PostHog, etc.
 */

export const trackEvent = (eventName: string, payload?: Record<string, any>) => {
    if (process.env.NODE_ENV === "development") {
        console.log(`[Tracking Event]: ${eventName}`, payload || {})
    }
    // TODO: Add window.dataLayer.push or equivalent here
}

export const trackConversion = (conversionId: string, value?: number) => {
    if (process.env.NODE_ENV === "development") {
        console.log(`[Tracking Conversion]: ${conversionId}`, { value })
    }
}

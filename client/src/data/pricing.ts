import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 AI thumbnails/month",
            "Basic Thumbnail templates",
            "Standard Resolution",
            "No watermark",
            "Basic email support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "unlimited AI-generated thumbnails",
            "Premium Thumbnail templates",
            "4k Resolution",
            "A/B Testing features",
            "Priority email support",
            "Custom Fonts & Styles",
            "Brand Kit Analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Everything in Pro plan",
            "API Access",
            "Team collaboration",
            "Custom Branding",
            "Dedicated account manager",
            "24/7 Priority support"
        ],
        mostPopular: false
    }
];
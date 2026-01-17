'use client'
import SectionTitle from "../components/SectionTitle"
import { pricingData } from "../data/pricing";
import type { IPricing } from "../types";
import { CheckIcon, Sparkles, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection() {
    return (
        <div id="pricing" className="px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-gradient-to-br from-pink-500/20 to-purple-500/20 blur-[200px] rounded-full"></div>
            
            <SectionTitle 
                text1="Pricing" 
                text2="Simple Pricing" 
                text3="Choose the plan that fits your creation schedule. Cancel anytime." 
            />

            {/* Pricing Cards */}
            <div className="flex flex-wrap items-stretch justify-center gap-6 mt-20 max-w-5xl mx-auto">
                {pricingData.map((plan: IPricing, index: number) => (
                    <motion.div 
                        key={index} 
                        className={`group w-full sm:w-80 relative ${plan.mostPopular ? 'sm:scale-105' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Gradient Border for Popular Plan */}
                        {plan.mostPopular && (
                            <>
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500 rounded-2xl"></div>
                            </>
                        )}
                        
                        {/* Card Content */}
                        <div className={`relative h-full flex flex-col p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                            plan.mostPopular 
                                ? 'bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 border-0' 
                                : 'bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 hover:border-zinc-700'
                        }`}>
                            {/* Popular Badge */}
                            {plan.mostPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg shadow-pink-500/50">
                                        <Sparkles size={14} className="text-white" />
                                        <span className="text-sm font-semibold text-white">Most Popular</span>
                                    </div>
                                </div>
                            )}
                            
                            {/* Plan Name */}
                            <div className="text-center space-y-1 mb-6">
                                <p className="text-lg font-semibold text-white">{plan.name}</p>
                            </div>
                            
                            {/* Price */}
                            <div className="text-center mb-8">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-5xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                                        ${plan.price}
                                    </span>
                                    <span className="text-zinc-500 font-medium text-base">
                                        /{plan.period}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Features List */}
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3 text-zinc-300">
                                        <div className={`flex-shrink-0 mt-0.5 p-1 rounded-full ${
                                            plan.mostPopular 
                                                ? 'bg-gradient-to-br from-pink-500 to-purple-500' 
                                                : 'bg-pink-500/20'
                                        }`}>
                                            <CheckIcon className={`size-3 ${
                                                plan.mostPopular ? 'text-white' : 'text-pink-400'
                                            }`} strokeWidth={3} />
                                        </div>
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {/* CTA Button */}
                            <button 
                                type="button" 
                                className={`group/btn relative w-full py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
                                    plan.mostPopular 
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70' 
                                        : 'bg-white/10 hover:bg-white/15 text-white border border-zinc-700 hover:border-zinc-600'
                                }`}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {plan.mostPopular && <Zap size={16} className="fill-white" />}
                                    Get Started
                                </span>
                                {plan.mostPopular && (
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover/btn:opacity-20 blur transition-opacity duration-300"></div>
                                )}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Info Section */}
            <motion.div 
                className="max-w-3xl mx-auto mt-16 text-center space-y-4"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <p className="text-zinc-400">
                    All plans include a 7-day free trial. No credit card required.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                        <CheckIcon size={16} className="text-pink-500" />
                        <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon size={16} className="text-pink-500" />
                        <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckIcon size={16} className="text-pink-500" />
                        <span>Secure payment</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
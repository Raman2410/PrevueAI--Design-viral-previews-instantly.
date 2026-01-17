'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { featuresData } from "../data/features";
import type { IFeature } from "../types";

export default function FeaturesSection() {
    return (
        <div id="features" className="px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute -z-10 top-0 right-1/4 size-96 bg-purple-600/20 blur-[200px]"></div>
            
            <SectionTitle 
                text1="Features" 
                text2="Why use our generation" 
                text3="Create stunning thumbnails that get clicks, without the hassle." 
            />
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                {featuresData.map((feature: IFeature, index: number) => (
                    <motion.div 
                        key={index} 
                        className={`group relative ${index === 1 ? 'md:scale-105' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Featured Card Border Gradient */}
                        {index === 1 && (
                            <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
                        )}
                        
                        {/* Card */}
                        <div className={`relative p-6 rounded-2xl space-y-4 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-sm border ${index === 1 ? 'border-pink-500/30' : 'border-zinc-800'} hover:border-zinc-700 transition-all duration-300 h-full group-hover:shadow-xl group-hover:shadow-pink-500/10`}>
                            {/* Icon Container */}
                            <div className="flex items-center justify-between">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <img 
                                        src={feature.icon} 
                                        alt={feature.title + " icon"} 
                                        className="size-6" 
                                    />
                                </div>
                                {index === 1 && (
                                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                                        <Sparkles size={12} className="text-pink-400" />
                                        <span className="text-xs font-semibold text-pink-400">Popular</span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-zinc-400 leading-relaxed min-h-[3rem]">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Showcase Section */}
            <div className="mt-32 relative mx-auto max-w-6xl">
                {/* Background Glow */}
                <div className="absolute -z-10 size-[500px] -top-20 -left-20 bg-gradient-to-br from-pink-500/30 to-purple-500/20 blur-[150px] rounded-full"></div>
                
                {/* Section Header */}
                <motion.div
                    className="space-y-4 mb-12"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        See it in action
                    </h2>
                    <p className="text-zinc-300 text-lg max-w-3xl">
                        Learn more about how it can help you build beautiful, high-converting thumbnails with less effort and time.
                    </p>
                </motion.div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Large Image */}
                    <motion.div 
                        className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-pink-500/30 transition-all duration-300"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            src="/assets/features-showcase-1.png" 
                            alt="features showcase" 
                            width={1000} 
                            height={500} 
                        />
                    </motion.div>

                    {/* Info Card with Image */}
                    <motion.div 
                        className="md:col-span-1 space-y-6"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        {/* Image */}
                        <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-pink-500/30 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img 
                                src="/assets/features-showcase-2.png" 
                                alt="features showcase" 
                                width={1000} 
                                height={500} 
                                className="w-full group-hover:scale-105 transition-transform duration-500" 
                            />
                        </div>
                        
                        {/* Text Content */}
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-white leading-tight">
                                Boost your views with AI designs
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Stop guessing and start ranking. Our AI creates designs proven to capture attention and drive clicks.
                            </p>
                            
                            {/* CTA Link */}
                            <a 
                                href="https://prebuiltui.com" 
                                className="group/link inline-flex items-center gap-2 mt-4 text-pink-500 hover:text-pink-400 font-medium transition-colors duration-300"
                            >
                                <span>Start generating free</span>
                                <ArrowUpRight className="size-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
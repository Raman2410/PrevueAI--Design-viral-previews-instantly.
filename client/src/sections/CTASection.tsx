'use client'
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export default function CTASection() {
    const navigate = useNavigate();
    return (
        <div className="max-w-6xl mx-auto px-4 mt-32 mb-16 relative">
            {/* Background Glow Effects */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-pink-600/30 blur-[100px] rounded-3xl"></div>
            
            <motion.div 
                className="relative overflow-hidden rounded-3xl"
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {/* Gradient Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-pink-500 rounded-3xl opacity-75"></div>
                
                {/* Content Container */}
                <div className="relative bg-gradient-to-br from-pink-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-sm">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"></div>
                    
                    {/* Main Content */}
                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12 lg:p-16">
                        {/* Left Side - Text Content */}
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            {/* Badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                            >
                                <TrendingUp size={16} className="text-pink-300" />
                                <span className="text-sm font-semibold text-white">Boost Your Views</span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h2 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                            >
                                <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                                    Ready to go
                                </span>
                                <br />
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                                        Viral?
                                    </span>
                                    <Sparkles className="absolute -top-2 -right-8 size-8 text-yellow-400 fill-yellow-400 animate-pulse" />
                                </span>
                            </motion.h2>

                            {/* Description */}
                            <motion.p 
                                className="text-lg md:text-xl text-pink-100 max-w-2xl leading-relaxed"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                            >
                                Join thousands of creators using AI-generated thumbnails to{" "}
                                <span className="font-semibold text-white">boost their views</span> and{" "}
                                <span className="font-semibold text-white">grow their channels</span>.
                            </motion.p>

                            {/* Stats */}
                            <motion.div
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4"
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                            >
                                <div className="text-center lg:text-left">
                                    <p className="text-2xl font-bold text-white">10K+</p>
                                    <p className="text-sm text-pink-200">Active Creators</p>
                                </div>
                                <div className="hidden lg:block w-px h-12 bg-white/20"></div>
                                <div className="text-center lg:text-left">
                                    <p className="text-2xl font-bold text-white">500K+</p>
                                    <p className="text-sm text-pink-200">Thumbnails Made</p>
                                </div>
                                <div className="hidden lg:block w-px h-12 bg-white/20"></div>
                                <div className="text-center lg:text-left">
                                    <p className="text-2xl font-bold text-white">4.9★</p>
                                    <p className="text-sm text-pink-200">User Rating</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - CTA Button */}
                        <motion.div
                            className="flex-shrink-0"
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                        >
                            <button 
                                onClick={() => navigate('/generate')} 
                                className="group relative px-10 py-4 bg-white text-pink-900 rounded-full text-base font-bold shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Sparkles size={18} className="fill-pink-900" />
                                    Generate Free Thumbnails
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                {/* Button Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                            </button>
                            <p className="text-center text-xs text-pink-200 mt-3">
                                No credit card required • 100% Free
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
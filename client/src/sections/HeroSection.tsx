'use client'
import { CheckIcon, ChevronRightIcon, VideoIcon, SparklesIcon } from "lucide-react";
import TiltedImage from "../components/TiltImage";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    const navigate = useNavigate();
    const specialFeatures = [
        "No Skills and Design Needed",
        "Fast Generations",
        "High CTR Templates",
    ];

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute top-20 -z-10 left-1/4 size-96 bg-pink-600/40 blur-[250px]"></div>
            <div className="absolute top-40 -z-10 right-1/4 size-80 bg-purple-600/30 blur-[200px]"></div>
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
            
            {/* Badge */}
            <motion.a 
                href="https://prebuiltui.com?utm_source=pixels" 
                className="group relative flex items-center gap-2 rounded-full p-1 pr-4 mt-44 text-white bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <span className="bg-gradient-to-r from-pink-600 to-pink-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg">
                    NEW
                </span>
                <p className="flex items-center gap-1 text-sm font-medium">
                    <SparklesIcon size={14} className="text-pink-400" />
                    <span>Generate your first thumbnail for free</span>
                    <ChevronRightIcon size={16} className="text-pink-400 group-hover:translate-x-1 transition-transform duration-300" />
                </p>
            </motion.a>

            {/* Main Heading */}
            <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl text-center mt-8 bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                AI Thumbnail Generator for your{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                        Videos
                    </span>
                    <span className="absolute inset-0 blur-xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-50 -z-10"></span>
                </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
                className="text-lg md:text-xl text-center text-zinc-300 max-w-2xl mt-6 leading-relaxed"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Stop wasting hours on design. Get{" "}
                <span className="text-white font-semibold">high-converting thumbnails</span> in seconds with our advanced AI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 mt-10"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <button 
                    onClick={() => navigate('/generate')} 
                    className="group relative bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full px-8 h-12 font-semibold shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10">Generate Now</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                </button>
                <button className="flex items-center gap-2 border-2 border-pink-500/30 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 rounded-full px-6 h-12 font-medium backdrop-blur-sm group">
                    <VideoIcon strokeWidth={2} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>See how it works</span>
                </button>
            </motion.div>

            {/* Feature List */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-14">
                {specialFeatures.map((feature, index) => (
                    <motion.div 
                        className="flex items-center gap-2.5 group" 
                        key={index}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.4 }}
                    >
                        <div className="flex items-center justify-center size-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                            <CheckIcon className="size-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-zinc-300 font-medium group-hover:text-white transition-colors duration-300">
                            {feature}
                        </span>
                    </motion.div>
                ))}
            </div>

            <TiltedImage />
        </div>
    );
}
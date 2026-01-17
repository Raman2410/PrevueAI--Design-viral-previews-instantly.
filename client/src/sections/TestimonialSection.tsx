import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute -z-10 top-1/2 left-1/4 size-96 bg-pink-600/20 blur-[200px]"></div>
            <div className="absolute -z-10 top-1/3 right-1/4 size-80 bg-purple-600/20 blur-[180px]"></div>
            
            <SectionTitle 
                text1="Reviews" 
                text2="Trusted by creators worldwide" 
                text3="See how our AI thumbnails are helping channels explode their views." 
            />

            {/* Stats Bar */}
            <motion.div 
                className="max-w-4xl mx-auto mt-12 mb-16"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm border border-zinc-800">
                    <div className="text-center space-y-2">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-5 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <p className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">4.9/5</p>
                        <p className="text-sm text-zinc-400">Average Rating</p>
                    </div>
                    <div className="text-center space-y-2 border-x-0 sm:border-x border-zinc-800">
                        <p className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">10K+</p>
                        <p className="text-sm text-zinc-400">Happy Creators</p>
                    </div>
                    <div className="text-center space-y-2">
                        <p className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">500K+</p>
                        <p className="text-sm text-zinc-400">Thumbnails Generated</p>
                    </div>
                </div>
            </motion.div>

            {/* Testimonial Marquees */}
            <div className="relative">
                {/* Top Gradient Fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/50 to-transparent z-10 pointer-events-none"></div>
                
                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent z-10 pointer-events-none"></div>

                {/* First Marquee - Left to Right */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Marquee 
                        className="max-w-6xl mx-auto mt-8" 
                        gradient={true} 
                        speed={30} 
                        gradientColor="rgb(9 9 11)"
                        gradientWidth={100}
                    >
                        <div className="flex items-center justify-center py-6 overflow-hidden">
                            {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                                <TestimonialCard key={index} index={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </Marquee>
                </motion.div>

                {/* Second Marquee - Right to Left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Marquee 
                        className="max-w-6xl mx-auto mt-6" 
                        gradient={true} 
                        speed={30} 
                        direction="right" 
                        gradientColor="rgb(9 9 11)"
                        gradientWidth={100}
                    >
                        <div className="flex items-center justify-center py-6 overflow-hidden">
                            {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                                <TestimonialCard key={index} index={index} testimonial={testimonial} />
                            ))}
                        </div>
                    </Marquee>
                </motion.div>
            </div>

            {/* Bottom CTA Section */}
            <motion.div 
                className="max-w-4xl mx-auto mt-20 text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                    <Quote className="size-6 text-pink-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Join thousands of creators
                </h3>
                <p className="text-zinc-300 max-w-2xl mx-auto">
                    Start creating professional thumbnails that stand out and drive more clicks to your content.
                </p>
                <button className="group mt-4 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 hover:scale-105 active:scale-95">
                    <span className="relative z-10">Get Started Free</span>
                </button>
            </motion.div>
        </div>
    );
}
'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon, MessageSquare, Send } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
    return (
        <div className="px-4 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute -z-10 top-1/2 left-1/4 size-96 bg-pink-600/20 blur-[200px]"></div>
            <div className="absolute -z-10 top-1/3 right-1/4 size-80 bg-purple-600/20 blur-[180px]"></div>
            
            <SectionTitle 
                text1="Contact" 
                text2="Grow your channel" 
                text3="Have questions about our AI? Ready to scale your views? Let's talk." 
            />

            <div className="max-w-5xl mx-auto mt-16 grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Info Cards */}
                <div className="space-y-6">
                    <motion.div
                        className="space-y-4"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Let's create something amazing together
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Whether you have questions, feedback, or just want to say hi, we'd love to hear from you. Our team typically responds within 24 hours.
                        </p>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div
                        className="space-y-4"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <div className="group p-5 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 hover:border-pink-500/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <MailIcon className="size-5 text-pink-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Email us</h4>
                                    <p className="text-sm text-zinc-400">support@thumbnailai.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="group p-5 rounded-xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 hover:border-pink-500/30 transition-all duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <MessageSquare className="size-5 text-pink-400" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Live Chat</h4>
                                    <p className="text-sm text-zinc-400">Available Mon-Fri, 9AM-5PM EST</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Form */}
                <motion.div
                    className="relative"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    {/* Gradient Border */}
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-pink-500/50 via-purple-500/50 to-pink-500/50 rounded-2xl blur-sm"></div>
                    
                    {/* Form Container */}
                    <form 
                        onSubmit={(e) => e.preventDefault()} 
                        className="relative p-8 pb-6 rounded-2xl bg-gradient-to-br from-zinc-900/95 to-zinc-950/95 backdrop-blur-sm space-y-6"
                    >
                        {/* Name Input */}
                        <div>
                            <label className="block mb-2 font-medium text-zinc-200">Your name</label>
                            <div className="group relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <UserIcon className="size-5 text-zinc-500 group-focus-within:text-pink-400 transition-colors duration-300" />
                                </div>
                                <input 
                                    name="name" 
                                    type="text" 
                                    placeholder="John Doe" 
                                    className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300" 
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block mb-2 font-medium text-zinc-200">Email address</label>
                            <div className="group relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <MailIcon className="size-5 text-zinc-500 group-focus-within:text-pink-400 transition-colors duration-300" />
                                </div>
                                <input 
                                    name="email" 
                                    type="email" 
                                    placeholder="john@example.com" 
                                    className="w-full pl-12 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300" 
                                />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label className="block mb-2 font-medium text-zinc-200">Message</label>
                            <textarea 
                                name="message" 
                                rows={4} 
                                placeholder="Tell us about your project or question..." 
                                className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none" 
                            />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                        >
                            <Send className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <span>Send Message</span>
                        </button>

                        {/* Privacy Note */}
                        <p className="text-xs text-center text-zinc-500 !mt-3 pb-2">
                            We respect your privacy. Your information will never be shared.
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
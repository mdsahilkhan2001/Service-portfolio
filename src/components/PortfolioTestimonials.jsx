import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const PortfolioTestimonials = ({ testimonials }) => {
    return (
        <div className="w-full bg-theme-bg py-24 overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="flex items-center gap-4 mb-3">
                    <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.5)]" />
                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Testimonials</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">
                    Client <span className="text-secondary italic">Words</span>
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 overflow-hidden relative">
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                    <motion.div
                        className="flex gap-12 py-4"
                        animate={{
                            x: [0, "-50%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...testimonials, ...testimonials].map((t, idx) => (
                            <div
                                key={idx}
                                className="w-[380px] md:w-[500px] shrink-0 bg-[#0B1221] p-10 md:p-12 rounded-[3rem] border border-white/5 hover:border-primary/20 transition-all duration-700 flex flex-col whitespace-normal shadow-2xl group/card"
                            >
                                <div className="flex gap-1.5 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 filter drop-shadow-[0_0_5px_rgba(250,204,21,0.3)]" />
                                    ))}
                                </div>

                                <div className="relative mb-12 flex-grow">
                                    <Quote className="absolute -top-8 -left-6 w-16 h-16 text-primary/5 -z-0 transform -rotate-12 transition-transform group-hover/card:rotate-0 duration-700" />
                                    <p className="relative z-10 text-slate-300 text-xl md:text-2xl leading-relaxed font-medium italic tracking-tight">
                                        "{t.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 border-t border-white/5 pt-10 mt-auto">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-white font-black text-2xl shadow-xl transition-transform group-hover/card:rotate-6 duration-700">
                                        {t.author[0]}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-extrabold text-xl leading-none mb-2">{t.author.split(',')[0]}</p>
                                        <p className="text-xs text-slate-500 uppercase tracking-[0.25em] font-bold opacity-80">{t.author.split(',')[1] || 'Partner'}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTestimonials;

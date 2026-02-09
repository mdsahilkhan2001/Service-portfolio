import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const total = testimonials.length;

    // Client-side detection for mobile
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
    }, [total]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
    }, [total]);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(nextSlide, 4000); // Faster autoscroll as requested
        return () => clearInterval(timer);
    }, [nextSlide, isAutoPlaying]);

    const handleManualChange = (direction) => {
        setIsAutoPlaying(false);
        if (direction === 'next') nextSlide();
        else prevSlide();

        // Resume autoplay after 12 seconds of inactivity
        setTimeout(() => setIsAutoPlaying(true), 12000);
    };

    return (
        <div className="relative w-full overflow-hidden py-12 md:py-16 px-4 bg-theme-bg">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                <div className="relative w-full flex items-center justify-center h-full">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {testimonials.map((t, idx) => {
                            // Determine relative position
                            const offset = (idx - currentIndex + total) % total;

                            // Define visible cards
                            const isCenter = offset === 0;
                            const isNext = offset === 1;
                            const isPrev = offset === total - 1;

                            // Always visible if it's one of the 3
                            const isVisible = isCenter || isNext || isPrev;
                            if (!isVisible && total > 2) return null;

                            // Responsive variants for a fluid gliding experience
                            const variants = {
                                center: {
                                    x: 0,
                                    scale: 1,
                                    opacity: 1,
                                    zIndex: 30,
                                    rotateY: 0,
                                    filter: "blur(0px)",
                                    pointerEvents: "auto",
                                    display: "flex"
                                },
                                next: {
                                    x: isMobile ? "85%" : "70%",
                                    scale: isMobile ? 0.7 : 0.8,
                                    opacity: isMobile ? 0.2 : 0.4,
                                    zIndex: 20,
                                    rotateY: -20,
                                    filter: isMobile ? "blur(8px)" : "blur(4px)",
                                    pointerEvents: "none",
                                    display: "flex"
                                },
                                prev: {
                                    x: isMobile ? "-85%" : "-70%",
                                    scale: isMobile ? 0.7 : 0.8,
                                    opacity: isMobile ? 0.2 : 0.4,
                                    zIndex: 20,
                                    rotateY: 20,
                                    filter: isMobile ? "blur(8px)" : "blur(4px)",
                                    pointerEvents: "none",
                                    display: "flex"
                                },
                                exit: {
                                    x: offset > total / 2 ? "-150%" : "150%",
                                    scale: 0.5,
                                    opacity: 0,
                                    zIndex: 0,
                                    filter: "blur(20px)",
                                    transition: { duration: 0.4 }
                                }
                            };

                            let activeVariant = "exit";
                            if (isCenter) activeVariant = "center";
                            else if (isNext) activeVariant = "next";
                            else if (isPrev) activeVariant = "prev";

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={activeVariant}
                                    exit="exit"
                                    variants={variants}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150, // Slightly higher for more "pop" but still smooth
                                        damping: 22,
                                        mass: 1
                                    }}
                                    className="absolute w-full max-w-[95vw] md:max-w-[550px] h-full flex items-center justify-center p-4"
                                    style={{ perspective: "1500px" }}
                                >
                                    <div className={`
                                        w-full bg-theme-bg-secondary/80 backdrop-blur-3xl p-6 md:p-12 rounded-[2rem] md:rounded-[4rem] 
                                        border border-white/10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] 
                                        relative group overflow-hidden transition-all duration-700
                                        ${isCenter ? 'ring-[4px] ring-primary/20 scale-100 opacity-100' : 'scale-90 grayscale-[40%] opacity-40'}
                                    `}>
                                        {/* Spotlight shine */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                        <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-all duration-700 transform group-hover:scale-110 group-hover:-rotate-12">
                                            <MessageSquare size={isMobile ? 60 : 100} />
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex gap-2 mb-8">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <motion.div
                                                        key={star}
                                                        animate={isCenter ? {
                                                            scale: [1, 1.3, 1],
                                                            rotate: [0, 15, 0]
                                                        } : {}}
                                                        transition={{
                                                            delay: star * 0.1,
                                                            duration: 2,
                                                            repeat: isCenter ? Infinity : 0,
                                                            repeatDelay: 3
                                                        }}
                                                    >
                                                        <Star size={isMobile ? 20 : 24} className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <p className={`
                                                text-lg md:text-xl lg:text-2xl text-text mb-10 md:mb-12 leading-snug font-bold tracking-tight
                                                ${isCenter ? 'opacity-100' : 'opacity-40'} transition-opacity duration-700 text-balance
                                            `}>
                                                "{t.text}"
                                            </p>

                                            <div className="mt-auto flex items-center gap-5 md:gap-8 border-t border-white/10 pt-8 md:pt-10">
                                                <div className="relative">
                                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-[1.2rem] md:rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg md:text-2xl shadow-xl transform group-hover:rotate-12 transition-transform duration-700">
                                                        {t.author[0]}
                                                    </div>
                                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-emerald-500 border-2 md:border-4 border-theme-bg-secondary rounded-full shadow-lg" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-text text-base md:text-xl tracking-tight mb-0.5">{t.author.split(',')[0]}</p>
                                                    <p className="text-[10px] md:text-xs text-theme-text-secondary uppercase tracking-[0.3em] font-bold opacity-60">
                                                        {t.author.split(',')[1]}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Nav Buttons */}
                <div className="absolute -bottom-24 md:bottom-auto md:top-1/2 md:-translate-y-1/2 left-0 right-0 flex justify-center md:justify-between px-4 gap-12 md:gap-0 pointer-events-none z-50">
                    <button
                        onClick={() => handleManualChange('prev')}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] md:rounded-[2.5rem] bg-theme-bg-secondary/95 border border-white/20 text-white hover:bg-primary hover:border-primary hover:shadow-[0_20px_50px_rgba(var(--color-primary-rgb),0.5)] transition-all pointer-events-auto backdrop-blur-3xl flex items-center justify-center group active:scale-95"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={isMobile ? 32 : 48} className="group-hover:-translate-x-3 transition-transform duration-500" />
                    </button>
                    <button
                        onClick={() => handleManualChange('next')}
                        className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] md:rounded-[2.5rem] bg-theme-bg-secondary/95 border border-white/20 text-white hover:bg-primary hover:border-primary hover:shadow-[0_20px_50px_rgba(var(--color-primary-rgb),0.5)] transition-all pointer-events-auto backdrop-blur-3xl flex items-center justify-center group active:scale-95"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={isMobile ? 32 : 48} className="group-hover:translate-x-3 transition-transform duration-500" />
                    </button>
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-6 mt-32 md:mt-24">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setIsAutoPlaying(false);
                            setCurrentIndex(idx);
                        }}
                        className={`transition-all duration-1000 rounded-full h-3 md:h-4 ${currentIndex === idx
                            ? 'w-16 md:w-24 bg-gradient-to-r from-primary to-secondary shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.7)]'
                            : 'w-4 md:w-6 bg-white/10 hover:bg-white/40'
                            }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;

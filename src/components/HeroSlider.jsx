import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: '/assets/hero/tech-vision.png',
        title: "Transform Your Business with Industry 4.0",
        subtitle: "Leverage cutting-edge technology to drive innovation and efficiency. Our comprehensive digital solutions integrate AI, IoT, and cloud computing to revolutionize your operations.",
        cta: "Explore Solutions",
        link: "/contact"
    },
    {
        id: 2,
        image: '/assets/hero/server-room.jpg',
        title: "Enterprise-Grade Infrastructure & Cloud Solutions",
        subtitle: "Build a robust, scalable foundation for your digital transformation. Our expert team delivers secure, high-performance infrastructure tailored to your business needs.",
        cta: "Get Started",
        link: "/contact"
    },
    {
        id: 3,
        image: '/assets/hero/digital-solutions.jpg',
        title: "Intelligent Automation & Digital Excellence",
        subtitle: "Streamline workflows and unlock new possibilities with smart automation. From process optimization to advanced analytics, we empower your business to thrive in the digital age.",
        cta: "Learn More",
        link: "/contact"
    }
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000); // Auto-advance every 6 seconds

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Ken Burns Effect */}
                    <motion.div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 6, ease: "linear" }}
                    >
                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </motion.div>

                    {/* Content Container */}
                    <div className="relative container mx-auto px-4 h-full flex items-center z-10">
                        <div className="max-w-3xl pl-4 md:pl-12">
                            {/* Slide Number Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm font-semibold"
                            >
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </motion.div>

                            {/* Title with stagger effect */}
                            <motion.h1
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                            >
                                {slides[currentIndex].title}
                            </motion.h1>

                            {/* Subtitle with stagger */}
                            <motion.p
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-lg"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.p>

                            {/* CTA Button with enhanced animation */}
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link
                                    to={slides[currentIndex].link}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 active:scale-95 border border-primary/20 backdrop-blur-sm relative overflow-hidden"
                                >
                                    <span className="relative z-10">{slides[currentIndex].cta}</span>
                                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation Buttons with Glassmorphism */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-20 group shadow-lg"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 z-20 group shadow-lg"
                aria-label="Next Slide"
            >
                <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Enhanced Progress Indicators with Glassmorphism */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div className="flex gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className="relative group"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary w-8 shadow-lg shadow-primary/50'
                                    : 'bg-white/50 hover:bg-white/80 group-hover:scale-125'
                                }`} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Auto-progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                <motion.div
                    key={currentIndex}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                />
            </div>
        </div>
    );
};

export default HeroSlider;

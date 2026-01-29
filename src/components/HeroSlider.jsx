import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
    {
        id: 1,
        image: '/assets/slide-business.png',
        title: "Powering Businesses with Future-Ready IT Solutions",
        subtitle: "We go beyond traditional IT support—delivering enterprise-grade technology designed to fuel business growth. Our cloud services and network solutions are built on global standards.",
        cta: "Get Started Today",
        link: "/contact"
    },
    {
        id: 2,
        image: '/assets/slide-tech.png',
        title: "Secure & Scalable Infrastructure",
        subtitle: "Protect your digital assets with our advanced cybersecurity and network management solutions. We ensure your business runs smoothly with 99.9% uptime and proactive monitoring.",
        cta: "Explore Services",
        link: "/services"
    },
    {
        id: 3,
        image: '/assets/slide-team.png',
        title: "Expert Teams, Exceptional Results",
        subtitle: "Collaborate with our diverse team of world-class engineers and developers. We bring your vision to life with cutting-edge software development and AI integration.",
        cta: "Meet Our Team",
        link: "/about"
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
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    >
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                    </div>

                    {/* Content Container */}
                    <div className="relative container mx-auto px-4 h-full flex items-center z-10">
                        <div className="max-w-3xl pl-4 md:pl-12">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                            >
                                {slides[currentIndex].title}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.p>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                <Link
                                    to={slides[currentIndex].link}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white text-lg font-semibold rounded-full transition-all shadow-lg hover:shadow-primary/40 hover:scale-105 active:scale-95 border border-primary/20 backdrop-blur-sm"
                                >
                                    {slides[currentIndex].cta} <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 z-20 group"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-110 z-20 group"
                aria-label="Next Slide"
            >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-primary w-8'
                                : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;

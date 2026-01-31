import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top HTTP request
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl transition-all border border-white/20 backdrop-blur-md group"
                    aria-label="Scroll to top"
                >
                    <ChevronUp
                        size={24}
                        className="group-hover:animate-bounce"
                    />

                    {/* Pulsing Ring Effect */}
                    <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;

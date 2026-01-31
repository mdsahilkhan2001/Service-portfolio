import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';


import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="mt-auto relative w-full">
            {/* Animated Wave Curve */}
            <div className="w-full overflow-hidden leading-[0] z-10 relative -mb-[1px]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-theme-bg-secondary"
                        animate={{
                            y: [0, -15, 0],
                            scaleY: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 5,
                            ease: "easeInOut"
                        }}
                    />
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="fill-theme-bg-secondary opacity-50"
                    ></path>
                </svg>
            </div>

            <div className="bg-theme-bg-secondary pt-10 pb-12 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_40%)] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_40%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                        {/* Company Info */}
                        <div className="footer-section">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="/assets/sgs-icon.png"
                                    alt="SGS Codeworks"
                                    className="h-10 w-10 object-contain dark:mix-blend-screen"
                                />
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-text tracking-tight">SGS</span>
                                    <span className="text-lg font-light text-slate-600 dark:text-slate-300">Codeworks</span>
                                </div>
                            </div>
                            <p className="text-theme-text-secondary mb-6 leading-relaxed">
                                Accelerating digital transformation with scalable software solutions. We build modern web apps, AI-powered systems, and cloud-native software.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/sahilkhanq1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-theme-text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-300"><Linkedin size={20} /></a>
                                <a href="https://x.com/Mdsahil46670066" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-theme-text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-300"><Twitter size={20} /></a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-theme-text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-300"><Facebook size={20} /></a>
                                <a href="https://www.instagram.com/itsahil_khan1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-theme-text-secondary hover:text-primary transition-colors hover:scale-110 transform duration-300"><Instagram size={20} /></a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-section">
                            <h4 className="text-lg font-semibold text-text mb-5">Services</h4>
                            <ul className="flex flex-col gap-3">
                                <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">Web Development</Link></li>
                                <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">Mobile App Development</Link></li>
                                <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">AI & Chatbots</Link></li>
                                <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">Cloud Solutions</Link></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4 className="text-lg font-semibold text-text mb-5">Company</h4>
                            <ul className="flex flex-col gap-3">
                                <li className="mb-0"><Link to="/about" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">About Us</Link></li>
                                <li className="mb-0"><Link to="/portfolio" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">Case Studies</Link></li>
                                <li className="mb-0"><Link to="/technology" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">Technology Stack</Link></li>
                                <li className="mb-0"><Link to="/contact" className="text-theme-text-secondary hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-section">
                            <h4 className="text-lg font-semibold text-text mb-5">Contact Us</h4>
                            <div className="flex items-center gap-3 text-theme-text-secondary mb-4 hover:text-primary transition-colors group">
                                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <Mail size={18} className="text-primary" />
                                </div>
                                <a href="mailto:mdsahilkhan2001@gmail.com" className="cursor-pointer">mdsahilkhan2001@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 text-theme-text-secondary mb-4 hover:text-primary transition-colors group">
                                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <a href="tel:+917079990338" className="cursor-pointer">+91 7079990338</a>
                            </div>
                            <div className="flex items-start gap-3 text-theme-text-secondary mb-4 hover:text-primary transition-colors group">
                                <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mt-1">
                                    <MapPin size={18} className="text-primary" />
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=No.+3,+Valpara+Building,+Service+Road,+17th+Main+Road,+1st+Stage,+Aicobo+Nagar,+near+KEB+Office,+BTM+Layout,+Bengaluru+560068"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer leading-tight"
                                >
                                    No. 3, Valpara Building, BTM Layout, Bengaluru (560068)
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border/50 pt-8 text-center text-theme-text-secondary text-sm">
                        <p>&copy; {new Date().getFullYear()} SGS Codeworks. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

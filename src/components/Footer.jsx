import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-bg-secondary border-t border-border py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="text-2xl font-bold text-primary mb-4 block">G2S<span className="text-text">Technologies</span></h3>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                            Accelerating digital transformation with scalable software solutions. We build modern web apps, AI-powered systems, and cloud-native software.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" aria-label="LinkedIn" className="text-text-secondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter" className="text-text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" aria-label="Facebook" className="text-text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram" className="text-text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold text-text mb-5">Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="mb-0"><Link to="/services" className="text-text-secondary hover:text-primary transition-colors">Web Development</Link></li>
                            <li className="mb-0"><Link to="/services" className="text-text-secondary hover:text-primary transition-colors">Mobile App Development</Link></li>
                            <li className="mb-0"><Link to="/services" className="text-text-secondary hover:text-primary transition-colors">AI & Chatbots</Link></li>
                            <li className="mb-0"><Link to="/services" className="text-text-secondary hover:text-primary transition-colors">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="text-lg font-semibold text-text mb-5">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="mb-0"><Link to="/about" className="text-text-secondary hover:text-primary transition-colors">About Us</Link></li>
                            <li className="mb-0"><Link to="/portfolio" className="text-text-secondary hover:text-primary transition-colors">Case Studies</Link></li>
                            <li className="mb-0"><Link to="/technology" className="text-text-secondary hover:text-primary transition-colors">Technology Stack</Link></li>
                            <li className="mb-0"><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold text-text mb-5">Contact Us</h4>
                        <div className="flex items-center gap-3 text-text-secondary mb-4">
                            <Mail size={18} className="text-primary" />
                            <span>ask@g2stechnologies.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-secondary mb-4">
                            <Phone size={18} className="text-primary" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-secondary mb-4">
                            <MapPin size={18} className="text-primary" />
                            <span>123 Tech Park, Innovation City</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-text-secondary text-sm">
                    <p>&copy; {new Date().getFullYear()} G2S Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

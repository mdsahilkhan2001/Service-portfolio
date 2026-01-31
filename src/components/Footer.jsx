import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';


const Footer = () => {
    return (
        <footer className="bg-theme-bg-secondary border-t border-border py-16 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="text-2xl font-bold text-primary mb-4 block">G2S<span className="text-text">Technologies</span></h3>
                        <p className="text-theme-text-secondary mb-6 leading-relaxed">
                            Accelerating digital transformation with scalable software solutions. We build modern web apps, AI-powered systems, and cloud-native software.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/sahilkhanq1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-theme-text-secondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
                            <a href="https://x.com/Mdsahil46670066" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-theme-text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-theme-text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/itsahil_khan1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-theme-text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold text-text mb-5">Services</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors">Web Development</Link></li>
                            <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors">Mobile App Development</Link></li>
                            <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors">AI & Chatbots</Link></li>
                            <li className="mb-0"><Link to="/services" className="text-theme-text-secondary hover:text-primary transition-colors">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="text-lg font-semibold text-text mb-5">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li className="mb-0"><Link to="/about" className="text-theme-text-secondary hover:text-primary transition-colors">About Us</Link></li>
                            <li className="mb-0"><Link to="/portfolio" className="text-theme-text-secondary hover:text-primary transition-colors">Case Studies</Link></li>
                            <li className="mb-0"><Link to="/technology" className="text-theme-text-secondary hover:text-primary transition-colors">Technology Stack</Link></li>
                            <li className="mb-0"><Link to="/contact" className="text-theme-text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="text-lg font-semibold text-text mb-5">Contact Us</h4>
                        <div className="flex items-center gap-3 text-theme-text-secondary mb-4">
                            <Mail size={18} className="text-primary" />
                            <span>mdsahilkhan2001@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-theme-text-secondary mb-4">
                            <Phone size={18} className="text-primary" />
                            <a href="tel:+917079990338" className="hover:text-primary transition-colors cursor-pointer">+91 7079990338</a>
                        </div>
                        <div className="flex items-center gap-3 text-theme-text-secondary mb-4">
                            <MapPin size={18} className="text-primary" />
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=No.+3,+Valpara+Building,+Service+Road,+17th+Main+Road,+1st+Stage,+Aicobo+Nagar,+near+KEB+Office,+BTM+Layout,+Bengaluru+560068"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors cursor-pointer"
                            >
                                No. 3, Valpara Building, BTM Layout, Bengaluru (560068)
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-theme-text-secondary text-sm">
                    <p>&copy; {new Date().getFullYear()} G2S Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

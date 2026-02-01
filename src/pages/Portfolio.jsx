import React from 'react';
import { motion } from 'framer-motion';
import PortfolioTestimonials from '../components/PortfolioTestimonials';

const testimonials = [
    { text: "Their engineering team delivered our ERP platform ahead of schedule with outstanding quality.", author: "Prime Apparel Exporter, Wholesale Garments Manufacturer" },
    { text: "Highly reliable partner for AI and cloud-based product development.", author: "Product Head, SaaS Startup" },
    { text: "We modernized our legacy systems seamlessly with G2S Technologies.", author: "Director of IT, FinTech Firm" },
];

const projects = [
    {
        title: 'E-Commerce Platform Revamp',
        category: 'Web Development',
        desc: 'Redesigned and replatformed a major retail e-commerce site using Next.js and Shopify, resulting in a 40% increase in conversion.',
    },
    {
        title: 'FinTech Mobile App',
        category: 'Mobile App',
        desc: 'Developed a secure and compliant mobile banking application for a leading fintech startup using React Native.',
    },
    {
        title: 'AI Customer Support Bot',
        category: 'AI & Automation',
        desc: 'Implemented an intelligent chatbot using OpenAI API to automate level-1 customer support, reducing ticket volume by 60%.',
    },
    {
        title: 'Cloud ERP Migration',
        category: 'Cloud Solutions',
        desc: 'Migrated an on-premise ERP system to AWS cloud, improving scalability and reducing infrastructure costs.',
    }
];

const Portfolio = () => {
    return (
        <div className="pt-16 min-h-screen bg-theme-bg">
            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-text">Our Work</h2>
                        <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">Explore our recent projects and success stories.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-theme-bg-secondary p-8 rounded-3xl border border-border flex flex-col items-start gap-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
                                <p className="text-theme-text-secondary leading-relaxed">{project.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Marquee */}
            <PortfolioTestimonials testimonials={testimonials} />
        </div>
    );
};

export default Portfolio;

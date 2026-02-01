import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Smartphone, Bot, Cloud, Monitor, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PortfolioTestimonials from '../components/PortfolioTestimonials';

const projects = [
    {
        title: 'E-Commerce Platform Revamp',
        category: 'Web',
        desc: 'Redesigned and replatformed a major retail e-commerce site using Next.js and Shopify, resulting in a 40% increase in conversion and 50% faster load times.',
        tech: ['Next.js', 'Shopify', 'Tailwind', 'Redux'],
        impact: '40% Conversion Boost',
        icon: Monitor
    },
    {
        title: 'College ERP & LMS Suite',
        category: 'Web',
        desc: 'A comprehensive Enterprise Resource Planning and Learning Management System for colleges, streamlining student records, library management, and digital learning.',
        tech: ['React', 'Django', 'PostgreSQL', 'Redis'],
        impact: '50k+ Students Managed',
        icon: Monitor
    },
    {
        title: 'AI Customer Support Bot',
        category: 'AI',
        desc: 'Implemented an intelligent chatbot using OpenAI API to automate level-1 customer support, reducing ticket volume by 60% and improving response time.',
        tech: ['OpenAI', 'Python', 'FastAPI', 'LangChain'],
        impact: '60% Support Automation',
        icon: Bot
    },
    {
        title: 'Cloud ERP Migration',
        category: 'Cloud',
        desc: 'Migrated an on-premise ERP system to AWS cloud, improving scalability and reducing infrastructure costs by 30% through serverless architecture.',
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        impact: '30% Cost Reduction',
        icon: Cloud
    },
    {
        title: 'Intelligent Inventory System',
        category: 'Web',
        desc: 'Built a real-time inventory management system for a global logistics firm, featuring predictive analytics for stock replenishment.',
        tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
        impact: 'Zero Stock-outs',
        icon: Code2
    },
    {
        title: 'Healthcare Patient Portal',
        category: 'Mobile',
        desc: 'A HIPAA-compliant patient management system with tele-consultation features and encrypted medical records storage.',
        tech: ['Flutter', 'Firebase', 'WebRTC', 'AES-256'],
        impact: 'HIPAA Certified',
        icon: Smartphone
    },
    {
        title: 'Web3 Gaming Marketplace',
        category: 'Web',
        desc: 'A high-performance NFT marketplace with real-time bidding, wallet integration (Metamask), and low-gas minting solutions.',
        tech: ['React', 'Solidity', 'Ethers.js', 'Hardhat'],
        impact: '2.5M+ Volume',
        icon: Code2
    },
    {
        title: 'Real-time Analytics Engine',
        category: 'AI',
        desc: 'An AI-powered dashboard processing millions of events per second to provide actionable insights for retail businesses.',
        tech: ['Spark', 'Kafka', 'Python', 'React'],
        impact: 'Real-time Insights',
        icon: Bot
    },
    {
        title: 'Prime Apparel Export Hub',
        category: 'Web',
        desc: 'A high-scale export management and manufacturing portal for Prime Apparel, optimizing international wholesale distribution and production workflows.',
        tech: ['Next.js', 'PostgreSQL', 'Cloudflare', 'Redux'],
        impact: '3x Operational Scale',
        icon: Monitor
    }
];

const testimonials = [
    { text: "Their engineering team delivered our ERP platform ahead of schedule with outstanding quality and precision.", author: "Prime Apparel Exporter, Wholesale Garments" },
    { text: "Highly reliable partner for AI and cloud-based product development. Their innovation is top-notch.", author: "Product Head, SaaS Startup" },
    { text: "We modernized our legacy systems seamlessly with SGS Codeworks. Exceptional expertise.", author: "Director of IT, FinTech Firm" },
];

const categories = ['All', 'Web', 'Mobile', 'AI', 'Cloud'];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = React.useState('All');
    const [hoveredIndex, setHoveredIndex] = React.useState(null);

    const filteredProjects = projects.filter(project =>
        activeCategory === 'All' || project.category === activeCategory
    );

    return (
        <div className="pt-16 min-h-screen bg-theme-bg relative overflow-hidden">
            {/* Hero Section with Custom Background */}
            <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Cinematic Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/portfolio-hero.jpg"
                        alt="ITSM Background"
                        className="w-full h-full object-cover scale-105"
                    />
                    {/* Multilayered Gradeient for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221]/60 via-[#0B1221]/80 to-theme-bg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1221]/40 via-transparent to-[#0B1221]/40" />
                    <div className="absolute inset-0 backdrop-blur-[1px] opacity-30" />
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-primary text-xs font-bold mb-10 uppercase tracking-[0.3em] shadow-2xl"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Success Stories
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                        >
                            Crafting Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary italic drop-shadow-none">
                                Excellence
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-md"
                        >
                            A curated selection of our most impactful projects, where innovation meets high-performance engineering.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="relative z-10 py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-text">Our Work</h2>
                        <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">Explore our recent projects and success stories.</p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative p-8 rounded-[2.5rem] bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-primary/50 transition-all duration-700 overflow-hidden min-h-[480px] flex flex-col shadow-2xl"
                            >
                                {/* Decorative Motif */}
                                <div className="absolute -top-10 -right-10 opacity-[0.02] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform rotate-12 group-hover:rotate-0">
                                    <project.icon size={280} />
                                </div>

                                {/* Header */}
                                <div className="relative mb-8 flex justify-between items-start">
                                    <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-grow">
                                    <h3 className="text-2xl font-bold mb-4 text-text group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-base text-theme-text-secondary mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                        {project.desc}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white/5 dark:bg-white/[0.05] rounded-lg text-[10px] font-bold text-text/60 border border-white/5 group-hover:border-primary/20 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Impact Metric */}
                                <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Impact</span>
                                        <span className="text-lg font-bold text-text tracking-tight">{project.impact}</span>
                                    </div>
                                    <Link to="/contact">
                                        <motion.div
                                            className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
                                            whileHover={{ rotate: 45, scale: 1.1 }}
                                        >
                                            <ExternalLink size={20} />
                                        </motion.div>
                                    </Link>
                                </div>

                                {/* Animated Background Glow */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Marquee - Enhanced */}
            <div className="pb-32 relative z-10">

                <PortfolioTestimonials testimonials={testimonials} />
            </div>
        </div>
    );
};

export default Portfolio;

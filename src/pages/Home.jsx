import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    Code2, Smartphone, Bot, Database, Server,
    Cloud, RefreshCw, Layers, ArrowRight,
    ShieldCheck, Users, Globe, Zap, MessageSquare, X, Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
    FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaJava,
    FaPhp, FaAws, FaDocker, FaGoogle, FaMicrosoft, FaPython
} from 'react-icons/fa';
import {
    SiAngular, SiReact, SiSpringboot, SiGo, SiDjango, SiDotnet,
    SiMongodb, SiMysql, SiRedis, SiPostgresql, SiGraphql,
    SiGooglecloud, SiKubernetes, SiNginx
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

import { courses } from '../data/courses';

// Data for Services
const services = [
    {
        icon: Code2,
        title: 'Web Development',
        desc: 'Modern, scalable, and secure web applications.',
        details: {
            description: "We build high-performance web applications tailored to your business goals. From engaging front-end interfaces to robust back-end architectures, our solutions are designed for scalability and speed.",
            features: ["Single Page Applications (SPA)", "Progressive Web Apps (PWA)", "SEO & Performance Optimization", "Secure API Integration"],
            tech: ["React", "Next.js", "Node.js", "TailwindCSS"]
        }
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile solutions.',
        details: {
            description: "Reach your customers on any device with our mobile app development services. We create intuitive, feature-rich apps for iOS and Android that deliver exceptional user experiences.",
            features: ["Cross-Platform (React Native/Flutter)", "Native iOS & Android", "Offline Capabilities", "Real-time Push Notifications"],
            tech: ["React Native", "Flutter", "Swift", "Kotlin"]
        }
    },
    {
        icon: Bot,
        title: 'AI Agents & Chatbots',
        desc: 'Intelligent automation for business workflows.',
        details: {
            description: "Automate complex tasks and enhance customer support with our custom AI solutions. We integrate cutting-edge LLMs to build intelligent agents that understand and act on your data.",
            features: ["Custom LLM Training", "Intelligent Customer Support Bots", "Workflow Automation Agents", "Predictive Analytics"],
            tech: ["OpenAI API", "Python", "LangChain", "TensorFlow"]
        }
    },
    {
        icon: Database,
        title: 'ERP & LMS Systems',
        desc: 'Comprehensive enterprise management solutions.',
        details: {
            description: "Streamline your operations with custom ERP and LMS platforms. We build centralized systems that integrate all your business processes, from HR to inventory management.",
            features: ["Centralized Data Management", "Role-Based Access Control", "Custom Reporting Dashboards", "Scalable Microservices Architecture"],
            tech: ["PostgreSQL", "Docker", "Redis", "Elasticsearch"]
        }
    },
    {
        icon: Server,
        title: 'Custom Software',
        desc: 'Tailored software to meet specific business needs.',
        details: {
            description: "Off-the-shelf software not cutting it? We engineer bespoke solutions designed specifically for your unique operational challenges and competitive advantages.",
            features: ["Requirement Analysis", "Rapid Prototyping", "Secure Data Handling", "Seamless Third-Party Integrations"],
            tech: [".NET Core", "Java Spring Boot", "GraphQL", "Azure"]
        }
    },
    {
        icon: RefreshCw,
        title: 'Legacy Modernization',
        desc: 'Revitalizing old systems with modern tech.',
        details: {
            description: "Don't let outdated software hold you back. We migrate and refactor legacy systems to modern cloud hierarchies, reducing technical debt and improving performance.",
            features: ["Cloud Migration Strategies", "Code Refactoring", "UI/UX Overhaul", "Database Optimization"],
            tech: ["AWS Migration Hub", "Docker", "Kubernetes", "Modern CI/CD"]
        }
    },
    {
        icon: Layers,
        title: 'Full-Stack Development',
        desc: 'End-to-end development expertise.',
        details: {
            description: "Get a complete solution from a single team. Our full-stack experts handle everything from the user interface to the database, ensuring a cohesive and efficient product.",
            features: ["End-to-End Prototyping", "RESTful & GraphQL API Design", "Responsive UI Implementation", "Database Architecture"],
            tech: ["MERN/MEAN Stack", "PostgreSQL", "Next.js", "Vercel"]
        }
    },
    {
        icon: Cloud,
        title: 'Cloud-Native Dev',
        desc: 'Scalable cloud architectures on AWS/Azure/GCP.',
        details: {
            description: "Leverage the power of the cloud with our cloud-native development services. We build resilient, scalable applications that take full advantage of serverless and containerized environments.",
            features: ["Serverless Computing", "Microservices Architecture", "Automated Scaling", "DevOps & CI/CD Pipelines"],
            tech: ["AWS Lambda", "Google Cloud Run", "Azure Functions", "Terraform"]
        }
    },
];

// Icon Mapping (same as before)
const techIcons = {
    'React': FaReact,
    'Angular': SiAngular,
    'React Native': TbBrandReactNative,
    'HTML5': FaHtml5,
    'CSS3': FaCss3Alt,
    'Bootstrap': FaBootstrap,
    'Node.js': FaNodeJs,
    'ASP.NET': SiDotnet,
    'Java Spring': SiSpringboot,
    'Golang': SiGo,
    'PHP (Laravel)': FaPhp,
    'Django': SiDjango,
    'MySQL': SiMysql,
    'MS SQL': Database,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'PostgreSQL': SiPostgresql,
    'GraphQL': SiGraphql,
    'AWS': FaAws,
    'Google Cloud': SiGooglecloud,
    'Azure': FaMicrosoft,
    'Docker': FaDocker,
    'Kubernetes': SiKubernetes,
    'Nginx': SiNginx
};

const techStack = {
    Frontend: ['React', 'Angular', 'React Native', 'HTML5', 'CSS3', 'Bootstrap'],
    Backend: ['Node.js', 'ASP.NET', 'Java Spring', 'Golang', 'PHP (Laravel)', 'Django'],
    Database: ['MySQL', 'MS SQL', 'MongoDB', 'Redis', 'PostgreSQL', 'GraphQL'],
    Infrastructure: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Nginx']
};

const testimonials = [
    { text: "Their engineering team delivered our ERP platform ahead of schedule with outstanding quality.", author: "Prime Apparel Exporter, Wholesale Garments Manufacturer" },
    { text: "Highly reliable partner for AI and cloud-based product development.", author: "Product Head, SaaS Startup" },
    { text: "We modernized our legacy systems seamlessly with G2S Technologies.", author: "Director of IT, FinTech Firm" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const maskVariants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

import HeroSlider from '../components/HeroSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
    const [activeTab, setActiveTab] = useState('Frontend');
    const [selectedService, setSelectedService] = useState(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Handle mouse move for glass-glow cards
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div className="pt-16 overflow-x-hidden relative"> {/* Added top padding for sticky navbar */}
            {/* Dark Mask for 전체 배경 */}
            <div className="fixed inset-0 bg-theme-bg pointer-events-none -z-20" />

            {/* Dynamic Background Elements */}
            <div className="fixed inset-0 tech-grid pointer-events-none -z-10" />

            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-3xl -z-10 opacity-30 pointer-events-none bg-gradient-to-r from-primary to-transparent"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full blur-3xl -z-10 opacity-30 pointer-events-none bg-gradient-to-l from-secondary to-transparent"
                style={{ y: y2 }}
            />

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-white/70 hover:text-slate-700 dark:hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl text-white shadow-lg shrink-0">
                                    <selectedService.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-text mb-2">{selectedService.title}</h3>
                                    <p className="text-primary font-medium">Enterprise Solution</p>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none">
                                <p className="text-theme-text-secondary text-lg leading-relaxed mb-8">
                                    {selectedService.details.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h4 className="text-text font-semibold mb-4 flex items-center gap-2">
                                            <ShieldCheck size={18} className="text-primary" /> Key Features
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedService.details.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-theme-text-secondary text-sm">
                                                    <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-text font-semibold mb-4 flex items-center gap-2">
                                            <Code2 size={18} className="text-primary" /> Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedService.details.tech.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs text-slate-600 dark:text-slate-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-6 border-t border-slate-200 dark:border-white/10">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-colors shadow-lg shadow-primary/20"
                                    >
                                        Get Started <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Slider */}
            <HeroSlider />

            {/* Services Section */}
            <section className="py-32 relative">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block"
                        >
                            What We Do
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-extrabold mb-6 text-text"
                        >
                            Our <span className="text-primary">Expertise</span>
                        </motion.h2>
                        <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">End-to-end software development services tailored to accelerate your business growth.</p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="glass-glow group relative p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-slate-900/50 dark:to-slate-900/20 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-2xl transition-all duration-700 overflow-hidden flex flex-col items-start min-h-[380px]"
                                variants={itemVariants}
                                onMouseMove={handleMouseMove}
                                whileHover={{ y: -15, scale: 1.02 }}
                            >
                                {/* Interactive Spotlight Glow (handled by index.css .glass-glow::before) */}

                                {/* Decorative Background Number */}
                                <span className="absolute top-4 right-8 text-8xl font-black text-white/[0.03] dark:text-white/[0.02] select-none pointer-events-none group-hover:text-primary/5 transition-colors duration-500">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>

                                {/* Decorative Background Icon (Faint) */}
                                <div className="absolute -bottom-10 -right-10 opacity-[0.03] dark:opacity-[0.02] transform -rotate-12 group-hover:rotate-0 group-hover:scale-125 transition-all duration-700 pointer-events-none">
                                    <service.icon size={200} />
                                </div>

                                {/* Icon Container - Classy & Glowing */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative inline-flex p-5 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 backdrop-blur-xl rounded-2xl text-primary border border-white/20 dark:border-white/10 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:shadow-primary/20">
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4 text-text group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-theme-text-secondary mb-8 leading-relaxed flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
                                    {service.desc}
                                </p>

                                {/* Animated CTA Button */}
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="group/btn relative mt-auto flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 dark:bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                    <span className="relative z-10 font-bold text-sm tracking-wide group-hover/btn:text-primary transition-colors">EXPLORE TECH</span>
                                    <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform duration-500 text-primary" />
                                </button>

                                {/* Bottom Glow Border */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Section - Revolutionized Design */}
            <section className="py-32 relative overflow-hidden bg-theme-bg">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                        >
                            Our Toolkit
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-text tracking-tight">
                            Technology <span className="text-primary italic">Stack</span>
                        </h2>
                        <p className="text-lg md:text-xl text-theme-text-secondary max-w-3xl mx-auto opacity-80 leading-relaxed">
                            We leverage a world-class technology stack to architect resilient, high-performance systems and future-proof solutions.
                        </p>
                    </div>

                    {/* Classy Glass Tab System */}
                    <div className="flex justify-center mb-16 px-4 md:px-0">
                        <div className="relative p-2 md:p-1.5 bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-2xl grid grid-cols-2 md:flex items-center gap-2 md:gap-1 shadow-2xl w-full md:w-auto">
                            {Object.keys(techStack).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-4 md:px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-500 whitespace-nowrap z-10 w-full md:w-auto ${activeTab === tab ? 'text-white' : 'text-theme-text-secondary hover:text-text'
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary rounded-xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.5)]"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tech Cards Grid */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="grid grid-cols-2 min-[420px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
                    >
                        {techStack[activeTab].map((tech, index) => {
                            const Icon = techIcons[tech] || Code2;
                            return (
                                <motion.div
                                    key={tech}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ y: -12, scale: 1.05 }}
                                    className="group relative flex flex-col items-center justify-center p-8 bg-white/5 dark:bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:border-primary/40 transition-all duration-500"
                                >
                                    {/* Decorative Motif */}
                                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none overflow-hidden flex items-center justify-center">
                                        <Icon size={120} className="transform rotate-12" />
                                    </div>

                                    {/* Tech Icon */}
                                    <div className="relative z-10 p-4 bg-white/5 rounded-2xl border border-white/10 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]">
                                        <Icon size={48} className="text-theme-text-secondary group-hover:text-primary transition-colors duration-500" />
                                    </div>

                                    {/* Tech Label */}
                                    <span className="relative z-10 font-bold text-sm tracking-widest text-text/80 group-hover:text-text group-hover:tracking-[0.15em] transition-all duration-500 uppercase">
                                        {tech}
                                    </span>

                                    {/* Spotlight Glow */}
                                    <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    {/* Bottom Indicator */}
                                    <div className="absolute bottom-4 w-12 h-1 bg-primary/20 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Featured Trainings */}
            {/* <section className="py-32 bg-theme-bg relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Education & Upskilling</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-text">Upskill with <span className="text-secondary">Professional Training</span></h2>
                            <p className="text-xl text-theme-text-secondary">Industry-ready courses to launch your tech career, designed by experts.</p>
                        </div>
                        <Link to="/training" className="hidden md:inline-flex px-8 py-3 bg-white dark:bg-slate-800 border border-border text-text font-semibold rounded-full hover:bg-theme-bg-secondary hover:border-primary transition-all shadow-sm">
                            View All Courses
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.slice(0, 3).map((course, index) => (
                            <motion.div
                                key={index}
                                className="bg-theme-bg-secondary rounded-[2rem] p-2 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-border transition-all duration-300 shadow-sm hover:shadow-xl group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="bg-white dark:bg-slate-900 rounded-[1.5rem] p-8 h-full flex flex-col relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10" />

                                    <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 text-primary w-fit group-hover:scale-110 transition-transform duration-300">
                                        <course.icon size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-primary transition-colors">{course.title}</h3>
                                    <p className="text-theme-text-secondary mb-8 leading-relaxed flex-grow">{course.shortDesc}</p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
                                        <span className="text-sm font-medium text-theme-text-secondary">{course.details.duration}</span>
                                        <Link to={`/training/${course.id}`} className="inline-flex items-center gap-2 font-bold text-primary group-hover:translate-x-1 transition-transform">
                                            View Details <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12 md:hidden">
                        <Link to="/training" className="inline-block px-8 py-3 bg-primary text-white text-base font-semibold rounded-full shadow-md hover:bg-primary-dark transition-colors">
                            View All Courses
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* Why Choose Us */}
            <section className="py-32 bg-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none animate-pulse-slow" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Our Strength</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Why Partner With Us?</h2>
                        <p className="text-slate-400 text-xl max-w-2xl mx-auto">More than just a service provider—we are your strategic growth partner.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/10 to-transparent p-1">
                                <img
                                    src="/assets/why-partner.png"
                                    alt="Why Partner With Us - 24/7 Support, Security, Growth"
                                    className="w-full h-auto rounded-3xl"
                                />
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: ShieldCheck,
                                    title: 'Enterprise Security',
                                    desc: 'Bank-grade security protocols to protect your data and ensure compliance with industry standards.'
                                },
                                {
                                    icon: Zap,
                                    title: '24/7 Support',
                                    desc: 'Round-the-clock technical assistance from our expert team whenever you need it.'
                                },
                                {
                                    icon: Users,
                                    title: 'Expert Team',
                                    desc: 'Dedicated professionals with deep expertise in cutting-edge technologies and best practices.'
                                },
                                {
                                    icon: Globe,
                                    title: 'Scalable Solutions',
                                    desc: 'Future-proof architecture that grows with your business needs and adapts to market changes.'
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:border-primary/50 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="mb-4 inline-block p-3 bg-white/5 rounded-xl group-hover:bg-primary/20 transition-colors">
                                        <feature.icon size={28} className="text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-text tracking-tight">Client <span className="text-secondary">Success Stories</span></h2>
                        <p className="text-lg md:text-xl text-theme-text-secondary max-w-2xl mx-auto opacity-80">Don't just take our word for it. Here's what our partners say.</p>
                    </div>
                    <TestimonialCarousel testimonials={testimonials} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-theme-bg overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="relative rounded-[4rem] overflow-hidden bg-[#0B1221] border border-white/5 shadow-2xl min-h-[500px] flex items-center justify-center p-8 md:p-20 text-center"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Background Image with Overlays */}
                        <div className="absolute inset-0 z-0 group">
                            <img
                                src="/assets/cta-bg-new.jpg"
                                alt="Accelerate Your Software Legacy"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Dark Overlays for legibility */}
                            <div className="absolute inset-0 bg-[#0B1221]/70" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-[#0B1221]/50" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-white text-xs md:text-sm font-bold mb-8 uppercase tracking-[0.2em] backdrop-blur-md">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Ready to scale?
                                </div>
                                <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-8 leading-[1.1] tracking-tighter">
                                    Accelerate Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary">
                                        Software Legacy
                                    </span>
                                </h2>
                                <p className="text-lg md:text-xl text-slate-200 mb-12 leading-relaxed opacity-90">
                                    Bridge the gap between vision and execution. Partner with the top 1% of global engineering talent to build software that defines industries.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <Link to="/contact" className="px-10 py-5 bg-gradient-to-r from-primary to-emerald-600 text-white text-lg rounded-2xl font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all">
                                        Book Discovery Call
                                    </Link>
                                    <Link to="/contact" className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-lg rounded-2xl font-bold hover:bg-white/20 transition-all">
                                        Contact Us
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;

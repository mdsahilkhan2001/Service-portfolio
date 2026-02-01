import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Smartphone, Bot, Database, Server,
    RefreshCw, Layers, Cloud, Sparkles, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        desc: 'Secure, scalable, and high-performance web applications built with modern frameworks.',
        gradient: 'from-blue-500/20 to-cyan-500/20',
        features: ['Progressive Web Apps (PWA)', 'Single Page Applications (SPA)', 'E-commerce Solutions', 'Performance Optimization'],
        techs: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        desc: 'Native iOS/Android and Cross-platform solutions using React Native and Flutter.',
        gradient: 'from-purple-500/20 to-pink-500/20',
        features: ['Cross-Platform Apps', 'Native iOS/Android', 'App Store Optimization', 'UI/UX Integration'],
        techs: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
        icon: Bot,
        title: 'AI Agents & Chatbots',
        desc: 'Custom AI solutions, LLM integration, and intelligent automation bots.',
        gradient: 'from-emerald-500/20 to-teal-500/20',
        features: ['Generative AI Integration', 'Custom LLM Training', 'NLP Solutions', 'Workflow Automation'],
        techs: ['OpenAI', 'LangChain', 'Python', 'FastAPI']
    },
    {
        icon: Database,
        title: 'ERP & LMS Systems',
        desc: 'Enterprise Resource Planning and Learning Management Systems tailored to your business.',
        gradient: 'from-orange-500/20 to-red-500/20',
        features: ['Inventory Management', 'Student Information Systems', 'Custom Dashboards', 'API Integrations'],
        techs: ['React', 'PostgreSQL', 'Django', 'Redux']
    },
    {
        icon: Server,
        title: 'Custom Software',
        desc: 'Bespoke software solutions solving unique business challenges.',
        gradient: 'from-indigo-500/20 to-violet-500/20',
        features: ['Scalable Architecture', 'Third-party Integrations', 'Custom Analytics', 'High Security'],
        techs: ['Java', 'Golang', '.NET', 'MySQL']
    },
    {
        icon: RefreshCw,
        title: 'Legacy Modernization',
        desc: 'Upgrading legacy systems to modern cloud-native architectures.',
        gradient: 'from-amber-500/20 to-yellow-500/20',
        features: ['Cloud Migration', 'Architecture Redesign', 'Database Refactoring', 'Efficiency Gains'],
        techs: ['AWS', 'Docker', 'Kubernetes', 'Microservices']
    }
];

const processSteps = [
    { title: "Discovery", desc: "Understanding your vision and defining project goals through deep research." },
    { title: "Planning", desc: "Strategic architecting, wireframing, and technology selection for optimal results." },
    { title: "Development", desc: "Agile sprints and high-quality coding using the latest industry standards." },
    { title: "Testing", desc: "Rigorous QA and security audits to ensure a flawless user experience." },
    { title: "Launch", desc: "Seamless deployment and ongoing support to ensure long-term success." }
];

const reasons = [
    { title: "Expert Engineering", desc: "A team of world-class developers with deep domain expertise." },
    { title: "Agile Methodology", desc: "Iterative development that ensures speed and transparency." },
    { title: "Security First", desc: "Enterprise-grade security baked into every line of code." },
    { title: "Global Support", desc: "Round-the-clock maintenance to keep your systems running." }
];

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="pt-16 min-h-screen bg-theme-bg relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
            </div>

            {/* Hero Section */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-[0.2em]"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            Value Creation
                        </motion.div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-text tracking-tight">
                            Future-Forward <br />
                            <span className="text-primary italic">Tech Services</span>
                        </h1>
                        <p className="text-xl text-theme-text-secondary max-w-3xl mx-auto opacity-80 leading-relaxed">
                            We don't just build software; we engineer competitive advantages using the most sophisticated technology stacks available today.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="group relative p-8 rounded-[2.5rem] bg-white/5 dark:bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden min-h-[500px] flex flex-col shadow-2xl"
                            >
                                {/* Decorative Motif */}
                                <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform rotate-12 group-hover:rotate-0">
                                    <service.icon size={250} />
                                </div>

                                {/* Icon Container */}
                                <div className="relative mb-8">
                                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative inline-flex p-5 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 backdrop-blur-xl rounded-2xl text-primary border border-white/20 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                        <service.icon size={36} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4 text-text group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-theme-text-secondary mb-8 leading-relaxed opacity-80">
                                    {service.desc}
                                </p>

                                {/* Features List */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-3 text-sm text-theme-text-secondary/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Tags */}
                                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                                    {service.techs.map((tech, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-white/5 dark:bg-white/[0.05] rounded-full text-[10px] font-bold tracking-widest uppercase text-primary/70">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Development Process Section */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text">Our Development <span className="text-primary italic">Process</span></h2>
                            <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto opacity-80">A streamlined engineering journey from initial concept to high-performance launch.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                            {/* Connector Line (Desktop) */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-8" />

                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 text-center p-6"
                                >
                                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)]">
                                        0{index + 1}
                                    </div>
                                    <h4 className="text-xl font-bold text-text mb-3">{step.title}</h4>
                                    <p className="text-sm text-theme-text-secondary leading-relaxed opacity-70">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us Section - Compacted & Animated */}
                    <div className="py-16 px-8 md:px-16 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] border border-white/10 rounded-[3.5rem] relative overflow-hidden mb-32 group/main shadow-2xl">
                        {/* Dynamic Background Glows */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] -mr-48 -mt-48 group-hover/main:bg-primary/20 transition-colors duration-1000" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-text leading-tight">
                                    Why Partner with <br />
                                    <span className="text-primary italic">SGS Codeworks?</span>
                                </h2>
                                <p className="text-lg text-theme-text-secondary mb-10 opacity-80 leading-relaxed max-w-lg">
                                    We combine technical excellence with business logic to deliver software that scales with your ambition.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 group/btn"
                                >
                                    Start a Project
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                                </Link>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                {reasons.map((reason, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.1
                                            },
                                            opacity: { delay: index * 0.1 }
                                        }}
                                        whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
                                        className="p-6 bg-white/5 dark:bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-lg hover:border-primary/40 transition-all duration-500 group/card relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                        <h4 className="text-lg font-bold text-primary mb-3 relative z-10">{reason.title}</h4>
                                        <p className="text-sm text-theme-text-secondary opacity-70 leading-relaxed relative z-10">{reason.desc}</p>

                                        {/* Corner Glow */}
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary/20 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

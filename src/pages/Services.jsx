import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Smartphone, Bot, Database, Server,
    RefreshCw, Layers, Cloud, Sparkles
} from 'lucide-react';

const services = [
    { icon: Code2, title: 'Web Development', desc: 'Secure, scalable, and high-performance web applications built with modern frameworks.', gradient: 'from-blue-500/20 to-cyan-500/20' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Native iOS/Android and Cross-platform solutions using React Native and Flutter.', gradient: 'from-purple-500/20 to-pink-500/20' },
    { icon: Bot, title: 'AI Agents & Chatbots', desc: 'Custom AI solutions, LLM integration, and intelligent automation bots.', gradient: 'from-emerald-500/20 to-teal-500/20' },
    { icon: Database, title: 'ERP & LMS Systems', desc: 'Enterprise Resource Planning and Learning Management Systems tailored to your business.', gradient: 'from-orange-500/20 to-red-500/20' },
    { icon: Server, title: 'Custom Software', desc: 'Bespoke software solutions solving unique business challenges.', gradient: 'from-indigo-500/20 to-violet-500/20' },
    { icon: RefreshCw, title: 'Legacy Modernization', desc: 'Upgrading legacy systems to modern cloud-native architectures.', gradient: 'from-amber-500/20 to-yellow-500/20' },
    { icon: Layers, title: 'Full-Stack Development', desc: 'Comprehensive frontend and backend development services.', gradient: 'from-rose-500/20 to-pink-500/20' },
    { icon: Cloud, title: 'Cloud-Native Dev', desc: 'Designing and deploying scalable applications on AWS, Azure, and Google Cloud.', gradient: 'from-sky-500/20 to-blue-500/20' },
];

const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="pt-16 min-h-screen bg-theme-bg relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest"
                        >
                            <Sparkles size={14} className="animate-pulse" />
                            What We Offer
                        </motion.div>
                        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-br from-text to-text-secondary bg-clip-text text-transparent">Our Services</h2>
                        <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">Comprehensive software solutions to drive your business forward.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Glow Effect on Hover */}
                                <motion.div
                                    className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                                    animate={hoveredIndex === index ? {
                                        scale: [1, 1.05, 1],
                                    } : {}}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                {/* Card */}
                                <motion.div
                                    className="relative bg-theme-bg-secondary/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 flex flex-col items-start gap-4 overflow-hidden h-full"
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {/* Gradient Overlay */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />

                                    {/* Animated Border Gradient */}
                                    <motion.div
                                        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, transparent 0%, rgba(var(--color-primary-rgb), 0.1) 50%, transparent 100%)`,
                                        }}
                                        animate={hoveredIndex === index ? {
                                            backgroundPosition: ['0% 0%', '100% 100%'],
                                        } : {}}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />

                                    {/* Icon Container */}
                                    <motion.div
                                        className="relative inline-flex p-4 bg-primary/10 rounded-2xl mb-2 text-primary z-10"
                                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon size={32} />

                                        {/* Icon Glow */}
                                        <motion.div
                                            className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-theme-text-secondary leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Decorative Corner Element */}
                                    <motion.div
                                        className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                        initial={{ rotate: 0 }}
                                        animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <service.icon size={80} className="text-primary" />
                                    </motion.div>

                                    {/* Shimmer Effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
                                        }}
                                        animate={hoveredIndex === index ? {
                                            x: ['-100%', '100%'],
                                        } : {}}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;

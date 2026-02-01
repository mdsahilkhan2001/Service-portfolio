import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code2, Globe, Rocket, Zap, ArrowRight, Laptop, Users, ShieldCheck, Cpu
} from 'lucide-react';

const coreValues = [
    {
        icon: Rocket,
        title: "Real-world Solutions",
        desc: "We bridge the gap between imagination and reality, engineering products that solve actual business challenges."
    },
    {
        icon: Zap,
        title: "Real-time Intelligence",
        desc: "Specializing in high-performance architectures that process and act on data in the blink of an eye."
    },
    {
        icon: Globe,
        title: "Global Impact",
        desc: "Our software powers industries worldwide, from retail giants to agile startups."
    }
];

const About = () => {
    return (
        <div className="pt-16 min-h-screen bg-theme-bg">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24">
                {/* Background Image with Cinematic Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/about-hero.jpg"
                        alt="Digital Background"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221]/40 via-[#0B1221]/60 to-theme-bg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1221]/40 via-transparent to-[#0B1221]/40" />
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-primary text-xs font-bold mb-8 uppercase tracking-[0.3em] shadow-xl"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Our Identity
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-tight drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
                        >
                            We Engineer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary italic drop-shadow-none">
                                Digital Success
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-md"
                        >
                            SGS Codeworks is a premier software development powerhouse. We specialize in building sophisticated products that translate complex business requirements into high-impact, real-world solutions.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 max-w-7xl relative z-10 py-24">
                {/* Mission Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {coreValues.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: i * 0.1, duration: 0.8 }
                            }}
                            viewport={{ once: true }}
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5
                                }
                            }}
                            whileHover={{
                                scale: 1.02,
                                translateY: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-theme-bg-secondary p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden shadow-xl"
                        >
                            {/* Animated Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon Animation Container */}
                            <motion.div
                                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 relative z-10"
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <value.icon size={32} className="drop-shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.5)]" />
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            <h3 className="text-2xl font-bold text-theme-text mb-4 relative z-10 tracking-tight group-hover:text-primary transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-theme-text-secondary leading-relaxed relative z-10 font-medium">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Culture/Philosophy Section */}
                <div className="relative mb-32 py-20 overflow-visible">
                    <div className="relative z-10 w-full grid lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-6 uppercase tracking-[0.2em]"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Our Core Beliefs
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-black text-theme-text mb-8 tracking-tighter leading-tight drop-shadow-2xl">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 italic drop-shadow-none">Philosophy</span>
                            </h2>
                            <p className="text-xl text-theme-text-secondary leading-relaxed mb-10 font-medium">
                                We believe that great software isn't just about code; it's about <span className="text-theme-text font-bold">people and impact</span>. Our engineering team works as an extension of your business, ensuring every line written contributes directly to your growth.
                            </p>
                            <div className="space-y-5">
                                {[
                                    "Industry-standard coding practices",
                                    "Agile and transparent workflows",
                                    "Focus on scalability and security"
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 text-theme-text-secondary font-semibold group"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                        </div>
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    title: 'Technical Excellence',
                                    icon: Cpu,
                                    color: 'text-primary'
                                },
                                {
                                    title: 'Client Synergy',
                                    icon: Users,
                                    color: 'text-secondary'
                                },
                                {
                                    title: 'Agile Velocity',
                                    icon: Zap,
                                    color: 'text-emerald-400'
                                },
                                {
                                    title: 'Future Proofing',
                                    icon: ShieldCheck,
                                    color: 'text-primary'
                                }
                            ].map((pillar, idx) => (
                                <motion.div
                                    key={idx}
                                    animate={{
                                        x: [0, 15, 0, -15, 0],
                                        y: [-15, 0, 15, 0, -15],
                                        rotate: [-1, 1, -1]
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 0 // Synchronized
                                    }}
                                    className="bg-theme-bg-secondary backdrop-blur-md p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors shadow-xl"
                                >
                                    <div className={`mb-3 ${pillar.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                                        <pillar.icon size={32} />
                                    </div>
                                    <div className="text-sm font-bold text-theme-text tracking-tight leading-tight">
                                        {pillar.title}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Training CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group rounded-[3rem] p-8 md:p-20 overflow-hidden text-center shadow-3xl border border-white/5"
                >
                    <motion.div
                        className="absolute inset-0 -z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <img
                            src="/assets/imgs.jpeg"
                            alt="Training Background"
                            className="w-full h-full object-cover transform scale-110"
                        />
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/20" />
                    </motion.div>

                    <div className="relative z-10 max-w-3xl mx-auto drop-shadow-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="inline-block"
                            >
                                <Laptop className="mx-auto text-primary mb-6 drop-shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]" size={64} />
                            </motion.div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Want to Join Our <span className="text-primary italic">Ecosystem?</span>
                            </h3>
                            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed opacity-90">
                                In addition to our development services, we offer elite professional training programs to help you master the latest technologies and join the next generation of top-tier engineers.
                            </p>
                            <Link
                                to="/training"
                                className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#0B1221] rounded-2xl font-bold text-xl hover:bg-primary hover:text-white transition-all shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1 active:scale-95 duration-300 group/btn"
                            >
                                Check Our Courses
                                <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

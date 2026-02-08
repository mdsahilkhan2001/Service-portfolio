import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code2, Globe, Rocket, Zap, ArrowRight, Laptop, Users, ShieldCheck,
    Cpu, Target, Lightbulb, CheckCircle2, TrendingUp, Award
} from 'lucide-react';

const stats = [
    { label: "Years of Excellence", value: "5+", icon: Award },
    { label: "Projects Delivered", value: "100+", icon: CheckCircle2 },
    { label: "Client Retention", value: "98%", icon: Users },
    { label: "Global Reach", value: "10+", icon: Globe, suffix: "Countries" }
];

const processSteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        desc: "We dive deep into your business goals, user needs, and market landscape to architect a roadmap for success.",
        icon: Lightbulb
    },
    {
        number: "02",
        title: "Agile Engineering",
        desc: "Our expert teams build scalable, secure, and high-performance solutions using iterative development cycles.",
        icon: Code2
    },
    {
        number: "03",
        title: "Quality Assurance",
        desc: "Rigorous testing ensures your product is bug-free, secure, and ready for the real world.",
        icon: ShieldCheck
    },
    {
        number: "04",
        title: "Launch & Scale",
        desc: "We handle deployment and provide ongoing support to help your product grow and evolve.",
        icon: Rocket
    }
];

const coreValues = [
    {
        icon: Target,
        title: "Result-Oriented",
        desc: "We don't just write code; we deliver measurable business outcomes. Your success is our primary metric."
    },
    {
        icon: Zap,
        title: "Innovation First",
        desc: "We stay ahead of the curve, leveraging the latest tech to give you a competitive edge."
    },
    {
        icon: Users,
        title: "Client Partnership",
        desc: "We work as an extension of your team, fostering transparent and collaborative relationships."
    }
];

const About = () => {
    return (
        <div className="pt-16 min-h-screen bg-theme-bg overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24">
                {/* Background Image with Premium Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/about-hero.jpg"
                        alt="Digital Background"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1221]/70 via-[#0B1221]/80 to-theme-bg" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B1221_100%)] opacity-80" />
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
                            Who We Are
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                            Architecting the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary">
                                Future of Digital
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto opacity-90">
                            SGS Codeworks is more than a dev shop. We are a strategic technology partner dedicated to transforming complex challenges into elegant, scalable software solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-theme-bg-secondary/30 relative border-y border-white/10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => {
                            const StatIcon = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                                    className="text-center group"
                                >
                                    <motion.div
                                        className="mb-4 inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <StatIcon size={32} className="text-primary" />
                                    </motion.div>
                                    <motion.h3
                                        className="text-4xl md:text-5xl font-bold text-theme-text mb-2 tracking-tight"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                                    >
                                        {stat.value}
                                    </motion.h3>
                                    <p className="text-sm uppercase tracking-wider text-theme-text-secondary font-semibold">
                                        {stat.label} {stat.suffix && <span className="block text-[10px] opacity-70 mt-1">{stat.suffix}</span>}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-theme-bg-secondary/30 skew-x-12 translate-x-1/3 -z-10" />
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-8 leading-tight">
                                Driven by Passion, <br />
                                <span className="text-secondary">Defined by Excellence</span>
                            </h2>
                            <div className="space-y-6 text-theme-text-secondary text-lg leading-relaxed">
                                <p>
                                    Founded with a vision to redefine software consulting, SGS Codeworks started as a collective of passionate engineers who wanted to build things the right way. No shortcuts, no bloat—just clean, efficient, and scalable code.
                                </p>
                                <p>
                                    Today, we have grown into a global team of experts, engaging with startups and enterprises alike. Our philosophy remains unchanged: <strong>Technical excellence is non-negotiable.</strong> Whether it's a mobile app or a complex cloud infrastructure, we bring the same level of dedication and precision to every project.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="p-6 bg-theme-bg-secondary rounded-2xl border border-white/5">
                                    <h4 className="text-xl font-bold text-theme-text mb-2">Innovation</h4>
                                    <p className="text-sm text-theme-text-secondary">Pushing boundaries with AI & Cloud.</p>
                                </div>
                                <div className="p-6 bg-theme-bg-secondary rounded-2xl border border-white/5">
                                    <h4 className="text-xl font-bold text-theme-text mb-2">Integrity</h4>
                                    <p className="text-sm text-theme-text-secondary">Transparent processes, honest results.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="/assets/why-partner.png"
                                    alt="Our Team at Work"
                                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 bg-theme-bg border border-white/10 p-6 rounded-3xl shadow-xl hidden md:block max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="text-sm font-bold text-theme-text">Active Now</span>
                                </div>
                                <p className="text-xs text-theme-text-secondary">
                                    Our engineers are deploying solutions across 3 continents.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-32 bg-theme-bg-secondary/20 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">How We Work</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-6">Our Engineering <span className="text-primary">Process</span></h2>
                        <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">
                            A structured approach ensuring efficiency, transparency, and top-tier quality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative bg-theme-bg p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="w-24 h-24 mx-auto bg-theme-bg-secondary rounded-full flex items-center justify-center border-4 border-theme-bg relative mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                        {step.number}
                                    </span>
                                    <step.icon size={32} className="text-primary group-hover:text-secondary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-theme-text mb-4 text-center">{step.title}</h3>
                                <p className="text-theme-text-secondary text-center text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                        <div className="max-w-xl">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Choose Us</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text mb-8">
                                Values That Drive <br /><span className="text-secondary">Performance</span>
                            </h2>
                            <p className="text-xl text-theme-text-secondary leading-relaxed">
                                Our core values are the foundation of our culture. They guide how we hire, how we work, and how we deliver value to our partners.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                                    Start a Project <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {coreValues.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-6 p-6 bg-theme-bg-secondary/50 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                        <value.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-theme-text mb-2">{value.title}</h4>
                                        <p className="text-sm text-theme-text-secondary leading-relaxed">{value.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Training CTA (Restyled) */}
                    {/* <div className="relative rounded-[3rem] overflow-hidden bg-primary text-white p-8 md:p-16 text-center">
                        <div className="absolute inset-0 bg-[#0B1221] opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 mix-blend-overlay" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Next Generation of Tech Leaders</h2>
                            <p className="text-lg text-white/80 mb-10">
                                Explore our comprehensive training programs designed to take you from beginner to industry-ready engineer.
                            </p>
                            <Link
                                to="/training"
                                className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-xl"
                            >
                                Explore Courses
                            </Link>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default About;

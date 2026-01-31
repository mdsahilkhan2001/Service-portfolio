import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Code2, Globe, Rocket, Zap, ArrowRight, Laptop, Users
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
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -z-0" />
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Who We Are
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter"
                        >
                            We Engineer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-secondary italic">
                                Digital Success
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-xl text-theme-text-secondary leading-relaxed"
                        >
                            G2S Technologies is a premier software development powerhouse. We specialize in building sophisticated products that translate complex business requirements into high-impact, real-world solutions.
                        </motion.p>
                    </div>

                    {/* Mission Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {coreValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="bg-theme-bg-secondary p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/20 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                                <p className="text-theme-text-secondary leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Culture/Philosophy Section */}
                    <div className="relative rounded-[3rem] overflow-hidden bg-[#0B1221] border border-white/5 p-8 md:p-20 mb-24">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Code2 size={240} className="text-primary" />
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Our Philosophy</h2>
                                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                    We believe that great software isn't just about code; it's about people and impact. Our engineering team works as an extension of your business, ensuring every line written contributes directly to your growth.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Industry-standard coding practices",
                                        "Agile and transparent workflows",
                                        "Focus on scalability and security"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-white font-medium">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                                        <div className="text-3xl font-black text-primary mb-1">100+</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest">Projects</div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                                        <div className="text-3xl font-black text-secondary mb-1">20+</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest">Industries</div>
                                    </div>
                                </div>
                                <div className="pt-8 space-y-4">
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                                        <div className="text-3xl font-black text-emerald-400 mb-1">10k+</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest">Users</div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                                        <div className="text-3xl font-black text-primary mb-1">Global</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-widest">Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Training CTA */}
                    <div className="relative rounded-[3rem] bg-gradient-to-r from-primary/20 via-[#0B1221] to-secondary/20 p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden text-center">
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Laptop className="mx-auto text-primary mb-6" size={48} />
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Want to Join Our Ecosystem?</h3>
                                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                                    In addition to our development services, we offer elite professional training programs to help you master the latest technologies and join the next generation of top-tier engineers.
                                </p>
                                <Link
                                    to="/training"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#0B1221] rounded-2xl font-black text-lg hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5"
                                >
                                    Check Our Courses <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

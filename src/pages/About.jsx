import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, Award, Briefcase, ArrowRight
} from 'lucide-react';
import { courses } from '../data/courses';


const features = [
    { icon: CheckCircle2, text: "Live Hands-on Projects" },
    { icon: Award, text: "Industry Recognized Certification" },
    { icon: Briefcase, text: "100% Placement Assistance" },
];

const About = () => {
    return (
        <div className="pt-16 min-h-screen bg-theme-bg">
            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-extrabold mb-4 bg-gradient-to-br from-text to-text-secondary bg-clip-text text-transparent"
                        >
                            About Us
                        </motion.h2>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">Upskill yourself with industry-ready courses designed by experts.</p>
                    </div>

                    {/* Features Banner */}
                    <div className="flex justify-center flex-wrap gap-8 mb-16">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-text font-medium text-lg bg-theme-bg-secondary px-6 py-3 rounded-full border border-border shadow-sm"
                            >
                                <f.icon className="text-primary" size={20} />
                                <span>{f.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                className="bg-theme-bg/80 backdrop-blur-md p-8 rounded-3xl shadow-sm hover:shadow-lg border border-border hover:border-primary transition-all duration-300 relative overflow-hidden group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 text-primary group-hover:scale-110 transition-transform">
                                    <course.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                                <p className="text-theme-text-secondary mb-6 leading-relaxed">{course.shortDesc}</p>

                                <div className="mt-6">
                                    <Link to={`/training/${course.id}`} className="inline-flex items-center gap-2 font-semibold text-primary text-sm hover:gap-3 transition-all">
                                        View Syllabus & Details <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

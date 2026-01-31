import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Smartphone, Bot, Database, Server,
    RefreshCw, Layers, Cloud
} from 'lucide-react';

const services = [
    { icon: Code2, title: 'Web Development', desc: 'Secure, scalable, and high-performance web applications built with modern frameworks.' },
    { icon: Smartphone, title: 'Mobile App Development', desc: 'Native iOS/Android and Cross-platform solutions using React Native and Flutter.' },
    { icon: Bot, title: 'AI Agents & Chatbots', desc: 'Custom AI solutions, LLM integration, and intelligent automation bots.' },
    { icon: Database, title: 'ERP & LMS Systems', desc: 'Enterprise Resource Planning and Learning Management Systems tailored to your business.' },
    { icon: Server, title: 'Custom Software', desc: 'Bespoke software solutions solving unique business challenges.' },
    { icon: RefreshCw, title: 'Legacy Modernization', desc: 'Upgrading legacy systems to modern cloud-native architectures.' },
    { icon: Layers, title: 'Full-Stack Development', desc: 'Comprehensive frontend and backend development services.' },
    { icon: Cloud, title: 'Cloud-Native Dev', desc: 'Designing and deploying scalable applications on AWS, Azure, and Google Cloud.' },
];

const Services = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-bg">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-br from-text to-text-secondary bg-clip-text text-transparent">Our Services</h2>
                    <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">Comprehensive software solutions to drive your business forward.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-theme-bg-secondary p-8 rounded-3xl border border-border flex flex-col items-start gap-4 transition-all duration-300 hover:border-primary hover:shadow-lg hover:-translate-y-1 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-text">{service.title}</h3>
                            <p className="text-theme-text-secondary leading-relaxed">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;

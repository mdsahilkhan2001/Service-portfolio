import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Database, Server, Cpu
} from 'lucide-react';
import {
    FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs,
    FaPhp, FaAws, FaDocker, FaMicrosoft
} from 'react-icons/fa';
import {
    SiAngular, SiReact, SiSpringboot, SiGo, SiDjango, SiDotnet,
    SiMongodb, SiMysql, SiRedis, SiPostgresql, SiGraphql,
    SiGooglecloud, SiKubernetes, SiTailwindcss, SiNextdotjs,
    SiFastapi, SiElasticsearch, SiAmazondynamodb,
    SiTerraform, SiJenkins
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const techIcons = {
    'React': SiReact,
    'Angular': SiAngular,
    'React Native': TbBrandReactNative,
    'HTML5': FaHtml5,
    'CSS3': FaCss3Alt,
    'Bootstrap': FaBootstrap,
    'Tailwind CSS': SiTailwindcss,
    'Next.js': SiNextdotjs,
    'Node.js': FaNodeJs,
    'ASP.NET Core': SiDotnet,
    'Java Spring Boot': SiSpringboot,
    'Golang': SiGo,
    'PHP (Laravel)': FaPhp,
    'Django': SiDjango,
    'FastAPI': SiFastapi,
    'MySQL': SiMysql,
    'MS SQL Server': Database,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'PostgreSQL': SiPostgresql,
    'Elasticsearch': SiElasticsearch,
    'DynamoDB': SiAmazondynamodb,
    'AWS': FaAws,
    'Google Cloud (GCP)': SiGooglecloud,
    'Microsoft Azure': FaMicrosoft,
    'Docker': FaDocker,
    'Kubernetes': SiKubernetes,
    'Terraform': SiTerraform,
    'Jenkins': SiJenkins
};

const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    Infrastructure: Cpu
};

const techStack = {
    Frontend: {
        description: "Modern, responsive, and performance-optimized user interfaces built with the latest frameworks.",
        techs: ['React', 'Angular', 'React Native', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Next.js']
    },
    Backend: {
        description: "Robust and scalable server-side architectures designed to handle complex business logic and high traffic.",
        techs: ['Node.js', 'ASP.NET Core', 'Java Spring Boot', 'Golang', 'PHP (Laravel)', 'Django', 'FastAPI']
    },
    Database: {
        description: "High-performance data storage solutions ensuring data integrity, speed, and reliability.",
        techs: ['MySQL', 'MS SQL Server', 'MongoDB', 'Redis', 'PostgreSQL', 'Elasticsearch', 'DynamoDB']
    },
    Infrastructure: {
        description: "Cloud-native deployments and automated pipelines for seamless scaling and maximum uptime.",
        techs: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    }
};

const Technology = () => {
    return (
        <div className="pt-16 min-h-screen bg-theme-bg relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 tech-grid opacity-[0.05] pointer-events-none" />

            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    rotate: [0, -90, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"
            />

            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Hero Split Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 px-4 text-center lg:text-left">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wider uppercase"
                            >
                                Our Expertise
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-theme-text tracking-tight leading-tight lg:leading-none"
                            >
                                Powering Digital <br />
                                <span className="text-primary bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent">Innovation</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-lg md:text-xl text-theme-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
                            >
                                We leverage a world-class technology stack to architect resilient, high-performance systems. Our selection of tools ensures your project is built with the most robust and future-proof technologies available.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="flex flex-wrap justify-center lg:justify-start gap-4"
                            >
                                <div className="flex items-center gap-2 px-4 py-2 bg-theme-bg-secondary rounded-full border border-border transition-colors hover:border-primary/30">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-sm font-medium text-theme-text-secondary">Enterprise Ready</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-theme-bg-secondary rounded-full border border-border transition-colors hover:border-primary/30">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                    <span className="text-sm font-medium text-theme-text-secondary">Scalable Architecture</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -z-10 animate-pulse-slow"></div>
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl bg-theme-bg-secondary">
                                <img
                                    src="/assets/tech-hero.png"
                                    alt="Technology Stack Illustration"
                                    className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-[2s] ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating decorative elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 p-6 bg-theme-bg-secondary/80 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl z-20"
                            >
                                <Cpu size={40} className="text-primary" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [10, 30, 10] }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                                className="absolute -bottom-10 -left-10 p-6 bg-theme-bg-secondary/80 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl z-20"
                            >
                                <Code2 size={40} className="text-secondary" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Tech Sections */}
                    <div className="space-y-40">
                        {Object.entries(techStack).map(([category, data], index) => {
                            const CategoryIcon = categoryIcons[category];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 px-4">
                                        <div className="max-w-2xl text-left">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-primary/10 rounded-2xl text-primary shadow-lg shadow-primary/5 border border-primary/20 group">
                                                    <CategoryIcon size={32} />
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-theme-text tracking-tight">
                                                    {category}
                                                </h3>
                                            </div>
                                            <p className="text-theme-text-secondary text-lg md:text-xl leading-relaxed font-medium">
                                                {data.description}
                                            </p>
                                        </div>
                                        <div className="hidden md:block h-px bg-gradient-to-r from-primary/40 to-transparent flex-grow ml-12 mb-6"></div>
                                    </div>

                                    <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 px-4">
                                        {data.techs.map((tech, idx) => {
                                            const Icon = techIcons[tech] || Code2;
                                            return (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                                    whileHover={{
                                                        y: -15,
                                                        scale: 1.05,
                                                        transition: { duration: 0.3, ease: "easeOut" }
                                                    }}
                                                    className="bg-theme-bg-secondary/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center gap-6 text-center shadow-2xl hover:border-primary/50 hover:bg-theme-bg-secondary/90 transition-all duration-500 group relative overflow-hidden"
                                                >
                                                    {/* Card Spotlight Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    <div className="relative z-10 text-theme-text-secondary group-hover:text-primary transition-all duration-500 group-hover:scale-125 group-hover:rotate-[12deg] drop-shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)]">
                                                        <Icon size={52} />
                                                    </div>
                                                    <span className="relative z-10 font-bold text-theme-text group-hover:text-primary transition-colors text-sm tracking-widest uppercase">{tech}</span>

                                                    {/* Glow Background */}
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2.1rem] blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                                    {/* Bottom highlight */}
                                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technology;

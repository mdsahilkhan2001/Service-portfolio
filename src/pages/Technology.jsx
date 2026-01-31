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
    Frontend: ['React', 'Angular', 'React Native', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Next.js'],
    Backend: ['Node.js', 'ASP.NET Core', 'Java Spring Boot', 'Golang', 'PHP (Laravel)', 'Django', 'FastAPI'],
    Database: ['MySQL', 'MS SQL Server', 'MongoDB', 'Redis', 'PostgreSQL', 'Elasticsearch', 'DynamoDB'],
    Infrastructure: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
};

const Technology = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-theme-bg">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6 text-theme-text"
                    >
                        Our Technology <span className="text-primary">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-theme-text-secondary max-w-2xl mx-auto"
                    >
                        We leverage cutting-edge technologies to build robust and scalable solutions that drive business growth.
                    </motion.p>
                </div>

                <div className="space-y-20">
                    {Object.entries(techStack).map(([category, techs], index) => {
                        const CategoryIcon = categoryIcons[category];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                        <CategoryIcon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-theme-text">
                                        {category}
                                    </h3>
                                    <div className="h-px bg-border flex-grow ml-4"></div>
                                </div>

                                <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                                    {techs.map((tech, idx) => {
                                        const Icon = techIcons[tech] || Code2;
                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                                whileHover={{ y: -8, scale: 1.05 }}
                                                className="bg-theme-bg-secondary p-6 rounded-2xl border border-border flex flex-col items-center justify-center gap-4 text-center shadow-sm hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                                            >
                                                <div className="text-theme-text-secondary group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                                    <Icon size={40} />
                                                </div>
                                                <span className="font-bold text-theme-text group-hover:text-primary transition-colors text-sm">{tech}</span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Technology;

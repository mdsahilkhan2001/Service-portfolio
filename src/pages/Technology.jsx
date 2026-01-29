import React from 'react';
import { motion } from 'framer-motion';

const techStack = {
    Frontend: ['React', 'Angular', 'React Native', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Next.js'],
    Backend: ['Node.js', 'ASP.NET Core', 'Java Spring Boot', 'Golang', 'PHP (Laravel)', 'Django', 'FastAPI'],
    Database: ['MySQL', 'MS SQL Server', 'MongoDB', 'Redis', 'PostgreSQL', 'Elasticsearch', 'DynamoDB'],
    Infrastructure: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
};

const Technology = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-bg">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold mb-4 text-text">Technology Stack</h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">We leverage cutting-edge technologies to build robust and scalable solutions.</p>
                </div>

                <div className="space-y-16">
                    {Object.entries(techStack).map(([category, techs], index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-primary border-b border-border pb-2">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                                {techs.map((tech, idx) => (
                                    <div key={idx} className="bg-bg-secondary p-4 rounded-xl border border-border flex items-center justify-center text-center shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 group">
                                        <span className="font-semibold text-text group-hover:text-primary transition-colors">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technology;

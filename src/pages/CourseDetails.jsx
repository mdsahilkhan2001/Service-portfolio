import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Monitor, Award, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/courses';
import ContactForm from '../components/ContactForm';


const CourseDetails = () => {
    const { slug } = useParams();
    const course = courses.find(c => c.id === slug);

    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
                <h2 className="text-3xl font-bold mb-4">Course Not Found</h2>
                <Link to="/training" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition-colors">
                    Back to Trainings
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-theme-bg pt-16">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-theme-bg-secondary">
                <div className="container mx-auto px-4 max-w-7xl">
                    <Link to="/training" className="inline-flex items-center gap-2 font-semibold text-primary text-sm hover:gap-3 transition-all mb-8">
                        <ArrowLeft size={20} /> Back to Courses
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                            <course.icon size={48} className="text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text">
                            {course.title}
                        </h1>
                        <p className="text-xl text-theme-text-secondary max-w-3xl mb-8">
                            {course.description}
                        </p>

                        <div className="flex gap-8 flex-wrap">
                            <div className="flex items-center gap-3">
                                <Clock className="text-primary" />
                                <div>
                                    <span className="block text-sm text-theme-text-secondary">Duration</span>
                                    <strong className="text-text font-semibold">{course.details.duration}</strong>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Monitor className="text-primary" />
                                <div>
                                    <span className="block text-sm text-theme-text-secondary">Mode</span>
                                    <strong className="text-text font-semibold">{course.details.mode}</strong>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Award className="text-primary" />
                                <div>
                                    <span className="block text-sm text-theme-text-secondary">Level</span>
                                    <strong className="text-text font-semibold">{course.details.level}</strong>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content & Inquiry Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">

                        {/* Left Column: Syllabus */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-text mb-8">Course Syllabus</h2>
                            <div className="flex flex-col gap-6">
                                {course.details.syllabus.map((module, idx) => (
                                    <div key={idx} className="p-6 bg-theme-bg-secondary rounded-2xl border border-border">
                                        <h4 className="text-lg font-semibold mb-4 text-primary">
                                            Module {idx + 1}: {module.module}
                                        </h4>
                                        <ul className="pl-5 flex flex-col gap-2">
                                            {module.topics.map((topic, tIdx) => (
                                                <li key={tIdx} className="text-theme-text-secondary list-disc">{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-text mt-12 mb-8">Key Outcomes</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.details.outcomes.map((outcome, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-primary shrink-0" />
                                        <span className="text-text">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Inquiry Form */}
                        <div className="relative">
                            <div className="sticky top-24 h-fit">
                                <ContactForm inquiryContext={course.title} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseDetails;

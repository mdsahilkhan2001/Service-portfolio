import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    return (
        <div className="pt-24 pb-16 bg-bg min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-text-secondary mb-12 text-lg">Ready to start your project? Contact us today for a free consultation.</p>

                    <div className="flex flex-col gap-8">
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 bg-bg-secondary flex items-center justify-center rounded-full text-primary shrink-0"><Mail /></div>
                            <div>
                                <h4 className="font-semibold mb-1 text-lg">Email</h4>
                                <p className="text-text-secondary">ask@g2stechnologies.com</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 bg-bg-secondary flex items-center justify-center rounded-full text-primary shrink-0"><Phone /></div>
                            <div>
                                <h4 className="font-semibold mb-1 text-lg">Phone</h4>
                                <p className="text-text-secondary">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 bg-bg-secondary flex items-center justify-center rounded-full text-primary shrink-0"><MapPin /></div>
                            <div>
                                <h4 className="font-semibold mb-1 text-lg">Office</h4>
                                <p className="text-text-secondary">123 Tech Park, Innovation City</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    return (
        <div className="pt-16 min-h-screen bg-theme-bg">
            <section className="py-24 relative">
                <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-theme-text-secondary mb-12 text-lg">Ready to start your project? Contact us today for a free consultation.</p>

                        <div className="flex flex-col gap-8">
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 bg-theme-bg-secondary flex items-center justify-center rounded-full text-primary shrink-0"><Mail /></div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-lg">Email</h4>
                                    <a href="mailto:mdsahilkhan2001@gmail.com" className="text-text-secondary hover:text-primary transition-colors cursor-pointer">mdsahilkhan2001@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 bg-theme-bg-secondary flex items-center justify-center rounded-full text-primary shrink-0"><Phone /></div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-lg">Phone</h4>
                                    <a href="tel:+917079990338" className="text-text-secondary hover:text-primary transition-colors cursor-pointer">+91 7079990338</a>
                                </div>
                            </div>
                            <div className="flex gap-6 items-center">
                                <div className="w-14 h-14 bg-theme-bg-secondary flex items-center justify-center rounded-full text-primary shrink-0"><MapPin /></div>
                                <div>
                                    <h4 className="font-semibold mb-1 text-lg">Office</h4>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=No.+3,+Valpara+Building,+Service+Road,+17th+Main+Road,+1st+Stage,+Aicobo+Nagar,+near+KEB+Office,+BTM+Layout,+Bengaluru+560068"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-secondary hover:text-primary transition-colors cursor-pointer"
                                    >
                                        No. 3, Valpara Building, Service Road, 17th Main Road, 1st Stage, Aicobo Nagar, near KEB Office, BTM Layout, Bengaluru (560068).
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Contact;
